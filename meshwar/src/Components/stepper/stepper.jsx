import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dropin from 'braintree-web-drop-in';

const StepperPopup = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    location: '',
    date: '',
    budget: '',
    numberOfPeople: 1, // إضافة عدد الأشخاص مع قيمة افتراضية 1
    activityType: '',
    activity: '',
    wantFood: false,
    cuisineType: '',
    wantDrink: false,
    drinkType: '',
    drinkChoice: '',
    wantDessert: false,
    dessertChoice: '',
  });
  const [budgetCheckResult, setBudgetCheckResult] = useState(null);
  const [error, setError] = useState(null);
  const [submittedData, setSubmittedData] = useState(null);
  const [braintreeInstance, setBraintreeInstance] = useState(null);
  const [showPayment, setShowPayment] = useState(false);

  const jordanianCities = ["Amman", "Irbid", "Zarqa", "Aqaba", "Jerash", "Madaba", "Salt", "Karak"];
  const outdoorActivities = ["Stargazing", "Camping", "Rock Climbing", "Cycling", "Football"];
  const indoorActivities = ["Cinema", "Museums", "Cooking Workshops", "Games", "Art Exhibitions"];
  const hotDrinks = ["Tea", "Coffee", "Cappuccino", "Latte"];
  const coldDrinks = ["Iced Tea", "Iced Coffee", "Mojito", "Smoothie"];
  const testCards = {
    visa: '4111111111111111',
    mastercard: '5555555555554444',
    amex: '378282246310005',
    discover: '6011111111111117',
    jcb: '3530111333300000'
  };

  useEffect(() => {
    if (showPayment) {
      initializeBraintree();
    }
  }, [showPayment]);

  const initializeBraintree = async () => {
    try {
      const response = await axios.get('http://localhost:3003/api/outing/generate-client-token', {
        withCredentials: true
      });
      const clientToken = response.data.clientToken;

      const dropinInstance = await dropin.create({
        authorization: clientToken,
        container: '#braintree-drop-in-container',
        paypal: {
          flow: 'checkout',
          amount: budgetCheckResult?.totalCost || '0',
          currency: 'USD'
        }
      });

      setBraintreeInstance(dropinInstance);
    } catch (error) {
      console.error('Error initializing Braintree:', error);
      setError('Failed to initialize payment system');
    }
  };

  const handlePayment = async () => {
    if (!braintreeInstance) {
      setError('Payment system not initialized');
      return;
    }

    try {
      const { nonce } = await braintreeInstance.requestPaymentMethod();
      
      const paymentResponse = await axios.post('http://localhost:3003/api/outing/process-payment', {
        paymentMethodNonce: nonce,
        amount: budgetCheckResult.totalCost
      }, {
        withCredentials: true
      });

      if (paymentResponse.data.success) {
        alert('Payment successful!');
        onClose();
      } else {
        setError('Payment failed. Please try again.');
      }
    } catch (error) {
      console.error('Payment error:', error);
      setError('Payment processing failed');
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async () => {
    try {
      const dateValue = new Date(formData.date);
      if (isNaN(dateValue)) {
        setError('Invalid date provided. Please select a valid date.');
        return;
      }
  
      const postData = {
        city: formData.location,
        date: dateValue.toISOString(),
        numberOfPeople: parseInt(formData.numberOfPeople),
        businessTypes: [],
        hotDrink: formData.wantDrink && formData.drinkType === 'hot' ? formData.drinkChoice : null,
        coldDrink: formData.wantDrink && formData.drinkType === 'cold' ? formData.drinkChoice : null,
        dessert: formData.wantDessert ? formData.dessertChoice : null,
        indoorActivity: formData.activityType === 'indoor' ? formData.activity : null,
        outdoorActivity: formData.activityType === 'outdoor' ? formData.activity : null,
        meal: formData.wantFood ? formData.cuisineType : null,
        budget: parseFloat(formData.budget)
      };

      const businessTypes = [];
      if (formData.wantFood) businessTypes.push('restaurant');
      if (formData.wantDrink || formData.wantDessert) businessTypes.push('cafe');
      if (formData.wantDessert) businessTypes.push('sweetShop');
      if (formData.activityType) businessTypes.push('activityShop');
      postData.businessTypes = businessTypes;

     
    const response = await axios.post('http://localhost:3003/api/outing/check-partner-budget', postData, {
      withCredentials: true,
    });

    setBudgetCheckResult(response.data);
    setSubmittedData(postData);
    setStep(6);
  } catch (error) {
    console.error('Error checking budget:', error);
    setError('An error occurred while processing your request. Please try again.');
  }
};

  const renderStep = () => {
    switch (step) {
      case 1:
  return (
    <div className="space-y-4">
      <select 
        name="location" 
        onChange={handleInputChange} 
        className="w-full p-2 border rounded"
      >
        <option value="">Select a city</option>
        {jordanianCities.map(city => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>
      
      <input 
        type="date" 
        name="date" 
        min={new Date().toISOString().split('T')[0]} 
        onChange={handleInputChange} 
        className="w-full p-2 border rounded" 
      />
      
      <input 
        type="number" 
        name="numberOfPeople" 
        min="1"
        value={formData.numberOfPeople}
        onChange={handleInputChange} 
        placeholder="Number of people" 
        className="w-full p-2 border rounded" 
      />
      
      <input 
        type="number" 
        name="budget" 
        onChange={handleInputChange} 
        placeholder="Budget" 
        className="w-full p-2 border rounded" 
      />
    </div>
  ); 
      case 2:
        return (
          <div className="space-y-4">
            <div>
              <label className="block mb-2">Activity Type:</label>
              <div className="space-x-4">
                <label>
                  <input type="radio" name="activityType" value="outdoor" onChange={handleInputChange} />
                  Outdoor
                </label>
                <label>
                  <input type="radio" name="activityType" value="indoor" onChange={handleInputChange} />
                  Indoor
                </label>
              </div>
            </div>
            {formData.activityType && (
              <select name="activity" onChange={handleInputChange} className="w-full p-2 border rounded">
                <option value="">Select an activity</option>
                {(formData.activityType === 'outdoor' ? outdoorActivities : indoorActivities).map(activity => (
                  <option key={activity} value={activity}>{activity}</option>
                ))}
              </select>
            )}
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <div>
              <label>
                <input type="checkbox" name="wantFood" onChange={handleInputChange} />
                Do you want to eat?
              </label>
            </div>
            {formData.wantFood && (
              <select name="cuisineType" onChange={handleInputChange} className="w-full p-2 border rounded">
                <option value="">Select cuisine type</option>
                {["Arabic", "Italian", "Asian", "Mexican", "Turkish"].map(cuisine => (
                  <option key={cuisine} value={cuisine}>{cuisine}</option>
                ))}
              </select>
            )}
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <div>
              <label>
                <input type="checkbox" name="wantDrink" onChange={handleInputChange} />
                Do you want a drink?
              </label>
            </div>
            {formData.wantDrink && (
              <>
                <div className="space-x-4">
                  <label>
                    <input type="radio" name="drinkType" value="hot" onChange={handleInputChange} />
                    Hot
                  </label>
                  <label>
                    <input type="radio" name="drinkType" value="cold" onChange={handleInputChange} />
                    Cold
                  </label>
                </div>
                {formData.drinkType && (
                  <select name="drinkChoice" onChange={handleInputChange} className="w-full p-2 border rounded">
                    <option value="">Select a drink</option>
                    {(formData.drinkType === 'hot' ? hotDrinks : coldDrinks).map(drink => (
                      <option key={drink} value={drink}>{drink}</option>
                    ))}
                  </select>
                )}
              </>
            )}
          </div>
        );
      case 5:
        return (
          <div className="space-y-4">
            <div>
              <label>
                <input type="checkbox" name="wantDessert" onChange={handleInputChange} />
                Do you want dessert?
              </label>
            </div>
            {formData.wantDessert && (
              <select name="dessertChoice" onChange={handleInputChange} className="w-full p-2 border rounded">
                <option value="">Select a dessert</option>
                {["donut", "knafeh", "wafel", "crepe", "ice-cream", "kulag"].map(dessert => (
                  <option key={dessert} value={dessert}>{dessert}</option>
                ))}
              </select>
            )}
          </div>
        );
        case 6:
          return (
            <div className="space-y-4">
              <div className="max-h-96 overflow-y-auto px-4">
                <h3 className="text-xl font-bold sticky top-0 bg-white py-2">Your Outing Plan</h3>
  
                {budgetCheckResult && submittedData && (
                  <>
                    {budgetCheckResult.isWithinBudget ? (
                      <p className="text-teal-600">Great! Your plan is within budget.</p>
                    ) : (
                      <p className="text-red-600">Sorry, your plan exceeds your budget.</p>
                    )}
                    <p className="font-semibold text-lg">Total Cost: ${budgetCheckResult.totalCost}</p>
                    
                    <div className="mt-6">
  <h4 className="font-bold text-lg mb-3">Your Plan Details:</h4>
  <div className="space-y-2">
    <p><span className="font-medium">Number of People:</span> {submittedData.numberOfPeople}</p>
    <p><span className="font-medium">Cost per Person:</span> ${budgetCheckResult.costPerPerson}</p>
    <p><span className="font-bold text-lg">Total Cost:</span> ${budgetCheckResult.totalCost}</p>
                        <p><span className="font-medium">City:</span> {submittedData.city}</p>
                        <p><span className="font-medium">Date:</span> {new Date(submittedData.date).toLocaleDateString()}</p>
                        
                        <div className="mt-4">
                          <h5 className="font-bold mb-2">Selected Venues:</h5>
                          {budgetCheckResult.partners.map((partner, index) => (
                            <div key={index} className="bg-gray-50 p-3 rounded-lg mb-2">
                              <p className="font-semibold text-teal-600">{partner.companyName}</p>
                              <p className="text-sm text-gray-600">
                                {partner.businessType.charAt(0).toUpperCase() + partner.businessType.slice(1)}
                              </p>
                              {budgetCheckResult.details[index]?.items.map((item, itemIndex) => (
                                <div key={itemIndex} className="ml-4 text-sm">
                                  <span className="text-gray-700">{item.type}:</span> {item.item} (${item.price})
                                </div>
                              ))}
                            </div>
                          ))}
                        </div>
  
                        {/* {formData.activity && (
                          <p><span className="font-medium">Activity:</span> {formData.activity}</p>
                        )}
                        {formData.wantFood && (
                          <p><span className="font-medium">Cuisine Type:</span> {formData.cuisineType}</p>
                        )}
                        {formData.wantDrink && formData.drinkChoice && (
                          <p><span className="font-medium">Drink:</span> {formData.drinkChoice}</p>
                        )}
                        {formData.wantDessert && formData.dessertChoice && (
                          <p><span className="font-medium">Dessert:</span> {formData.dessertChoice}</p>
                        )} */}
                        <p><span className="font-medium">Budget:</span> ${formData.budget}</p>
                      </div>
                    </div>
  
                    {showPayment && (
                      <div className="mt-6">
                        <h4 className="font-bold mb-2">Payment Details</h4>
                        <div id="braintree-drop-in-container" className="mb-4"></div>
                      </div>
                    )}
                  </>
                )}
              </div>
              
              <div className="mt-4 border-t pt-4 bg-white">
                {!showPayment ? (
                  <button
                    onClick={() => setShowPayment(true)}
                    className="bg-teal-500 hover:bg-[#F9E1FF] text-white p-2 rounded w-full transition duration-200"
                  >
                    Pay Now
                  </button>
                ) : (
                  <button
                    onClick={handlePayment}
                    className="bg-teal-500 hover:bg-teal-600 text-white p-2 rounded w-full transition duration-200"
                  >
                    Complete Payment
                  </button>
                )}
              </div>
            </div>
          );
        default:
          return null;
      }
    };
  

    return (
      <div className={`fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center ${isOpen ? '' : 'hidden'}`}>
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-4">
          <h2 className="text-2xl font-bold mb-4">Create Your Outing Plan</h2>
          {error && <p className="text-red-600 mb-4">{error}</p>}
          {renderStep()}
          <div className="flex justify-between mt-4 pt-4 border-t">
            {step > 1 && (
              <button 
                onClick={() => setStep(step - 1)} 
                className="bg-gray-300 hover:bg-gray-400 p-2 rounded transition duration-200"
              >
                Back
              </button>
            )}
            {step < 6 ? (
              <button 
                onClick={() => setStep(step + 1)} 
                className="bg-teal-500 hover:bg-[#F9E1FF] text-white p-2 rounded transition duration-200"
              >
                Next
              </button>
            ) : (
              !showPayment && (
                <button 
                  onClick={handleSubmit} 
                  className="bg-teal-500 hover:bg-teal-600 text-white p-2 rounded transition duration-200"
                >
                  Submit
                </button>
              )
            )}
            <button 
              onClick={onClose} 
              className="bg-red-500 hover:bg-red-600 text-white p-2 rounded transition duration-200"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default StepperPopup;



import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import axiosInstance from '../../axiosConfig';
const Qestionair = () => {
  const [cuisineTypes, setCuisineTypes] = useState([
    "Arabic", "Italian", "Asian", "Mexican", "Turkish",
  ]);
  const [activities, setActivities] = useState({
    outdoorActivities: [],
    indoorActivities: [],
    sportsActivities: [],
    culturalActivities: [],
  });
  const [drinks, setDrinks] = useState({
    hot: [],
    cold: [],
  });
  const [budget, setBudget] = useState({
    tripBudget: 0,
    currency: "Jordanian Dinar",
  });
  const [availability, setAvailability] = useState({
    weekdays: [],
    weekends: true,
    preferredTimes: [],
  });
  const [specialInterests, setSpecialInterests] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(cuisineTypes);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setCuisineTypes(items);
  };

  const activityOptions = {
    outdoorActivities: ["Walking", "Camping", "Rock Climbing", "Cycling","Football"],
    indoorActivities: ["Cinema", "Museums", "Shopping", "Games","Art Exhibitions"],
    sportsActivities: ["Football", "Basketball", "Tennis", "Swimming"],
    culturalActivities: [
      "Visiting Historical Sites",
      "Art Exhibitions",
      "Concerts",
    ],
  };

  const handleActivityChange = (category, activity) => {
    setActivities((prev) => ({
      ...prev,
      [category]: prev[category].includes(activity)
        ? prev[category].filter((item) => item !== activity)
        : [...prev[category], activity],
    }));
  };
  const handleDrinkChange = (category, drink) => {
    setDrinks((prev) => ({
      ...prev,
      [category]: prev[category].includes(drink)
        ? prev[category].filter((item) => item !== drink)
        : [...prev[category], drink],
    }));
  };

  const handleBudgetChange = (e) => {
    setBudget((prev) => ({ ...prev, tripBudget: e.target.value }));
  };

  const handleAvailabilityChange = (category, value) => {
    if (category === "weekends") {
      setAvailability((prev) => ({ ...prev, weekends: value }));
    } else {
      setAvailability((prev) => ({
        ...prev,
        [category]: prev[category].includes(value)
          ? prev[category].filter((item) => item !== value)
          : [...prev[category], value],
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // منع إعادة تحميل الصفحة
    setSubmitting(true); // تعيين حالة الإرسال
    setError(null); // إعادة تعيين حالة الخطأ

    try {
      const token = Cookies.get("UserToken"); // الحصول على التوكن من الكوكيز

      // فك تشفير التوكن للحصول على userId
      let decodedToken;
      if (!token) throw new Error("Token not found. Please login again.");
      try {
        decodedToken = jwtDecode(token);
      } catch {
        throw new Error("Invalid token. Please login again.");
      }

      const userId = decodedToken.id; // استخراج userId من التوكن

      const requestBody = {
        userId: userId, // إضافة userId إلى الطلب
        preferences: {
          food: {
            cuisineTypes: cuisineTypes, // أنواع المأكولات
          },
          activities: {
            outdoorActivities: activities.outdoorActivities, // الأنشطة الخارجية
            indoorActivities: activities.indoorActivities, // الأنشطة الداخلية
            sportsActivities: activities.sportsActivities, // الأنشطة الرياضية
            culturalActivities: activities.culturalActivities, // الأنشطة الثقافية
          },
          drinks: {
            hot: drinks.hot, // المشروبات الساخنة
            cold: drinks.cold, // المشروبات الباردة
          },
          budget: {
            tripBudget: budget.tripBudget, // ميزانية الرحلة
            currency: budget.currency, // العملة
          },
          availability: {
            weekdays: availability.weekdays, // الأيام
            weekends: availability.weekends, // عطلة نهاية الأسبوع
            preferredTimes: availability.preferredTimes, // الأوقات المفضلة
          },
          specialInterests: specialInterests, // الاهتمامات الخاصة
        },
      };

      console.log("Request Body:", requestBody); // طباعة جسم الطلب للتأكد من صحته

      const response = await axiosInstance.post(
        "/preferences",
        requestBody
      );
      console.log("Preferences saved:", response.data); // طباعة استجابة الخادم
    } catch (err) {
      // التعامل مع الأخطاء
      setError(
        err.message ||
          "An error occurred while saving preferences. Please try again."
      );
      console.error("Error saving preferences:", err);
    } finally {
      setSubmitting(false); // إعادة تعيين حالة الإرسال
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Preference Questionnaire</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Cuisine Types</h2>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="cuisines">
            {(provided) => (
              <ul
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="space-y-2"
              >
                {cuisineTypes.map((cuisine, index) => (
                  <Draggable key={cuisine} draggableId={cuisine} index={index}>
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="p-2 bg-gray-100 rounded"
                      >
                        {cuisine}
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">الأنشطة</h2>
        {Object.entries(activityOptions).map(([category, options]) => (
          <div key={category} className="mb-4">
            <h3 className="text-lg font-medium mb-2">{category}</h3>
            <div className="space-y-2">
              {options.map((activity) => (
                <label key={activity} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={activities[category].includes(activity)}
                    onChange={() => handleActivityChange(category, activity)}
                    className="mr-2"
                  />
                  {activity}
                </label>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Drinks</h2>
        {Object.entries(drinks).map(([category, values]) => (
          <div key={category} className="mb-4">
            <h3 className="text-lg font-medium mb-2">
              {category === "hot" ? "Hot Drinks" : "Cold Drinks"}
            </h3>
            <div className="space-y-2">
              {(category === "hot"
                ? ["Tea", "Coffee", "Cappuccino", "Latte"]
                : ["Iced Tea", "Iced Coffee", "Mojito", "Smoothie"]
              ).map((drink) => (
                <label key={drink} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={values.includes(drink)}
                    onChange={() => handleDrinkChange(category, drink)}
                    className="mr-2"
                  />
                  {drink}
                </label>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Budget</h2>
        <div className="flex items-center">
          <input
            type="number"
            value={budget.tripBudget}
            onChange={handleBudgetChange}
            className="mr-2 p-2 border rounded"
          />
          <span>{budget.currency}</span>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Availability</h2>
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2">Weekdays</h3>
          <div className="space-y-2">
            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map(
              (day) => (
                <label key={day} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={availability.weekdays.includes(day)}
                    onChange={() => handleAvailabilityChange("weekdays", day)}
                    className="mr-2"
                  />
                  {day}
                </label>
              )
            )}
          </div>
        </div>
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={availability.weekends}
              onChange={(e) =>
                handleAvailabilityChange("weekends", e.target.checked)
              }
              className="mr-2"
            />
            Weekends
          </label>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-2">Preferred Times</h3>
          <div className="space-y-2">
            {["Morning", "Afternoon", "Evening", "Night"].map((time) => (
              <label key={time} className="flex items-center">
                <input
                  type="checkbox"
                  checked={availability.preferredTimes.includes(time)}
                  onChange={() =>
                    handleAvailabilityChange("preferredTimes", time)
                  }
                  className="mr-2"
                />
                {time}
              </label>
            ))}
          </div>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">اهتمامات خاصة</h2>
        <input
          type="text"
          value={specialInterests.join(", ")}
          onChange={(e) => setSpecialInterests(e.target.value.split(", "))}
          className="w-full p-2 border rounded"
          placeholder="أدخل اهتماماتك الخاصة مفصولة بفواصل"
        />
      </section>

      {error && <div className="text-red-500 mb-4">{error}</div>}

      <button
        type="submit"
        disabled={submitting}
        className={`bg-blue-500 text-white px-4 py-2 rounded ${
          submitting ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
        }`}
      >
        {submitting ? "جاري الحفظ..." : "حفظ التفضيلات"}
      </button>
    </form>
  );
};

export default Qestionair;

import React, { useState } from "react";
import pro1 from '../../assets/laila.jpg';
import pro2 from '../../assets/pro2.jpg';
import pro3 from '../../assets/pro5.jpg';
import pro4 from '../../assets/pro4.jpg';
import { Rate } from 'antd';

const data = [
    { img: pro1, name: "Laila", rating: 5, description: "Meshwar made planning our girls' weekend getaway effortless! We all have different preferences, but Meshwar suggested activities and dining spots that pleased everyone. Highly recommend!" },
    { img: pro2, name: "Adam", rating: 4.5, description: "Being new in town, Meshwar helped me meet locals and discover hidden gems. The platform's suggestions for activities and dining introduced me to places I wouldn't have found otherwise." },
    { img: pro4, name: "Qais", rating: 5, description: "I used Meshwar to plan a surprise birthday outing for my wife. The curated schedule included her favorite activities and a fantastic dinner spot. It was a hit! Thanks, Meshwar!" },
    { img: pro3, name: "Khaled", rating: 5, description: "Meshwar is perfect for spontaneous adventures. We decided to explore our city and found great recommendations for activities and places to eat, all tailored to our interests." },
    { img: pro1, name: "Huda", rating: 5, description: "Meshwar made planning our girls' weekend getaway effortless! We all have different preferences, but Meshwar suggested activities and dining spots that pleased everyone. Highly recommend!" },
    { img: pro2, name: "Ali", rating: 4.5, description: "Being new in town, Meshwar helped me meet locals and discover hidden gems. The platform's suggestions for activities and dining introduced me to places I wouldn't have found otherwise." },
    { img: pro4, name: "Ghaith", rating: 5, description: "I used Meshwar to plan a surprise birthday outing for my wife. The curated schedule included her favorite activities and a fantastic dinner spot. It was a hit! Thanks, Meshwar!" },
    { img: pro3, name: "Laith", rating: 5, description: "Meshwar is perfect for spontaneous adventures. We decided to explore our city and found great recommendations for activities and places to eat, all tailored to our interests." },
    { img: pro1, name: "Aya", rating: 5, description: "Meshwar made planning our girls' weekend getaway effortless! We all have different preferences, but Meshwar suggested activities and dining spots that pleased everyone. Highly recommend!" },
    { img: pro2, name: "Firas", rating: 4.5, description: "Being new in town, Meshwar helped me meet locals and discover hidden gems. The platform's suggestions for activities and dining introduced me to places I wouldn't have found otherwise." },
    { img: pro4, name: "Qusai", rating: 5, description: "I used Meshwar to plan a surprise birthday outing for my wife. The curated schedule included her favorite activities and a fantastic dinner spot. It was a hit! Thanks, Meshwar!" },
    { img: pro3, name: "Aws", rating: 5, description: "Meshwar is perfect for spontaneous adventures. We decided to explore our city and found great recommendations for activities and places to eat, all tailored to our interests." },
    { img: pro1, name: "Salma", rating: 5, description: "Meshwar made planning our girls' weekend getaway effortless! We all have different preferences, but Meshwar suggested activities and dining spots that pleased everyone. Highly recommend!" },
    { img: pro2, name: "Omar", rating: 4.5, description: "Being new in town, Meshwar helped me meet locals and discover hidden gems. The platform's suggestions for activities and dining introduced me to places I wouldn't have found otherwise." },
    { img: pro4, name: "Mohammed", rating: 5, description: "I used Meshwar to plan a surprise birthday outing for my wife. The curated schedule included her favorite activities and a fantastic dinner spot. It was a hit! Thanks, Meshwar!" },
    { img: pro3, name: "Abdullah", rating: 5, description: "Meshwar is perfect for spontaneous adventures. We decided to explore our city and found great recommendations for activities and places to eat, all tailored to our interests." }
];

function Reviews() {
    const cardsPerPage = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const numPages = Math.ceil(data.length / cardsPerPage);
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const currentData = data.slice(startIndex, endIndex);

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < numPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className='reviews mt-20 px-4  py-8 bg-[#F9E1FF30] mx-[9rem]'>
            <p className="text-2xl font-bold text-center mb-8">What Everyone is Saying?</p>
            <div className=' flex flex-wrap gap-4 justify-center items-center'>
            <button
                    className={`w-8 h-8 rounded-full ${currentPage === 1 ? 'bg-gray-100 cursor-not-allowed' : 'bg-white '}`}
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                >
                    &lt; {/* Left arrow */}
                </button>
                {currentData.map((item, index) => (
                    <div key={index} className='flex flex-col bg-white h-[22.5rem] w-64 items-center p-4'>
                        <img className="rounded-full h-24 w-24 object-cover" src={item.img} alt="Profile Picture" />
                        <Rate
                            className='text-sm'
                            defaultValue={item.rating}
                            allowHalf
                            allowClear={false}
                            tooltips={["Very Poor", "Poor", "Normal", "Good", "Excellent"]}
                            disabled
                        />
                        <p className='text-xl font-bold'>{item.name}</p>
                        <p className='text-base'>{item.description}</p>
                    </div>
                ))}
                   <button
                    className={`w-8 h-8 rounded-full  ${currentPage === numPages ? 'bg-gray-100 cursor-not-allowed' : 'bg-white '}`}
                    onClick={handleNext}
                    disabled={currentPage === numPages}
                >
                    &gt; {/* Right arrow */}
                </button>
            </div>
            <div className='flex justify-center items-center mt-4 mx-[9rem]'>
               
                <div className='flex items-center gap-2'>
                    {Array.from({ length: numPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            className={` rounded-full ${currentPage === page ? 'bg-black w-3 h-3 ' : 'bg-gray-300 w-2 h-2 '}`}
                            onClick={() => setCurrentPage(page)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Reviews;

















import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import p9 from '../../assets/restaurents/falafel.jpg';
import p16 from '../../assets/restaurents/manaqeesh.jpg';
import p17 from '../../assets/restaurents/cro.jpg';
import p3 from '../../assets/restaurents/soshi.jpg';
import p20 from '../../assets/restaurents/pizza.jpg';
import p7 from '../../assets/restaurents/burgers.jpg';
import p6 from '../../assets/restaurents/broasted.jpg';
import p19 from '../../assets/restaurents/pasta.jpg';
import p23 from '../../assets/restaurents/shawerma.jpg';
import p12 from '../../assets/restaurents/ice-cream.jpg';
import p8 from '../../assets/restaurents/donuts.webp';
import p14 from '../../assets/restaurents/knafeh.jpg';
import p1 from '../../assets/restaurents/coffee.jpg';
import p2 from '../../assets/restaurents/tea.jpg';
import p4 from '../../assets/restaurents/juice.jpg';
import p11 from '../../assets/activities/m1.jpg';
import p22 from '../../assets/activities/s18.jpg';
import p33 from '../../assets/activities/r20.jpg';
import { Link, useNavigate } from "react-router-dom";


const questions = [
  {
    id: "favMeal",
    question: "What's your favourite breakfast?",
    options: [
      {
        value: "falafel",
        label: "Flafel",
        image: p9,
      },
      { value: "manaqeesh", label: "Manaqeesh", image: p16 },
      {
        value: "croissant",
        label: "Croissant",
        image: p17,
      },
    ],
  },
  {
    id: "favFood",
    question: "What's your favourite Lunch?",
    options: [
      {
        value: "pizza",
        label: "Pizza",
        image: p20,
      },
      { value: "sushi", label: "Sushi", image:p3 },
      {
        value: "burger",
        label: "Burger",
        image: p7,
      },
    ],
  },
  {
    id: "favdin",
    question: "What's your favourite Dinner?",
    options: [
      {
        value: "Shawerma",
        label: "Shawerma",
        image: p23,
      },
      { value: "Pasta", label: "Pasta", image:p19 },
      {
        value: "Broasted",
        label: "Broasted",
        image: p6,
      },
    ],
  },
  {
    id: "favActivity",
    question: "What's your favourite activity?",
    options: [
      {
        value: "Cycling",
        label: "Cycling",
        image: p11,
      },
      {
        value: "Horse Riding",
        label: "Horse Riding",
        image: p33,
      },
      {
        value: "Sky Diving",
        label: "Sky Diving",
        image: p22,
      },
    ],
  },
  {
    id: "favDessert",
    question: "What's your favourite dessert?",
    options: [
      { value: "Donuts", label: "Donuts", image: p8 },
      {
        value: "iceCream",
        label: "Ice-cream",
        image: p12,
      },
      {
        value: "kunafa",
        label: "Kunafa",
        image: p14,
      },
    ],
  },
  {
    id: "favDrink",
    question: "What's Your favourit drink?",
    options: [
      {
        value: "coffee",
        label: "Coffee",
        image: p1,
      },
      { value: "tea", label: "Tea", image: p2},
      { value: "juice", label: "Juice", image: p4 },
    ],
  },
];

function Qestionair() {
  const [answers, setAnswers] = useState({});

  const handleAnswer = (questionId, answer) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/LogIn");
    console.log("Questionair is sent:", answers);
  };

  return (
    <div className="min-h-screen bg-[#F9E1FF20] p-8">
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <h1 className="text-3xl font-bold text-center py-6 bg-teal-500 text-white">
            Choose Your Perefences
        </h1>

        <div className="p-8 space-y-10">
          {questions.map((q) => (
            <div key={q.id} className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-700">
                {q.question}
              </h2>
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                className="rounded-lg overflow-hidden"
              >
                {q.options.map((option) => (
                  <SwiperSlide key={option.value}>
                    <div
                      className={`relative cursor-pointer group overflow-hidden rounded-lg shadow-md transition-all duration-300 ${
                        answers[q.id] === option.value
                          ? "ring-4 ring-teal-500"
                          : ""
                      }`}
                      onClick={() => handleAnswer(q.id, option.value)}
                    >
                      <img
                        src={option.image}
                        alt={option.label}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <span className="text-white text-xl font-semibold">
                          {option.label}
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ))}

          <button
            onClick={handleSubmit}
            className="w-full bg-teal-500 text-white text-xl font-semibold py-4 px-8 rounded-lg hover:bg-teal-400 transition-colors"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Qestionair;

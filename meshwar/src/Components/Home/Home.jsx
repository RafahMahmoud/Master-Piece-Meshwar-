import routeImage from '../../assets/route_4-removebg-preview.png';
import SliderPar from '../Slider/Slider';
import p1 from '../../assets/pr1.jfif';
import p2 from '../../assets/p2.png';
import p3 from '../../assets/p3.jpg';
import p4 from '../../assets/p4.jfif';
import p5 from '../../assets/p5.jfif';
import p6 from '../../assets/p6.png';
import p7 from '../../assets/p7.jpg';
import p8 from '../../assets/p8.jfif';
import p9 from '../../assets/p9.jpg';
import p10 from '../../assets/p10.jpg';
import p11 from '../../assets/p11.png';
import p12 from '../../assets/p12.webp';
import p13 from '../../assets/p13.webp';
import p14 from '../../assets/p14.jpg';
import p15 from '../../assets/p16.jpg';
import React, { useState } from 'react';
import Reviews from '../Reviews/Reviews';
import Activities from '../Activites/Activites';
import Restaurents from '../Restaurents/Restaurents';
import './Home.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import HeroSection from './section';


function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const slider1Images = [ p1 ,p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15];
  
  return (
      <div className="mx-auto  ">
         <NavBar/>
          <div className="Herosection mx-[7rem] flex flex-col md:flex-row gap-8 ">
              <div className="Herosection-content mt-[4rem]">
                  <p className="Herosection-title text-2xl md:text-3xl font-bold mb-4">
                      Let’s Get Unforgettable Moments
                  </p>
                  <p className="Herosection-description text-base md:text-lg mb-4">
                      Meshwar offers a customized group outing experience tailored to your preferences. By seamlessly integrating personal information, food choices, and activity preferences, Meshwar simplifies the process of planning and enjoying trips and spending unforgettable moments with your loved ones.
                  </p>
                  <button className="Herosection-button bg-teal-500 hover:bg-teal-600 text-white p-3 text-lg font-bold rounded-lg">
                      Start planning
                  </button>
              </div>
              <img className="Herosection-img mt-[7rem] md:mt-0 w-full md:w-1/3" src={routeImage} alt="Meshwar" />
          </div>

          <main className="partners mb-20">
              <p className="partners-title text-2xl md:text-3xl font-bold mb-4">Our Partners</p>
              <SliderPar
                  width={200}
                  height={100}
                  quantity={15}
                  images={slider1Images}
                  reverse={true}
              />
          </main>
          <HeroSection/>
          <Restaurents />
          <Activities />
          <Reviews />
          <Footer/>
      </div>
  );
}
export default Home;
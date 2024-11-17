import React, { useState } from "react";
import p1 from '../../assets/restaurents/1.jpeg';
import p2 from '../../assets/restaurents/2.jpeg';
import p4 from '../../assets/restaurents/3.jpg';
import p5 from '../../assets/restaurents/7.jpeg';
import p6 from '../../assets/restaurents/broasted.jpg';
import p7 from '../../assets/restaurents/burgers.jpg';
import p8 from '../../assets/restaurents/donuts.webp';
import p9 from '../../assets/restaurents/falafel.jpg';
import p10 from '../../assets/restaurents/ftoor.jpg';
import p11 from '../../assets/restaurents/HotPotat.webp';
import p12 from '../../assets/restaurents/ice-cream.jpg';
import p13 from '../../assets/restaurents/indian.jpg';
import p14 from '../../assets/restaurents/knafeh.jpg';
import p15 from '../../assets/restaurents/kumpeir.jpg';
import p16 from '../../assets/restaurents/manaqeesh.jpg';
import p17 from '../../assets/restaurents/mansaf.jpg';
import p18 from '../../assets/restaurents/mashawi.jpg';
import p19 from '../../assets/restaurents/pasta.jpg';
import p20 from '../../assets/restaurents/pizza.jpg';
import p21 from '../../assets/restaurents/rice.webp';
import p22 from '../../assets/restaurents/rooftop-cafe.jpg';
import p23 from '../../assets/restaurents/shawerma.jpg';
import p3 from '../../assets/restaurents/soshi.jpg';
import p24 from '../../assets/restaurents/steak.jpg';

const data = [
{img: p1},
{img: p2},
{img: p4},
{img: p5},
{img: p6},
{img: p7},
{img: p8},
{img: p9},
{img: p10},
{img: p11},
{img: p12},
{img: p13},
{img: p14},
{img: p15},
{img: p16},
{img: p17},
{img: p18},
{img: p19},
{img: p20},
{img: p21},
{img: p22},
{img: p3},
{img: p24},
{img: p23}
];

function Restaurents() {
    const photosPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);
    const numPages = Math.ceil(data.length / photosPerPage);
    const startIndex = (currentPage - 1) * photosPerPage;
    const endIndex = startIndex + photosPerPage;
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
        <div className='reviews mt-20 px-4 py-8 bg-gradient-to-b from-purple-50 to-white mx-4 sm:mx-8 lg:mx-[9rem]'>
            <p className="text-2xl font-bold text-center mb-8">What To Eat?</p>
            <div className='flex flex-col sm:flex-row mx-4 sm:mx-8 lg:mx-16 gap-4 sm:gap-8 justify-between items-center'>
                <button
                    className={`w-8 h-8 rounded-full flex items-center justify-center shadow-sm
                        ${currentPage === 1 ? 'bg-gray-100 cursor-not-allowed' : 'bg-white hover:bg-gray-50'}`}
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                >
                    <span className="text-gray-600">&lt;</span>
                </button>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
                    {currentData.map((item, index) => (
                        <div key={index} className='p-0 w-full max-w-[13.5rem]'>
                            <img 
                                className="w-full h-[11.5rem] object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                                src={item.img} 
                                alt="Food Picture" 
                            />
                        </div>
                    ))}
                 </div>
                <button
                    className={`w-8 h-8 rounded-full flex items-center justify-center shadow-sm
                        ${currentPage === numPages ? 'bg-gray-100 cursor-not-allowed' : 'bg-white hover:bg-gray-50'}`}
                    onClick={handleNext}
                    disabled={currentPage === numPages}
                >
                    <span className="text-gray-600">&gt;</span>
                </button>
            </div>
            <div className='flex justify-center items-center mt-4'>
                <div className='flex items-center gap-2'>
                    {Array.from({ length: numPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            className={`rounded-full ${currentPage === page ? 'bg-black w-3 h-3' : 'bg-gray-300 w-2 h-2'}`}
                            onClick={() => setCurrentPage(page)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Restaurents;
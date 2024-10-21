import React, { useState } from "react";
import p1 from '../../assets/activities/m1.jpg';
import p2 from '../../assets/activities/friends.jpg';
import p4 from '../../assets/activities/m2.jfif';
import p5 from '../../assets/activities/m3.jpg';
import p6 from '../../assets/activities/m5.jpg';
import p7 from '../../assets/activities/m6.jpg';
import p8 from '../../assets/activities/m7.jpg';
import p9 from '../../assets/activities/m8.jfif';
import p10 from '../../assets/activities/m9.jpg';
import p11 from '../../assets/activities/m10.jpg';
import p12 from '../../assets/activities/m10.webp';
import p13 from '../../assets/activities/m11.webp';
import p14 from '../../assets/activities/m12.jfif';
import p15 from '../../assets/activities/m13.jfif';
import p16 from '../../assets/activities/m15.jpg';
import p17 from '../../assets/activities/m16.jpg';
import p18 from '../../assets/activities/m17.jpg';
import p19 from '../../assets/activities/m18.jpg';
import p20 from '../../assets/activities/m21.jpg';
import p21 from '../../assets/activities/m44.jpg';
import p22 from '../../assets/activities/s18.jpg';
import p23 from '../../assets/activities/r20.jpg';
import p3 from '../../assets/activities/v1.jpg';
import p24 from '../../assets/activities/v2.webp';

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

function Activities() {
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
        <div className='reviews mt-20 px-4  py-8 bg-[#F9E1FF40] mx-[9rem]'>
            <p className="text-2xl font-bold text-center mb-8">What To Do?</p>
            <div className=' flex mx-16 gap-8 justify-between items-center'>
            <button
                    className={`w-16 h-8 rounded-full ${currentPage === 1 ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}`}
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                >
                    &lt; {/* Left arrow */}
                </button>
                <div className="flex flex-wrap gap-4 justify-center">
                {currentData.map((item, index) => (
                    <div key={index} className=' p-0'>
                        <img className=" h-[11.5rem] w-[13.5rem] object-cover" src={item.img} alt="Activity Picture" />
                    </div>
                ))}
                </div>
              
                   <button
                    className={`w-16 h-8 rounded-full  ${currentPage === numPages ? 'bg-gray-100 cursor-not-allowed' : 'bg-white '}`}
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

export default Activities;
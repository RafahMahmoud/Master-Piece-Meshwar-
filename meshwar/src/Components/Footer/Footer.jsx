
// import './Footer.css'



// function Footer() {
//     return(
        
//             <footer className="footer bg-white  shadow-slate-900/20  shadow-t-[20px]  border border-2  ">
//   <div className="footer-container">
//     <div className="footer-column">
//       <h4>Home</h4>
//       <ul>
//         <li>
//           <a href="../Home-Page/Home.html#group2">Partners</a>
//         </li>
//         <li>
//           <a href="../Home-Page/Home.html#group3">Restaurents</a>
//         </li>
//         <li>
//           <a href="../Home-Page/Home.html#group4">Activities</a>
//         </li>
//         <li>
//           <a href="../Home-Page/Home.html#group5">Reviews</a>
//         </li>
//       </ul>
//     </div>
//     <div className="footer-column">
//       <h4>New Outing</h4>
//       <ul>
//         <li>
//           <a href="../Movie-Details-Page/Movie-Details.html">New Outing</a>
//         </li>
//         <li>
//           <a href="../Movie-Details-Page/Movie-Details.html">Schedule</a>
//         </li>
//       </ul>
//     </div>
//     <div className="footer-column">
//       <h4>Become A Partner</h4>
//       <ul>
//         <li>
//           <a href="../Movies-Catalouge-Page/Movies-Catalouge.html">
//             Become A Partner
//           </a>
//         </li>
//       </ul>
//     </div>
//     <div className="footer-column" id="contact-column">
//       <h4>Connect With Us</h4>
//       <ul className="social-icons">
//         <li>
//           <a href="#">
//             <i className="fa-brands fa-facebook" />
//           </a>
//         </li>
//         <li>
//           <a href="#">
//             <i className="fa-brands fa-twitter" />
//           </a>
//         </li>
//         <li>
//           <a href="#">
//             <i className="fa-brands fa-linkedin" />
//           </a>
//         </li>
//       </ul>
//     </div>
//   </div>
//   <div className="footer-bottom">
//     <p>© 2024 Meshwar. All Rights Reserved.</p>
//     <ul>
//       <li>
//         <a href="#">Terms of Use</a>
//       </li>
//       <li>
//         <a href="#">Privacy Policy</a>
//       </li>
//       <li>
//         <a href="#">Cookie Policy</a>
//       </li>
//     </ul>
//   </div>
// </footer>

    
//     )
// }
// export default Footer;

import React from 'react';
import logo from '../../assets/meshwar-logo.png';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; // تصحيح اسم الأيقونة
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <h4>Home</h4>
                    <ul>
                        <li><a href="../Home-Page/Home.html#group2">Partners</a></li>
                        <li><a href="../Home-Page/Home.html#group3">Restaurants</a></li>
                        <li><a href="../Home-Page/Home.html#group4">Activities</a></li>
                        <li><a href="../Home-Page/Home.html#group5">Reviews</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>New Outing</h4>
                    <ul>
                        <li><a href="../Movie-Details-Page/Movie-Details.html">New Outing</a></li>
                        <li><a href="../Movie-Details-Page/Movie-Details.html">Schedule</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Become A Partner</h4>
                    <ul>
                        <li><a href="../Movies-Catalogue-Page/Movies-Catalogue.html">Become A Partner</a></li>
                    </ul>
                </div>
                <div className="footer-column" id="contact-column">
                    <h4>Connect With Us</h4>
                    <ul className="social-icons">
                        <li><a href="#"><FaFacebookF /></a></li>
                        <li><a href="#"><FaTwitter /></a></li>
                        <li><a href="#"><FaInstagram /></a></li> {/* تصحيح الأيقونة */}
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <img className="logo-img h-[2.5rem] w-[7.5rem]" src={logo} alt="Meshwar" />
                <p>© 2024 Meshwar. All Rights Reserved.</p>
                <ul>
                    <li><a href="#">Terms of Use</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Cookie Policy</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;

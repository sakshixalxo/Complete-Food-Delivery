import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='last'>
    <hr />
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt='' />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque deleniti, quas distinctio quam blanditiis vero asperiores vel debitis iusto? Voluptatem ex porro consectetur numquam in quas sapiente ipsum eum illum.</p>
                <div  className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>    
            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Polices</li>
                </ul>

            </div>

            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+1-00000000000</li>
                    <li>contect@foodyzone</li>
                </ul>
            </div>
            
        </div>
         <hr />
         <p className="footer-copyright">Copyright 2024 @ FoodyZone </p>
    </div>
    </div>
  )
}

export default Footer

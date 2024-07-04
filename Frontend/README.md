 # Food Delivery Website(Front end part)

This project is a front-end food delivery website developed using React.js, HTML, CSS, and JavaScript, with Vite-Lite as the initial setup for a fast and optimized development environment. The website is designed to allow customers to easily browse through a menu, add items to their cart, and enter their address for delivery. Key React concepts such as useState, useContext, and useNavigate are utilized to efficiently manage state, context, and navigation within the application, ensuring a seamless user experience.

The home page features a well-structured and visually appealing layout, starting with a navbar that includes a logo and navigation links to Home, Menu, Mobile App, Contact, Cart, and a start icon. Below the navbar, there is a prominently styled main logo, created with special CSS techniques to stand out. Users can explore the menu through an interactive section that allows filtering of dishes, making it easy to find specific items. The full menu is displayed comprehensively, and there is also a dedicated section for mobile app downloads, encouraging users to install the app for a better experience. The footer provides additional links and information, ensuring that all necessary details are accessible.

The cart functionality is designed to be user-friendly, allowing customers to add any quantity of dishes and remove them as needed. When items are added to the cart, the cart section displays the selected items along with their prices, quantities, and the total amount, including delivery fees. A "Pay to Checkout" button leads to the Place Order page, where users can enter their address and proceed to payment. This checkout process is streamlined to ensure a smooth and efficient transaction, enhancing the overall user experience. This project exemplifies the integration of modern web development practices, creating a functional and engaging food delivery service interface.



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refres





//background colour :rgb(244, 244, 232)














import React from 'react'
import  './FoodDisplay.css'
import { useContext } from 'react'
import FoodItem from '../FoodItem/FoodItem'
import { StoreContext } from '../../context/StoreContext'

const FoodDisplay = (category) => {

    const {food_list} =useContext(StoreContext)

  return (
    <div className='food-display' id='food-display'>
       <h2> Top Dishes near youuu !</h2>
       <div className="food-display-list">
        {food_list.map((item,index)=>{
              if(category === "All" || category === item.category){
                return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
              }
              

})}
       </div>
    </div>
  )
}

export default FoodDisplay
//
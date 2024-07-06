import { createContext, useEffect, useState } from "react";
//import { food_list } from "../assets/assets"; // Ensure this path is correct
import axios from "axios"

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const url = "http://localhost:3000"; // Ensure the correct scheme (http/https)
    const [token, setToken] = useState(() => localStorage.getItem("token") || "");
    const [food_list,setFoodList] =useState([])

    useEffect(() => {
        // Persist token in local storage
        if (token) {
            localStorage.setItem("token", token);
        } else {
            localStorage.removeItem("token");
        }
    }, [token]);

    const addToCart = async (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1,
        }));
        if(token){
            await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
        }
    };

    const removeFromCart = async(itemId) => {
        setCartItems((prev) => {
            const updatedCart = { ...prev };
            if (updatedCart[itemId] > 0) {
                updatedCart[itemId] -= 1;
            }
            if (updatedCart[itemId] === 0) {
                delete updatedCart[itemId];
            }
            return updatedCart;
        });
        if(token){
            await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
        }
    };

    const getTotalCartAmount = () => {
        return Object.keys(cartItems).reduce((total, itemId) => {
            const item = food_list.find((product) => product._id === itemId);
            return total + (item ? item.price * cartItems[itemId] : 0);
        }, 0);
    };

    const fetchFoodList = async () =>{
        const response =await axios.get(url+"/api/food/list");
        setFoodList(response.data.data)
    }

    const loadCartData = async(token) =>{
        const response = await axios.post(url+"/api/cart/get",{},{headers:{token}});
        setCartItems(response.data.cartData);
    }

    useEffect(() => {
       
        async function loadData(){
            await fetchFoodList();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"));
                await loadCartData(localStorage.getItem("token"));
            }
        }
        loadData();
    }, []);

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
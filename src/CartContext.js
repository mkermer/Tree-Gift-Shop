import React, { useState, createContext, useContext } from "react";
import Axios from "axios";
import { LoginContext } from "./LoginContext";
import ls from "local-storage";

export const CartContext = createContext();

export const CartProvider = (props) => {
  const { getEmail } = useContext(LoginContext);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState([0]);
  const [sidebar, setSidebar] = useState(false);
  const [orders, setOrders] = useState([])
  const [paymentComplete, setPaymentComplete] = useState(false)
  const [bounce, setBounce] = useState(0)

  const showSidebar = () => setSidebar(!sidebar);
  const openSidebar = () => setSidebar(true);

  //============Cart functions==============//
  const placeOrder = () => {
    getOrders()
    const order = cart.concat(orders) 
    Axios.post("https://treeduce-server.herokuapp.com/order", {
      cart: JSON.stringify(order),
      username: getEmail(),
    })
  }


  const saveCart = () => {
    Axios.post("https://treeduce-server.herokuapp.com/cart", {
      cart: JSON.stringify(cart),
      username: getEmail(),
    });
    ls.set("cart", JSON.stringify(cart));
  };

  function addToCart(e) {
    const check = cart.every((item) => {
      return item.tree_id !== e.tree_id;
    });
    if (check) {
      setCart([...cart, { ...e }]);
    } else {
      alert(`${e.tree_name} is already in your cart.`);
    }
  }

  const getOrders = () => {
    Axios.post("https://treeduce-server.herokuapp.com/getcart", {
      username: getEmail(),
    }).then((response) => {
      if(response.data.length > 0){
        setOrders(JSON.parse(response.data[0].placedOrders))
      }
    })
  }

  const getCart = () => {
    Axios.post("https://treeduce-server.herokuapp.com/getcart", {
      username: getEmail(),
    }).then((response) => {
      if (response.data.length > 0) {
        setCart(JSON.parse(response.data[0].cart));
      }
    });
  };

  const getTotal = () => {
    const total = [...cart];
    const res = total.reduce((prev, item) => {
      return prev + item.price * item.count;
    }, 0);
    setTotal(res);
  };

  const removeFromCart = (e) => {
    if (
      window.confirm(`Do you want to remove ${e.tree_name} from your cart?`)
    ) {
      cart.forEach((item, index) => {
        if (item.tree_id === e.tree_id) {
          cart.splice(index, 1);
        }
      });
      setCart(cart);
      getTotal();
    }
  };

  const reduceCount = (id) => {
    const cartUpdater = [...cart];
    cart.forEach((item) => {
      if (item.tree_id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    setCart(cartUpdater);
    getTotal();
  };

  const increaseCount = (id) => {
    const cartUpdater = [...cart];
    cart.forEach((item) => {
      if (item.tree_id === id) {
        item.count += 1;
      }
    });
    setCart(cartUpdater);
    getTotal();
  };

  const resetCart = () => {
    if (window.confirm("Are you sure you want to reset your cart?")) {
      setCart([]);
      getTotal();
    }
  };

  let sum = function (items, prop) {
    return items.reduce(function (a, b) {
      return a + b[prop];
    }, 0);
  };


  return (
    <CartContext.Provider
      value={{
        cart,
        orders,
        setOrders,
        reduceCount,
        placeOrder,
        getOrders,
        increaseCount,
        total,
        saveCart,
        setTotal,
        getTotal,
        getCart,
        setCart,
        showSidebar,
        openSidebar,
        sidebar,
        addToCart,
        removeFromCart,
        sum,
        resetCart,
        paymentComplete,
        setPaymentComplete,
        bounce,
        setBounce
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
export default CartContext;

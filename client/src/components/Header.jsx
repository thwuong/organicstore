// import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faBars,
  faUser,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <header className="h-24 flex items-center justify-between">
      <div className="flex items-center gap-14 h-full">
        <Link to={"/"} className="block">
          <img
            src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/organic-store-logo5.svg"
            alt="oganic"
            className="h-1/4"
          />
        </Link>
        <div className="flex items-start bg-black/30 w-full h-screen z-10 absolute top-0 right-0 xl:relative xl:bg-white xl:h-auto">
          <ul className="flex gap-10 flex-col pt-20 pl-10 ml-20 w-full h-full bg-white flex-1 relative xl:flex-row xl:p-0 xl:m-0">
            <li className="hover:text-primary duration-300 ">
              <Link>Everything</Link>
            </li>
            <li className="hover:text-primary duration-300">
              <Link>Groceries</Link>
            </li>
            <li className="hover:text-primary duration-300">
              <Link>Juice</Link>
            </li>
            <li className="hover:text-primary duration-300">
              <Link>About</Link>
            </li>
            <li className="hover:text-primary duration-300">
              <Link>Contact</Link>
            </li>
          </ul>
          <p className="xl:hidden block absolute top-5 right-5 cursor-pointer">
            <FontAwesomeIcon icon={faClose} size="xl" color="#000" />
          </p>
        </div>
      </div>
      <div className="flex gap-8 flex-row-reverse xl:flex-row">
        <p className="xl:hidden block relative bg-primary p-2">
          <FontAwesomeIcon icon={faBars} size="xl" color="#ffffff" />
        </p>
        <div className="flex gap-2 cursor-pointer relative">
          <span className="text-primary font-bold">$0.00</span>
          <p className="relative">
            <FontAwesomeIcon icon={faCartShopping} size="xl" color="#8BC34A" />
            <p className="absolute leading-4 -top-1/2 -right-1/2 px-2 py-1 rounded-full bg-primary font-medium">
              0
            </p>
          </p>
        </div>

        <Link>
          <FontAwesomeIcon icon={faUser} size="xl" color="#8BC34A" />
        </Link>
      </div>
      <div className="flex justify-end absolute z-10 top-0 right-0 left-0 w-full h-screen bg-black/30">
        <div className="flex flex-col justify-between w-3/4 xl:w-1/3 h-full p-6 bg-white">
          <div className="flex justify-between border-b py-2 border-gray-500">
            <p>Shopping Cart</p>
            <p className="cursor-pointer">
              <FontAwesomeIcon icon={faClose} size="xl" color="#000" />
            </p>
          </div>
          {1 >= 3 ? (
            <ul>
              <li></li>
            </ul>
          ) : (
            <p className="text-center">No products in the cart.</p>
          )}
          <button className="p-2 w-full bg-primary rounded-md text-white">
            Continue Shopping
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

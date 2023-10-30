import React, { useState } from "react";
import { BsCheckCircle } from "react-icons/bs";
import images from "src/assets/Images";
import Container from "src/components/Container";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import PATH from "src/constants/path";

function Cart() {
  const [carts, setCarts] = useState([]);
  const [render, setRender] = useState(false);
  const [confirmPolicy, setConfirmPolicy] = useState(true);
  var subTotal = 0;

  return (
    <Container>
      {carts.length == 0 ? (
        <div className="flex flex-col pb-20 bg-[#FFFFFF]">
          <div className="flex relative flex-col max-w-screen-xl mx-auto w-full">
            {/* Heading */}
            <div className="text-textHeading mx-auto mt-10 text-2xl font-semibold">Shopping Cart</div>
            <div className="flex justify-between">
              <div className="w-3/5">
                {/* CartItem */}
                <CartItem />
                <CartItem />
              </div>
              <div className="w-2/5 pl-8">
                {/* Checkout */}
                <div className="col-end-5 w-[350px] bg-[#f5f5f5] p-6 mt-5 rounded-xl border-primary border-t-4">
                  <div className="flex justify-between font-bold text-base  text-textColor">
                    <span>Subtotal:</span>
                    <div className="flex flex-col ">
                      <span className="text-end">{subTotal}</span>
                      <span className=" text-sm font-normal mt-2 text-green-700">All taxes and fees included</span>
                    </div>
                  </div>
                  <Link to={PATH.checkout}>
                    <button className="py-2 my-5 w-full rounded-3xl hover:bg-[#304c84] bg-primary text-white transition duration-200 ease-in">
                      PROCEED TO CHECKOUT
                    </button>
                  </Link>
                  <div className="flex items-center">
                    <span className="text-xl text-green-700">
                      <BsCheckCircle />
                    </span>
                    <span className="ml-2 text-textContent text-sm block">Free cancellation 48 hours before trip</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col bg-[#FFFFFF]">
          <div className="flex relative flex-col max-w-screen-xl mx-auto w-full items-center justify-center">
            <div className="w-[600px]">
              <img alt="" src={images.emptyCart} />
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}

export default Cart;

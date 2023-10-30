import React from "react";
import { BiSolidStar } from "react-icons/bi";
import { DatePicker, Popover } from "antd";
import DropDownItem from "../Product/ProductDropDown";
import { BsCheckCircle } from "react-icons/bs";
import { MdOutlineLanguage } from "react-icons/md";

function CartItem() {
  const data = [
    {
      id: "1",
      content: "Adults",
      des: "age > 18",
      quantity: 0
    },
    {
      id: "2",
      content: "Children",
      des: "age < 18",
      quantity: 0
    }
  ];
  const content = data.map((item) => (
    <DropDownItem content={item.content} key={item.id} des={item.des} dataQuantity={item.quantity} />
  ));
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <div className="flex border-b border-[#dcdfe4] mt-8 pb-5">
      <div className="w-4/12">
        <img
          className="w-full h-[120px] object-cover rounded"
          src="https://cdn.getyourguide.com/img/tour/752c5ef8c7d4d914.jpeg/145.jpg"
          alt=""
        />
      </div>
      <div className="flex w-full flex-col pl-4">
        <a href="http://localhost:3000/productsdetail" target="_blank" className="font-bold">
          Amsterdam: VIP Tour of Johan Cruijff ArenA
        </a>
        {/* star */}
        <div className="flex items-center mt-2">
          <div className="mr-3 font-light text-sm">4.8</div>
          <div className="flex gap-1 mr-5">
            {Array(5)
              .fill(0)
              .map((item, index) => (
                <div className="text-yellow-400" key={index}>
                  <BiSolidStar />
                </div>
              ))}
          </div>
        </div>
        {/* schedule */}
        <div className="w-full my-2">
          <Popover content={content} placement="bottom" className="pl-2" trigger={["click"]}>
            <div className="rounded-3xl border-2 border-[#dcdfe4] w-[360px] outline-none text-sm py-[9px] pl-4 font-light cursor-pointer">
              Unavailable for this date
            </div>
          </Popover>
        </div>
        <DatePicker
          onChange={onChange}
          format={"DD MMM, YYYY"}
          allowClear={false}
          suffixIcon
          style={{
            height: "auto",
            width: "360px",
            border: "2px solid #dcdfe4",
            borderRadius: "20px",
            cursor: "pointer",
            fontSize: "16px",
            margin: "0px",
            padding: "8px 12px"
          }}
        />
        <div className="flex text-sm mt-3">
          <span className="text-lg mr-2">
            <MdOutlineLanguage />
          </span>
          <span>Language: English</span>
        </div>
        <div className="flex text-sm mt-3">
          <span className="text-lg text-green-700 mr-2">
            <BsCheckCircle />
          </span>
          <span>Free cancellation</span>
        </div>

        <div className="text-red-700 mt-3 font-bold cursor-pointer text-sm">Cancel</div>
        <div className="flex mt-2 justify-end font-bold">
          <span>Total:</span>
          <span className="ml-4">634,400đ</span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;

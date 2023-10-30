import { DatePicker, Popover, Space } from "antd"
import DropDownItem from "./ProductDropDown"
import React, { useState } from "react"

function ProductSchedule() {
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
  ]
  const content = data.map((item) => (
    <DropDownItem content={item.content} key={item.id} des={item.des} dataQuantity={item.quantity} />
  ))
  const onChange = (date, dateString) => {
    console.log(date, dateString)
  }
  return (
    <div className='bg-[#1a2b49] p-4 rounded-2xl'>
      <div className='text-white text-xl font-bold mb-2'>Select participants and date</div>
      <div className='flex mb-4 justify-between'>
        <div className='w-full mr-4'>
          <Popover content={content} placement='bottom' className='pl-2' trigger={["click"]}>
            <div className='rounded-2xl w-full outline-none text-sm flex-1 py-[9px] px-4 font-light bg-white text-[#c4bec4] cursor-pointer'>
              Unavailable for this date
            </div>
          </Popover>
        </div>
        <Space direction='vertical'>
          <DatePicker
            onChange={onChange}
            format={"DD MMM, YYYY"}
            allowClear={false}
            suffixIcon
            style={{
              height: "auto",
              width: "240px",
              border: "none",
              borderRadius: "20px",
              cursor: "pointer",
              fontSize: "16px",
              margin: "0px",
              padding: "8px 12px"
            }}
          />
        </Space>
      </div>
      <button className='px-4 py-2 w-full rounded-3xl hover:bg-[#304c84] bg-primary text-white transition duration-200 ease-in'>
        Check availability
      </button>
    </div>
  )
}

export default ProductSchedule

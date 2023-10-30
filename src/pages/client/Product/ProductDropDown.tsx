import React, { useState } from "react"

interface Props {
  content: String
  des: String
  dataQuantity: number
  id: number
}

function DropDownItem({ content, des, dataQuantity, id }: Props) {
  const [quantity, setQuantity] = useState(dataQuantity)
  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1)
    }
  }

  const handleIncrement = () => {
    setQuantity(quantity + 1)
  }
  return (
    <div key={id} className='flex text-sm items-center gap-5 min-w-[240px] py-2 border-b-[1px] border-gray-200'>
      <div className='flex items-center justify-between w-full'>
        <div className='flex flex-col'>
          <span>{content}</span>
          <span>{des}</span>
        </div>
        <div className='flex'>
          <div
            className='w-6 h-6 flex items-center justify-center bg-[#eaecef] dark:bg-[#474D57]  rounded-l cursor-pointer'
            onClick={() => handleDecrement()}
          >
            -
          </div>
          <div className='border border-[#eaecef] dark:border-[#474D57] rounded px-4 w-6 h-6 flex items-center justify-center hover:border-primary'>
            {quantity}
          </div>
          <div
            className='w-6 h-6 flex items-center justify-center bg-[#eaecef] dark:bg-[#474D57]  rounded-r cursor-pointer'
            onClick={() => handleIncrement()}
          >
            +
          </div>
        </div>
      </div>
    </div>
  )
}

export default DropDownItem

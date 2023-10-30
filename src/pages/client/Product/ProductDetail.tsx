import React, { useState } from "react"
import Container from "src/components/Container"
import { BiSolidStar, BiTime, BiWallet, BiX } from "react-icons/bi"
import { BsBagCheck, BsWallet, BsPersonGear, BsCheck2 } from "react-icons/bs"
import ProductImages from "./ProductImages"
import Modal from "src/components/Modal"
import ProductSchedule from "./ProductSchedule"
import ExpandableText from "src/components/ExpandableText/ExpandableText"
import ProductReview from "./ProductReview"

function ProductDetail() {
  const [open, setOpen] = useState(false)
  const textL =
    "Choose how you want to explore Fenway Stadium with 4 unique tours options Uncover the history of Fenway stadium and its beloved team, the Red Sox Revisit the careers of famous Red Sox players like Ted Williams and Babe Ruth Discover more than 170,000 stadium artifacts and 150,000 photographs Enjoy insider access to Fenway Park on four of the tour options"
  return (
    <>
      <Container>
        {/* Product detail header */}
        <div className='text-3xl leading-10 font-bold text-left text-textHeading my-4'>
          Amsterdam: VIP Tour of Johan Cruijff ArenA
        </div>
        {/* rating star */}
        <div className='flex items-center mb-4'>
          {/* star */}
          <div className='flex gap-1 mr-5'>
            {Array(5)
              .fill(0)
              .map((item, index) => (
                <div className='text-yellow-400' key={index}>
                  <BiSolidStar />
                </div>
              ))}
          </div>
          {/* point */}
          <div className='flex font-medium'>
            <div className='mr-1 '>4.8</div>
            <div>/ 5</div>
          </div>
        </div>
        {/* product image */}
        <ProductImages />
        {/* product content */}
        <div className='flex justify-between my-6'>
          <div className='w-[60%]'>
            {/* about tour */}
            <div>
              <div className='text-textHeading  text-2xl font-bold'>About this tour</div>
              {/* about tour item */}
              <div>
                <div className='text-base flex mt-6 items-center mb-1'>
                  <div className='text-xl mr-3'>
                    <BsBagCheck />
                  </div>
                  <div className='font-medium'>Free cancellation</div>
                </div>
                <div className='text-sm text-textContent ml-8 mb-6'>
                  Cancel up to 24 hours in advance for a full refund
                </div>
              </div>
              <div>
                <div className='text-base flex mt-2 items-center mb-1'>
                  <div className='text-xl mr-3'>
                    <BsWallet />
                  </div>
                  <div className='font-medium'>Reserve now & pay later</div>
                </div>
                <div className='text-sm text-textContent ml-8 mb-6'>
                  Keep your travel plans flexible — book your spot and pay nothing today.
                </div>
              </div>
              <div>
                <div className='text-base flex mt-2 items-center mb-1'>
                  <div className='text-xl mr-3'>
                    <BiTime />
                  </div>
                  <div className='font-medium'>Duration 2 hours</div>
                </div>
                <div className='text-sm text-textContent ml-8 mb-6'>Check availability to see starting times.</div>
              </div>
              <div>
                <div className='text-base flex mt-2 items-center mb-1'>
                  <div className='text-xl mr-3'>
                    <BsPersonGear />
                  </div>
                  <div className='font-medium'>Live tour guide</div>
                </div>
                <div className='text-sm text-textContent ml-8 mb-6'>English, Dutch</div>
              </div>
            </div>
          </div>
          <div className='w-[35%]'>
            <div className='border-[#dcdfe4] border-2 p-4 rouded '>
              <div className='flex items-center justify-between text-base '>
                <div className='flex-col'>
                  <div>From</div>
                  <div>
                    <strong>₫ 634,400</strong>
                  </div>
                  <div> per person</div>
                </div>
                <a
                  href='#check'
                  className='px-4 py-2 rounded-3xl hover:bg-[#304c84] bg-primary text-white transition duration-200 ease-in'
                >
                  Check availability
                </a>
              </div>
              <div className='flex items-center justify-between text-xs mt-5'>
                <div className='text-2xl mr-4'>
                  <BiWallet />
                </div>
                <div className='text-textContent'>
                  <span
                    onClick={() => setOpen(true)}
                    className='underline font-semibold text-textHeading cursor-pointer'
                  >
                    Reserve now & pay later
                  </span>{" "}
                  to book your spot and pay nothing today
                </div>
                <Modal open={open} onClose={() => setOpen(false)} className={"top-[-100px]"}>
                  <div className='max-w-[500px] text-sm'>
                    <div className='text-xl font-bold mb-3 text-center'>Reserve now & pay later</div>
                    Keep your travel plans flexible when you reserve now and pay later. We’ll automatically charge your
                    card 72 hours before your activity starts. You can also pay earlier if you like
                  </div>
                  <button
                    className='float-right px-6 py-2 mt-2 bg-primary text-white rounded font-semibold'
                    onClick={() => setOpen(false)}
                  >
                    Confirm
                  </button>
                </Modal>
              </div>
            </div>
          </div>
        </div>
        {/* product schedule */}
        <div className='w-[60%]' id='check'>
          <ProductSchedule />
        </div>
        {/* product experience*/}
        <div className='w-[60%]'>
          <div className='text-textHeading  text-2xl font-bold mt-6'>Experience</div>
          <div className='flex text-sm w-full py-6 border-[#dcdfe4] border-b'>
            <div className='w-[30%]  font-semibold'>Highlights</div>
            <div className='text-textContent w-[70%]'>
              <ul className='list-disc'>
                <li>Choose how you want to explore Fenway Stadium with 4 unique tours options</li>
                <li>Uncover the history of Fenway stadium and its beloved team, the Red Sox</li>
                <li>Revisit the careers of famous Red Sox players like Ted Williams and Babe Ruth</li>
                <li>Discover more than 170,000 stadium artifacts and 150,000 photographs</li>
                <li>Enjoy insider access to Fenway Park on four of the tour options</li>
              </ul>
            </div>
          </div>
          <div className='flex text-sm w-full py-6 border-[#dcdfe4] border-b'>
            <div className='w-[30%] font-semibold'>Full description</div>
            <div className='text-textContent w-[70%]'>
              <ExpandableText text={textL} maxChars={200} />
            </div>
          </div>
          <div className='flex text-sm w-full py-6 border-[#dcdfe4] border-b'>
            <div className='w-[30%] font-semibold'>Includes</div>
            <div className='text-textContent w-[70%]'>
              <div className='flex items-center'>
                <div className='text-[#007850] text-lg mr-3 mb-1'>
                  <BsCheck2 />
                </div>
                <div>Expertly guided tour of Fenway Park</div>
              </div>
              <div className='flex items-center'>
                <div className='text-[#c72a3d] text-xl mr-3 mb-1'>
                  <BiX />
                </div>
                <div>Food and Beverages</div>
              </div>
            </div>
          </div>
        </div>
        {/* product review*/}
        <ProductReview />
      </Container>
    </>
  )
}

export default ProductDetail

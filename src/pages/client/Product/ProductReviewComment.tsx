import { BiSolidStar } from "react-icons/bi"

function ProductComment() {
  return (
    <div className='border-b border-[#dcdfe4] py-6'>
      {/* star */}
      <div className='flex text-base mb-4'>
        {Array(5)
          .fill(0)
          .map((item, index) => (
            <div className='text-yellow-300' key={index}>
              <BiSolidStar />
            </div>
          ))}
      </div>
      {/* info */}
      <div className='flex items-center mb-6'>
        <div className='flex w-10 h-10 rounded-full justify-center text-xl uppercase font-medium items-center text-white bg-green-900'>
          N
        </div>
        <div className='ml-4 '>
          <div className='text-base'>Natalie – Mexico</div>
          <div className='text-textContent text-sm'>October 10, 2023</div>
        </div>
      </div>
      <div className='text-sm mb-2'>
        Beautiful stadium and our guide was very informative. We loved the experience and are so glad we did it. The
        only part we didn’t enjoy was the bag policy, we weren’t aware there was a policy during tours and had to store
        in an off site location for an additional fee. Wish we were told this way ahead of check-in
      </div>
    </div>
  )
}

export default ProductComment

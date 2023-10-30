import { BiInfoCircle, BiSolidStar } from "react-icons/bi"
import Select from "./ProductSelect"
import React, { useState, useRef } from "react"
import { ImSearch } from "react-icons/im"
import ProductComment from "./ProductReviewComment"

const sortStar = [
  {
    id: 1,
    name: "Lowest rated",
    sort: "star",
    direction: "ASC"
  },
  {
    id: 2,
    name: "Highest rated",
    sort: "star",
    direction: "DESC"
  },
  {
    id: 3,
    name: "Recently Created",
    sort: "createDate",
    direction: "DESC"
  }
]

const filterStar = [
  {
    id: 1,
    name: "All star ratings"
  },
  {
    id: 2,
    name: "5 star",
    star: 5
  },
  {
    id: 3,
    name: "4 star",
    star: 4
  },
  {
    id: 4,
    name: "3 star",
    star: 3
  },
  {
    id: 5,
    name: "2 star",
    star: 2
  },
  {
    id: 6,
    name: "1 star",
    star: 1
  }
]

function ProductReview() {
  const [selected, setSelected] = useState(sortStar[0])
  const [searchValue, setSearchValue] = useState("")
  const [checked, setChecked] = useState([1])
  const refInput = useRef()
  const handleCheck = (id) => {
    if (id === 1) {
      setChecked([1])
    } else {
      setChecked((prev) => {
        const isChecked = checked.includes(id)
        if (isChecked) {
          const newChecked = prev.filter((item) => item !== id && item !== 1)
          return newChecked.length ? newChecked : [1]
        } else {
          return [...prev.filter((item) => item !== 1), id]
        }
      })
    }
  }
  const handleClear = () => {
    setSearchValue("")
    refInput.current.focus()
  }

  const handleChange = (e) => {
    const searchValue = e.target.value
    if (!searchValue.startsWith(" ")) {
      setSearchValue(searchValue)
    }
  }
  return (
    <>
      {/* review header */}
      <div className='flex items-center text-textHeading  text-2xl font-bold py-8'>
        <div className='mr-2'>Customer reviews</div>
        <div className='text-textContent'>
          <BiInfoCircle />
        </div>
      </div>
      {/* review start */}
      <div className='flex'>
        <div className='w-[30%] pr-4 pb-6 mb-4 border-[#dcdfe4] border-r'>
          <div className='font-bold text-base text-textHeading'>Overall rating</div>
          <div className='flex items-center justify-center my-3'>
            <div className='text-4xl font-semibold'>4.8</div>
            <div className='text-2xl text-textContent font-semibold'>/5</div>
          </div>
          <div className='flex justify-between text-4xl'>
            {Array(5)
              .fill(0)
              .map((item, index) => (
                <div className='text-yellow-300' key={index}>
                  <BiSolidStar />
                </div>
              ))}
          </div>
        </div>
        <div className='pl-6 w-full flex items-center'>
          {/* search */}
          <div className='relative w-[70%]'>
            <button className='absolute inset-y-0 left-0 flex items-center pl-4 text-[#B7BDC6]  text-xl'>
              {<ImSearch />}
            </button>
            <input
              ref={refInput}
              value={searchValue}
              onChange={handleChange}
              placeholder='Search reviews'
              className='h-10 items-center rounded border-2 border-[#eaecef] focus:border-primary w-full outline-none px-12 text-sm text-textColor '
            />
            {!!searchValue && (
              <button
                className='text-[#B7BDC6]  pr-5 absolute right-[-6px] top-1/2 translate-y-[-46%] '
                onClick={handleClear}
              >
                X
              </button>
            )}
          </div>
          {/* sort */}
          <Select list={sortStar} selected={selected} setSelected={setSelected} />
        </div>
      </div>
      {/* review cmt */}
      <div className='flex'>
        <div className='w-[65%]'>
          <div className='text-lg text-textHeading font-bold'>By star rating</div>

          {filterStar.map((item) => (
            <div className='flex items-center my-2' key={item.id}>
              <input
                checked={checked.includes(item.id)}
                onChange={() => handleCheck(item.id)}
                type='checkbox'
                className='text-lg w-4 h-4 mr-2'
              />
              <div className='text-textContent text-base'>{item.name}</div>
              {item?.star > 0 && (
                <div className='text-yellow-300 flex ml-2'>
                  {Array(5)
                    .fill(0)
                    .map((_, index) => (
                      <BiSolidStar
                        key={index}
                        className={index < (item.star || 0) ? "text-yellow-300" : "text-gray-200"}
                      />
                    ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div>
          <ProductComment />
          <ProductComment />
        </div>
      </div>
    </>
  )
}

export default ProductReview

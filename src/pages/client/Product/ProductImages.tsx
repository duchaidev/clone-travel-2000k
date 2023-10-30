import { Carousel } from "antd"
function ProductImages() {
  return (
    <Carousel autoplay effect='fade'>
      <div className='w-full h-[400px]'>
        <img
          className='w-full h-full object-cover'
          src='https://cdn.getyourguide.com/img/tour/6424107f99fd5.jpeg/145.jpg'
        />
      </div>
      <div className='w-full h-[400px]'>
        <img
          className='w-full h-full object-cover'
          src='https://cdn.getyourguide.com/img/tour/6424125e67e25.jpeg/145.jpg'
        />
      </div>
      <div className='w-full h-[400px]'>
        <img
          className='w-full h-full object-cover'
          src='https://cdn.getyourguide.com/img/tour/5eac09c08dc29.jpeg/145.jpg'
        />
      </div>
      <div className='w-full h-[400px]'>
        <img
          className='w-full h-full object-cover'
          src='https://cdn.getyourguide.com/img/tour/5eac08d4ada53.jpeg/145.jpg'
        />
      </div>
      <div className='w-full h-[400px]'>
        <img
          className='w-full h-full object-cover'
          src='https://cdn.getyourguide.com/img/tour/5eac0705712c7.jpeg/145.jpg'
        />
      </div>
      <div className='w-full h-[400px]'>
        <img
          className='w-full h-full object-cover'
          src='https://cdn.getyourguide.com/img/tour/5eac06f44a164.jpeg/145.jpg'
        />
      </div>
    </Carousel>
  )
}

export default ProductImages

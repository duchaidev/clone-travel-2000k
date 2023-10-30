import { HeartOutlined } from "@ant-design/icons";
import { Rate } from "antd";

function Product() {
  return (
    <div className="relative">
      <span className="absolute top-2 right-2 cursor-pointer z-30 text-xl text-white">
        <HeartOutlined />
      </span>
      <div className="group">
        <div className="h-[260px] w-full overflow-hidden rounded-t-md">
          <img src="imgTest/test1.webp" className="w-full h-full object-cover group-hover:scale-125 transition-all" />
        </div>
        <div className="px-4 py-2 border-[0.5px] border-gray-300 rounded-b-md">
          <h5 className="uppercase text-sm text-gray-500">Adventure</h5>
          <p className="text-base font-semibold mt-2 line-clamp-2">Dubai: Tandem Skydive Experience at The Palm</p>
          <div className="text-sm flex items-center gap-1 py-2">
            <Rate allowHalf defaultValue={4.8} disabled className="text-sm" />
            <span>4.8</span>
            <span className="text-gray-400 text-xs">(315 reviews)</span>
          </div>
          <div className="flex items-center font-semibold">
            <span className="text-base">From 37845$ </span>
            <span className="text-sm ml-1"> per person</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;

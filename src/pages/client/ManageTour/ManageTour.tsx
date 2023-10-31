import React from "react";
import { NavLink } from "react-router-dom";
import { Pagination, Rate } from "antd";

const ManageTour = () => {
  return (
    <div className="mx-[15%] py-[30px]">
      <h1 className="mb-5 text-3xl font-bold">Products</h1>

      <div className="flex flex-col items-end w-full gap-3">
        <NavLink to={"/manage"} className="font-medium text-blue-600">
          + Create new product
        </NavLink>
        <div className="w-full bg-[#ebeef1] p-3 grid grid-cols-5 gap-3">
          <div className="flex flex-col col-span-1 gap-2 px-3 py-5 bg-white">
            <span className="font-semibold text-gray-700">Filter by Product</span>
            <input
              type="text"
              placeholder="Tour name..."
              className="w-full px-3 py-1 border rounded-sm"
              name="searchTour"
              id="searchTour"
            />
            <span className="font-semibold text-gray-700">Filter by status</span>
            <div className="flex flex-wrap gap-2">
              <span className={`px-[10px] py-1 text-sm text-blue-500 border border-blue-500 rounded-full`}>
                All Product
              </span>
              <span className={`px-[10px] py-1 text-sm text-gray-400 border border-gray-400 rounded-full`}>
                All Product
              </span>
              <span className={`px-[10px] py-1 text-sm text-gray-400 border border-gray-400 rounded-full`}>
                All Product
              </span>
              <span className={`px-[10px] py-1 text-sm text-gray-400 border border-gray-400 rounded-full`}>
                All Product
              </span>
              <span className={`px-[10px] py-1 text-sm text-gray-400 border border-gray-400 rounded-full`}>
                All Product
              </span>
            </div>
          </div>
          <div className="flex flex-col col-span-4 gap-2">
            <div className="flex justify-between mb-2">
              <div className="flex gap-3 font-medium text-gray-500">
                <span>Sort</span>
                <span>Title</span>
              </div>
              <span>1-2</span>
            </div>

            <div className="flex gap-3 p-3 bg-white">
              <img src="city/city3.jpg" alt="imgtour" className="w-[70px] h-[70px] object-cover" />
              <div className="flex flex-col w-full gap-3">
                <div className="flex justify-between w-[100%]">
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, suscipit?</p>
                  <span className={`font-medium py-1 px-2 text-red-700 bg-red-100 text-sm`}>No Availability</span>
                </div>
                <div>
                  <Rate disabled defaultValue={0} />
                  <span className="text-gray-500">Not Rate</span>
                </div>
                <div className="flex justify-between w-full gap-2 p-2 bg-red-100 border-t-4 border-red-600">
                  <span>
                    Availability: This Product is not available anymore and therefore offline. Please set a new
                    availability for at least one product option
                  </span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M15.5834 1.94413L14.0559 0.416626L8.00008 6.47246L1.94425 0.416626L0.416748 1.94413L6.47258 7.99996L0.416748 14.0558L1.94425 15.5833L8.00008 9.52746L14.0559 15.5833L15.5834 14.0558L9.52758 7.99996L15.5834 1.94413Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>
              <svg
                width="4"
                height="18"
                viewBox="0 0 4 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2"
              >
                <path
                  d="M0.375001 2.09375C0.375001 1.77236 0.470306 1.45818 0.648863 1.19095C0.82742 0.92372 1.08121 0.715439 1.37814 0.592446C1.67507 0.469454 2.0018 0.437274 2.31702 0.499975C2.63224 0.562676 2.92179 0.717442 3.14905 0.944702C3.37631 1.17196 3.53108 1.46151 3.59378 1.77673C3.65648 2.09195 3.6243 2.41868 3.50131 2.71561C3.37831 3.01254 3.17003 3.26633 2.9028 3.44489C2.63557 3.62345 2.3214 3.71875 2 3.71875C1.56902 3.71875 1.1557 3.54755 0.850953 3.2428C0.546206 2.93805 0.375001 2.52473 0.375001 2.09375ZM2 7.375C1.67861 7.375 1.36443 7.47031 1.0972 7.64886C0.82997 7.82742 0.621689 8.08121 0.498696 8.37814C0.375704 8.67507 0.343524 9.0018 0.406225 9.31702C0.468926 9.63224 0.623692 9.92179 0.850953 10.149C1.07821 10.3763 1.36776 10.5311 1.68298 10.5938C1.9982 10.6565 2.32493 10.6243 2.62186 10.5013C2.91879 10.3783 3.17258 10.17 3.35114 9.9028C3.5297 9.63557 3.625 9.3214 3.625 9C3.625 8.56902 3.4538 8.1557 3.14905 7.85095C2.8443 7.54621 2.43098 7.375 2 7.375ZM2 14.2813C1.67861 14.2813 1.36443 14.3766 1.0972 14.5551C0.82997 14.7337 0.621689 14.9875 0.498696 15.2844C0.375704 15.5813 0.343524 15.9081 0.406225 16.2233C0.468926 16.5385 0.623692 16.828 0.850953 17.0553C1.07821 17.2826 1.36776 17.4373 1.68298 17.5C1.9982 17.5627 2.32493 17.5305 2.62186 17.4076C2.91879 17.2846 3.17258 17.0763 3.35114 16.8091C3.5297 16.5418 3.625 16.2276 3.625 15.9063C3.625 15.4753 3.4538 15.0619 3.14905 14.7572C2.8443 14.4525 2.43098 14.2813 2 14.2813Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="flex items-center justify-center my-3">
              <Pagination defaultCurrent={1} total={50} />
            </div>
          </div>
        </div>
      </div>
      <span>You are here: Supplier Portal » Manage products</span>
    </div>
  );
};

export default ManageTour;

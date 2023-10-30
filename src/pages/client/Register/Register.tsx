import images from "../../../assets/Images";
import { Link } from "react-router-dom";
import FormRegister from "./FormRegister";
import PATH from "src/constants/path";

function Register() {
  return (
    <div className="flex flex-col bg-[#FFFFFF]">
      <div className="flex my-2 mx-auto w-full items-center justify-center">
        <div className="flex p-6  w-[1000px] border border-[#dcdfe4] shadow-xl text-xs rounded-xl">
          <div className="w-[390px] mr-16">
            {/* heading */}
            <div className="mb-5 text-lg font-semibold">Welcome to Get Your Guide!</div>
            {/* input */}
            <FormRegister />
            {/* or */}
            <div className="my-4 flex items-center">
              <div className="h-[1px] flex-1 bg-[#eaecef]"></div>
              <div className="mx-6 text-[#848e9c]">or</div>
              <div className="h-[1px] flex-1 bg-[#eaecef]"></div>
            </div>
            {/* button google */}
            <button
              className={
                "w-full flex bg-[#eaecef] justify-center items-center whitespace-nowrap h-10 px-[12px] py-[6px] text-textColor rounded hover:opacity-80"
              }
            >
              <img className="w-5 select-none mr-3 block" src={images.logoGoogle} alt="logo google" />
              Continue with Google
            </button>
            <div className="flex justify-between items-center mt-4">
              <div>
                <Link to={PATH.home}>
                  <div className="text-primary cursor-pointer  font-semibold hover:opacity-80 hover:underline ml-1">
                    Back to homepage
                  </div>
                </Link>
              </div>
              <div className="flex">
                <div className="">Already registered?</div>
                <Link to={PATH.login}>
                  <div className="text-primary cursor-pointer  font-semibold hover:opacity-80 hover:underline ml-1">
                    Log In
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 items-center justify-center">
            <img className="w-[340px] h-[200px]" src={images.logoRegister} alt="logo" />
            <div className="text-lg font-semibold mt-6 w-[340px] text-center">Register now!</div>
            <div className="text-base text-[#707a8a] w-[380px] mt-4 text-center">
              Register to cancel your tour for free 24 hours in advance and receive many incentives
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

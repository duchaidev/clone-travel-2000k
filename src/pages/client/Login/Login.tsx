import images from "../../../assets/Images";
import { Link } from "react-router-dom";
import FormLogin from "./FormLogin";
import PATH from "src/constants/path";

function Login() {
  return (
    <div className="flex flex-col bg-[#FFFFFF] ">
      <div className="flex mt-6 mx-auto w-full items-center justify-center">
        <div className="flex flex-col p-6 border border-[#dcdfe4]  w-[440px] shadow-xl text-sm rounded-xl">
          {/* heading */}
          <div className="my-6 text-textHeading text-xl font-semibold">Get Your Guide Login</div>
          {/* input */}
          <FormLogin />
          {/* or */}
          <div className="my-4 flex items-center">
            <div className="h-[1px] flex-1 bg-[#eaecef]"></div>
            <div className="mx-3 text-[#848e9c]">or</div>
            <div className="h-[1px] flex-1 bg-[#eaecef]"></div>
          </div>
          {/* button google */}
          <button className="flex bg-[#eaecef] justify-center items-center whitespace-nowrap h-12 px-[12px] py-[6px] rounded hover:opacity-80">
            <img className="w-5 select-none mr-3 block" src={images.logoGoogle} alt="logo google" />
            Continue with Google
          </button>
          <div className="flex justify-between items-center mt-4 text-xs">
            {/* <Link to={routesConfig.resetpass}>
              <div className='text-[#c99400] cursor-pointer mt-6 font-semibold hover:text-primary hover:underline'>
                Forgot password?
              </div>
            </Link> */}
            <Link to={PATH.home}>
              <div className="text-primary cursor-pointer font-semibold hover:opacity-80 hover:underline ml-1">
                Back to homepage
              </div>
            </Link>
            <Link to={PATH.register}>
              <div className="text-primary cursor-pointer font-semibold hover:opacity-80 hover:underline">
                Create Account
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

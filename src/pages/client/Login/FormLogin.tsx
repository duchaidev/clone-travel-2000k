import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react"
import * as yup from "yup"
import { useNavigate } from "react-router-dom"

function FormLogin() {
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const schema = yup
    .object({
      email: yup.string().required("Email is required").email("Email is not valid"),
      password: yup.string().min(6).max(16).required("Password is required")
    })
    .required()
  const {
    register,
    setValue,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  //   useEffect(() => {
  //     if (login) {
  //       navigate(routesConfig.home);
  //     }
  //   }, [login]);

  const handleLoginForm = (data) => {
    console.log(data)
    // axios
    //   .post(API_AUTH + '/login', data)
    //   .then((res) => {
    //     console.log(res);
    //     setError('');
    //     setLogin(true);
    //     navigate('/');
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     if (!err?.response) {
    //       setError('No Server Response');
    //     } else if (err.response?.status === 400) {
    //       setError(err.response?.data.message);
    //     } else if (err.response?.status === 401) {
    //       setError('Wrong Password');
    //     } else {
    //       setError('Login Failed');
    //     }
    //   });
  }

  const watchLoginId = watch("email")

  return (
    <>
      <form autoComplete='off' onSubmit={handleSubmit(handleLoginForm)}>
        {/* Email */}
        <div>
          <label className='font-normal cursor-text'>Email</label>
          <div className='relative mt-1 w-full leading-4 h-12 rounded border border-[#eaecef] hover:border-primary focus:border-primary mb-5 '>
            <input
              className='w-full h-full px-3 outline-none bg-transparent mb-[2px]'
              {...register("email")}
              autoComplete='new-password'
            />
            <small className='text-[#F6465D]'>{errors.email?.message}</small>

            {!!watchLoginId && (
              <button
                type='button'
                className=' w-5  text-[#B7BDC6] pr-5 absolute right-0 top-1/2 translate-y-[-46%] '
                onClick={() => setValue("email", "")}
              >
                X
              </button>
            )}
          </div>
        </div>
        {/* password */}
        <div>
          <label className='font-normal cursor-text '>Password</label>
          <div className='relative mt-1 w-full leading-4 h-12 rounded border border-[#eaecef] hover:border-primary focus:border-primary mb-5 '>
            <input
              className='w-full h-full px-3 outline-none bg-transparent mb-[2px]'
              type='password'
              autoComplete='new-password'
              {...register("password")}
            />
            <small className='text-[#F6465D]'>{errors.password?.message}</small>
          </div>
        </div>
        <div className='text-[#F6465D] mb-2'>{error}</div>
        {/* button */}
        <button
          type='submit'
          className='w-full justify-center items-center hover:bg-[#304c84] bg-primary rounded text-white transition duration-200 ease-in whitespace-nowrap h-12 py-[6px] mt-2'
        >
          Log In
        </button>
      </form>
    </>
  )
}

export default FormLogin

import { useState } from "react";

const LoginPage = () => {

const [isLogIn , setLoginIn] = useState(true)
const handleToggle = () => {
  setLoginIn(!isLogIn)
}
  return (
    <div className="relative">
      <div className="absolute z-50 w-[14%] ml-[142px] mt-[12px]">
        <img
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </div>

      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/259422c0-c399-4047-baf2-44bac5612ac1/435b6df3-53e6-4b88-b1be-0f3804e210a1/IN-en-20240819-POP_SIGNUP_TWO_WEEKS-perspective_WEB_f4be2d60-6f77-49e2-aaf7-6327ac5a3a95_large.jpg"
        alt="bgImage"
      />
      {/* gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black opacity-75"></div>

      <div className="absolute left-0 top-0 flex justify-center items-center w-full h-[90%]">
        <form className="flex flex-col py-[48px] px-[68px] bg-black bg-opacity-70 text-white rounded-md">
         <h1 className=" font-bold text-4xl mb-7">{ isLogIn? "Sign In" : "Sign Up"}</h1>
          {!isLogIn && <input type="text" placeholder="Name" className="py-4 px-4 w-80 mb-4 bg-[#161616] bg-opacity-70 border border-solid border-gray-500 rounded-md" />}
          <input type="text" placeholder="Email or mobile number" className="py-4 px-4 w-80 mb-4 bg-[#161616] bg-opacity-70 border border-solid border-gray-500 rounded-md" />
          <input type="text" placeholder="Password" className="py-4 px-4 w-80 mb-4 bg-[#161616] bg-opacity-70 border border-solid border-gray-500 rounded-md" />
          <button className="bg-[#f91e1e] hover:bg-red-600 py-2 px-3 rounded-md">{ isLogIn? "Sign In" : "Sign Up"}</button>
          <p className="flex text-gray-300 py-4">
            { isLogIn? "New to Netflix?" : "Already an User?"}
           <span onClick={handleToggle} className="font-bold text-white ml-2 cursor-pointer"> { isLogIn? "Sign up now." : "Sign in"}</span> 
          </p>

        </form>
      </div>

    </div>
  );
};

export default LoginPage;


//gradient will apply on the background...


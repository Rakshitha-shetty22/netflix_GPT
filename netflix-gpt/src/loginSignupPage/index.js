import { useRef, useState } from "react";
import { validation } from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/redux/userSlice";
import { useDispatch } from "react-redux";
import Header from "../header/Header";
import { BG_IMAGE } from "../utils/constant";

const LoginPage = () => {
  const [isLogIn, setLoginIn] = useState(true);
  const [error, setError] = useState(null);
  const password = useRef(null);
  const email = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();

  const handleToggle = () => {
    setError("")
    setLoginIn(!isLogIn);
    email.current.value = ""
    password.current.value = ""
  };

  const handleValidation = () => {
    const result = validation(
      password.current.value,
      email.current.value,
      isLogIn ? null : name.current.value
    );
    setError(result);

    if (result === null) {
      if (!isLogIn) {
        //Logic for signup
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value          //order should be same email then password
        )
          .then((userCredential) => {
            const user = userCredential.user;   //after we get the user here the automatically onAuthStateChnage is called...

            updateProfile(user, {           
              displayName: name.current.value,
            })
              .then(() => {
                dispatch(    //dispatching action becz need to update the store after getting the name 
                  addUser({
                    uid: user.uid,
                    name: name.current.value,
                    email: user.email,
                  })
                );
              })
              .catch((error) => { setError(error);});
          })

          .catch((error) => {
            setError("This email already in use.. please signin");
          });
      } else {
        //logic for login
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // const user = userCredential.user;
            // console.log(user);            //object that contains email, token etc
          })
          .catch((error) => {
            setError("invalid username or password");
          });
      }
    }
  };

  return (
    <div className="relative">
      <Header/>
      <img
      className="h-screen object-cover md:w-full"
        src={BG_IMAGE}
        alt="bgImage"
      />
      {/* gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black opacity-75"></div>

      <div className="absolute left-0 top-0 flex justify-center items-center w-full h-[90%]">
        <form
          onSubmit={(e) => e.preventDefault()} //prevent default is function
          className="flex flex-col py-[48px] px-[48px] md:py-[35px] md:px-[68px] xs:px-[30px] xs:py-[25px] bg-black bg-opacity-70 text-white rounded-md"
        >
          <h1 className="font-bold text-4xl mb-7">
            {isLogIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isLogIn && (
            <input
              ref={name}
              type="text"
              placeholder="Name"
              className="py-4 px-4 w-80 mb-4 bg-[#161616] bg-opacity-70 border border-solid border-gray-500 rounded-md"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email id"
            className="py-4 px-4 w-80 mb-4 bg-[#161616] bg-opacity-70 border border-solid border-gray-500 rounded-md"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="py-4 px-4 w-80 mb-4 bg-[#161616] bg-opacity-70 border border-solid border-gray-500 rounded-md"
          />
          {error && <p className="text-red-700 pb-2 w-[320px]">{error}</p>}
          <button
            onClick={handleValidation}
            className="bg-[#f91e1e] hover:bg-red-600 py-2 px-3 rounded-md"
          >
            {isLogIn ? "Sign In" : "Sign Up"}
          </button>
          <p className="flex text-gray-300 py-4 whitespace-nowrap">
            {isLogIn ? "New to Netflix?" : "Already an User?"}
            <span
              onClick={handleToggle}
              className="font-bold text-white ml-2 cursor-pointer"
            >
              {isLogIn ? "Sign up now." : "Sign in"}
            </span>
          </p>
          <div className="mt-4 text-sm text-yellow-300">
            <p>Please install the CORS extension:</p>
         <a
              href="https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?utm_source=ext_app_menu"
              target="_blank"
              rel="noopener noreferrer"
               className="underline text-blue-400 overflow-auto break-word"
            >
              Install Allow CORS
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

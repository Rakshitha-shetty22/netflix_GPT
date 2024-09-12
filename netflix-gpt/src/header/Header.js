import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { addUser, removeUser } from "../utils/redux/userSlice";
import { HAMBERGER, LOGO, PROFILE_ICON } from "../utils/constant";

import caret from "../assests/caret.png";
import mail from "../assests/mail.png";
import upArrow from "../assests/upArrow.png";
import { toggleState } from "../utils/redux/toggleSearch";
import { toggleSideBar } from "../utils/redux/sideBar";

const Header = () => {
  const user = useSelector((store) => store.user.userInfo);
  const search = useSelector((store) => store.search.toggle);
  const showSideBar = useSelector((store) => store.sideBar.showSideBar);
  console.log("se",search);
  
  const navigate = useNavigate();
  const [isHover, setHover] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  const handleHover = () => {
    setHover(true);
  };

  useEffect(() => {
    //whenever auth changes it will be called and it should be in common component.
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid: uid, name: displayName, email: email }));
        if (location.pathname === "/") {  //only if the user successfully signed in
          navigate("/browser");
        }
      } else {
        dispatch(removeUser());
        dispatch(toggleState(false)); 
        navigate("/");
      }
    });
    return () => unsubscribe(); // Cleanup on component unmount
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (location.pathname === "/browser") {
      dispatch(toggleState(true)); 
    }
  }, [location, dispatch]);  //inside the useffect becz to trigger the btn
  
  const handleSideBar = () => {
    dispatch(toggleSideBar())
  }
  return (
    <>
      {!user && (
        <div className="absolute z-50 w-[30%] md:w-[14%] ml-[40px] md:ml-[142px] mt-[12px]">
          <img src={LOGO} alt="logo" />
        </div>
      )}

      {user && (
        <div
          className={`fixed z-50 flex w-full transition-colors duration-300 ${
            isScrolled ? "bg-black" : "bg-gradient-to-b from-black opacity-90"
          } h-[68px]`}
        >
          <div className="flex flex-row items-center w-6/12 md:w-8/12">
            <div className="w-[50%] xs:w-full flex flex-col md:w-[10%] md:ml-[58px] ml-8">
              <div className="flex flex-row items-center">
                <div className="pr-2 md:hidden w-[25%] xs:pr-0 xs:w-[15%]" onClick={handleSideBar}>
                  <img className="w-full" src={HAMBERGER} alt="logo" />
                </div>  
                <img className="md:w-auto w-[75%] xs:w-[68%]" src={LOGO} alt="logo" />
              </div>
              {showSideBar &&  <div className="absolute top-[68px] bg-black w-[40%] pb-[10px] z-50 left-0"> 
                  <div className="text-[14px] font-bold text-[#e5e5e5]">
                    <Link to="/browser">
                        <p className="py-4 pl-8">Home</p>
                    </Link>
                  <p className="py-4 pl-8">Tv Shows</p>
                  <p className="py-4 pl-8">Movies</p>
                  <p className="py-4 pl-8">New & Popular</p>
                  <p className="py-4 pl-8">My List</p>
                  <p className="py-4 pl-8">Browse by Languages</p>
              </div> 
            </div>}
              
            </div>
            <div className="hidden text-[14px] font-bold text-[#e5e5e5] md:flex">
              <Link to="/browser">
                <p className="ml-[42px]">Home</p>
              </Link>
              <p className="ml-[20px]">Tv Shows</p>
              <p className="ml-[20px]">Movies</p>
              <p className="ml-[20px]">New & Popular</p>
              <p className="ml-[20px]">My List</p>
              <p className="ml-[20px]">Browse by Languages</p>
            </div>
          </div>

          <div className="flex w-6/12 md:w-6/12 justify-end  md:mr-[58px] items-center text-white mr-6">
          {search && location.pathname !== "/search" &&  <Link className="md:mr-0 mr-6" to="/search"><button
              className="bg-slate-400 text-white px-1 md:px-4 py-2 md:w-auto w-full md:py-2 rounded-md mr-6 xs:mr-3 font-bold shadow-2xl xs:text-sm xs:py-1"> Search GPT </button></Link>}
            <p className="pr-[15px] hidden md:flex">{user.name}</p>
            <div
              className="flex h-[68px] items-center cursor-pointer"
              onMouseEnter={handleHover}
              onMouseLeave={() => setHover(false)}
            >
              <img
                className="rounded-md h-[35px]"
                src={PROFILE_ICON}
                alt="icon"
              />
              <img src={isHover ? upArrow : caret} alt="icon" />
            </div>
          </div>

          {isHover && (
            <div
              className="absolute top-[65px] w-auto right-[60px] bg-black text-black p-2"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <div className="flex my-2">
                <img
                  className="rounded-md mr-2"
                  src={PROFILE_ICON}
                  alt="icon"
                />
                <p className="text-white">{user?.name}</p>
              </div>
              <div className="flex my-2">
                <img className="rounded-md mr-3 ml-1" src={mail} alt="icon" />
                <p className="text-white">{user?.email}</p>
              </div>
              <hr className="my-2 mt-5 mx-0" />
              <button
                className="text-white text-[14px] w-full flex justify-center mb-2 hover:underline"
                onClick={handleSignOut}
              >
                Sign Out of the netflix
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Header;

import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
import { addUser, removeUser } from "../utils/redux/userSlice";
import { LOGO, PROFILE_ICON } from "../utils/constant";

import search from "../assests/search.png";
import caret from "../assests/caret.png";
import mail from "../assests/mail.png";
import upArrow from "../assests/upArrow.png";

const Header = () => {
  const user = useSelector((store) => store.user.userInfo);
  const navigate = useNavigate();
  const [isHover, setHover] = useState(false);
  const dispatch = useDispatch()
  const [isScrolled, setIsScrolled] = useState(false);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {});
  };

  const handleHover = () => {
    setHover(true);
  };
  
  useEffect(()=>{                           //whenever auth changes it will be called and it should be in common component.
   const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid, displayName, email} = user;
          dispatch(addUser({uid: uid, name: displayName, email: email}))
          navigate('/browser')      //only if the user successfully signed in
        } else {
          dispatch(removeUser());
          navigate('/')
        }
      });
      return () => unsubscribe();   // Cleanup on component unmount
},[])

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

  return (
    <>
    {!user && <div className="absolute z-50 w-[14%] ml-[142px] mt-[12px]">
        <img
          src={LOGO}
          alt="logo"
        />
      </div>}

    {user && <div  className={`fixed z-50 flex w-full transition-colors duration-300 ${
            isScrolled ? "bg-black" : "bg-gradient-to-b from-black opacity-90"
          } h-[68px]`}>
      <div className="flex flex-row items-center w-8/12">
        <div className="w-[10%] ml-[58px]">
          <img
            src={LOGO}
            alt="logo"
          />
        </div>
        <div className="flex text-[14px] font-bold text-[#e5e5e5]">
          <p className="ml-[42px]">Home</p>
          <p className="ml-[20px]">Tv Shows</p>
          <p className="ml-[20px]">Movies</p>
          <p className="ml-[20px]">New & Popular</p>
          <p className="ml-[20px]">My List</p>
          <p className="ml-[20px]">Browse by Languages</p>
        </div>
      </div>
      <div className="flex w-4/12 justify-end mr-[58px] items-center text-white">
        <img src={search} alt="icon" className="pr-[15px]" />
        {user && <p className="pr-[15px]">{user.name}</p>}
        <div className="flex h-[68px] items-center cursor-pointer" onMouseEnter={handleHover} onMouseLeave={()=>setHover(false)}>
          <img className="rounded-md h-[35px]"
            src={PROFILE_ICON}
            alt="icon"
          />
          <img src={isHover? upArrow : caret} alt="icon" />
        </div>
      </div>
      {isHover && (
        <div className="absolute top-[65px] w-auto right-[60px] bg-black text-black p-2" onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
         <div className="flex my-2"> <img className="rounded-md mr-2"
            src={PROFILE_ICON}
            alt="icon"
          />
         <p className="text-white">{user?.name}</p>
          </div>
          <div className="flex my-2"> <img className="rounded-md mr-3 ml-1"
            src={mail}
            alt="icon"
          />
         <p className="text-white">{user?.email}</p>
          </div>
          <hr className="my-2 mt-5 mx-0"/>
          <button className="text-white text-[14px] w-full flex justify-center mb-2 hover:underline" onClick={handleSignOut}>Sign Out of the netflix</button>
        </div>
      )}
    </div>}
    </>
  );
};

export default Header;

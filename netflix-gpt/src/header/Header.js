import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

import search from "../assests/search.png";
import caret from "../assests/caret.png";
import mail from "../assests/mail.png";
import { useState } from "react";

const Header = () => {
  const user = useSelector((store) => store.user.userInfo);
  const navigate = useNavigate();
  const [isHover, setHover] = useState(false);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {});
  };

  const handleHover = () => {
    setHover(true);
  };
  console.log(user);

  return (
    <div className="fixed z-50  flex  bg-gradient-to-b from-black opacity-90 h-[68px]">
      <div className="flex flex-row items-center w-8/12">
        <div className="w-[10%] ml-[58px]">
          <img
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
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
        <div className="flex h-[68px] items-center cursor-pointer" onMouseEnter={handleHover}>
          <img className="rounded-md h-[35px]"
            src="https://occ-0-3973-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
            alt="icon"
          />
          <img src={caret} alt="icon" />
        </div>
      </div>
      {isHover && (
        <div className="absolute top-[70px] w-auto right-[60px] bg-black text-black p-2" onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
         <div className="flex my-2"> <img className="rounded-md mr-2"
            src="https://occ-0-3973-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
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
    </div>
  );
};

export default Header;

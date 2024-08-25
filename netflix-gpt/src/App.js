import { RouterProvider } from "react-router-dom";
import appRouter from "./router/Router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { addUser, removeUser } from "./utils/redux/userSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{                           //whenver auth changes it will be called
    onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid, displayName, email} = user;
          dispatch(addUser({uid: uid, name: displayName, email: email}))
        } else {
          dispatch(removeUser());
        }
      });
},[])
  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;

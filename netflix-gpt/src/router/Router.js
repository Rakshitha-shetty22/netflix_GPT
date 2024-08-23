import {createBrowserRouter} from "react-router-dom"
import HomePage from "../HomePage";
import LoginPage from "../loginSignupPage";

const appRouter = createBrowserRouter([{
    path: '/',
    element: <LoginPage/>
},
{
    path: '/browser',
    element: <HomePage/>   
},

])

export default appRouter;
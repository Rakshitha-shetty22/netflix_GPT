import {createBrowserRouter} from "react-router-dom"
import HomePage from "../HomePage";
import LoginPage from "../loginSignupPage";
import SearchGPT from "../GPT";

const appRouter = createBrowserRouter([{
    path: '/',
    element: <LoginPage/>
},
{
    path: '/browser',
    element: <HomePage/>   
},
{
    path: '/search',
    element: <SearchGPT/>   
},

])



export default appRouter;
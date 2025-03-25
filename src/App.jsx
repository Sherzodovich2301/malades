
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Main from "../src/Components/Main/Main"
import Navbar from './Navbar/Navbar'
import AboutUs from './Pages/AboutUs/AbouUs'
import ContactUs from './Pages/Contactus/ContactUs'
import Info from './Pages/Info/Info'
import Batafsil from "./batafsilPageUchun/Batafsil/Batafsil"
import SignIn from "../src/SignIn/SignIn"
import OurT from './Compo/IkkiPage/OurT/OurT'
import NotFound from './NotFound/NotFound'



function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          index: true,
          element: <Main />
        },
        {
          path: "/aboutUs",
          element: <AboutUs />
        },
        {
          path: "/contactUs",
          element: <ContactUs />
        },
        {
          path: "/info",
          element: <Info />
        },
        {
          path: "/batafsil",
          element: <Batafsil />
        },
        {
          path: "/LogIn",
          element: <SignIn />
        },
        {
          path: "/home/:id",
          element: <OurT />,

        },
        {
          path: "*",
          element: <NotFound />,
        },
        { path: "404", element: <NotFound /> },
      ]
    },

  ])

  return (
    <div className='bekor bg-white dark:bg-black'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App

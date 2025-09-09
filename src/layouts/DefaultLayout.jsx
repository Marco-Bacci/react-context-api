import Footer from "../components/footer"
import Header from "../components/Header"
import { Outlet } from "react-router-dom"
const DefaultLayout = () => {
  return (
   <>
   <Header/>
   <Outlet/>
   <Footer/>
   </>
  )
}

export default DefaultLayout

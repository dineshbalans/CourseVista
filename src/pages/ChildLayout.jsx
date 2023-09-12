import { Outlet } from "react-router-dom";
import Navbar from '../components/UI/NavBar/Navbar';
import Footer from "../components/UI/Footer";

const ChildLayout = () => {
    return <>
    <Navbar style='children'/>
    <Outlet />
    <Footer />
    </>;
  };
  
  export default ChildLayout;
  
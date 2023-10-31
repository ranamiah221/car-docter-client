import { Outlet } from "react-router-dom";
import Footer from "../Routes/shared/Footer/Footer";
import Navbar from "../Routes/shared/Navbar/Navbar";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
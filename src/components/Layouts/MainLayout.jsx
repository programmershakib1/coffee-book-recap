import { Outlet } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div>
            <Toaster></Toaster>
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-336px)] container mx-auto py-10">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
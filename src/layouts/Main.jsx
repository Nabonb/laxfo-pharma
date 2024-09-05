// import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Header from "../Components/Shared/Header/Header";
import WishList from "../Components/WishList/WishList";
import ProductInfo from "../Components/ProductInfo/ProductInfo";
import Quote from "../Components/Quote/Quote";
import FrequentBought from "../Components/FrequentBought/FrequentBought";
import Reviews from "../Components/Reviews/Reviews";
import Consultation from "../Components/Consultation/Consultation";
import Advertise from "../Components/Advertise/Advertise";
import Footer from "../Components/Footer/Footer";
import Product from "../Components/Product/Product";

const Main = () => {
  return (
    <div className="bg-[#FFFFF6]">
      <Header></Header>
      <Navbar></Navbar>
      <WishList></WishList>
      <hr className="border mt-5 mb-[14px]"/>
      <Product></Product>
      <ProductInfo></ProductInfo>
      <hr className="border mt-[50px] mb-[40px]"/>
      <Quote></Quote>
      <hr className="border mt-[40px] mb-[24px]"/>
      <FrequentBought></FrequentBought>
      <hr className="border mt-[24px] mb-[40px]"/>
      <hr className="border mb-[24px]"/>
      <Reviews></Reviews>
      <Consultation></Consultation>
      <Advertise></Advertise>
      <Footer></Footer>
      {/* <Outlet></Outlet> */}
    </div>
  );
};

export default Main;

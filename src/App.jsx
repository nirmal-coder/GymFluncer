import { useEffect } from "react";
import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Benefits from "./components/Benefits";
import Blogs from "./components/Blogs";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NearestGym from "./components/NearestGym";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import TransformationSlide from "./components/TransformationSlide";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const App = () => {
  return (
    <>
      <Banner />
      <About />
      <Services />
      <Benefits />
      <TransformationSlide />
      <Testimonial />
      <NearestGym />
      <Blogs />
      <Faq />
      <Footer />
    </>
  );
};
export default App;

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { Outlet } from "react-router-dom";
// import Loader from "./Loader";
const AppLayout = () => {
  //   const navigation = useNavigation();

  //   if (navigation.state === "loading") return <Loader />;
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;

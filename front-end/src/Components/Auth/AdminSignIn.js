import { SignIn } from "@clerk/clerk-react";
import ScrollToTop from "../../ScrollTop";

const AdminSignIn = () => {
  return (
    <>
      <ScrollToTop />
      <div className="flex justify-center items-center h-screen overflow-hidden">
        <div className="flex justify-center items-center h-[150px] w-96 overflow-hidden rounded pb-[26px]">
          <SignIn />
        </div>
      </div>
    </>
  );
};

export default AdminSignIn;

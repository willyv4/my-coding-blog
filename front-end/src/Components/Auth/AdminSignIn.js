import { SignIn } from "@clerk/clerk-react";

const AdminSignIn = () => {
  return (
    <div className="flex justify-center items-center h-screen overflow-y-hidden">
      <div className=" flex justify-center items-center pb-6 h-20 w-96 overflow-hidden rounded">
        <SignIn />
      </div>
    </div>
  );
};

export default AdminSignIn;

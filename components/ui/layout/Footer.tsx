import {
  Facebook,
  Linkedin,
  LocateIcon,
  Map,
  Phone,
  Youtube,
} from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full p-12 bg-primary-600 grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-24 max-md:gap-12  ">
      <div className="flex-col gap-10 ">
        <div>
          <h6 className="text-white font-bold text-3xl">United Kingdom</h6>
          <p className="text-white mt-5 text-xl">London</p>
          <p className="text-white mt-1 text-xl">Birmingham</p>
        </div>
        <div className="mt-14">
          <h6 className="text-white font-bold text-3xl">Bangladesh</h6>
          <p className="text-white mt-5 text-xl">Dhaka</p>
          <p className="text-white mt-1 text-xl">Sylhet</p>
          <p className="text-white mt-1 text-xl">Moulvibazar</p>
          <p className="text-white mt-1 text-xl">Chattogram</p>
        </div>
      </div>
      <div className="mt-14">
        <h6 className="text-white font-bold text-3xl">Nigeria</h6>
        <p className="text-white mt-5 text-xl">Lagos</p>
        <p className="text-white mt-1 text-xl">Kaduna</p>
        <p className="text-white mt-1 text-xl">Ikeja</p>
        <p className="text-white mt-1 text-xl">Abuja</p>
        <p className="text-white mt-1 text-xl">Portharcourt</p>
      </div>
      <div className="mt-14">
        <h6 className="text-white font-bold text-3xl">Nigeria</h6>
        <p className="text-white mt-5 text-xl">Lagos</p>
        <p className="text-white mt-1 text-xl">Kaduna</p>
        <p className="text-white mt-1 text-xl">Ikeja</p>
        <p className="text-white mt-1 text-xl">Abuja</p>
        <p className="text-white mt-1 text-xl">Portharcourt</p>
      </div>
      <div className="mt-14">
        <h6 className="text-white font-bold text-3xl">Contacts</h6>
        <div className="flex gap-4 items-center mt-5 ">
          <Phone size={30} color="white" />
          <p className="text-white text-2xl">+44 (0)203 488 1195</p>
        </div>
        <div className="flex gap-4 items-start mt-5 ">
          <Map size={50} color="white" />
          <p className="text-white text-2xl">
            Unit 1, Sky View Tower, London E15 GR , United Kingdom
          </p>
        </div>
        <div className="grid grid-cols-3 mt-7 ">
          <div className="bg-gray-950 w-[60px] h-[60px] rounded-md flex items-center justify-center">
            <div className="bg-white rounded-full w-[30px] h-[30px]  flex justify-center items-center ">
              <Facebook />
            </div>
          </div>
          <div className="bg-gray-950 w-[60px] h-[60px] rounded-md flex items-center justify-center">
            <div className="bg-white rounded-full w-[30px]   h-[30px] flex justify-center items-center ">
              <Youtube />
            </div>
          </div>
          <div className="bg-gray-950 w-[60px] h-[60px] rounded-md flex items-center justify-center">
            <div className="bg-white rounded-full w-[30px]  h-[30px] flex justify-center items-center ">
              <Linkedin />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

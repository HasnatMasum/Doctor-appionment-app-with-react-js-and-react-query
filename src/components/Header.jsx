import { assets } from "../assets";
import Button from "../components/Button";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row bg-linear-to-r from-violet-600 to-violet-900 rounded-lg mt-5 px-10 md:px-20 h-auto">
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 md:py-[10vw]">
        <h1 className="self-start text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-white">
          Book Appointment
          <br /> With Trusted Doctors
        </h1>
        <div className="flex items-center gap-3 mb-3">
          <img
            className="w-20"
            src={assets.group_profiles}
            alt="group profile pic"
          />
          <p className="text-white text-sm">
            Simply browse through our extensive list of trusted doctors,
            schedule your appointment hassle-free.
          </p>
        </div>
        <a href="#speciality">
          <Button className="bg-gray-50">
            Book appointment <img src={assets.arrow_icon} alt="right arrow" />
          </Button>
        </a>
      </div>
      <div className="w-full md:w-1/2 md:relative">
        <img
          className="md:absolute bottom-0 w-full z-0"
          src={assets.header_img}
          alt="benar img"
        />
      </div>
    </div>
  );
};

export default Header;

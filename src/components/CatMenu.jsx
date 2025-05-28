import { useNavigate } from "react-router-dom";
import catMenu from "../services/cat_menu";

const CatMenu = () => {
  const { data, isLoading, isError } = catMenu();
  const navigate = useNavigate();

  if (isLoading) return <p>Section is loading...</p>;
  if (isError) return <p>{Error.massege}</p>;

  return (
    <div className="flex flex-col items-center" id="speciality">
      <div className="flex flex-col justify-center items-center mt-20 w-md">
        <h2 className="text-3xl mb-6 ">Find by Speciality</h2>
        <p className="text-center text-sm mb-9">
          Simply browse through our extensive list of trusted doctors, schedule
          your appointment hassle-free.
        </p>
      </div>
      <div className="w-full mx-5 flex items-center gap-6 sm:justify-start md:h-40  md:justify-center overflow-x-scroll md:overflow-x-auto sm:overflow-hidden md:overflow-auto">
        {data?.data.map((doctor, index) => (
          <div
            onClick={() => navigate(`/doctors/${doctor.speciality}`)}
            key={index}
            className="flex flex-col items-center cursor-pointer md:hover:mt-[-15px] transition-all duration-200"
          >
            <div className="w-24 h-auto">
              <img
                src={doctor.image}
                alt="sp image"
                className=" mb-3 size-24"
              />
              <p className="text-sm text-gray-500 text-nowrap">
                {doctor.speciality}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatMenu;

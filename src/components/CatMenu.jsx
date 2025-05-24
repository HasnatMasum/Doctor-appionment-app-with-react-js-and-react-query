import { Link } from "react-router-dom";
import catMenu from "../services/cat_menu";

const CatMenu = () => {
  const { data, isLoading, isError } = catMenu();

  if (isLoading) return <p>Section is loading...</p>;
  if (isError) return <p>{Error.massege}</p>;

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col justify-center items-center mt-14 w-md">
        <h2 className="text-3xl mb-6 ">Find by Speciality</h2>
        <p className="text-center text-sm mb-9">
          Simply browse through our extensive list of trusted doctors, schedule
          your appointment hassle-free.
        </p>
      </div>
      <div className="w-full mx-5 flex gap-6 sm:justify-start md:justify-center overflow-x-scroll md:overflow-x-auto sm:overflow-hidden md:overflow-auto">
        {data?.data.map((doctor, index) => (
          <div key={index} className="flex flex-col items-center">
            <Link to={`/doctor/${doctor.speciality}`}>
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
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatMenu;

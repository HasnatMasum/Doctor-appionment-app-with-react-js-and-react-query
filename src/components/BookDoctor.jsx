import React from "react";
import Doctor from "./Doctor";
import doctorList from "../services/doctorList";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";

const BookDoctor = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError } = doctorList();
  if (isLoading) return <p>Section is loading...</p>;
  if (isError) return <p>{Error.massege}</p>;
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col justify-center items-center mt-20 w-md">
        <h2 className="text-3xl mb-6 ">Top Doctors to Book</h2>
        <p className="text-center text-sm mb-9">
          Simply browse through our extensive list of trusted doctors.
        </p>
      </div>
      <div className=" gap-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 justify-center">
        {data.data.map((doctor) => (
          <Link to={`/appionment/${doctor._id}`} key={doctor._id}>
            <Doctor
              name={doctor.name}
              img={doctor.image}
              speciality={doctor.speciality}
            />
          </Link>
        ))}
      </div>
      <Button
        onClick={() => navigate("/doctors")}
        className="mt-10 px-10 bg-linear-to-r from-violet-600 to-violet-900 text-white "
      >
        Load More...
      </Button>
    </div>
  );
};

export default BookDoctor;

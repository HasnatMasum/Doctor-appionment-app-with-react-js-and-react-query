import React from "react";
import Doctor from "./Doctor";
import doctorList from "../services/doctorList";

const BookDoctor = () => {
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
          <Doctor
            key={doctor._id}
            name={doctor.name}
            img={doctor.image}
            speciality={doctor.speciality}
          />
        ))}
      </div>
    </div>
  );
};

export default BookDoctor;

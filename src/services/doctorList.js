import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const doctorList = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["doctors-list"],
    queryFn: () => {
      return axios.get(`http://localhost:3000/doctors/?_limit=10`);
    },
  });
  return { data, isLoading, isError };
};

export default doctorList;

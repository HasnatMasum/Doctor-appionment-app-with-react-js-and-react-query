import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const catMenu = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["cat-menu"],
    queryFn: () => {
      return axios.get("http://localhost:3000/specialityData");
    },
    staleTime: 1000 * 60 * 5,
  });
  return { data, isLoading, isError };
};
export default catMenu;

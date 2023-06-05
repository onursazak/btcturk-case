import { useLocation } from "react-router-dom";

const useGetIdFromSearchParams = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  return searchParams.get("sources");
};

export { useGetIdFromSearchParams };

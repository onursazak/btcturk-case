import { useLocation } from "react-router-dom";

function useGetPageDataFromUrl() {
  const location = useLocation();
  let queryString = location.search;
  let objectString = queryString.split("=")[1];
  let decodedObject = JSON.parse(decodeURIComponent(objectString));

  return decodedObject;
}

export { useGetPageDataFromUrl };

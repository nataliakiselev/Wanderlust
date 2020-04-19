import React, { createContext, useState } from "react";
import useLocalStorage from "./../hooks/useLocalStorage";
export const CityContext = createContext(["", () => {}]);

export const defaultSearchTerm = "london";

export const CityContextProvider = (props) => {
  console.log("here", useLocalStorage("city", defaultSearchTerm.toLowerCase()));
  const [cityName] = useLocalStorage("city", defaultSearchTerm.toLowerCase());
  console.log("h", cityName);
  const [city, setCity] = useState(cityName);
  console.log("i", city);
  return (
    <CityContext.Provider value={[city, setCity]}>
      {props.children}
    </CityContext.Provider>
  );
};

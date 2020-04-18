import React, { createContext, useState } from "react";

export const CityContext = createContext();

export const CityContextProvider  = (props) => {
  const [city, setCity]=useState('london')
    return (
      <CityContext.Provider value={[city, setCity]}>
        {props.children}
      </CityContext.Provider>
    )
  }
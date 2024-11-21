import React, { useEffect } from "react";
import Nav from "../components/Nav";
import SchemeCard from "../components/SchemeCard";
import "../components/schemecard.css";
import { useState } from "react";
import { getAllScheme } from "../utils/APIRoutes";
import axios from "axios";
// Import your JobCard component

const SchemesPage = () => {
  const [selectedScheme, setSelectedScheme] = useState(null);
  const [schemes, setSchemes] = useState([]);
  useEffect(() => {
    const getscheme = async () => {
      console.log("i am schem")
      const res = await axios.get(getAllScheme);
      const data = await res.data;
      if (data.error) {
        console.error(data.error);
        return;
      }
      console.log("Success:", data);
      setSchemes(data); 
    };
    getscheme();
  }, []);

  return (
    <div>
      <Nav />
      <div className="flex justify-center mx-12 gap-6 pt-28">
        <div className="w-1/2 ">
          {schemes.map((scheme, index) => (
            <div onClick={() => setSelectedScheme(scheme)} key={index}>
              <SchemeCard scheme={scheme} />
            </div>
          ))}
        </div>
        <div className="w-1/2">
          {selectedScheme && (
            <div className="flex flex-col justify-center items-center m-6 fixed">
              <h2 className="titlee">{selectedScheme.Name}</h2>
              <p className="diso h-40 overflow-scrol">
                {selectedScheme.details}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SchemesPage;

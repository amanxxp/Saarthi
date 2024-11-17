import React from "react";
import Nav from "../components/Nav";
import SchemeCard from "../components/SchemeCard";
import Footer from "../components/Footer";
import schemes from "../components/schemedata";
import "../components/schemecard.css"
import { useState } from "react";
// Import your JobCard component

const SchemesPage = () => {
  const [selectedScheme, setSelectedScheme] = useState(null);

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
              <p className="diso h-40 overflow-scrol">{selectedScheme.details}</p> 
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SchemesPage;

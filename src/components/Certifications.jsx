import React from 'react';
import guvi from "../assets/Certificates/guvi.png";

const Certificates = () => {
    const Certificates = [
      {
        id: 1,
        src: guvi,
        href: "https://www.linkedin.com/in/manish-kushwaha-web-developer/",
      },
    /*  {
        id: 2,
        src: reactParallax,
      },
      {
        id: 3,
        src: navbar,
      },
      {
        id: 4,
        src: reactSmooth,
      },
      {
        id: 5,
        src: installNode,
      },
      {
        id: 6,
        src: reactWeather,
      }, */
    ];
  
    return (
      <div
        name="Certificates"
        className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Certificates
            </p>
            <p className="py-6">Certificates</p>
          </div>
  
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {Certificates.map(({ id, src, href }) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
            
                <div className="flex items-center justify-center">
                  
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

export default Certificates
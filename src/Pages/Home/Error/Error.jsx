import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <main>
        <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
          <div className="max-w-lg mx-auto text-center">
            <div className="pb-6">
              <img
                src={"https://i.ibb.co/LSs5s5k/Screenshot-67.png"}
                width={400}
                className="mx-auto"
              />
            </div>
            <h3 className="text-gray-800 text-4xl font-bold sm:text-5xl">
              Page not found
            </h3>
            <p className="text-gray-600 mt-3">
              Sorry, the page you are looking for could not be found or has been
              removed.
            </p>
            <div className="mt-4">
                <Link to= "/"  className=" mt-8 py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg">Go Home</Link></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Error;

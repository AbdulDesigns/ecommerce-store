import React from "react";
import { useRouteError, NavLink } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();

  console.log(err);

  return (
    <>
      <div className="text-center font-bold text-4xl my-10">
        ErrorDetails {err.data}
      </div>
      <div className="flex flex-col items-center p-12 justify-center w-full h-full text-center">
        <NavLink
          className={
            "text-amber-100 px-12 py-4 rounded-4xl bg-amber-700 hover:bg-amber-800  shadow-amber-700/20 shadow-2xl transition-all duration-500 my-4 "
          }
          to={"/"}
        >
          Go back
        </NavLink>
      </div>
    </>
  );
};

export default ErrorPage;

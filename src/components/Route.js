import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
  useEffect(() => {
    const onLocationChange = () => {
      console.log(onLocationChange);
    }

    window.addEventListener('popstate', onLocationChange)
  }, []);

  return window.location.pathname === path ? children : null;
};

export default Route;

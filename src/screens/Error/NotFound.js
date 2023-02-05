import { Typography } from "@mui/material";
import React from "react";
const NotFound = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Typography variant="h1" color="red">
        - 4 0 4 -
      </Typography>
      <Typography
        color="white"
        variant="subtitle1"
        fontSize={40}
        fontWeight="200"
      >
        Page Not Found!
      </Typography>
    </div>
  );
};

export default NotFound;

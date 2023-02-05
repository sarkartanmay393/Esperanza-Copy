import { Container, Typography, useTheme } from "@mui/material";
import React from "react";

const HomePageText = () => {
  const theme = useTheme();
  return (
    <Container
      sx={{
        p:4,
        [theme.breakpoints.up("sm")]: {
          position: "absolute",
          top: "30%",
        //   bgcolor:'red',
          left:'10%',
          width:'50%'
        },
        [theme.breakpoints.down("sm")]:{
            position: "absolute",
          top: "30%",
        }
      }}
    >
      <Container>
        <p className="text-lg text-white">Welcome To</p>
        <p className="text-6xl text-white">Esperanza 4.0</p>
      </Container>
      <Container sx={{ mt: 4 }}>
        <p className="text-lg text-white">We are launching in</p>
        <p className="text-lg text-white">30 days</p>
      </Container>
    </Container>
  );
};

export default HomePageText;

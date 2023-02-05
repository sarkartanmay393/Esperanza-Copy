import { Button, Grid, Typography, useTheme } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logo192.png";

const HEADER_LIST = [
  {
    name: "Events",
    to: "events",
  },
  {
    name: "Participants",
    to: "participants",
  },
  {
    name: "About",
    to: "about",
  },
  {
    name: "Contact Us",
    to: "contact",
  },
];
const Header = () => {
  const theme = useTheme();
  return (
    <>
      <Grid
        sx={{
          px: 4,
          py: 4,
          position: "fixed",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 1,
        }}
        container
        maxWidth
      >
        <Grid xs={2}>
          <Link to="/">
            <img src={logo} height={50} width={50} alt="Logo" />
          </Link>
        </Grid>

        <Grid
          sm={6}
          lg={6}
          container
          style={{}}
          sx={{
            display: "flex",
            [theme.breakpoints.down("sm")]: {
              display: "none",
            },
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {HEADER_LIST.map((item, index) => (
            <div>
              <Typography
                color="white"
                variant="subtitle1"
                letterSpacing={0.6}
                sx={{
                  textDecorationLine: "underline",
                  textUnderlineOffset: 4,
                  [theme.breakpoints.down("sm")]: {
                    fontSize: 10,
                  },
                }}
              >
                <Link to={item?.to}>{item?.name}</Link>
              </Typography>
            </div>
          ))}
        </Grid>
        <Grid xs={4}>
          <Typography
            sx={{
              [theme.breakpoints.down("sm")]: {
                fontSize: 12,
              },
            }}
            textAlign="center"
            color="white"
            variant="subtitle1"
          >
            User
          </Typography>
        </Grid>
      </Grid>
      <Outlet />
    </>
  );
};

export default Header;

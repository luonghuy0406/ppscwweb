import React from "react";
import Grid from "@mui/material/Grid";
import Footer from "./Footer";
import Header from "./Header";
import { makeStyles } from "@mui/styles";





function DefaultLayout({ children }) {
  

  return (
    <>
      <Header />
      <Grid container>{children}</Grid>
    </>
  );
}

export default DefaultLayout;
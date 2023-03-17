import { Box, Container, Grid, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useParams } from "react-router-dom";
import { arrBrand } from ".";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const useStyles = makeStyles(() => {
  const theme = useTheme();
  return {
    container: {
      width: "calc(100%)  !important",
      marginLeft: "0 !important",
    },
    background: {
      "&:hover": {
        filter: "drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5))",
        zIndex: "1",
        backgroundColor: "var(--primary-color)",
        "& img": {
          [theme.breakpoints.down("sm")]: {
            width: "65%",
            transition: "width .1s linear !important",
          },
          [theme.breakpoints.up("md")]: {
            width: "95%",
            transition: "width .1s linear !important",
          },
        },
      },
    },
  };
});

function ChildBrand() {
  let { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const classes = useStyles();
  const { t } = useTranslation();
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <Grid
      item
      md={12}
      sx={{ padding: { xs: "25px 0", md: "50px 0" } }}
      ref={ref}
    >
      <Container maxWidth="md" sx={{ p: 2 }}>
        <Grid container classes={{ root: classes.container }}>
          <Grid item xs={12} md={6} sx={{textAlign:"center"}} p={3}
            className={
              inView
                ? "animate__animated animate__fadeInLeft animate__delay-0.7s"
                : "animate__animated animate__fadeOutRight animate__delay-0.7s"
            }
          >
            <Box
              component="img"
              sx={{
                width: { xs: "60%", md: "90%" },
                aspectRatio: " 3/2",
                objectFit: "contain",
              }}
              src={arrBrand[id].logo}
            />
          </Grid>
          <Grid item xs={12} md={6} sx={{textAlign:"justify"}}
            className={
              inView
                ? "animate__animated animate__fadeInRight animate__delay-0.7s"
                : "animate__animated animate__fadeOutLeft animate__delay-0.7s"
            }
          >
            <label style={{fontFamily:"var(--font-family)",color:"var(--primary-color)"}} dangerouslySetInnerHTML={{__html:t(arrBrand[id].description)}}>

            </label>
          </Grid>
          <Grid item xs={12} container pt={3}
            className={
              inView
                ? "animate__animated animate__fadeInLeft animate__delay-0.7s"
                : "animate__animated animate__fadeOutRight animate__delay-0.7s"
            }
          >
              {
                arrBrand[id].products.map((product)=>{
                    return (
                        <Grid item xs={12}>
                            <div style={{width:"100%",height:"50px", marginBottom:"15px", backgroundColor:"var(--background-gray)", color:"var(--primary-color)",display: "flex", alignItems: "center"}}>
                                <label style={{color:"var(--secondary-color)", padding: "10px 15px", lineHeight:"0"}}><ChevronRightIcon fontSize="medium"/></label>
                                <label>{product}</label>
                            </div>
                        </Grid>
                    )
                })
              }
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}

export default ChildBrand;

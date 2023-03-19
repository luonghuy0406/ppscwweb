import React, { useEffect } from "react";
import { Grid, Box, Container, Typography, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTranslation } from "react-i18next";
import l1_1 from "./images/l1_1.jpg";
import l1_2 from "./images/l1_2.jpg";
import l1_3 from "./images/l1_3.jpg";
import l1_4 from "./images/l1_4.jpg";
import l2_1 from "./images/l2_1.png";
import l2_2 from "./images/l2_2.png";
import l2_3 from "./images/l2_3.png";
import l2_4 from "./images/l2_4.jpg";
import l2_5 from "./images/l2_5.png";
import l3_1 from "./images/l3_1.png";
import l3_2 from "./images/l3_2.png";
import l3_3 from "./images/l3_3.png";
import l3_4 from "./images/l3_4.jpg";
import l3_5 from "./images/l3_5.png";
import l3_6 from "./images/l3_6.png";

import { useInView } from "react-intersection-observer";
const arrBrand = [l1_1, l1_2, l1_3, l1_4];
const arrBrand2 = [l2_1, l2_2, l2_3, l2_4, l2_5];
const arrBrand3 = [l3_1, l3_2, l3_3, l3_4, l3_5, l3_6];

const useStyles = makeStyles((props) => {
  const theme = useTheme();
  return {
    container: {
      width: "calc(100%)  !important",
      marginLeft: "0 !important",
    },
    background: {
      "&:hover": {
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

function OurPartner() {
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
    <Grid item md={12} sx={{ padding: { xs: "25px 0", md: "50px 0" } }}>
      <Container maxWidth="md" sx={{ p: 2 }} ref={ref}>
        <Grid
          container
          spacing={2}
          classes={{ root: classes.container }}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            item
            xs={12}
            md={12}
            sx={{ padding: "20px 0 !important", fontSize: "22px" }}
            className={
              inView
                ? "animate__animated animate__fadeInLeft animate__delay-0.7s"
                : "animate__animated animate__fadeOutRight animate__delay-0.7s"
            }
          >
            <Typography
              fontFamily={"var(--font-family-header)"}
              color={"var(--primary-color)"}
              variant="h4"
              component="h4"
              fontWeight="bolder"
            >
              {t("OUR PARTNER")}
            </Typography>
            <span className={"line-brand"}></span>
          </Grid>
          <Grid
            direction="row"
            justifyContent="center"
            alignItems="center"
            container
          >
            {arrBrand.map((brand, index) => {
              return (
                <Grid
                  className={
                    inView
                      ? "animate__animated animate__fadeInRight animate__delay-0.7s"
                      : "animate__animated animate__fadeOutLeft animate__delay-0.7s"
                  }
                  key={"brand-" + index}
                  classes={{ root: classes.background }}
                  sx={{
                    padding: { xs: "5px !important", md: "15px !important" },
                    height: { xs: "50px !important", md: "120px !important" },
                  }}
                  item
                  xs={2}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <Box
                      component="img"
                      sx={{
                        width: { xs: "80%", md: "90%" },
                        aspectRatio: " 3/2",
                        objectFit: "contain",
                        maxHeight: { xs: 233, md: 250 },
                        maxWidth: { xs: "auto", md: "auto" },
                      }}
                      // alt="The house from the offer."
                      src={brand}
                    />
                  </div>
                </Grid>
              );
            })}
          </Grid>
          <Grid
            direction="row"
            justifyContent="center"
            alignItems="center"
            container
          >
            {arrBrand2.map((brand, index) => {
              return (
                <Grid
                  className={
                    inView
                      ? "animate__animated animate__fadeInLeft animate__delay-0.7s"
                      : "animate__animated animate__fadeOutRight animate__delay-0.7s"
                  }
                  key={"brand-" + index}
                  classes={{ root: classes.background }}
                  sx={{
                    padding: { xs: "5px !important", md: "15px !important" },
                    height: { xs: "50px !important", md: "120px !important" },
                  }}
                  item
                  xs={2}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <Box
                      component="img"
                      sx={{
                        width: { xs: "80%", md: "90%" },
                        aspectRatio: " 3/2",
                        objectFit: "contain",
                        maxHeight: { xs: 233, md: 250 },
                        maxWidth: { xs: "auto", md: "auto" },
                      }}
                      // alt="The house from the offer."
                      src={brand}
                    />
                  </div>
                </Grid>
              );
            })}
          </Grid>
          <Grid
            direction="row"
            justifyContent="center"
            alignItems="center"
            container
          >
            {arrBrand3.map((brand, index) => {
              return (
                <Grid
                  className={
                    inView
                      ? "animate__animated animate__fadeInRight animate__delay-0.7s"
                      : "animate__animated animate__fadeOutLeft animate__delay-0.7s"
                  }
                  key={"brand-" + index}
                  classes={{ root: classes.background }}
                  sx={{
                    padding: { xs: "5px !important", md: "15px !important" },
                    height: { xs: "50px !important", md: "120px !important" },
                  }}
                  item
                  xs={2}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <Box
                      component="img"
                      sx={{
                        width: { xs: "80%", md: "90%" },
                        aspectRatio: " 3/2",
                        objectFit: "contain",
                        maxHeight: { xs: 233, md: 250 },
                        maxWidth: { xs: "auto", md: "auto" },
                      }}
                      // alt="The house from the offer."
                      src={brand}
                    />
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}

export default OurPartner;

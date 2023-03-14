import { Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useTranslation } from "react-i18next";
import aboutus from "../../assets/images/aboutus.png";

import aboutus2 from "../../assets/images/aboutus2.jpeg";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px",
    marginTop: "20px",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  imageXs: {
    maxWidth: "60%",
    maxHeight: "100%",
  },
  wrapperImage: {
    "@media (max-width:900px)": {
      display: "none",
    },
    "@media (min-width:900px)": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  content: {
    fontFamily: "var(--font-family) !important",
    color: "var(--primary-color) !important",
    "@media (max-width:600px)": {
      fontSize: "14px !important",
    },
    "@media (min-width:600px)": {
      fontSize: "15px !important",
    },
  },
  imgContent: {
    "@media (max-width:900px)": {
      display: "block",
    },
    "@media (min-width:900px)": {
      display: "none",
    },
  },
}));

function AboutUs() {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <Grid item md={12} sx={{ padding: { xs: "25px 0", md: "70px 0" } }}>
      <Container maxWidth="md" sx={{ p: 2 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={6} container>
            <Grid item xs={12}>
              <Typography
                fontFamily={"var(--font-family-header)"}
                variant="h4"
                component="h4"
                fontWeight="bolder"
                color="var(--primary-color)"
              >
                {t("About us")}
              </Typography>
              <span className={"line-about-us"}></span>
              <Typography variant="body1" pt={3} className={classes.content}>
                {t("About us content")}
              </Typography>
              <Typography variant="body1" pt={3} className={classes.content}>
                {t("About us content2")}
              </Typography>
            </Grid>

            <Grid item xs={12} classes={{ root: classes.imgContent }}>
              <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                <img
                  src={aboutus}
                  alt="About us picture"
                  className={classes.imageXs}
                />
              </div>
            </Grid>
            <Grid item xs={12}>
              <Typography
                fontFamily={"var(--font-family-header)"}
                variant="h4"
                component="h4"
                fontWeight="bolder"
                color="var(--primary-color)"
              >
                {t("Our mission")}
              </Typography>
              <span className={"line-about-us"}></span>
              <Typography variant="body1" pt={3} className={classes.content}>
                {t("Mission content")}
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              classes={{ root: classes.imgContent }}
            >
              <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                <img
                  src={aboutus2}
                  alt="About us picture"
                  className={classes.imageXs}
                />
              </div>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            classes={{ root: classes.wrapperImage }}
          >
            <div>
              <img
                src={aboutus}
                alt="About us picture"
                className={classes.image}
              />
              <img
                src={aboutus2}
                alt="About us picture"
                className={classes.image}
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}

export default AboutUs;

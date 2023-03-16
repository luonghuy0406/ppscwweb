import { Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useTranslation } from "react-i18next";
import aboutus from "../../assets/images/aboutus.png";
import aboutus2 from "../../assets/images/aboutus2.jpeg";
import { useInView } from "react-intersection-observer";

const useStyles = makeStyles((theme) => ({
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
    boxShadow: "20px 20px 20px -15px rgb(0 0 0 / 50%)",
  },
  content: {
    fontFamily: "var(--font-family) !important",
    "@media (max-width:600px)": {
      fontSize: "14px !important",
    },
    "@media (min-width:600px)": {
      fontSize: "15px !important",
    },
  },
  container: {
    width: "calc(100%)  !important",
    marginLeft: "0 !important",
  },
  aboutUsContent: {
    position: "relative",
  },
}));

function AboutUs() {
  return (
    <Grid item md={12} sx={{ padding: { xs: "25px 0", md: "70px 0" } }}>
      <AboutUsContent />
      <MissionContent/>
    </Grid>
  );
}

export default AboutUs;

const AboutUsContent = () => {
  const classes = useStyles();

  const { t } = useTranslation();
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <Container maxWidth="md" sx={{ p: 2 }}>
      <Grid container classes={{ root: classes.container }} ref={ref}>
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
            variant="h4"
            component="h4"
            sx={{ color: "var(--primary-color)" }}
            fontWeight="bolder"
          >
            {t("ABOUT US")}
          </Typography>
          <span className={"line-brand"}></span>
        </Grid>
        <Grid
          item
          xs={6}
          className={
            inView
              ? "animate__animated animate__fadeInLeft animate__delay-0.7s"
              : "animate__animated animate__fadeOutRight animate__delay-0.7s"
          }
        >
          <Typography
            variant="body1"
            pr={5}
            pt={3}
            className={classes.content}
            textAlign="justify"
            color={"var(--primary-color)"}
          >
            {t("About us content")}
          </Typography>
          <Typography
            variant="body1"
            pr={5}
            pt={3}
            className={classes.content}
            textAlign="justify"
            color={"var(--primary-color)"}
          >
            {t("About us content2")}
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          className={
            classes.aboutUsContent +
            (inView
              ? " animate__animated animate__fadeInRight animate__delay-0.7s"
              : " animate__animated animate__fadeOutLeft animate__delay-0.7s")
          }
        >
          <div style={{paddingLeft:"40px"}}>
            <div
              style={{
                width: "100px",
                height: "30px",
                backgroundColor: "var(--secondary-color)",
                position: "absolute",
                bottom: "30px",
                left: "-5px",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "50vw",
                height: "100%",
                background: "var(--primary-color)",
                zIndex: "-1",
                top: "-50px",
                left: "90px",
              }}
              
          
            ></div>
            <img src={aboutus} alt="About us picture" className={classes.image} />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

const MissionContent = () => {
  const classes = useStyles();

  const { t } = useTranslation();
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <Container maxWidth="md" sx={{ p: 2, pt: 15 }} >
      <Grid
        container
        className={classes.aboutUsContent}
        classes={{ root: classes.container }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100vw",
            height: "150px",
            backgroundColor: "var(--primary-color)",
            zIndex: "-1",
          }}
        ></div>
        <div
          style={{
            width: "100%",
            height: "350px",
            background: "var(--secondary-color)",
            backgroundImage: `url("${aboutus2}")`,
            backgroundImage: `linear-gradient(var(--secondary-color), #0000005e, #00000033), url("${aboutus2}")`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "20px 20px 20px -15px rgb(0 0 0 / 50%)",
          }}
          className={
            inView
            ? "animate__animated animate__fadeInRight animate__delay-0.7s"
            : "animate__animated animate__fadeOutLeft animate__delay-0.7s"
          }
        >
          <div
            style={{
              width: "70%",
              height: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
            className={
              inView
              ? "animate__animated animate__fadeInLeft animate__delay-0.8s"
              : "animate__animated animate__fadeOutRight animate__delay-0.8s"
            }
            ref={ref}
          >
            <Typography
              fontFamily={"var(--font-family-header)"}
              variant="h4"
              component="h4"
              fontWeight="bolder"
              color="white"
            >
              {t("Our mission")}
            </Typography>
            <Typography
              variant="body1"
              pt={3}
              pr={2}
              color="white"
              className={classes.content}
              textAlign="center"
            >
              {t("Mission content")}
            </Typography>
          </div>
        </div>
      </Grid>
    </Container>
  );
};


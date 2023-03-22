import React from "react";
import { makeStyles } from "@mui/styles";
import { Container, Grid, Typography, Box, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import logo from "./image/logo_white.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from '@mui/icons-material/YouTube';

const useStyles = makeStyles(() => {
  const theme = useTheme();
  return {
    root: {
      backgroundColor: "var(--primary-color)",
      padding: "40px 0",
      marginTop: "20px",
      marginBottom: "0",
      position: "relative",
      paddingBottom: "60px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "13px !important",
      },
    },
    item: {
      marginBottom: "15px",
    },
  };
});

function Footer() {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <div className={classes.root}>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12} sm={6} md={3} pr={1} container
  justifyContent="center"
  alignItems="center">
            <img src={logo} style={{ width: "65%" }} />
          </Grid>
          <Grid container item xs={12} sm={6} md={3} pr={1} pl={1} direction="column">
            <Typography
              fontFamily={"var(--font-family)"}
              variant="h6"
              gutterBottom
              color="var(--secondary-color)"
              fontWeight="bolder"
            >
              {t("HEAD OFFICE")}
            </Typography>
            <label
              style={{
                fontFamily: "var(--font-family)",
                color: "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <LocationOnIcon />
              <label
                style={{ paddingLeft: "15px" }}
                dangerouslySetInnerHTML={{
                  __html: t(
                    "16 Yen The St, Ward 2, Tan Binh Dist., HCMC, Viet Nam"
                  ),
                }}
              ></label>
            </label>
            <label
              style={{
                fontFamily: "var(--font-family)",
                color: "white",
                display:"flex",
                alignItems: "center",
              }}
            >
              <PhoneIcon style={{marginBottom:"5px"}}/>
              <label style={{ paddingLeft: "15px" }}>+08 283 5472 694</label>
            </label>
            <label
              style={{
                fontFamily: "var(--font-family)",
                color: "white",
                display:"flex",
                alignItems: "center",
              }}
            >
              <EmailIcon style={{marginBottom:"3px"}} />
              <label style={{ paddingLeft: "15px" }}>info@pacificpsc.com</label>
            </label>
          </Grid>
          <Grid item container xs={12} sm={6} md={3} pr={1} pl={1} direction="column">
            <Typography
              fontFamily={"var(--font-family)"}
              variant="h6"
              gutterBottom
              color="var(--secondary-color)"
              fontWeight="bolder"
            >
              {t("VUNG TAU OFFICE")}
            </Typography>
            <label
              style={{
                fontFamily: "var(--font-family)",
                color: "white",
                display: "flex",
                alignItems: "center"
              }}
            >
              <LocationOnIcon />
              <label
                style={{ paddingLeft: "15px" }}
                dangerouslySetInnerHTML={{
                  __html: t(
                    "D1-2/8 Chi Linh Urban Area, Vung Tau City, Viet Nam"
                  ),
                }}
              ></label>
            </label>
            <label
              style={{
                fontFamily: "var(--font-family)",
                color: "white",
                display: "flex",
                alignItems: "center"
              }}
            >
              <PhoneIcon style={{marginBottom:"5px"}}/>
              <label style={{ paddingLeft: "15px" }}>+08 254 351 3923</label>
            </label>
          </Grid>
          <Grid container item xs={12} sm={6} md={3} pr={1} pl={1} direction="column">
            <Typography
              fontFamily={"var(--font-family)"}
              variant="h6"
              gutterBottom
              color="var(--secondary-color)"
              fontWeight="bolder"
            >
              {t("Follow us at:")}
            </Typography>
            <div>
              <FacebookIcon
                onClick={() => {
                  window.open("https://www.facebook.com/ppscvn", "_blank");
                }}
                style={{ color: "#fff", cursor: "pointer" }}
                fontSize="large"
              />
              <LinkedInIcon
                onClick={() => {
                  window.open("https://www.linkedin.com/in/ppscvn/", "_blank");
                }}
                style={{ color: "#fff", cursor: "pointer" }}
                fontSize="large"
              />
              <YouTubeIcon
                onClick={() => {
                  window.open("https://www.youtube.com/@ppscvn", "_blank");
                }}
                style={{ color: "#fff", cursor: "pointer" }}
                fontSize="large"
              />
            </div>
            
          </Grid>
          <Grid item xs={12}>
            <label
              style={{
                fontFamily: "var(--font-family)",
                color: "white",
                lineHeight: "1.6rem",
                fontSize: "13px",
                position: "absolute",
                right: "80px",
                bottom: "10px",
              }}
            >
              ©2023 Pacific Pressure Systems and Components Co., Ltd (PPSC), All
              Rights Reserved.
            </label>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Footer;

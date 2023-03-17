import React from "react";
import { makeStyles } from "@mui/styles";
import { Container, Grid, Typography, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import logo from './image/logo_white.png' 
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import CopyrightIcon from '@mui/icons-material/Copyright';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "var(--primary-color)",
    padding: "40px 0",
    marginTop: "20px",
    marginBottom: "0",
    position:"relative",
    paddingBottom:"60px"
  },
  item: {
    marginBottom: "15px",
  },
}));

function Footer() {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <div className={classes.root}>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={6} sm={3} pr={1}>
            <img src={logo} style={{width:"35%"}}/>
          </Grid>
          <Grid container item xs={6} sm={3} pr={1} pl={1}>
            <Grid item xs={12} className={classes.item}>
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
                  fontFamily:"var(--font-family)",
                  color:"white",
                  display:"flex",
                  alignItems:"center",
                  lineHeight: "1.6rem"
                }}
                
              >
                <LocationOnIcon/> 
                <label style={{paddingLeft:"15px"}} dangerouslySetInnerHTML={{__html:t(
                  "16 Yen The St, Ward 2, Tan Binh Dist., HCMC, Viet Nam"
                )}}></label>
              </label>
              <label style={{
                  fontFamily:"var(--font-family)",
                  color:"white",
                  display:"flex",
                  alignItems:"center",
                  lineHeight: "1.6rem"
                }}>
                <PhoneIcon/>
                <label style={{paddingLeft:"15px"}}>+08 283 5472 694</label>
              </label>
              <label style={{
                  fontFamily:"var(--font-family)",
                  color:"white",
                  display:"flex",
                  alignItems:"center",
                  lineHeight: "1.6rem"
                }}>
                <EmailIcon/>
                <label style={{paddingLeft:"15px"}}>info@pacificpsc.com</label>
              </label>
            </Grid>
            <Grid item xs={12} className={classes.item}>
              <Typography
                fontFamily={"var(--font-family)"}
                variant="h6"
                gutterBottom
                color="var(--secondary-color)"
                fontWeight="bolder"
                pt={2}
              >
                {t("VUNG TAU OFFICE")}
              </Typography>
              <label
                style={{
                  fontFamily:"var(--font-family)",
                  color:"white",
                  display:"flex",
                  alignItems:"center",
                  lineHeight: "1.6rem"
                }}
                
              >
                <LocationOnIcon/> 
                <label style={{paddingLeft:"15px"}} dangerouslySetInnerHTML={{__html:t("D1-2/8 Chi Linh Urban Area, Vung Tau City, Viet Nam")}}></label>
              </label>
              <label style={{
                  fontFamily:"var(--font-family)",
                  color:"white",
                  display:"flex",
                  alignItems:"center",
                  lineHeight: "1.6rem"
                }}>
                <PhoneIcon/>
                <label style={{paddingLeft:"15px"}}>+08 254 351 3923</label>
              </label>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={3} pr={1} pl={1}>
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0133247493122!2d106.66619731504487!3d10.810290992298562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529224c2bbef1%3A0xfc007a7d34ff8afe!2zMTYgWcOqbiBUaOG6vywgUGjGsOG7nW5nIDIsIFTDom4gQsOsbmgsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1678376933445!5m2!1sen!2s"
              width={"100%"}
              height={"100%"}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Grid>
          <Grid item xs={6} sm={3} pl={4}>
            <Typography
                fontFamily={"var(--font-family)"}
                variant="h6"
                gutterBottom
                color="var(--secondary-color)"
                fontWeight="bolder"
              >
                {t("Follow us at:")}
              </Typography>
            <FacebookIcon onClick={()=>{window.open('https://www.facebook.com/ppscvn', '_blank');}} style={{color:"#fff", cursor:"pointer"}} fontSize="large"/>
            <LinkedInIcon onClick={()=>{window.open('https://www.linkedin.com/in/ppscvn/', '_blank');}} style={{color:"#fff", cursor:"pointer"}} fontSize="large"/>
          </Grid>
          <Grid item xs={12}>
            <label
            style={{
              fontFamily:"var(--font-family)",
              color:"white",
              lineHeight: "1.6rem",
              fontSize:"13px",
              position:"absolute",
              left:"20px",
              bottom:"10px"
            }}
            >
              ©2023 Pacific Pressure Systems and Components Co., Ltd (PPSC), All Rights Reserved.
            </label>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Footer;

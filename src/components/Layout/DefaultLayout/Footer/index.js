import React from "react";
import { makeStyles } from "@mui/styles";
import { Container, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    padding: "20px",
    marginTop: "20px",
  },
  item: {
    // display: 'flex',
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginBottom: "15px",
  },
}));

function Footer() {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4} className={classes.item}>
            <Typography
              variant="h6"
              gutterBottom
              color="var(--primary-color)"
              align="right"
              fontWeight="bolder"
            >
              {t("HEAD OFFICE")}
            </Typography>
            <div style={{display:"flex",alignItems:"center"}}>
                <div style={{flexGrow:"1"}}>
                    <Typography color="var(--primary-color)" align="right">
                        {t("Floor 1st, Building 16 Yen The St, Ward 2")}
                    </Typography>
                    <Typography color="var(--primary-color)" align="right">
                        {t("Tan Binh Dist., HCMC, Viet Nam")}
                    </Typography>
                </div>
                <div style={{color: "var(--primary-color)", padding:"0 10px"}}>
                    <LocationOnIcon />
                </div>
            </div>
            <div style={{display:"flex",alignItems:"center"}}>
                <div style={{flexGrow:"1"}}>
                    <Typography color="var(--primary-color)" align="right">+08 283 5472 694</Typography>
                </div>
                <div style={{color: "var(--primary-color)", padding:"0 10px"}}>
                    <LocalPhoneIcon />
                </div>
            </div>
            
          </Grid>
          <Grid item xs={12} sm={4} className={classes.item}>
            <Typography
              variant="h6"
              gutterBottom
              color="var(--primary-color)"
              align="left"
              fontWeight="bolder"
            >
              {t("VUNG TAU OFFICE")}
            </Typography>
            <div style={{display:"flex",alignItems:"center", flexDirection:"row-reverse"}}>
                <div style={{flexGrow:"1"}}>
                <Typography color="var(--primary-color)" align="left">
                    {t("D1-2/8 Chi Linh Urban Area,")}
                </Typography>
                <Typography color="var(--primary-color)" align="left">{t("Vung Tau City, Viet Nam")}</Typography>
                </div>
                <div style={{color: "var(--primary-color)", padding:"0 10px"}}>
                    <LocationOnIcon />
                </div>
            </div>
            <div style={{display:"flex",alignItems:"center", flexDirection:"row-reverse"}}>
                <div style={{flexGrow:"1"}}>
                <Typography color="var(--primary-color)" align="left">
                    +08 254 351 3923
                </Typography>
                </div>
                <div style={{color: "var(--primary-color)", padding:"0 10px"}}>
                    <LocalPhoneIcon />
                </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
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
        </Grid>
      </Container>
    </div>
  );
}

export default Footer;
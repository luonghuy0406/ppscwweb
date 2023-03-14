import React from "react";
import { makeStyles } from "@mui/styles";
import { Container, Grid, Typography, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    padding: "20px 0",
    marginTop: "20px",
    marginBottom: "20px",
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
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Box>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} className={classes.item}>
                  <Typography
                    fontFamily={"var(--font-family)"}
                    variant="h6"
                    gutterBottom
                    color="var(--primary-color)"
                    fontWeight="bolder"
                  >
                    {t("HEAD OFFICE")}
                  </Typography>
                  <Typography
                    fontFamily={"var(--font-family)"}
                    color="var(--primary-color)"
                  >
                    {t(
                      "Floor 1st, Building 16 Yen The St, Ward 2, Tan Binh Dist., HCMC, Viet Nam"
                    )}
                  </Typography>
                  <Typography
                    fontFamily={"var(--font-family)"}
                    color="var(--primary-color)"
                  >
                    +08 283 5472 694
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.item}>
                  <Typography
                    fontFamily={"var(--font-family)"}
                    variant="h6"
                    gutterBottom
                    color="var(--primary-color)"
                    fontWeight="bolder"
                  >
                    {t("VUNG TAU OFFICE")}
                  </Typography>
                  <Typography
                    fontFamily={"var(--font-family)"}
                    color="var(--primary-color)"
                  >
                    {t("D1-2/8 Chi Linh Urban Area, Vung Tau City, Viet Nam")}
                  </Typography>
                  <Typography
                    fontFamily={"var(--font-family)"}
                    color="var(--primary-color)"
                  >
                    +08 254 351 3923
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0133247493122!2d106.66619731504487!3d10.810290992298562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529224c2bbef1%3A0xfc007a7d34ff8afe!2zMTYgWcOqbiBUaOG6vywgUGjGsOG7nW5nIDIsIFTDom4gQsOsbmgsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1678376933445!5m2!1sen!2s"
              width={"100%"}
              height={"150px"}
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

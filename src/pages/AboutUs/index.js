import { Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { useTranslation } from 'react-i18next';
import aboutus from '../../assets/images/aboutus.png'


const useStyles = makeStyles   ((theme) => ({
  root: {
    padding: "20px",
    marginTop: "20px",
    
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

function AboutUs() {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <Grid item md={12} sx={{padding:{xs:"25px 0",md:"70px 0"}}}>
      <Container maxWidth="lg" sx={{p:2}}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography fontFamily={"var(--font-family)"} variant="h5" component="h5" fontWeight="bolder" >
                {t("ABOUT US")}
            </Typography>
            <span className={'line-about-us'}></span>
            <Typography fontFamily={"var(--font-family)"} variant="body1" py={3}>
              {t("About us content")}
            </Typography>
            <Typography fontFamily={"var(--font-family)"} variant="h5" component="h5" fontWeight="bolder">
                {t("MOTTO, MISSION")}
            </Typography>
            <span className={'line-about-us'}></span>
            <Typography fontFamily={"var(--font-family)"} variant="body1" py={3}>
              {t("Mission content")}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img src={aboutus} alt="About us picture" className={classes.image} />
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}

export default AboutUs;

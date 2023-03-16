import React, { useEffect } from "react";
import { Grid, Box, Container, Typography, useTheme } from "@mui/material";
import API from "../../assets/images/API.jpg";
import BAO_STEEL from "../../assets/images/BAO_STEEL.jpg";
import CROWN from "../../assets/images/CROWN.jpg";
import GRE_COATING from "../../assets/images/GRE_COATING.png";
import HYUNDAI from "../../assets/images/HYUNDAI.png";
import MDF from "../../assets/images/MDF.png";
import TBC_BALL from "../../assets/images/TBC_BALL.jpg";
import THAINAM from "../../assets/images/THAINAM.png";
import THINH_VUONG from "../../assets/images/THINH_VUONG.png";
import { makeStyles } from "@mui/styles";
import { useTranslation } from "react-i18next";

import { useInView } from 'react-intersection-observer';
const arrBrand = [API, BAO_STEEL, CROWN, GRE_COATING, HYUNDAI, MDF, TBC_BALL, THAINAM,THINH_VUONG];

const useStyles = makeStyles((props) => {
  const theme = useTheme()
  return ({ 
  container:{
    width: "calc(100%)  !important",
    marginLeft:"0 !important"
  },
  background: {
    "&:hover":{
      "& img":{
        [theme.breakpoints.down('sm')] : {
          width:"65%",
          transition: 'width .1s linear !important',
        },
        [theme.breakpoints.up('md')]: {
          width:"95%",
          transition: 'width .1s linear !important',
        },
      }
    }
  },
})});

function OurPartner() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const classes = useStyles();
  const {t} = useTranslation()
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <Grid item md={12} sx={{ padding:{xs:"25px 0",md:"50px 0"}}}>
      <Container maxWidth="md" sx={{p:2}} ref={ref}>
        <Grid container spacing={2} classes={{root:classes.container}} direction="row"
                justifyContent="center"
                alignItems="center">
          <Grid item xs={12} md={12} sx={{padding:'20px 0 !important', fontSize:"22px"}} className={inView ? "animate__animated animate__fadeInLeft animate__delay-0.7s" : "animate__animated animate__fadeOutRight animate__delay-0.7s"}>
            <Typography fontFamily={"var(--font-family-header)"} color={"var(--primary-color)"} variant="h4" component="h4" fontWeight="bolder">
              {t("OUR PARTNER")}
            </Typography>
            <span className={'line-brand'}></span>
          </Grid>
          {arrBrand.map((brand, index) => {
            return (
              <Grid
                className={inView ? "animate__animated animate__fadeInRight animate__delay-0.7s" : "animate__animated animate__fadeOutLeft animate__delay-0.7s"}
                key={"brand-"+index}
                classes={{root: classes.background}}
                sx={{padding:{xs:"10px !important",md:"15px !important"},height:{xs:"100px !important",md:"120px !important"}}}
                item
                xs={6}
                md={3}
                direction="row"
                justifyContent="center"
                alignItems="center"
                container 
              >
                <div style={{display: 'flex', alignItems:'center', justifyContent: 'center',width:'100%', height:"100%"}}>
                    <Box
                      component="img"
                      sx={{
                          width: { xs: "60%", md: "90%" },
                          aspectRatio: " 3/2",
                          objectFit: "contain",
                          maxHeight: { xs: 233, md: 250 },
                          maxWidth: { xs: 'auto', md: 'auto' },
                      }}
                      // alt="The house from the offer."
                      src={brand}
                      />
                    </div>
                
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Grid>
  );
}

export default OurPartner;

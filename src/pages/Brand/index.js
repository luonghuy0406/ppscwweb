import React, { useEffect } from "react";
import { Grid, Box, Container, Typography } from "@mui/material";
import cat_pumps from "../../assets/images/cat_pumps.png";
import spir_star from "../../assets/images/spir_star.png";
import techcal from "../../assets/images/techcal.png";
import hydraulics_international from "../../assets/images/hydraulics_international.png";
import graphic from "../../assets/images/graphic.png";
import norriseal from "../../assets/images/norriseal.png";
import taylor from "../../assets/images/taylor.png";
import hidraulics from "../../assets/images/hidraulics.png";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { useInView } from 'react-intersection-observer';
const arrBrand = [cat_pumps, spir_star, techcal, hydraulics_international, graphic, norriseal, taylor, hidraulics];

const useStyles = makeStyles((props) => ({ 
  container:{
    width: "calc(100%)  !important",
    marginLeft:"0 !important"
  },
  background: {
    backgroundColor: "var(--gray-color)",
    
    "&:hover":{
      filter: 'drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5))',
      zIndex: '1',
      backgroundColor: 'var(--primary-color)',
      "& img":{
        width:"95%",
        transition: 'width .1s linear !important',
        
      }
    }
  },
  backgroundWhite: {
    backgroundColor: "white",
    "&:hover":{
      filter: 'drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5))',
      zIndex: '1',
      backgroundColor: 'var(--primary-color)',
      "& img":{
        width:"95%",
        transition: 'width .1s linear !important',
        
      }
    }
  }
}));

function Brand() {
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
    <Grid item md={12} sx={{ padding:{xs:"25px 0",md:"50px 0"}}} ref={ref}>
      <Container maxWidth="md" sx={{p:2}}>
        <Grid container spacing={2} classes={{root:classes.container}}>
          <Grid item xs={12} md={12} sx={{padding:'20px 0 !important', fontSize:"22px"}} className={inView ? "animate__animated animate__fadeInLeft animate__delay-0.7s" : "animate__animated animate__fadeOutRight animate__delay-0.7s"}>
            <Typography fontFamily={"var(--font-family-header)"} variant="h4" component="h4" sx={{color:"var(--primary-color)"}} fontWeight="bolder" >
              {t("OUR BRAND")}
            </Typography>
            <span className={'line-brand'}></span>
          </Grid>
          {arrBrand.map((brand, index) => {
            return (
              <Grid
                className={inView ? "animate__animated animate__fadeInRight animate__delay-0.7s" : "animate__animated animate__fadeOutLeft animate__delay-0.7s"}
                key={"brand-"+index}
                classes={[0,2,5,7].indexOf(index) > -1 ? { root: classes.background } : {root: classes.backgroundWhite}}
                sx={{padding:{xs:"10px !important",md:"15px !important"},height:{xs:"160px !important",md:"180px !important"}}}
                item
                xs={6}
                md={3}
                direction="row"
                justifyContent="center"
                alignItems="center"
                container
              >
                <Link to={'/brand/'+index} style={{ textDecoration: 'none'}}>
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
                </Link>
                
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Grid>
  );
}

export default Brand;

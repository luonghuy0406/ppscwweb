import React from "react";
import { Grid, Box, Container, Typography } from "@mui/material";
import br1 from "../../assets/images/Picture1.png";
import br2 from "../../assets/images/Picture2.png";
import br3 from "../../assets/images/Picture3.png";
import br4 from "../../assets/images/Picture4.png";
import br5 from "../../assets/images/Picture5.png";
import br6 from "../../assets/images/Picture6.png";
import br7 from "../../assets/images/Picture7.png";
import br8 from "../../assets/images/Picture8.png";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const arrBrand = [br1, br2, br3, br4, br5, br6, br7, br8];

const useStyles = makeStyles((props) => ({
  container:{
    width: "calc(100%)  !important",
    marginLeft:"0 !important"
  },
  background: {
    backgroundColor: "var(--gray-color)",
  },
  backgroundWhite: {
    backgroundColor: "white",
  }
}));

function Brand() {
  const classes = useStyles();
  const {t} = useTranslation()
  return (
    <Grid item md={12} sx={{ padding:{xs:"25px 0",md:"70px 0"},backgroundColor:"var(--primary-color)"}}>
      <Container maxWidth="lg" sx={{p:2}}>
        <Grid container spacing={2} classes={{root:classes.container}}>
          <Grid item xs={12} md={12} sx={{padding:'20px 0 !important', fontSize:"22px"}}>
            <Typography fontFamily={"var(--font-family)"} variant="h5" component="h5" sx={{color:"white"}} fontWeight="bolder">
              {t("Our brand")}
            </Typography>
            <span className={'line-brand'}></span>
          </Grid>
          {arrBrand.map((brand, index) => {
            return (
              <Grid
                key={"brand-"+index}
                classes={[0,2,5,7].indexOf(index) > -1 ? { root: classes.background } : {root: classes.backgroundWhite}}
                sx={{padding:{xs:"10px !important",md:"35px 25px !important"}}}
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
                          width: { xs: "60%", md: "80%" },
                          aspectRatio: " 3/2",
                          objectFit: "contain",
                          maxHeight: { xs: 233, md: 167 },
                          maxWidth: { xs: 350, md: 250 },
                      }}
                      //   alt="The house from the offer."
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

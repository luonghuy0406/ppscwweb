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

const arrBrand = [br1, br2, br3, br4, br5, br6, br7, br8];

const useStyles = makeStyles((props) => ({
  background: {
    backgroundColor: "#eee"
  },
  backgroundWhite: {
    backgroundColor: "#fff"
  }
}));

function Brand() {
  const classes = useStyles();
  return (
    <Grid item md={12} sx={{padding:"50px 0",backgroundColor:"var(--primary-color)"}}>
      <Container maxWidth="md" sx={{p:2}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} sx={{padding:'20px 0 !important', fontSize:"22px"}}>
            <Typography variant="h5" component="h5" sx={{color:"#fff"}}>
              Our brands
            </Typography>
            <span className={'line-brand'}></span>
          </Grid>
          {arrBrand.map((brand, index) => {
            return (
              <Grid
                classes={[0,2,5,7].indexOf(index) > -1 ? { root: classes.background } : {root: classes.backgroundWhite}}
                item
                xs={6}
                md={3}
                direction="row"
                justifyContent="center"
                alignItems="center"
                container
              >
                <Link to={'/brand/'+index} style={{ textDecoration: 'none' }}>
                    <Box
                    component="img"
                    sx={{
                        width: { xs: "50%", md: "70%" },
                        aspectRatio: " 3/2",
                        objectFit: "contain",
                        maxHeight: { xs: 233, md: 167 },
                        maxWidth: { xs: 350, md: 250 },
                    }}
                    //   alt="The house from the offer."
                    src={brand}
                    />
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

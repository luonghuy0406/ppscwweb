// https://www.npmjs.com/package/react-multi-carousel

import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  Grid,
  Box,
  Container,
  Typography,
  useTheme,
  Button,
  IconButton,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTranslation } from "react-i18next";
import catpump from "./images/cat_pump.png";
import HII from "./images/HII.png";
import spirstar from "./images/spirstar.jpg";
import Techcal from "./images/Techcal.png";
import graphic from "./images/graphic.png";
import Norriseal from "./images/Norriseal.png";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
const arrProduct = [
  {
    name: "CAT PUMP",
    description: "35 Frame Plunger Pump",
    img: catpump,
    path:'/product/pump/plunger_pump'
  },
  {
    name: "HII",
    description: "Air Driven Air Pressure <br> Amplifiers 7A-DS-8-X-N-G-IAC",
    img: HII,
    path:'/product/pump/air_pressure_amplifier'
  },
  {
    name: "SPIR STAR",
    description: "Hose 13/4H ",
    img: spirstar,
    path: ''
  },
  {
    name: "TECH CAL",
    description: "Chart Recorder 8",
    img: Techcal,
    path: ''
  },
  {
    name: "GRAPHIC CONTROL",
    description: "Chart Paper & Pen",
    img: graphic,
    path: ''
  },
  {
    name: "NORRISEAL",
    description: "Butterfly Valve R200",
    img: Norriseal,
    path: ''
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const useStyles = makeStyles((props) => {
  const theme = useTheme();
  return {
    container: {
      width: "calc(100%)  !important",
      marginLeft: "0 !important",
    },
    background: {
      "&:hover": {
        "& img": {
          [theme.breakpoints.down("sm")]: {
            width: "65%",
            transition: "width .1s linear !important",
          },
          [theme.breakpoints.up("md")]: {
            width: "95%",
            transition: "width .1s linear !important",
          },
        },
      },
    },
  };
});

function FeaturedProduct() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const classes = useStyles();
  const { t } = useTranslation();
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <Grid
      item
      md={12}
      sx={{
        padding: { xs: "25px 0", md: "50px 0" },
        backgroundColor: "var(--background-gray)",
        maxWidth: "100vw",
      }}
      ref={ref}
    >
      <Container maxWidth="md" sx={{ p: 2 }}>
        <Grid
          container
          classes={{ root: classes.container }}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
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
              color={"var(--primary-color)"}
              variant="h4"
              component="h4"
              fontWeight="bolder"
            >
              {t("FEATURED PRODUCT")}
            </Typography>
            <span className={"line-brand"}></span>
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            className={
              inView
                ? "animate__animated animate__fadeInRight animate__delay-0.7s"
                : "animate__animated animate__fadeOutLeft animate__delay-0.7s"
            }
          >
            <div
              style={{
                position: "relative",
              }}
            >
              <Carousel
                additionalTransfrom={0}
                arrows={false}
                autoPlay
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                infinite
                containerClass="container-padding-bottom"
                customButtonGroup={<CustomButtonGroupAsArrows />}
                dotListClass=""
                draggable
                focusOnSelect={false}
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside
                renderDotsOutside={false}
                responsive={responsive}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
              >
                {arrProduct.map((product) => {
                  return (
                    <Link to={product.path} style={{ textDecoration: "none" }}>
                      <FeaturedProductChild product={product} />
                    </Link>
                  );
                })}
              </Carousel>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}

export default FeaturedProduct;

const FeaturedProductChild = ({ product }) => {
  return (
    <Grid container item p={3}>
      <Grid
        item
        xs={12}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <div
          style={{
            width: "100%",
            height: "210px",
            background: "white",
            borderRadius: "15px",
            boxShadow: "rgba(0, 0, 0, 0.1) 5px 7px 12px 1px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <img src={product.img} style={{ width: "80%" }} />
        </div>
      </Grid>
      <Grid item xs={12} sx={{ textAlign: "center" }}>
        <Typography
          pt={2}
          fontFamily={"var(--font-family)"}
          color="var(--primary-color)"
          fontWeight={"bold"}
        >
          {product.name}
        </Typography>
        <span
          style={{
            fontFamily: "var(--font-family)",
            color: "var(--primary-color)",
          }}
          dangerouslySetInnerHTML={{ __html: product.description }}
        ></span>
      </Grid>
    </Grid>
  );
};

const CustomButtonGroupAsArrows = ({ next, previous }) => {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <IconButton
        size="large"
        onClick={previous}
        sx={{
          color: "var(--secondary-color)",
          position: {
            xs: "unset",
            lg: "absolute",
          },
          left: "-35px",
          top: "35%",
          backgroundColor: "white",
          "&:hover": {
            backgroundColor: "white",
          },
        }}
      >
        <ChevronLeftIcon />
      </IconButton>
      <IconButton
        size="large"
        onClick={next}
        sx={{
          color: "var(--secondary-color)",
          position: {
            xs: "unset",
            lg: "absolute",
          },
          right: "-35px",
          top: "35%",
          backgroundColor: "white",
          "&:hover": {
            backgroundColor: "white",
          },
        }}
      >
        <ChevronRightIcon />
      </IconButton>
    </div>
  );
};

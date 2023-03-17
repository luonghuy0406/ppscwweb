import {
  Box,
  Container,
  Divider,
  Grid,
  Typography,
  useTheme,
  IconButton,
  Link,
  Breadcrumbs,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useParams } from "react-router-dom";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

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
const arrProduct = [
  {
    name: "CAT PUMP",
    description: "35 Frame Plunger Pump",
    img: "catpump",
  },
  {
    name: "HII",
    description: "Air Driven Air Pressure <br> Amplifiers 7A-DS-8-X-N-G-IAC",
    img: "HII",
  },
  {
    name: "SPIR STAR",
    description: "Hose 13/4H ",
    img: "spirstar",
  },
  {
    name: "TECH CAL",
    description: "Chart Recorder 8",
    img: "Techcal",
  },
  {
    name: "GRAPHIC CONTROL",
    description: "Chart Paper & Pen",
    img: "graphic",
  },
  {
    name: "NORRISEAL",
    description: "Butterfly Valve R200",
    img: "Norriseal",
  },
];

const useStyles = makeStyles(() => {
  const theme = useTheme();
  return {
    container: {
      width: "calc(100%)  !important",
      marginLeft: "0 !important",
    },
    background: {
      "&:hover": {
        filter: "drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5))",
        zIndex: "1",
        backgroundColor: "var(--primary-color)",
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

function ChildProduct() {
  let { id } = useParams();
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
      ref={ref}
    >
        
      <Container maxWidth="md" sx={{ p: 2 }}>
        <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
            Home
            </Link>
            <Link underline="hover" color="inherit" href="/#/product">
            Product
            </Link>
            <Link underline="hover" color="inherit" href="/#/product/pump">
            Pump
            </Link>
            <Typography color="var(--secondary-color)">Piston Pump</Typography>
        </Breadcrumbs>
       <div
          style={{ display: "flex", alignItems: "center",padding: "50px 0"}}
          className={
            inView
              ? "animate__animated animate__fadeInLeft animate__delay-0.7s"
              : "animate__animated animate__fadeOutRight animate__delay-0.7s"
          }
        >
          <div
            style={{
              width: "30px",
              height: "30px",
              marginRight: "10px",
              backgroundColor: "var(--secondary-color)",
            }}
          ></div>
          <Typography
            // style={{ padding: theme.spacing(5), paddingTop: "0" }}
            color={"var(--primary-color)"}
            fontFamily={"var(--font-family)"}
            variant="h4"
            component="h4"
            fontWeight="bolder"
            lineHeight={0}
          >
            {t("PISTON PUMP")}
          </Typography>
        </div>
        <Grid
          container
          classes={{ root: classes.container }}
          className={
            inView
              ? "animate__animated animate__fadeInRight animate__delay-0.7s"
              : "animate__animated animate__fadeOutLeft animate__delay-0.7s"
          }
        >
          <Grid item xs={12} md={5} sx={{ textAlign: "center" }} p={1}>
            <div
              style={{
                width: "100%",
                height: "100%",
                background: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0px 0px 1px 1px rgba(0,0,0,0.2)",
              }}
            >
              <Box
                component="img"
                sx={{
                  width: { xs: "60%", md: "90%" },
                  aspectRatio: " 3/2",
                  objectFit: "contain",
                }}
                //   src={arrBrand[id].logo}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={7} container pl={4}>
            <Grid item xs={12} sx={{ textAlign: "justify" }}>
              <Typography
                color={"var(--primary-color)"}
                fontFamily={"var(--font-family)"}
                variant="h6"
                component="h6"
                fontWeight="bolder"
                pb={2}
              >
                {t("PISTON PUMP")}
              </Typography>
              <Divider />
              <Typography
                color={"var(--primary-color)"}
                fontFamily={"var(--font-family)"}
                pb={2}
                pt={1}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Typography>
              <Typography
                color={"var(--primary-color)"}
                fontFamily={"var(--font-family)"}
                variant="h6"
                component="h6"
                fontWeight="bolder"
                pb={2}
              >
                {t("SPECIFICATION")}
              </Typography>
              <Divider />
              <Typography
                color={"var(--primary-color)"}
                fontFamily={"var(--font-family)"}
                pb={2}
                pt={1}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <SimilarProducts />
    </Grid>
  );
}

export default ChildProduct;

function SimilarProducts() {
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
        padding: "25px",
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
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  marginRight: "10px",
                  backgroundColor: "var(--secondary-color)",
                }}
              ></div>
              <Typography
                // style={{ padding: theme.spacing(5), paddingTop: "0" }}
                color={"var(--primary-color)"}
                fontFamily={"var(--font-family)"}
                variant="h5"
                component="h5"
                fontWeight="500"
                lineHeight={0}
              >
                {t("SIMILAR PRODUCTS")}
              </Typography>
            </div>
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
                  return <SimilarProductsChild product={product} />;
                })}
              </Carousel>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}

const SimilarProductsChild = ({ product }) => {
  return (
    <Grid container item p={3} pt={0}>
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

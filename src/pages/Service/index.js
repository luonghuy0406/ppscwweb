import React, { useEffect } from "react";
import {
  Grid,
  Container,
  CardMedia,
  CardContent,
  Card,
  Typography,
  useTheme,
} from "@mui/material";
import mir from "../../assets/images/MIR.png";
import sales from "../../assets/images/SELL.png";
import rental from "../../assets/images/RENTAL.png";
import other from "../../assets/images/OTHER.png";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { useInView } from "react-intersection-observer";
const service = [
  {
    id: "sales",
    label: "EQUIPMENT SALES",
    content: "Sales content",
    img: sales,
  },
  {
    id: "mir",
    label: "MAINTENANCE - INSPECTION – REPAIR",
    content: "MIR content",
    img: mir,
  },
  {
    id: "Rental",
    label: "RENTAL",
    content: "Rental content",
    img: rental,
  },
  {
    id: "Other",
    label: "OTHER SERVICES",
    content: "Other content",
    img: other,
  },
];

const useStyles = makeStyles((props) => ({
  container: {
    width: "calc(100%) !important",
    marginLeft: "0 !important",
  },
  root: {
    paddingLeft: "0",
    paddingBottom: "25px",
    "&:hover": {
      "& > div div": {
        backgroundColor: "var(--primary-color)",
        color: "white !important",
        backgroundSize: "210%",
      },
      "& > div div p": {
        color: "white !important",
      },
      "& button": {
        backgroundColor: "var(--secondary-color) !important",
      },
    },
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  boxContent: {
    "@media (max-width:600px)": {
      height: "350px",
    },
    "@media (max-width:900px)": {
      height: "350px",
    },
    "@media (min-width:900px)": {
      height: "350px",
    },
    backgroundColor: "var(--background-gray)",
    color: "var(--primary-color)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    transition: "background-color .2s linear",
  },
  boxImage: {
    width: "100%",
    "@media (max-width:600px)": {
      height: "350px",
    },
    "@media (max-width:900px)": {
      height: "350px",
    },
    "@media (min-width:900px)": {
      height: "350px",
    },
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "200%",
    transition: "background-size .3s linear",
  },
  content: {
    fontFamily: "var(--font-family) !important",
    color: "var(--primary-color)",
    "@media (max-width:600px)": {
      fontSize: "15px !important",
    },
    "@media (min-width:600px)": {
      fontSize: "17px !important",
    },
  },
  button: {
    backgroundColor: "var(--primary-color) !important",
    fontWeight: "bold !important",
    padding: "10px 15px !important",
    "&:hover": {
      backgroundColor: "var(--secondary-color) !important",
    },
  },
  textLabel: {
    "@media (max-width:600px)": {
      padding: "10px",
      textAlign: "center",
    },
    "@media (max-width:900px)": {
      padding: "20px",
      textAlign: "center",
    },
    "@media (min-width:900px)": {
      padding: "25px",
      textAlign: "center",
    },
  },
}));

function Service() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const classes = useStyles();
  const { t } = useTranslation();
  const theme = useTheme();

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <Grid item md={12} sx={{ padding: { xs: "25px 0", md: "50px 0" } }}>
      <Container maxWidth="md" sx={{ p: 2 }}>
        <Typography
          ref={ref}
          style={{ padding: theme.spacing(5), paddingTop: "0" }}
          color={"var(--primary-color)"}
          fontFamily={"var(--font-family)"}
          variant="h4"
          component="h4"
          fontWeight="bolder"
          textAlign={"center"}
          className={
            inView
              ? "animate__animated animate__fadeInLeft animate__delay-0.7s"
              : "animate__animated animate__fadeOutRight animate__delay-0.7s"
          }
        >
          {t("OUR BUSINESS")}
        </Typography>
        <ServiceContent/>
      </Container>
    </Grid>
  );
}

export default Service;

const ServiceContent = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const theme = useTheme();

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <Grid container classes={{ root: classes.container }} ref={ref}>
      {service.map((item, index) => {
        let { ref, inView,  } = useInView({
          /* Optional options */
          threshold: 0,
        });
        return (
          <Grid
            ref={ref}
            item
            xs={12}
            md={12}
            container
            direction={index % 2 != 0 ? "row-reverse" : "row"}
            classes={{ root: classes.root }}
            className={
              inView
                ? "animate__animated animate__" +
                  (index % 2 == 0 ? "fadeInRight" : "fadeInLeft") +
                  " animate__delay-0.7s"
                : "animate__animated animate__" +
                  (index % 2 == 0 ? "fadeOutRight" : "fadeOutLeft") +
                  " animate__delay-0.7s"
            }
          >
            <Grid item xs={12} md={6}>
              <Box
                className={classes.boxImage}
                sx={{
                  backgroundImage: `url('${item.img}')`,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className={classes.boxContent}>
                <label className={classes.textLabel}>
                  <Typography
                    style={{
                      padding: {
                        xs: theme.spacing(1),
                        md: theme.spacing(1),
                        lg: theme.spacing(2),
                      },
                    }}
                    fontFamily={"var(--font-family)"}
                    variant="h5"
                    component="h5"
                    fontWeight="bolder"
                  >
                    {t(item.label)}
                  </Typography>
                  <Typography className={classes.content}>
                    {t(item.content)}
                  </Typography>
                </label>
                <label>
                  <FormContact content={t(item.label)} />
                </label>
              </Box>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
};

const FormContact = ({ ...props }) => {
  const [open, setOpen] = React.useState(false);
  const { t } = useTranslation();
  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        className={classes.button}
      >
        {t("Contact us")}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{t("Contact")}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="name"
            label={t("Full name")}
            type="text"
            fullWidth
            variant="outlined"
          />
          <TextField
            margin="dense"
            id="email"
            name="email"
            label={t("Email address")}
            type="email"
            fullWidth
            variant="outlined"
          />
          <TextField
            margin="dense"
            id="phone"
            name="phone"
            label={t("Phone number")}
            type="text"
            fullWidth
            variant="outlined"
          />
          <TextField
            margin="dense"
            id="Message"
            name="Message"
            label={t("Message")}
            multiline
            rows={4}
            defaultValue={t("I'm interested in ") + props.content}
            fullWidth
            variant="outlined"
            pt={1}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{t("CANCEL")}</Button>
          <Button onClick={handleClose}>{t("SEND")}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

import React, { useEffect } from "react";
import {
  Grid,
  Container,
  CardMedia,
  CardContent,
  Card,
  Typography,
  useTheme,
  CardActions,
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
    // paddingLeft:"0",
    // paddingBottom: "25px",
    flexDirection: "column",
    // "&:hover":{
    //     '& > div div':{
    //         backgroundColor:"var(--primary-color)",
    //         color:"white !important",
    //         backgroundSize:'210%',
    //     }, '& > div div p':{
    //       color:"white !important",
    //   }
    // }
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  boxContent: {
    height: "400px",
    backgroundColor: "#f5f5f5",
    color: "var(--primary-color)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    transition: 'all .2s linear',
  },
  boxImage: {
    width: "100%",
    height: 400,

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
  card:{
    borderRadius: "0 !important", 
    boxShadow: '0px 0px 0px 1px rgb(0 0 0 / 10%) !important' ,
    color:"var(--primary-color) !important",
    transition: 'all .2s linear !important',
    "&:hover":{
        color:"white !important",
        backgroundColor:"var(--primary-color) !important"
      //   , '& > button':{
      //     color:"white !important",
      // }
    }
  },
  button: {
    "&:hover":{
      color: "var(--secondary-color)"
    }
  }
}));

function Products() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const classes = useStyles();
  const { t } = useTranslation();
  const theme = useTheme();
  return (
    <Grid item md={12} sx={{ padding: { xs: "25px 0", md: "50px 0" } }}>
      <Container maxWidth="lg" sx={{ p: 2 }}>
        <Typography
          style={{ padding: theme.spacing(5), paddingTop: "0" }}
          color={"var(--primary-color)"}
          fontFamily={"var(--font-family)"}
          variant="h4"
          component="h4"
          fontWeight="bolder"
          textAlign={"center"}
        >
          {t("PRODUCTS")}
        </Typography>
        <Grid container classes={{ root: classes.container }} rowSpacing={{xs:2, sm: 2, md: 3}} columnSpacing={{ xs: 0, sm: 2, md: 3 }}>
          {service.map((item, index) => {
            return (
              <Grid item xs={12} md={6} lg={4} container>
                <Grid item xs={12}>
                  <Card className={classes.card}>
                    <CardMedia
                      sx={{ height: 300 }}
                      image={item.img}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lizard
                      </Typography>
                    </CardContent>
                    <CardActions>
                        <Link to={`/product/${item.id}`}  style={{ textDecoration: 'none'}}>
                            <Button classes={{root: classes.button}}> Learn More</Button>
                        </Link>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Grid>
  );
}

export default Products;

const FormContact = () => {
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
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

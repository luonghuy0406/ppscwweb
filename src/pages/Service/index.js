import React, { useEffect } from "react";
import { Grid, Container, CardMedia, CardContent, Card, Typography, useTheme } from "@mui/material";
import mir from "../../assets/images/MIR.png";
import sales from "../../assets/images/SELL.png";
import rental from "../../assets/images/RENTAL.png";
import other from "../../assets/images/OTHER.png";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box } from "@mui/system";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const service = [
  {
    id: "sales",
    label:"EQUIPMENT SALES",
    content:"Sales content",
    img: sales,
  },
  {
    id: "mir",
    label:"MAINTENANCE - INSPECTION – REPAIR",
    content:"MIR content",
    img: mir,
  },
  {
    id: "Rental",
    label:"RENTAL",
    content:"Rental content",
    img: rental,
  },
  {
    id: "Other",
    label:"OTHER SERVICES",
    content:"Other content",
    img: other,
  },
];

const useStyles = makeStyles((props) => ({
  container: {
    width: "calc(100%) !important",
    marginLeft: "0 !important",
  },
  root: {
    paddingLeft:"0",
    paddingBottom: "25px",
    "&:hover":{
        '& > div div':{
            backgroundColor:"var(--primary-color)",
            color:"white !important",
            backgroundSize:'210%',
        }, '& > div div p':{
          color:"white !important",
      }
    }
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  boxContent:{
    "@media (max-width:600px)": {
      height: '250px',
    },
    "@media (max-width:900px)": {
      height: '300px',
    },
    "@media (min-width:900px)": {
      height: '600px',
    },
    backgroundColor:"#f5f5f5",
    color:"var(--primary-color)",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"column",
    transition: 'background-color .2s linear',
  },
  boxImage:{
    width: '100%',
    "@media (max-width:600px)": {
      height: '250px',
    },
    "@media (max-width:900px)": {
      height: '300px',
    },
    "@media (min-width:900px)": {
      height: '600px',
    },
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize:'200%',
    transition: 'background-size .3s linear',
  },
  content:{
    fontFamily:"var(--font-family) !important",
    color:"var(--primary-color)",
    '@media (max-width:600px)': {
      fontSize: '15px !important',
    },
    '@media (min-width:600px)': {
      fontSize: '17px !important',
    },
  },
  button:{
    backgroundColor: "var(--primary-color) !important",
    fontWeight: "bold !important",
    padding: "10px 15px !important",
    "&:hover" : {
      backgroundColor:"var(--secondary-color) !important",
    }
  },
   textLabel :{

    "@media (max-width:600px)": {
      padding: '10px',
      textAlign: 'center'
    },
    "@media (max-width:900px)": {
      padding: '20px',
      textAlign: 'center'
    },
    "@media (min-width:900px)": {
      padding: '25px',
      textAlign: 'center'
    },
   }
}));

function Service() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const classes = useStyles();
  const { t } = useTranslation();
  const theme = useTheme();
  return (
    <Grid item md={12} sx={{ padding: { xs: "25px 0", md: "70px 0" } }}>
      <Container maxWidth="lg" sx={{ p: 2 }}>
        <Typography style={{ padding: theme.spacing(5), paddingTop:"0" }} color={"var(--primary-color)"} fontFamily={"var(--font-family)"} variant="h4" component="h4" fontWeight="bolder" textAlign={"center"}>
            {t("OUR BUSINESS")}
        </Typography>
        <Grid container classes={{ root: classes.container }}>
          {service.map((item, index) => {
            return (
              <Grid item xs={12} md={12} container direction={ (index%2!=0) ?  "row-reverse" :"row"} classes={{root:classes.root}}>
                    <Grid item xs={12} md={6}>
                        <Box
                            className={classes.boxImage}
                            sx={{
                                backgroundImage: `url('${item.img}')`,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box
                            className={classes.boxContent}>
                            <label className={classes.textLabel}>
                                <Typography style={{ padding: {xs: theme.spacing(1), md: theme.spacing(1), lg:theme.spacing(2)} }} fontFamily={"var(--font-family)"} variant="h5" component="h5" fontWeight="bolder">
                                    {t(item.label)}
                                </Typography>
                                <Typography className={classes.content}>
                                    {t(item.content)}
                                </Typography>
                            </label>
                            <label>
                                <FormContact/>
                            </label>
                            
                        </Box>
                    </Grid>
                 
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Grid>
  );
}

export default Service;


const FormContact = () =>{
  const [open, setOpen] = React.useState(false);
  const {t} = useTranslation()
  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen} className={classes.button}>
        {t("Contact us")}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
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
}
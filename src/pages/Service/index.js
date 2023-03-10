import React from "react";
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
    "& &:hover":{
        '& $box':{
            backgroundSize:'210%',
            backgroundColor:"var(--primary-color)",
            color:"white"
        }
    }
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  box:{

  }
}));

function Service() {
  const classes = useStyles();
  const { t } = useTranslation();
  const theme = useTheme();
  return (
    <Grid item md={12} sx={{ padding: { xs: "25px 0", md: "70px 0" } }}>
      <Container maxWidth="lg" sx={{ p: 2 }}>
        <Grid container classes={{ root: classes.container }} spacing={4}>
          {service.map((item, index) => {
            return (
              <Grid item xs={12} md={12} container direction={ (index%2!=0) ?  "row-reverse" :"row"} classes={{root:classes.root}}>
                    <Grid item xs={12} md={6}>
                        <Box
                            className={classes.box}
                            sx={{
                                width: '100%',
                                height: 400,
                                backgroundImage: `url('${item.img}')`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                backgroundSize:'200%',
                                transition: 'background-size .3s linear',
                                // '&:hover': {
                                //     backgroundSize:'210%',
                                // },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box
                        className={classes.box}
                            sx={{
                                height: '400px',
                                backgroundColor:"#f5f5f5",
                                color:"var(--primary-color)",
                                display:"flex",
                                alignItems:"center",
                                justifyContent:"center",
                                flexDirection:"column",
                                transition: 'all .2s linear',
                                // '&:hover': {
                                //     backgroundColor:"var(--primary-color)",
                                //     color:"white"
                                // },
                            }}
                        >
                            <div style={{padding:"25px",textAlign:"center"}}>
                                <Typography style={{ padding: theme.spacing(2) }} fontFamily={"var(--font-family)"} variant="h5" component="h5" fontWeight="bolder" px={2}>
                                    {t(item.label)}
                                </Typography>
                                <Typography fontFamily={"var(--font-family)"} fontSize="17px">
                                    {t(item.content)}
                                </Typography>
                            </div>
                            <div>
                                <FormContact/>
                            </div>
                            
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
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button  variant="contained" onClick={handleClickOpen}>
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
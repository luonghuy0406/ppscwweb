import React from "react";
import Grid from "@mui/material/Grid";
import Footer from "./Footer";
import Header from "./Header";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

const actions = [
  { icon: <FileCopyIcon />, name: "Copy" },
  { icon: <SaveIcon />, name: "Save" },
  { icon: <PrintIcon />, name: "Print" },
  { icon: <ShareIcon />, name: "Share" },
];
const useStyles = makeStyles((theme) => ({
  container: {
    '@media (max-width:600px)': {
      marginTop: '56px !important',
    },
    '@media (min-width:600px)': {
      marginTop: '60px !important',
    },
  },
  buttonPulse :{
    '& > button' :{
      animation: 'pulse 2s infinite 2s cubic-bezier(0.25, 0, 0, 1)',
      boxShadow: '0 0 0 0 #1a76d242',
    }
  }
}));
function DefaultLayout({ children }) {
  const classes = useStyles()
  return (
    <div>
      <Header />
      <Grid container justifyContent="center" classes={{root:classes.container}}>
        {children}
      </Grid>
      <Box sx={{transform: "translateZ(0px)",position:"fixed",bottom:"0",right:"0"}}>
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{ position: "fixed", bottom: 26, right: 26 }}
          icon={<ChatBubbleIcon />}
          className={classes.buttonPulse}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
            />
          ))}
        </SpeedDial>
      </Box>
      <Footer />
    </div>
  );
}

export default DefaultLayout;

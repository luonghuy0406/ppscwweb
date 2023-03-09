import React from "react";
import Grid from "@mui/material/Grid";
import Footer from "./Footer";
import Header from "./Header";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import { Typography } from "@mui/material";
const actions = [
  { icon: <FileCopyIcon />, name: "Copy" },
  { icon: <SaveIcon />, name: "Save" },
  { icon: <PrintIcon />, name: "Print" },
  { icon: <ShareIcon />, name: "Share" },
];
const useStyles = makeStyles((theme) => ({
  container: {
    marginTop:"60px !important"
  },
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
          icon={<SpeedDialIcon />}
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

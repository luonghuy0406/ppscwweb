import React from "react";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import LanguageSwitch from "./LanguageSwitch";
import { makeStyles } from "@mui/styles";
import { Trans, useTranslation } from "react-i18next";
import { Translation } from "react-i18next";
import { Link } from "react-router-dom";
import { publicRoutes } from "../../../../routes";

const pages = ["Home", "Brand", "Product", "Service", "Contact"];
const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "var(--primary-color) !important",
    maxHeight: "60px",
    position:"fixed !important",
    top:"0",
    left:"0",
    zIndex:"1"
  },
  menu: {
    backgroundColor: "var(--primary-color) !important",
  },
}));

function Header(props) {
  const classes = useStyles();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const { t } = useTranslation();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar position="static" classes={{ root: classes.header }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{width:{xs:"0", md: "100px"},justifyContent: "center", display: 'flex' }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
          </Box>

          <Box sx={{ flexGrow:0, display: { xs: "flex", md: "none" },justifyContent:{xs:"flex-start"} ,width:{xs:"100px", md: "0"}}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{p:0}}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{flexGrow: {xs:1,md:0},justifyContent: "center", display: 'flex' }}>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                justifyContent: "center"
              }}
            >
              LOGO a
            </Typography>
          </Box>
          
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => {
              let path ='/404'
              Object.values(publicRoutes).forEach((route)=>{
                if(page === route.label){
                  path = route.path
                }
              })
              return (
                <Link key={page} to={path} style={{ textDecoration: 'none' }}>
                  <Button
                    
                    onClick={handleCloseNavMenu}
                    sx={{ 
                      m: 1, 
                      px:3,
                      color: "white", 
                      display: "block", 
                      fontSize:"1rem", 
                      fontWeight:"bold",
                      borderRadius:"unset",
                      transition: "0.25s",
                      '&:hover': {
                        // boxShadow:  "0px 2px 0px #ffffff"
                        boxShadow: "inset 0 -2px 0 0 #ffffff"
                      },
                    }}
                  >
                    {t(page)}
                  </Button>
                </Link>
              )
            })}
          </Box>

          <Box sx={{ flexGrow: 0, width: "100px",justifyContent: {xs:"flex-end", md: "center"}, display: 'flex'}}>
            <LanguageSwitch />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;

import { IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import en from "./us.png";
import vi from "./vietnam.png";
import { useTranslation } from 'react-i18next'

const lang = {en:{label: "English",icon: en },vi:{label: "Tiếng Việt",icon: vi }};

function LanguageSwitch() {
  const [currentLang, setCurrentLang] = useState('en');
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { t, i18n } = useTranslation()
  const changeLanguageHandler = (lang) =>
     {
       i18n.changeLanguage(lang)
       setCurrentLang(lang)
     }
  const handleCloseUserMenu = (e) => {
    setAnchorElUser(null);
  };

  const handleOpenUserMenu = (event) => {
   setAnchorElUser(event.currentTarget);
  };
  return (
    <>
      <IconButton onClick={handleOpenUserMenu}  sx={{ p: 0 }}>
        <img src={lang[currentLang].icon} width={32} />
      </IconButton>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {Object.keys(lang).map((language) => (
          <MenuItem 
            key={language} 
            onClick={()=>{
              handleCloseUserMenu()
              changeLanguageHandler(language)
            }}
            >
            <ListItemIcon >
                <img src={lang[language].icon}/>
            </ListItemIcon>
            <ListItemText>{lang[language].label}</ListItemText>
            {/* <Typography textAlign="center">{lang[language].label}</Typography> */}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default LanguageSwitch;

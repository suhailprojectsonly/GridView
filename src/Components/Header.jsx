import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import HttpIcon from '@material-ui/icons/Http';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import EmojiEventsTwoToneIcon from '@material-ui/icons/EmojiEventsTwoTone';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },


  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },

  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
 
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };


  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };


  const mobileMenuId = "primary-search-account-menu-mobile";

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton  color="inherit">
            <HomeIcon/>
        </IconButton>
        <div class="icon-button-adjust">
        <p>Home</p>
        </div>
      </MenuItem>

      <MenuItem>
        <IconButton color="inherit"> 
            <InfoIcon />
        </IconButton>
        <div class="icon-button-adjust">
        <p>About</p>
        </div>
      </MenuItem>

      <MenuItem>
        <IconButton color="inherit"> 
            <HttpIcon />
        </IconButton>
        <div class="icon-button-adjust">
        <p>Insight</p>
        </div>
      </MenuItem>

      <MenuItem>
        <IconButton color="inherit"> 
            <SettingsApplicationsIcon/>
        </IconButton>
        <div class="icon-button-adjust">
        <p>Service</p>
        </div>
      </MenuItem>

      <MenuItem>
        <IconButton color="inherit"> 
            < EmojiEventsTwoToneIcon/>
        </IconButton>
        <div class="icon-button-adjust">
        <p>Events</p>
        </div>
      </MenuItem>

      <MenuItem>
        <IconButton color="inherit"> 
            < ContactMailIcon/>
        </IconButton>
        <div class="icon-button-adjust">
        <p>ContactUs</p>
        </div>
      </MenuItem>

      <MenuItem>
        <IconButton color="inherit"> 
            < SearchIcon/>
        </IconButton>
        <div class="icon-button-adjust">
        <p>Search</p>
        </div>
      </MenuItem>
      
    </Menu>
  );


  return (

    <Router>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        
        
         <div class="mt-1 pl-1">
                <img class = "imgBlueSky" src="/images/Social-profile-icon.png" alt="BlueSky" />
              </div>
         

          
          <Typography variant="h6" className={classes.title}>
            Blue Sky    
          </Typography>



          <div className={classes.sectionDesktop}>
    
              <div class="d-flex">
                <ul class="navbar-nav">
                  <li>
                  <Link to="/">Home</Link>             
                 </li>
                  <li>
                  <Link to="/About">About</Link>
                  </li>
                  <li>
                  <Link to="/Insight">Insight</Link>

                  </li>
                  <li>
                  <Link to="/Service">Service</Link>

                  </li>
                  <li>
                  <Link to="/Events">Events</Link>

                  </li>
                  <li>
                  <Link to="/ContactUs">Contactus</Link>

                  </li>
                  <li>
                    {" "}
                    <a href="#">
                      <SearchIcon />
                    </a>
                  </li>
                </ul>
              </div>
            </div>                 
          
            <div className={classes.sectionMobile}>
       
              <div class="pl-5">
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>     
            </div>
          </div>
        </Toolbar>
      </AppBar>

      {renderMobileMenu}
      
    </div>
    </Router>
  );

}

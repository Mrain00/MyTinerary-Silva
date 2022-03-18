import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../img/logo.svg'
import { Link as LinkRouter } from "react-router-dom";
import { connect } from "react-redux"
import userActions from '../redux/actions/userActions';
const ResponsiveAppBar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

    const SignOut = () => {
      props.SignOutUser(props.user.email)
    }

  return (
    <AppBar id="appbar" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <img className="logo" src={Logo} alt="logo"/>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <LinkRouter to="/" className="linkresp">
                    Home
                  </LinkRouter>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <LinkRouter to="/cities" className="linkresp">
                    Cities
                  </LinkRouter>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <img className="logo" src={Logo} />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <LinkRouter to="/" className="linkresp">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Home
              </Button>
            </LinkRouter>
            <LinkRouter to="/cities" className="linkresp">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Cities
              </Button>
            </LinkRouter>
          
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <AccountCircle id="accountcircle"/>
              </IconButton>
            </Tooltip>
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
              {props.user ? <>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" onClick={SignOut}>Log Out</Typography>
                </MenuItem> 
                </>
                :
                <>
                <MenuItem>
                  <Typography textAlign="center">
                  <LinkRouter  to={`/signIn`}>
                    Sign In
                    </LinkRouter>
                    </Typography>
                </MenuItem>
                <MenuItem>
                  <Typography textAlign="center">
                    <LinkRouter  to={`/signUp`}>
                    Sign Up
                    </LinkRouter>
                    </Typography>
                </MenuItem>
                </>}
                
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
const mapStateToProps = (state) => {
	return {
		user: state.userReducer.user,
	}
}
const mapDispatchToProps = {
	SignOutUser: userActions.SignOutUser,

}



export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveAppBar)
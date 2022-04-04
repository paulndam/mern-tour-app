import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import face1Img from "../../Images/face1.png";
// import { Link } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "@mui/material/Link";
import { CustomTypography } from "../../allcomponents/AllComponents";
import theme from "../custom/theme";

const Navbar = () => {
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
  return (
    <AppBar position="static" sx={{ color: theme.palette.white }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                <Link href="/" underline="none">
                  <CustomTypography
                    minWidth="11.25rem"
                    display="block"
                    variant="button"
                    color="text"
                    textTransform="capitalize"
                    fontWeight="regular"
                    py={0.625}
                    px={2}
                  >
                    Home
                  </CustomTypography>
                </Link>
                <Link href="/login" underline="none">
                  <CustomTypography
                    variant="button"
                    color="black"
                    fontWeight="regular"
                    textAlign="center"
                    p={1}
                  >
                    Log-In
                  </CustomTypography>
                </Link>
                <Link href="/register" underline="none">
                  <CustomTypography
                    variant="button"
                    color="black"
                    fontWeight="regular"
                    textAlign="center"
                    p={1}
                  >
                    Register
                  </CustomTypography>
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Grid container flexDirection="row" alignItems="center">
              <Link href="/" underline="none">
                <CustomTypography
                  sx={{ underline: "none" }}
                  variant="button"
                  color="white"
                  fontWeight="bold"
                  py={0.8125}
                  mr={2}
                >
                  Blue Tours
                </CustomTypography>
              </Link>
              <Button
                variant="outlined"
                sx={{ display: { xs: "block", lg: "none" }, ml: "auto" }}
              >
                <Box component="i" color="white">
                  <FontAwesomeIcon icon={faBars} />
                </Box>
              </Button>
              <Box
                component="ul"
                display={{ xs: "none", lg: "flex" }}
                p={0}
                my={0}
                mx="auto"
                sx={{ listStyle: "none" }}
              >
                <Box component="li">
                  <Link href="/" underline="none">
                    <CustomTypography
                      variant="button"
                      color="white"
                      fontWeight="regular"
                      p={1}
                    >
                      Home
                    </CustomTypography>
                  </Link>
                </Box>
                <Box component="li">
                  <Link href="/login" underline="none">
                    <CustomTypography
                      // href="/login"
                      variant="button"
                      color="white"
                      fontWeight="regular"
                      p={1}
                    >
                      Log-In
                    </CustomTypography>
                  </Link>
                </Box>
                <Box component="li">
                  <Link href="/register" underline="none">
                    <CustomTypography
                      variant="button"
                      color="white"
                      fontWeight="regular"
                      p={1}
                    >
                      Register
                    </CustomTypography>
                  </Link>
                </Box>
              </Box>
              <Box
                component="ul"
                display={{ xs: "none", lg: "flex" }}
                p={0}
                m={0}
                sx={{ listStyle: "none" }}
              >
                <Box component="li">
                  <CustomTypography
                    component={Link}
                    href="#"
                    variant="button"
                    p={1}
                    onClick={(e) => e.preventDefault()}
                  >
                    <Box component="i" sx={{ bgColor: theme.palette.white }}>
                      <FontAwesomeIcon icon={faFacebook} size="lg" />
                    </Box>
                  </CustomTypography>
                </Box>
                <Box component="li">
                  <CustomTypography
                    component={Link}
                    href="#"
                    variant="button"
                    p={1}
                    onClick={(e) => e.preventDefault()}
                  >
                    <Box component="i" color="white">
                      <FontAwesomeIcon icon={faTwitter} size="lg" />
                    </Box>
                  </CustomTypography>
                </Box>
                <Box component="li">
                  <CustomTypography
                    component={Link}
                    href="#"
                    variant="button"
                    p={1}
                    onClick={(e) => e.preventDefault()}
                  >
                    <Box component="i" color="white">
                      <FontAwesomeIcon icon={faInstagram} size="lg" />
                    </Box>
                  </CustomTypography>
                </Box>
              </Box>
            </Grid>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={face1Img} />
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
              <Link href="/profile" underline="none">
                <MenuItem onClick={handleCloseUserMenu}>
                  <CustomTypography textAlign="center">
                    Profile
                  </CustomTypography>
                </MenuItem>
              </Link>
              <MenuItem onClick={handleCloseUserMenu}>
                <CustomTypography textAlign="center">LogOut</CustomTypography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;

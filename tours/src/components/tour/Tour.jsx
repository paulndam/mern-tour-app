import React from "react";
import { Avatar, Link } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import WH from "../../Images/whitehouse.png";
import Stack from "@mui/material/Stack";
import { CustomTypography } from "../../allcomponents/AllComponents";
import Icon from "@mui/material/Icon";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MediationIcon from "@mui/icons-material/Mediation";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import TokenIcon from "@mui/icons-material/Token";
import MapImg from "../../Images/map1.jpeg";
import bgPattern from "../../Images/bgPattern3.png";
import { blue } from "@mui/material/colors";
import { alpha, styled } from "@mui/material/styles";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import P1 from "../../Images/person1.png";
import P2 from "../../Images/person2.png";
import P3 from "../../Images/person3.png";
import { Footer } from "../../allcomponents/AllComponents";
import BannerImg from "../../Images/BannerImg.png";

const bgcolor = blue[50];

const useStyles = styled({
  root: {
    maxWidth: 345,
  },
  media: {
    height: "100px",
  },
});

const Tour = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box component="nav" position="absolute" top="0.5rem" width="100%">
        <Container maxWidth="lg"></Container>
      </Box>

      {/* Image cover section */}
      <Box
        display="flex"
        alignItems="center"
        minHeight="100vh"
        sx={{
          backgroundImage: ({
            palette: { gradients },
            functions: { linearGradient, rgba },
          }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.5),
              rgba(gradients.dark.state, 0.5)
            )}, url(${WH})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            md={7}
            lg={6}
            flexDirection="column"
            justifyContent="center"
          >
            <CustomTypography
              variant="h1"
              color="white"
              mb={3}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              White House
            </CustomTypography>

            <Stack direction="row" spacing={1} mt={3}>
              <Button
                color="primary"
                sx={{ color: "white" }}
                variant="contained"
              >
                Book Now
              </Button>
            </Stack>
          </Grid>
        </Container>
      </Box>

      <Box component="section" py={{ xs: 3, md: 12, lg: 12 }}>
        <Container>
          <Grid container alignItems="center">
            <Grid item xs={12} lg={5}>
              <CustomTypography variant="h3" my={1}>
                More About White House Tour
              </CustomTypography>
              <CustomTypography variant="body2" color="text" mb={2}>
                Pain is what we go through as we become older. We get insulted
                by others, lose trust for those others. We get back stabbed by
                friends. It becomes harder for us to give others a hand.
              </CustomTypography>

              <CustomTypography
                component="a"
                href="#"
                variant="body2"
                color="info"
                fontWeight="regular"
                sx={{
                  width: "max-content",
                  display: "flex",
                  alignItems: "center",

                  "& .material-icons-round": {
                    fontSize: "1.125rem",
                    transform: "translateX(3px)",
                    transition:
                      "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                  },

                  "&:hover .material-icons-round, &:focus .material-icons-round":
                    {
                      transform: "translateX(6px)",
                    },
                }}
              >
                More about us
                <Icon sx={{ fontWeight: "bold" }}>
                  <ArrowForwardIcon />
                </Icon>
              </CustomTypography>
            </Grid>

            <Grid
              item
              xs={12}
              lg={6}
              sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}
            >
              <Stack>
                <Box display="flex" alignItems="center" p={2}>
                  <Box
                    width="3rem"
                    height="3rem"
                    variant="gradient"
                    bgColor="info"
                    color="white"
                    coloredShadow="info"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="xl"
                  >
                    <Icon fontSize="large">
                      <MediationIcon fontSize="large" />
                    </Icon>
                  </Box>
                  <CustomTypography variant="body2" color="text" pl={2}>
                    It becomes harder for us to give others a hand.
                    <br />
                    We get our heart broken by people we love.
                  </CustomTypography>
                </Box>
                <Box display="flex" alignItems="center" p={2}>
                  <Box
                    width="3rem"
                    height="3rem"
                    variant="gradient"
                    bgColor="info"
                    color="white"
                    coloredShadow="info"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="xl"
                  >
                    <Icon fontSize="large">
                      <DisplaySettingsIcon fontSize="large" />
                    </Icon>
                  </Box>
                  <CustomTypography variant="body2" color="text" pl={2}>
                    As we live, our hearts turn colder.
                    <br />
                    Cause pain is what we go through as we become older.
                  </CustomTypography>
                </Box>
                <Box display="flex" alignItems="center" p={2}>
                  <Box
                    width="3rem"
                    height="3rem"
                    variant="gradient"
                    bgColor="info"
                    color="white"
                    coloredShadow="info"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="xl"
                  >
                    <Icon fontSize="large">
                      <TokenIcon fontSize="large" />
                    </Icon>
                  </Box>
                  <CustomTypography variant="body2" color="text" pl={2}>
                    When we lose family over time.
                    <br />
                    What else could rust the heart more over time? Blackgold.
                  </CustomTypography>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        display="flex"
        my={10}
        py={6}
        minHeight="100vh"
        sx={{
          backgroundImage: `url(${MapImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Reviews section */}
      <Box position="relative" variant="gradient" py={2} mx={-2}>
        <Box
          component="img"
          src={bgPattern}
          alt="background-pattern"
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="67%"
          opacity={0.2}
          display={{ xs: "none", md: "block" }}
        />
        <Container>
          <Grid
            container
            justifyContent="center"
            sx={{ pt: 8, pb: 5, position: "relative", zIndex: 3 }}
          >
            <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Box
                  // sx={{
                  //   mb: 4,
                  //   border: 1,
                  //   width: "10rem",
                  //   height: "3rem",
                  //   borderRadius: "9px",
                  //   textAlign: "center",
                  //   bgcolor: bgcolor,
                  //   color: "white",
                  // }}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: bgcolor,
                    borderRadius: "9px",
                    width: "12rem",
                    mb: 3,
                  }}
                >
                  <CustomTypography align="center" sx={{ color: "white" }}>
                    TESTIMONIALS
                  </CustomTypography>
                </Box>
              </Box>
              <CustomTypography variant="h2" color="white" mb={1}>
                Some thoughts from our clients
              </CustomTypography>
              <CustomTypography
                variant="body1"
                color="white"
                fontWeight="light"
              >
                If you&apos;re selected for them you&apos;ll also get three
                tickets, opportunity to access Investor Office Hours and Mentor
                Hours and much more all for free.
              </CustomTypography>
            </Grid>
          </Grid>
          <Grid container spacing={3} sx={{ mt: 10, mb: 6 }}>
            <Grid item xs={12} md={4}>
              <Card sx={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  height="194"
                  image={P1}
                  alt="Paella dish"
                />
                <CardContent>
                  <CustomTypography gutterBottom variant="h5" component="h2">
                    Henry Watson
                  </CustomTypography>
                  <CustomTypography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    The CardMedia component sets a background image to cover
                    available space.
                  </CustomTypography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4} sx={{ mt: { xs: 12, md: 0 } }}>
              <Card sx={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  height="194"
                  image={P2}
                  alt="Paella dish"
                />
                <CardContent>
                  <CustomTypography gutterBottom variant="h5" component="h2">
                    Joe Garry
                  </CustomTypography>
                  <CustomTypography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    The CardMedia component sets a background image to cover
                    available space.
                  </CustomTypography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4} sx={{ mt: { xs: 12, md: 0 } }}>
              <Card sx={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  height="194"
                  image={P3}
                  alt="Paella dish"
                />
                <CardContent>
                  <CustomTypography gutterBottom variant="h5" component="h2">
                    Marry Matt
                  </CustomTypography>
                  <CustomTypography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    The CardMedia component sets a background image to cover
                    available space.
                  </CustomTypography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Booking section */}
      <Box
        display="flex"
        my={18}
        py={6}
        sx={{
          backgroundImage: `url(${BannerImg})`,
        }}
      >
        <Container>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={8} lg={5}>
              <CustomTypography variant="h5" color="white" fontWeight="bold">
                For being a bright color. For standing out. But the time is now
                to be okay to be the greatest you.
              </CustomTypography>
            </Grid>
            <Grid item xs={12} lg={6} sx={{ ml: "auto" }}>
              <Box width="12rem" ml="auto">
                <Button
                  variant="contained"
                  color="warning"
                  fullWidth
                  sx={{ boxShadow: "none" }}
                >
                  Book Now
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Footer />
    </React.Fragment>
  );
};

export default Tour;

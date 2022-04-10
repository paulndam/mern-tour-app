import React from "react";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import HeaderImg4 from "../../Images/Header-Img2.png";
import Card from "@mui/material/Card";
import { Container, Grid, Avatar, Button } from "@mui/material";
import face2Img from "../../Images/face2.png";
import {
  CustomTypography,
  CustomTourCards,
  Footer,
} from "../../allcomponents/AllComponents";
import Icon from "@mui/material/Icon";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import T1 from "../../Images/testimonial-6-2.jpg";
import T2 from "../../Images/testimonial-6-3.jpg";
import T3 from "../../Images/blog-9-4.jpg";
import T4 from "../../Images/blog2.jpg";

const Profile = () => {
  return (
    <Box
      sx={{
        variant: "contained",
        bgColor: "transparent",
        color: "dark",
        opacity: 1,
        borderRadius: "none",
        shadow: "none",
        coloredShadow: "none",
      }}
    >
      <Box
        minHeight="40rem"
        width="100%"
        sx={{
          backgroundImage: ({
            functions: { linearGradient, rgba },
            palette: { gradients },
          }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.8),
              rgba(gradients.dark.state, 0.8)
            )}, url(${HeaderImg4})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      />
      <Card
        sx={{
          p: 9,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: "white",
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: 1,
        }}
      >
        <Box component="section" py={{ xs: 6, sm: 12 }}>
          <Container>
            <Grid
              container
              item
              xs={12}
              md={12}
              lg={12}
              justifyContent="center"
              mx="auto"
            >
              <Box mt={{ xs: -16, md: -20 }} textAlign="center">
                <Avatar
                  src={face2Img}
                  alt="Burce Mars"
                  size="xxl"
                  shadow="xl"
                  sx={{ width: 56, height: 56 }}
                />
              </Box>
              <Grid container justifyContent="center" py={6}>
                <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={1}
                  >
                    <CustomTypography variant="h3">
                      Michael Eli
                    </CustomTypography>
                    <Link href="/user/profile/update" underline="none">
                      <Button
                        variant="outlined"
                        color="info"
                        size="small"
                        sx={{
                          borderRadius: "5px",
                          color: "info",
                          circular: false,
                          iconOnly: false,
                        }}
                      >
                        Update
                      </Button>
                    </Link>
                  </Box>

                  <Grid container spacing={3} mb={3}>
                    <Grid item>
                      <CustomTypography
                        component="span"
                        variant="body2"
                        fontWeight="bold"
                      >
                        3&nbsp;
                      </CustomTypography>
                      <CustomTypography
                        component="span"
                        variant="body2"
                        color="text"
                      >
                        Tours
                      </CustomTypography>
                    </Grid>
                  </Grid>

                  <CustomTypography
                    variant="body1"
                    fontWeight="light"
                    color="text"
                  >
                    Decisions: If you can&apos;t decide, the answer is no. If
                    two equally difficult paths, choose the one more painful in
                    the short term (pain avoidance is creating an illusion of
                    equality). Choose the path that leaves you more equanimous.{" "}
                    <br />
                    <CustomTypography
                      component="a"
                      href="#"
                      variant="body1"
                      fontWeight="light"
                      color="info"
                      mt={3}
                      sx={{
                        width: "max-content",
                        display: "flex",
                        alignItems: "center",

                        "& .material-icons-round": {
                          transform: `translateX(3px)`,
                          transition:
                            "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                        },

                        "&:hover .material-icons-round, &:focus .material-icons-round":
                          {
                            transform: `translateX(6px)`,
                          },
                      }}
                    >
                      More about me{" "}
                      <Icon sx={{ fontWeight: "bold" }}>
                        <ArrowForwardIcon />
                      </Icon>
                    </CustomTypography>
                  </CustomTypography>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/*Recent Booked Tour  */}

        <Box component="section" py={2}>
          <Container>
            <Grid container item xs={12} lg={6}>
              <CustomTypography variant="h3" mb={6}>
                Check my latest booked Tours
              </CustomTypography>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} lg={3}>
                <Link href="/tour/id" underline="none">
                  <CustomTourCards
                    image={T1}
                    title="Rover raised $65 million"
                    description="Finding temporary housing for your dog should be as easy as renting an Airbnb. That’s the idea behind Rover ..."
                    action={{
                      type: "internal",
                      route: "/tour/id",
                      color: "info",
                      label: "read more",
                    }}
                  />
                </Link>
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <Link href="/tour/id" underline="none">
                  <CustomTourCards
                    image={T2}
                    title="Rover raised $65 million"
                    description="Finding temporary housing for your dog should be as easy as renting an Airbnb. That’s the idea behind Rover ..."
                    action={{
                      type: "internal",
                      route: "/tour/id",
                      color: "info",
                      label: "read more",
                    }}
                  />
                </Link>
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <Link href="/tour/id" underline="none">
                  <CustomTourCards
                    image={T3}
                    title="Rover raised $65 million"
                    description="Finding temporary housing for your dog should be as easy as renting an Airbnb. That’s the idea behind Rover ..."
                    action={{
                      type: "internal",
                      route: "/tour/id",
                      color: "info",
                      label: "read more",
                    }}
                  />
                </Link>
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <CustomTourCards
                  image={T4}
                  title="Rover raised $65 million"
                  description="Finding temporary housing for your dog should be as easy as renting an Airbnb. That’s the idea behind Rover ..."
                  action={{
                    type: "internal",
                    route: "/tour/id",
                    color: "info",
                    label: "read more",
                  }}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Card>
      {/* Footer section */}
      <Footer />
    </Box>
  );
};

export default Profile;

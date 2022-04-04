import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import HeaderImg4 from "../../Images/Header-Img4.jpeg";
import { fontSize } from "@mui/system";
import Stack from "@mui/material/Stack";
import { CustomTypography } from "../../allcomponents/AllComponents";
const Header = () => {
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
          backgroundImage: `url(${HeaderImg4}),linear-gradient(45deg, #bdc3c7  30%, #2c3e50 90%)`,
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
              BlueTours
            </CustomTypography>
            <CustomTypography
              variant="body1"
              color="white"
              opacity={0.8}
              pr={6}
              mr={6}
            >
              The time is now for it be okay to be great. People in this world
              shun people for being nice.
            </CustomTypography>
            <Stack direction="row" spacing={1} mt={3}>
              <Button
                color="primary"
                sx={{ color: "white" }}
                variant="contained"
              >
                Get Started
              </Button>
              <Button variant="text" color="white">
                Find out more
              </Button>
            </Stack>
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default Header;

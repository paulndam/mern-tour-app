import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import BannerImg from "../../Images/BannerImg.png";
import { CustomTypography } from "../../allcomponents/AllComponents";
const Banner = () => {
  return (
    <Box
      display="flex"
      my={24}
      py={6}
      sx={{
        backgroundImage: `url(${BannerImg})`,
      }}
    >
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={8} lg={5}>
            <CustomTypography variant="h5" color="white" fontWeight="bold">
              For being a bright color. For standing out. But the time is now to
              be okay to be the greatest you.
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
                start now
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;

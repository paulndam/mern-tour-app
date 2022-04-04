import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { pink, blue, grey } from "@mui/material/colors";
const instagramcolor = pink[400];
const facebookcolor = blue[300];
const linkedincolor = blue[700];
const githubcolor = grey[900];

const SocialMediaBanner = () => {
  return (
    <Box component="section" mt={6} py={{ xs: 0, lg: 6 }}>
      <Container>
        <Grid container alignItems="center">
          <Grid item xs={12} lg={6} mb={{ xs: 3, lg: 0 }}>
            <Typography variant="h4" mb={0.5}>
              Thank you for touring with us!
            </Typography>
            <Typography variant="body1" color={"GrayText"}>
              Delivering the best tours
            </Typography>
          </Grid>

          <Grid item xs={12} lg={12}>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={1.5}
              flexWrap="wrap"
              justifyContent={{ xs: "flex-start", lg: "flex-end" }}
            >
              <Button
                variant="contained"
                startIcon={<FacebookIcon />}
                sx={{ bgcolor: facebookcolor }}
              >
                Facebook
              </Button>
              <Button
                variant="contained"
                startIcon={<InstagramIcon />}
                sx={{ bgcolor: instagramcolor }}
              >
                Instagram
              </Button>
              <Button
                variant="contained"
                startIcon={<LinkedInIcon />}
                sx={{ bgcolor: linkedincolor }}
              >
                LinkedIn
              </Button>
              <Button
                variant="contained"
                startIcon={<GitHubIcon />}
                sx={{ bgcolor: githubcolor }}
              >
                GitHub
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SocialMediaBanner;

import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { green, pink, deepOrange } from "@mui/material/colors";
import GroupIcon from "@mui/icons-material/Group";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import AttractionsIcon from "@mui/icons-material/Attractions";

const Features = () => {
  return (
    <Box component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          mx="auto"
          textAlign="center"
          pb={6}
        >
          <Typography
            mb={1}
            variant="h5"
            color="text"
            fontWeight="bold"
            textTransform="uppercase"
          >
            Turn your tour into an adventure
          </Typography>
          <Typography variant="body1" color={"GrayText"}>
            We&apos;re constantly trying to express ourselves and actualize our
            dreams. If you have the opportunity to play{" "}
          </Typography>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <CardMedia>
              <Stack direction="row" spacing={2}>
                <Avatar sx={{ bgcolor: pink[500] }}>
                  <GroupIcon />
                </Avatar>
              </Stack>
            </CardMedia>
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="h6" gutterBottom>
                Check our team
              </Typography>
              <Typography variant="body2" color={"GrayText"}>
                People in this world shun people for being great. For being a
                bright color. For standing out.
              </Typography>
            </CardContent>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <CardMedia>
              <Stack direction="row" spacing={2}>
                <Avatar sx={{ bgcolor: green[500] }}>
                  <SupportAgentIcon />
                </Avatar>
              </Stack>
            </CardMedia>
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="h6" gutterBottom>
                Support 24/7
              </Typography>
              <Typography variant="body2" color={"GrayText"}>
                We get insulted by others, lose trust for those others. We get
                back here to follow my dreams
              </Typography>
            </CardContent>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <CardMedia>
              <Stack direction="row" spacing={2}>
                <Avatar sx={{ bgcolor: deepOrange[500] }}>
                  <AttractionsIcon />
                </Avatar>
              </Stack>
            </CardMedia>
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="h6" gutterBottom>
                Unlimited revisions
              </Typography>
              <Typography variant="body2" color={"GrayText"}>
                The time is now to be okay to be the greatest you. Would you
                believe in what you believe in?
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;

import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import { CustomTypography } from "../../allcomponents/AllComponents";

import C1 from "../../Images/content-img1.png";
import C2 from "../../Images/content-img2.png";
import C3 from "../../Images/content-img3.png";
import C4 from "../../Images/content-img4.png";
import C5 from "../../Images/content-img5.png";
import C6 from "../../Images/content-img6.png";

const color = blue[700];

const Contents = () => {
  return (
    <Box>
      <Container>
        <Grid
          container
          item
          xs={8}
          flexDirection="column"
          alignItems="center"
          mx="auto"
          textAlign="center"
          mb={6}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              sx={{
                mb: 4,
                border: 1,
                width: "8rem",
                height: "2rem",
                borderRadius: "9px",
                textAlign: "center",
                bgcolor: color,
                color: "white",
              }}
            >
              <CustomTypography align="center">Adventures</CustomTypography>
            </Box>
          </Box>
          <Typography
            variant="h4"
            mb={3}
            color="text"
            fontWeight="bold"
            textTransform="uppercase"
          >
            Explore our tours around the world
          </Typography>
          <Typography
            variant="body2"
            color={"GrayText"}
            sx={{ fontSize: "lg" }}
          >
            If you can&apos;t decide, the answer is no. If two equally difficult
            paths, choose the one more painful in the short term (pain avoidance
            is creating an illusion of equality).
          </Typography>
        </Grid>

        <Grid container spacing={3} minHeight="60vh">
          <Grid item xs={5} sm={4}>
            <Box
              width="100%"
              height="100%"
              shadow="md"
              sx={{
                backgroundImage: `url(${C1})`,
                backgroundSize: "cover",
                borderRadius: "12px",
              }}
            />
          </Grid>
          <Grid item xs={7} sm={3}>
            <Box
              width="100%"
              height="100%"
              shadow="md"
              sx={{
                backgroundImage: `url(${C2})`,
                backgroundSize: "cover",
                borderRadius: "12px",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <Box
              width="100%"
              height="100%"
              shadow="md"
              sx={{
                backgroundImage: `url(${C3})`,
                backgroundSize: "cover",
                borderRadius: "12px",
              }}
            />
          </Grid>
          <Grid item xs={7} sm={3}>
            <Box
              width="100%"
              height="100%"
              shadow="md"
              sx={{
                backgroundImage: `url(${C4})`,
                backgroundSize: "cover",
                borderRadius: "12px",
              }}
            />
          </Grid>
          <Grid item xs={5}>
            <Box
              width="100%"
              height="100%"
              shadow="md"
              sx={{
                backgroundImage: `url(${C5})`,
                backgroundSize: "cover",
                borderRadius: "12px",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              width="100%"
              height="100%"
              shadow="md"
              sx={{
                backgroundImage: `url(${C6})`,
                backgroundSize: "cover",
                borderRadius: "12px",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contents;

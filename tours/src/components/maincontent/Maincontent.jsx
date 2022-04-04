import React from "react";

import {
  Box,
  Link,
  Card,
  Grid,
  Avatar,
  Typography,
  CardContent,
  Container,
} from "@mui/material";
import { TourCard } from "../../allcomponents/AllComponents";
import POSTS from "../../_mocks_/blog";

const Maincontent = () => {
  return (
    <Box>
      <Container>
        <Grid container spacing={3}>
          {POSTS.map((post, index) => (
            <TourCard key={post.id} post={post} index={index} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Maincontent;

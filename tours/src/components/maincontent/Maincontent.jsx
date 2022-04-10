import React, { useState, useEffect } from "react";

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
import { getAllTours } from "../../api/testApi/testapi.js";

const Maincontent = () => {
  const [tour, setTour] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    getAllTours(signal).then((data) => {
      console.log(data);
      if (data.error) {
        console.log(data.error);
      } else {
        setTour(data.tour);
      }
    });

    return function cleanup() {
      return abortController.abort();
    };
  }, []);
  return (
    <Box>
      <Container>
        <Grid container spacing={3}>
          {tour.map((post, index) => (
            <TourCard key={post.id} post={post} index={index} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Maincontent;

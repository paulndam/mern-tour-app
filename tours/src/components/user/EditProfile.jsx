import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  CardHeader,
  TextField,
} from "@mui/material";
import Face1 from "../../Images/face1.png";

const user = {
  avatar: Face1,
  city: "Los Angeles",
  country: "USA",
  jobTitle: "Senior Developer",
  name: "Katarina Smith",
  timezone: "GTM-7",
};

const states = [
  {
    value: "alabama",
    label: "Alabama",
  },
  {
    value: "new-york",
    label: "New York",
  },
  {
    value: "san-francisco",
    label: "San Francisco",
  },
];

const EditProfile = () => {
  const [values, setValues] = useState({
    firstName: "Katarina",
    lastName: "Smith",
    email: "demo@devias.io",
    phone: "",
    state: "Alabama",
    country: "USA",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <Box component="main" sx={{ flex: 1, py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ mb: 3 }}>
          Edit Your Account
        </Typography>
        <Grid container spacing={3}>
          {/*Picture Upload section*/}
          <Grid item lg={4} md={6} xs={12}>
            <Card>
              <CardContent>
                <Box
                  sx={{
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Avatar
                    src={user.avatar}
                    sx={{ height: 64, mb: 2, width: 64 }}
                  />
                  <Typography color="textPrimary" gutterBottom variant="h5">
                    {user.name}
                  </Typography>
                  <Typography color="textSecondary" variant="body2">
                    {`${user.city} ${user.country}`}
                  </Typography>
                  <Typography color="textSecondary" variant="body2">
                    {user.timezone}
                  </Typography>
                </Box>
              </CardContent>
              <Divider />
              <CardActions>
                <Button color="primary" fullWidth variant="text">
                  Upload picture
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/* Form Section */}
          <Grid item lg={8} md={6} xs={12}>
            <form
              autoComplete="off"
              noValidate
              //   {...props}
            >
              <Card>
                <CardHeader
                  subheader="The information can be edited"
                  title="Profile"
                />
                <Divider />
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        helperText="Please specify the first name"
                        label="First name"
                        name="firstName"
                        onChange={handleChange}
                        required
                        value={values.firstName}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Last name"
                        name="lastName"
                        onChange={handleChange}
                        required
                        value={values.lastName}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        onChange={handleChange}
                        required
                        value={values.email}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        onChange={handleChange}
                        type="number"
                        value={values.phone}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Country"
                        name="country"
                        onChange={handleChange}
                        required
                        value={values.country}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Select State"
                        name="state"
                        onChange={handleChange}
                        required
                        select
                        SelectProps={{ native: true }}
                        value={values.state}
                        variant="outlined"
                      >
                        {states.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </TextField>
                    </Grid>
                  </Grid>
                </CardContent>
                <Divider />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    p: 2,
                  }}
                >
                  <Button color="primary" variant="contained">
                    Save details
                  </Button>
                </Box>
              </Card>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default EditProfile;

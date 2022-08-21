import React, { useContext } from "react";
import {
  Container,
  Button,
  Grid,
  Paper,
  TextField,
  Avatar,
  Box,
  Typography,
  CircularProgress,
  Stack,
} from "@mui/material";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import { useFormik } from "formik";
import UniversityContext from "../../../context/UniversityContext";
import { itemFoundSchema } from "../../../schema/ItemFoundSchema";

const ItemFound = () => {
  const { loading } = useContext(UniversityContext);

  const onSubmit = (values, action) => {
    console.log(values, action);
    action.resetForm();
  };

  const itemFound = useFormik({
    initialValues: {
      item: "",
      dateFound: new Date().toDateString(),
      placeFound: "",
      itemFound: true,
    },
    validationSchema: itemFoundSchema,
    onSubmit,
  });

  return (

      <Box sx={{ minHeight: "100vh" }}>
        <Container maxWidth="sm">
          <Grid
            container
            spacing={2}
            direction="column"
            justifyContent="center"
            style={{ minHeight: "100vh" }}
          >
            <Paper elelvation={2} sx={{ padding: 5 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar
                  sx={{
                    height: "50px",
                    width: "50px",
                    bgcolor: "green",
                  }}
                >
                  <TravelExploreIcon />
                </Avatar>
                <Typography
                  variant="h6"
                  sx={{ marginBottom: "1rem", fontWeight: "bold" }}
                >
                  Item Found Form
                </Typography>
              </Box>
              <form
                autoComplete="off"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
                onSubmit={itemFound.handleSubmit}
              >
                <TextField
                  type="text"
                  id="item"
                  size="small"
                  label="Item Name"
                  variant="outlined"
                  value={itemFound.values.item}
                  onChange={itemFound.handleChange}
                  onBlur={itemFound.handleBlur}
                  error={
                    itemFound.errors.item && itemFound.touched.item
                      ? true
                      : false
                  }
                  helperText={itemFound.touched.item && itemFound.errors.item}
                  required
                />

                <TextField
                  type="text"
                  id="placeFound"
                  size="small"
                  label="placeFound"
                  variant="outlined"
                  value={itemFound.values.placeFound}
                  onChange={itemFound.handleChange}
                  onBlur={itemFound.handleBlur}
                  error={
                    itemFound.errors.placeFound && itemFound.touched.placeFound
                      ? true
                      : false
                  }
                  helperText={
                    itemFound.touched.placeFound && itemFound.errors.placeFound
                  }
                  required
                />

                {loading ? (
                  <Stack
                    sx={{ justifyContent: "center", flexDirection: "row" }}
                  >
                    <CircularProgress />
                  </Stack>
                ) : (
                  <Button variant="contained" type="submit">
                    confirm
                  </Button>
                )}
              </form>
              <Grid item mt={1}>
                <Typography sx={{ fontSize: "0.7rem" }}>
                  No Account ? click here to <a href="/signup">Register</a>
                </Typography>
              </Grid>
            </Paper>
          </Grid>
        </Container>
      </Box>

  );
};

export default ItemFound;

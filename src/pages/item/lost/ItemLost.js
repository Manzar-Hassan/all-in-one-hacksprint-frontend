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
import SearchOffIcon from "@mui/icons-material/SearchOff";
import { useFormik } from "formik";
import UniversityContext from "../../../context/UniversityContext";
import { itemLostSchema } from "../../../schema/ItemLostSchema";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const ItemLost = () => {
  const { loading, setLoading } = useContext(UniversityContext);
  const navigate = useNavigate();

  const onSubmit = async (values, action) => {
    const url = "https://all-in-one-05.herokuapp.com/item-lost";

    try {
      setLoading(true);
      await axios
        .post(url, itemLost.values)
        .then(({ data }) => alert(data.msg));
      setLoading(false);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
    action.resetForm();
  };

  const itemLost = useFormik({
    initialValues: {
      lostItem: "",
      dateLost: new Date().toDateString(),
      placeLost: "",
      itemFound: false,
    },
    validationSchema: itemLostSchema,
    onSubmit,
  });

  return (
    <Box sx={{ minHeight: "100vh" }}>
      {console.log(itemLost.values)}
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
                  bgcolor: "red",
                }}
              >
                <SearchOffIcon />
              </Avatar>
              <Typography
                variant="h6"
                sx={{ marginBottom: "1rem", fontWeight: "bold" }}
              >
                Item Lost Form
              </Typography>
            </Box>
            <form
              autoComplete="off"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
              onSubmit={itemLost.handleSubmit}
            >
              <TextField
                type="text"
                id="lostItem"
                size="small"
                label="Item Name"
                variant="outlined"
                value={itemLost.values.lostItem}
                onChange={itemLost.handleChange}
                onBlur={itemLost.handleBlur}
                error={
                  itemLost.errors.lostItem && itemLost.touched.lostItem
                    ? true
                    : false
                }
                helperText={
                  itemLost.touched.lostItem && itemLost.errors.lostItem
                }
                required
              />

              <TextField
                type="text"
                id="placeLost"
                size="small"
                label="placeFound"
                variant="outlined"
                value={itemLost.values.placeLost}
                onChange={itemLost.handleChange}
                onBlur={itemLost.handleBlur}
                error={
                  itemLost.errors.placeLost && itemLost.touched.placeLost
                    ? true
                    : false
                }
                helperText={
                  itemLost.touched.placeLost && itemLost.errors.placeLost
                }
                required
              />

              {loading ? (
                <Stack sx={{ justifyContent: "center", flexDirection: "row" }}>
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
                Found Something? <Link to="/itemFound">Found page</Link>
              </Typography>
            </Grid>
          </Paper>
        </Grid>
      </Container>
    </Box>
  );
};

export default ItemLost;

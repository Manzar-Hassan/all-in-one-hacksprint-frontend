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
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import UniversityContext from "../../context/UniversityContext";
import FoodMenu from "../../components/menu/FoodMenu.json";
import { useFormik } from "formik";
import { orderSchema } from "../../schema/OrderSchema";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const OrderFood = () => {
  const { loading, setLoading } = useContext(UniversityContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    const url = "https://all-in-one-05.herokuapp.com/orders";
    const paymenyURL = "https://all-in-one-05.herokuapp.com/order-confirm";
    e.preventDefault();

    if (!order.values.amount) {
      alert("Select atleast one food!!");
      return;
    }
    try {
      setLoading(true);
      await axios.post(url, order.values).then(({ data }) => alert(data.msg));
      await axios
        .post(paymenyURL, order.values)
        .then(({ data }) =>
          alert("Your purchase details has been sent to your E-mail!!")
        );
      setLoading(false);
      navigate("/orderSuccess");
    } catch (error) {
      console.log(error);
    }
  };

  const order = useFormik({
    initialValues: {
      mail: "",
      orderPerson: "",
      selectedFood: [],
      amount: 0,
    },
    validationSchema: orderSchema,
    handleSubmit,
  });

  const handleChange = (e) => {
    const selectedFood = order.values.selectedFood;
    const amount = order.values.amount;
    const [{ price }] = FoodMenu.filter((food) => food.name === e.target.value);

    if (selectedFood.includes(e.target.value)) {
      const filteredFood = selectedFood.filter(
        (food) => food !== e.target.value
      );

      order.setValues({
        ...order.values,
        selectedFood: filteredFood,
        amount: amount - price,
      });

      return;
    }
    order.setValues({
      ...order.values,
      selectedFood: [...selectedFood, e.target.value],
      amount: amount + price,
    });
  };

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
                  bgcolor: "#f6be00",
                }}
              >
                <LocalDiningIcon />
              </Avatar>
              <Typography
                variant="h6"
                sx={{ marginBottom: "1rem", fontWeight: "bold" }}
              >
                Order Food
              </Typography>
            </Box>
            <form
              autoComplete="off"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <TextField
                type="text"
                id="orderPerson"
                size="small"
                label="Username"
                variant="outlined"
                value={order.values.orderPerson}
                onChange={order.handleChange}
                onBlur={order.handleBlur}
                error={
                  order.errors.orderPerson && order.touched.orderPerson
                    ? true
                    : false
                }
                helperText={
                  order.touched.orderPerson && order.errors.orderPerson
                }
                required
              />
              <TextField
                type="email"
                id="mail"
                size="small"
                label="email"
                variant="outlined"
                value={order.values.mail}
                onChange={order.handleChange}
                onBlur={order.handleBlur}
                error={
                  order.errors.mail && order.touched.mail
                    ? true
                    : false
                }
                helperText={
                  order.touched.mail && order.errors.mail
                }
                required
              />

              <Grid container>
                <Grid item xs={12}>
                  <Typography variant="h6" fontWeight="bold">
                    Select Food
                  </Typography>
                </Grid>
                {FoodMenu.map((food, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <FormControlLabel
                      control={
                        <Checkbox onChange={handleChange} value={food.name} />
                      }
                      label={food.name}
                      required
                    />
                  </Grid>
                ))}
              </Grid>

              {loading ? (
                <Stack sx={{ justifyContent: "center", flexDirection: "row" }}>
                  <CircularProgress />
                </Stack>
              ) : (
                <Button
                  variant="contained"
                  type="submit"
                  onClick={handleSubmit}
                >
                  confirm
                </Button>
              )}
            </form>
            <Grid item mt={1}>
              <Typography sx={{ fontSize: "0.7rem" }}>
                Go to <Link to="/">Dashboard</Link>
              </Typography>
            </Grid>
          </Paper>
        </Grid>
      </Container>
    </Box>
  );
};

export default OrderFood;

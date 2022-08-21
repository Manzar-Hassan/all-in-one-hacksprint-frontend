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
import ReportIcon from "@mui/icons-material/Report";
import { useFormik } from "formik";
import UniversityContext from "../../context/UniversityContext";
import { reportSchema } from "../../schema/ReportSchema";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Report = () => {
  const { loading, setLoading } = useContext(UniversityContext);
  const navigate = useNavigate();

  const onSubmit = async (values, action) => {
    const url = "https://all-in-one-05.herokuapp.com/reports";

    try {
      setLoading(true);
      await axios.post(url, report.values).then(({ data }) => alert(data.msg));
      setLoading(false);
      navigate("/reportSuccess");
    } catch (error) {
      console.log(error);
    }
    action.resetForm();
  };

  const report = useFormik({
    initialValues: {
      username: "",
      email: "",
      query: "",
    },
    validationSchema: reportSchema,
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
                  bgcolor: "#ff0080",
                }}
              >
                <ReportIcon />
              </Avatar>
              <Typography
                variant="h6"
                sx={{ marginBottom: "1rem", fontWeight: "bold" }}
              >
                Report
              </Typography>
            </Box>
            <form
              autoComplete="off"
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
              onSubmit={report.handleSubmit}
            >
              <TextField
                type="text"
                id="username"
                size="small"
                label="Username"
                variant="outlined"
                value={report.values.username}
                onChange={report.handleChange}
                onBlur={report.handleBlur}
                error={
                  report.errors.username && report.touched.username
                    ? true
                    : false
                }
                helperText={report.touched.username && report.errors.username}
                required
              />
              <TextField
                type="email"
                id="email"
                size="small"
                label="email"
                variant="outlined"
                value={report.values.email}
                onChange={report.handleChange}
                onBlur={report.handleBlur}
                error={
                  report.errors.email && report.touched.email ? true : false
                }
                helperText={report.touched.email && report.errors.email}
                required
              />
              <TextField
                type="text"
                id="query"
                size="small"
                label="query"
                variant="outlined"
                value={report.values.query}
                onChange={report.handleChange}
                onBlur={report.handleBlur}
                error={
                  report.errors.query && report.touched.query ? true : false
                }
                helperText={report.touched.query && report.errors.query}
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
                Back to <Link to="/">Dashboard</Link>
              </Typography>
            </Grid>
          </Paper>
        </Grid>
      </Container>
    </Box>
  );
};

export default Report;

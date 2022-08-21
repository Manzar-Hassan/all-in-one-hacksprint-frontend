import React from "react";
import {
  Container,
  Grid,
  Paper,
  Box,
  styled,
  Typography,
  CircularProgress,
} from "@mui/material";
import DoughnutChart from "../../components/charts/DonutChart";
import LineChart from "../../components/charts/LineChart";
import CleanInfoCard from "../../components/cards/CleanInfoCard";
import Topper from "../../components/cards/Topper";
import AttendenceCard from "../../components/cards/Attendence";
import PerformanceCard from "../../components/cards/PerformanceCard";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Dashboard = () => {
  return (
    <>
      <Container>
        {false ? (
          <CircularProgress sx={{ color: "#000" }} />
        ) : (
          <>
            <Typography
              variant="h4"
              sx={{ color: "#495057", fontWeight: "bold" }}
              mt={3}
              mb={3}
            >
              Our Achievements
            </Typography>
            <Box sx={{ flexGrow: 1 }} my={5}>
              <Grid container spacing={5} sx={{justifyContent:"center"}}>
                <Grid item xs={12} sm={6} md={4}>
                  <Topper />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <AttendenceCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <PerformanceCard />
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="h4"
                    sx={{ color: "#495057", fontWeight: "bold" }}
                    mt={5}
                  >
                    Our Aim
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <CleanInfoCard />
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Item>
                    <LineChart />
                  </Item>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Item>
                    <DoughnutChart />
                  </Item>
                </Grid>
              </Grid>
            </Box>
          </>
        )}
      </Container>
    </>
  );
};

export default Dashboard;

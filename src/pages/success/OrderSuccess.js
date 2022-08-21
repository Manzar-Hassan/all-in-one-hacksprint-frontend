import { Button, Container, Stack, Typography } from "@mui/material";
import DiningIcon from "@mui/icons-material/Dining";
import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSuccess = () => {
  const navigate = useNavigate()

  return (
    <Container>
      <Stack
        sx={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <DiningIcon sx={{ color: "blue", height: "200px", width: "200px" }} />
        <Typography sx={{ marginBottom: "2rem", fontSize: "3rem" }}>
          Order Successful!!
        </Typography>
        <Button onClick={()=>navigate("/")}>Return to DashBoard</Button>
      </Stack>
    </Container>
  );
};

export default OrderSuccess;

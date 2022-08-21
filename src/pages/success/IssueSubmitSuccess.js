import { Button, Container, Stack, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import React from "react";
import { useNavigate } from "react-router-dom";

const IssueSubmitSuccess = () => {
  const navigate = useNavigate();

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
        <CheckIcon sx={{ color: "green", height: "200px", width: "200px" }} />
        <Typography variant="h3" sx={{ marginBottom: "2rem" }}>
          Report Submitted Successfully...
        </Typography>
        <Button onClick={() => navigate("/")}>Return to DashBoard</Button>
      </Stack>
    </Container>
  );
};

export default IssueSubmitSuccess;

import React from "react";
import { Avatar, Card, CardContent, Stack, Typography, Box } from "@mui/material";
import PresentToAllIcon from "@mui/icons-material/PresentToAll";

const AttendenceCard = () => {
  return (
    <Card sx={{ maxWidth: 345, borderLeft: "3px solid #ff9800" }}>
      <CardContent>
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            gap: 5,
          }}
        >
          <Avatar variant="rounded" sx={{ bgcolor: "#ff9800" }}>
            <PresentToAllIcon />
          </Avatar>
          <Box textAlign="center">
            <Typography fontWeight="bold" color="#495057">
              Overall Attendence
            </Typography>
            <Typography sx={{ color: "#495057", fontWeight: "bold" }}>
              90.78%
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default AttendenceCard;
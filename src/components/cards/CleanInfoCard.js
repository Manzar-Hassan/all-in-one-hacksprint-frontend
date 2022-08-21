import {
  Avatar,
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import React from "react";

const CleanInfoCard = () => {
  return (
    <Card sx={{ borderLeft: "3px solid #9c27b0" }} >
      <CardContent>
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            gap: 5,
          }}
        >
          <Avatar variant="rounded" sx={{ bgcolor: "#9c27b0" }}>
            <DataUsageIcon />
          </Avatar>
          <Box textAlign="center">
            <Typography fontWeight="bold" color="#495057"></Typography>
            <Typography
              component={"div"}
              sx={{ color: "#495057", fontWeight: "bold" }}
            >
              Cleanliness means keeping ourselves neat and clean by avoiding
              dirt. It is the best practice to keep everything clean. Here's our
              All time record for Cleaniliness practices and Academic Results..
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CleanInfoCard;

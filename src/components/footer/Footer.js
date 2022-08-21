import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box>
      <AppBar sx={{ background: "#000", position: "static" }}>
        <Toolbar>
          <Typography fontSize="small" sx={{ color: "grey" }} mx="auto">
            All-in-one &copy; Hacksprint - {new Date().getFullYear()}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Footer;

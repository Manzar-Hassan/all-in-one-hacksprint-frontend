import React, { useContext, useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Stack,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import HamburgerMenu from "./HamburgerMenu";
import UniversityContext from "../../context/UniversityContext";

const Navbar = () => {
  const [value, setValue] = useState(0);
  const { loginUser, setIsLoggedIn } = useContext(UniversityContext);
  const navigate = useNavigate();

  const changeHandler = (event, value) => {
    setValue(value);
    value === 0
      ? navigate("/order")
      : value === 1
      ? navigate("/report")
      : navigate("/itemFound");
  };

  const handleClick = () => {
    alert("you will be logged out!!");
    setIsLoggedIn(false);
    navigate("/signin");
  };

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <AppBar sx={{ background: "#000", position: "sticky" }}>
        <Toolbar>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Box
              sx={{
                color: "#fff",
                display: "flex",
                alignItems: "center",
              }}
              onClick={() => setValue(0)}
            >
              <AcUnitIcon />
              <Typography sx={{ marginLeft: "5px" }}>All-in-one</Typography>
            </Box>
          </Link>
          {isMatch ? (
            <>
              <HamburgerMenu />
            </>
          ) : (
            <>
              <Tabs
                textColor="inherit"
                value={value}
                onChange={changeHandler}
                indicatorColor="primary"
                sx={{ marginLeft: "auto" }}
              >
                <Tab label="Food" />
                <Tab label="Report" />
                <Tab label="Item" />
              </Tabs>
              <Stack
                direction="row"
                sx={{ marginLeft: "auto", alignItems: "center", gap: "0.5rem" }}
                onClick={handleClick}
              >
                <Avatar
                  src="https://picsum.photos/50/50"
                  sx={{ height: "2rem", width: "2rem" }}
                />
                <Typography>{loginUser}</Typography>
              </Stack>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;

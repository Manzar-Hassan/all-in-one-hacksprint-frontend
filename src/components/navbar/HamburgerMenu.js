import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import ReportIcon from '@mui/icons-material/Report';
import { useNavigate } from "react-router-dom";

const HamburgerMenu = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const navigate = useNavigate();

  const changeHandler = (e) => {
    if (e.target.innerText === "STUDENTS") {
      setOpenDrawer(false);
      navigate("/");
    } else if (e.target.innerText === "TEACHERS") {
      setOpenDrawer(false);
      navigate("/teachers");
    }
  };

  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <ListItemText>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                    onClick={changeHandler}
                  >
                    <LocalDiningIcon />
                    FOOD
                  </Box>
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <ListItemText>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                    onClick={changeHandler}
                  >
                    <ReportIcon />
                    REPORT
                  </Box>
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <IconButton
        sx={{ marginLeft: "auto", color: "white" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default HamburgerMenu;

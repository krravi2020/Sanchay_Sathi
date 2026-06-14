import { useState } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const navigate = useNavigate();

  const { isLoggedIn, user, logout } =
    useAuth();

  const [anchorEl, setAnchorEl] =
    useState<null | HTMLElement>(null);

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const open = Boolean(anchorEl);

  const handleProfileClick = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navItems = [
    {
      label: "A",
      path: "/a",
    },
    {
      label: "B",
      path: "/b",
    },
    {
      label: "C",
      path: "/c",
    },
    {
      label: "D",
      path: "/d",
    },
  ];

  return (
    <>
      <AppBar
        position="sticky"
        color="primary"
      >
        <Toolbar>
          {/* Mobile Menu Button */}

          <IconButton
            color="inherit"
            edge="start"
            sx={{
              display: {
                xs: "flex",
                md: "none",
              },
              mr: 2,
            }}
            onClick={() =>
              setMobileOpen(true)
            }
          >
            <MenuIcon />
          </IconButton>

          {/* Logo */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              flexGrow: 1,
            }}
            onClick={() =>
              navigate("/")
            }
          >
            {/* Replace with actual logo image later */}

            <Typography
              variant="h5"
              fontWeight="bold"
            >
              AA Wealth
            </Typography>
          </Box>

          {/* Desktop Navigation */}

          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              gap: 1,
              mr: 2,
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.label}
                color="inherit"
                onClick={() =>
                  navigate(item.path)
                }
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Profile Avatar */}

          <IconButton
            onClick={handleProfileClick}
            color="inherit"
          >
            <Avatar
              sx={{
                bgcolor:
                  "secondary.main",
              }}
            >
              {isLoggedIn
                ? user?.name
                    ?.charAt(0)
                    ?.toUpperCase()
                : "P"}
            </Avatar>
          </IconButton>

          {/* Profile Menu */}

          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            {!isLoggedIn && (
              <>
                <MenuItem
                  onClick={() => {
                    navigate("/login");
                    handleClose();
                  }}
                >
                  Login
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    handleClose();
                  }}
                >
                  Register
                </MenuItem>
              </>
            )}

            {isLoggedIn && (
              <>
                <MenuItem
                  onClick={() => {
                    navigate("/wealth");
                    handleClose();
                  }}
                >
                  My Wealth
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    navigate("/profile-setup");
                    handleClose();
                  }}
                >
                  Profile
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    navigate("/goals");
                    handleClose();
                  }}
                >
                  Goals
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    navigate("/assets");
                    handleClose();
                  }}
                >
                  Assets
                </MenuItem>

                <Divider />

                <MenuItem
                  onClick={() => {
                    logout();
                    handleClose();
                    navigate("/");
                  }}
                >
                  Logout
                </MenuItem>
              </>
            )}
          </Menu>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}

      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={() =>
          setMobileOpen(false)
        }
      >
        <Box
          sx={{
            width: 260,
          }}
        >
          <Box
            sx={{
              p: 2,
            }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
            >
              AA Wealth
            </Typography>
          </Box>

          <Divider />

          <List>
            {navItems.map((item) => (
              <ListItemButton
                key={item.label}
                onClick={() => {
                  navigate(item.path);
                  setMobileOpen(
                    false
                  );
                }}
              >
                <ListItemText
                  primary={
                    item.label
                  }
                />
              </ListItemButton>
            ))}
          </List>

          <Divider />

          <List>
            {!isLoggedIn ? (
              <ListItemButton
                onClick={() => {
                  navigate("/login");
                  setMobileOpen(
                    false
                  );
                }}
              >
                <ListItemText primary="Login" />
              </ListItemButton>
            ) : (
              <>
                <ListItemButton
                  onClick={() => {
                    navigate(
                      "/wealth"
                    );
                    setMobileOpen(
                      false
                    );
                  }}
                >
                  <ListItemText primary="My Wealth" />
                </ListItemButton>

                <ListItemButton
                  onClick={() => {
                    navigate(
                      "/profile"
                    );
                    setMobileOpen(
                      false
                    );
                  }}
                >
                  <ListItemText primary="Profile" />
                </ListItemButton>

                <ListItemButton
                  onClick={() => {
                    navigate(
                      "/goals"
                    );
                    setMobileOpen(
                      false
                    );
                  }}
                >
                  <ListItemText primary="Goals" />
                </ListItemButton>

                <ListItemButton
                  onClick={() => {
                    navigate(
                      "/assets"
                    );
                    setMobileOpen(
                      false
                    );
                  }}
                >
                  <ListItemText primary="Assets" />
                </ListItemButton>

                <ListItemButton
                  onClick={() => {
                    logout();
                    navigate("/");
                    setMobileOpen(
                      false
                    );
                  }}
                >
                  <ListItemText primary="Logout" />
                </ListItemButton>
              </>
            )}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
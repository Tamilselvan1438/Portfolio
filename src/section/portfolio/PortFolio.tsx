import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  CssBaseline,
  Drawer,
  Fab,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme
} from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Route, Routes, To, useNavigate } from "react-router-dom";
import About from "../about/About";
import Contacts from "../contacts/contacts";
import Home from "../home/Home";
import Projects from "../projects/Projects";

const Portfolio = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Check scroll position for navbar effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (nav: To) => {
    navigate(nav);
    setDrawerOpen(false); // Close drawer on navigation
  };

  // Theme configuration
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? "#90caf9" : "#1976d2",
      },
      secondary: {
        main: darkMode ? "#f48fb1" : "#d81b60",
      },
    },
  });

  // Nav items for reuse in Drawer/AppBar
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contacts", path: "/contacts" },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          background: darkMode
            ? "linear-gradient(135deg, #121212 0%, #1e1e1e 100%)"
            : "linear-gradient(135deg, #e3f2fd 0%, #fce4ec 100%)",
          transition: "background 0.5s ease",
        }}
      >
        {/* Animated AppBar */}
        <AppBar
          position="fixed"
          sx={{
            background: darkMode
              ? "rgba(18, 18, 18, 0.8)"
              : "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(10px)",
            boxShadow: scrolled ? 4 : 0,
            transition: "all 0.3s ease",
          }}
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            {/* Logo with Gradient Text */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar
                src="../image/logo1.png"
                alt="Logo"
                sx={{
                  bgcolor: "transparent",
                  mr: 1,
                  filter: darkMode ? "invert(1)" : "none",
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  background:
                    "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Tamil Selvan
              </Typography>
            </Box>

            {/* Desktop Nav */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="outlined"
                  onClick={() => handleClick(item.path)}
                  sx={{
                    transition: "transform 0.3s",
                    "&:hover": { transform: "translateY(-2px)" },
                  }}
                >
                  {item.name}
                </Button>
              ))}
              <Button onClick={() => setDarkMode(!darkMode)} sx={{ ml: 2 }}>
                {darkMode ? "☀️ Light" : "🌙 Dark"}
              </Button>
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              color="inherit"
              onClick={() => setDrawerOpen(true)}
              sx={{ display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* Mobile Drawer */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          PaperProps={{
            sx: {
              background: darkMode ? "#121212" : "rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(10px)",
            },
          }}
        >
          <List sx={{ width: 250 }}>
            {navItems.map((item) => (
              <ListItem key={item.name} disablePadding>
                <ListItemButton onClick={() => handleClick(item.path)}>
                  <ListItemText
                    primary={item.name}
                    primaryTypographyProps={{
                      color: darkMode ? "white" : "black",
                      fontWeight: "medium",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem>
              <Button
                fullWidth
                onClick={() => setDarkMode(!darkMode)}
                sx={{ mt: 2 }}
              >
                {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
              </Button>
            </ListItem>
          </List>
        </Drawer>

        {/* Main Content with Fade Animation */}
        <Box component="main" sx={{ pt: 10, px: 3 }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contacts" element={<Contacts />} />
            </Routes>
          </motion.div>
        </Box>

        {/* Floating Contact Button */}
        <Fab
          color="primary"
          sx={{
            position: "fixed",
            bottom: 32,
            right: 32,
            "&:hover": { transform: "scale(1.1)" },
          }}
          onClick={() => handleClick("/contacts")}
        >
          <MailIcon />
        </Fab>

        {/* Footer */}
        <Box
          component="footer"
          textAlign="center"
          sx={{ py: 3, mt: 4, background: "transparent" }}
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} Tamil Selvan. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Portfolio;

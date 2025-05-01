import {
  Checklist,
  Code,
  DesignServices,
  GitHub,
  MobileFriendly,
  OpenInNew,
  TableChart,
  Web
} from "@mui/icons-material";
import {
  alpha,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Container,
  Fade,
  Grid,
  Grow,
  Typography,
  useTheme,
  Zoom,
} from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";

// Sample images (in a real app, you'd import actual images)
const projectImages = {
  ecommerce:
    "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  portfolio:
    "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  api: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  todo: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  table:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  mobile:
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
};

const Projects = () => {
  const theme = useTheme();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with React, Node.js, and MongoDB featuring product management, cart functionality, and secure checkout.",
      tags: ["React", "Node.js", "MongoDB", "Redux", "JWT"],
      icon: <Web />,
      github: "#",
      liveDemo: "#",
      accentColor: theme.palette.primary.main,
      image: projectImages.ecommerce,
      features: [
        "Product catalog",
        "Shopping cart",
        "Payment processing",
        "Admin dashboard",
      ],
    },
    {
      title: "Portfolio Builder",
      description:
        "Drag-and-drop portfolio builder with real-time previews, template selection, and export functionality.",
      tags: ["TypeScript", "Firebase", "Material UI", "DnD", "React Hook Form"],
      icon: <DesignServices />,
      github: "#",
      liveDemo: "#",
      accentColor: theme.palette.secondary.main,
      image: projectImages.portfolio,
      features: [
        "Drag & drop interface",
        "10+ templates",
        "PDF export",
        "Responsive design",
      ],
    },
    {
      title: "API Dashboard",
      description:
        "Analytics dashboard for monitoring API performance with customizable widgets and historical data visualization.",
      tags: ["React", "Chart.js", "REST API", "WebSockets", "Jest"],
      icon: <Code />,
      github: "#",
      liveDemo: "#",
      accentColor: theme.palette.error.main,
      image: projectImages.api,
      features: [
        "Real-time monitoring",
        "Custom widgets",
        "Performance metrics",
        "Alert system",
      ],
    },
    {
      title: "Smart Todo App",
      description:
        "Advanced todo application with priority management, deadlines, and productivity analytics.",
      tags: ["React", "Firebase", "Context API", "Date-fns", "Chart.js"],
      icon: <Checklist />,
      github: "#",
      liveDemo: "#",
      accentColor: theme.palette.info.main,
      image: projectImages.todo,
      features: [
        "Task prioritization",
        "Deadline tracking",
        "Productivity stats",
        "Dark mode",
      ],
    },
    {
      title: "Table Manager Pro",
      description:
        "Powerful data table component with filtering, sorting, pagination, and Excel export capabilities.",
      tags: ["React", "Material UI", "XLSX", "React Table", "Formik"],
      icon: <TableChart />,
      github: "#",
      liveDemo: "#",
      accentColor: theme.palette.warning.main,
      image: projectImages.table,
      features: [
        "Advanced filtering",
        "Excel export",
        "Customizable columns",
        "Bulk actions",
      ],
    },
    {
      title: "Mobile Fitness App",
      description:
        "Cross-platform mobile application for workout tracking with exercise library and progress charts.",
      tags: [
        "React Native",
        "Expo",
        "Firebase",
        "Reanimated",
        "Victory Native",
      ],
      icon: <MobileFriendly />,
      github: "#",
      liveDemo: "#",
      accentColor: theme.palette.success.main,
      image: projectImages.mobile,
      features: [
        "300+ exercises",
        "Workout plans",
        "Progress tracking",
        "Offline support",
      ],
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: 8,
        overflow: "hidden",
        "&:before": {
          content: '""',
          position: "absolute",
          top: -100,
          height: 400,
          borderRadius: "50%",
          background: `radial-gradient(${alpha(
            theme.palette.primary.light,
            0.2
          )} 0%, transparent 70%)`,
          zIndex: 0,
        },
        "&:after": {
          content: '""',
          position: "absolute",
          bottom: -150,
          left: -150,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: `radial-gradient(${alpha(
            theme.palette.secondary.light,
            0.2
          )} 0%, transparent 70%)`,
          zIndex: 0,
        },
      }}
      id="projects"
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Fade in timeout={800}>
          <Box textAlign="center" mb={8}>
            <Typography
              variant="h2"
              component={motion.h1}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              gutterBottom
              sx={{
                fontWeight: 800,
                background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
              }}
            >
              My Projects
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              sx={{ maxWidth: 700, mx: "auto" }}
            >
              Here's a collection of my recent work, showcasing full-stack
              applications, UI components, and innovative solutions.
            </Typography>
          </Box>
        </Fade>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Grow in timeout={(index + 1) * 300}>
                <Card
                  component={motion.div}
                  whileHover={{ scale: 1.03 }}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.3s ease",
                    border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                    background: `linear-gradient(145deg, ${alpha(
                      theme.palette.background.paper,
                      0.8
                    )} 0%, ${alpha(
                      theme.palette.background.default,
                      0.8
                    )} 100%)`,
                    backdropFilter: "blur(8px)",
                    boxShadow: `0 8px 32px ${alpha(
                      theme.palette.common.black,
                      0.1
                    )}`,
                    position: "relative",
                    overflow: "hidden",
                    "&:before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: 4,
                      background: `linear-gradient(90deg, ${
                        project.accentColor
                      } 0%, ${alpha(project.accentColor, 0.5)} 100%)`,
                      transform:
                        hoveredCard === index ? "scaleX(1)" : "scaleX(0)",
                      transformOrigin: "left",
                      transition: "transform 0.5s ease",
                    },
                  }}
                >
                  <Box
                    sx={{
                      height: 160,
                      background: `url(${project.image}) center/cover`,
                      position: "relative",
                      "&:after": {
                        content: '""',
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "50%",
                        background: `linear-gradient(to top, ${alpha(
                          theme.palette.background.paper,
                          0.9
                        )} 0%, transparent 100%)`,
                      },
                    }}
                  />
                  <CardHeader
                    avatar={
                      <Avatar
                        sx={{
                          bgcolor: alpha(project.accentColor, 0.1),
                          color: project.accentColor,
                          transition: "all 0.3s ease",
                          transform:
                            hoveredCard === index
                              ? "rotate(15deg) scale(1.1)"
                              : "rotate(0) scale(1)",
                        }}
                      >
                        {project.icon}
                      </Avatar>
                    }
                    title={
                      <Typography
                        variant="h6"
                        fontWeight={600}
                        sx={{ color: theme.palette.text.primary }}
                      >
                        {project.title}
                      </Typography>
                    }
                    sx={{
                      pb: 1,
                      "& .MuiCardHeader-content": {
                        overflow: "hidden",
                      },
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1, pt: 0 }}>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      paragraph
                      sx={{
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {project.description}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1,
                        mt: 2,
                        "& .MuiChip-root": {
                          transition: "all 0.3s ease",
                          transform:
                            hoveredCard === index
                              ? "translateY(-2px)"
                              : "translateY(0)",
                        },
                      }}
                    >
                      {project.tags.map((tag, i) => (
                        <Chip
                          key={i}
                          label={tag}
                          size="small"
                          variant="outlined"
                          sx={{
                            borderColor: alpha(project.accentColor, 0.3),
                            color: theme.palette.text.primary,
                            "&:hover": {
                              backgroundColor: alpha(project.accentColor, 0.1),
                              borderColor: project.accentColor,
                            },
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                  <Box sx={{ p: 2, display: "flex", gap: 2 }}>
                    <Button
                      variant="outlined"
                      startIcon={<GitHub />}
                      fullWidth
                      sx={{
                        borderWidth: 1,
                        borderColor: alpha(theme.palette.text.secondary, 0.2),
                        color: theme.palette.text.primary,
                        "&:hover": {
                          borderColor: project.accentColor,
                          color: project.accentColor,
                          backgroundColor: alpha(project.accentColor, 0.05),
                        },
                      }}
                    >
                      Code
                    </Button>
                    <Button
                      variant="contained"
                      startIcon={<OpenInNew />}
                      fullWidth
                      sx={{
                        backgroundColor: project.accentColor,
                        color: theme.palette.getContrastText(
                          project.accentColor
                        ),
                        "&:hover": {
                          backgroundColor: alpha(project.accentColor, 0.8),
                        },
                      }}
                    >
                      Demo
                    </Button>
                  </Box>
                </Card>
              </Grow>
            </Grid>
          ))}
        </Grid>

        <Zoom in={hoveredCard !== null}>
          <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{
              opacity: hoveredCard !== null ? 1 : 0,
              y: hoveredCard !== null ? 0 : 20,
            }}
            sx={{
              mt: 4,
              p: 3,
              borderRadius: 2,
              background: `linear-gradient(145deg, ${alpha(
                theme.palette.background.paper,
                0.9
              )} 0%, ${alpha(theme.palette.background.default, 0.9)} 100%)`,
              boxShadow: theme.shadows[4],
              borderLeft: `4px solid ${
                hoveredCard !== null
                  ? projects[hoveredCard].accentColor
                  : "transparent"
              }`,
              transition: "all 0.3s ease",
              display: "flex",
              gap: 3,
            }}
          >
            {hoveredCard !== null && (
              <>
                <Box
                  sx={{
                    width: 200,
                    height: 150,
                    borderRadius: 1,
                    overflow: "hidden",
                    flexShrink: 0,
                  }}
                >
                  <Box
                    component="img"
                    src={projects[hoveredCard].image}
                    sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </Box>
                <Box>
                  <Typography variant="h6" gutterBottom>
                    {projects[hoveredCard].title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {projects[hoveredCard].description}
                  </Typography>
                  <Box
                    sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}
                  >
                    {projects[hoveredCard].features.map((feature, i) => (
                      <Chip
                        key={i}
                        label={feature}
                        size="small"
                        sx={{
                          backgroundColor: alpha(
                            projects[hoveredCard].accentColor,
                            0.1
                          ),
                          color: theme.palette.text.primary,
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </>
            )}
          </Box>
        </Zoom>
      </Container>
    </Box>
  );
};

export default Projects;

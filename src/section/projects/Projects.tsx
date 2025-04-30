import { Code, DesignServices, Web } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Container,
  Grid,
  Typography,
  useTheme
} from "@mui/material";

const Projects = () => {
  const theme = useTheme();

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with React, Node.js, and MongoDB",
      tags: ["React", "Node.js", "MongoDB"],
      icon: <Web />,
    },
    {
      title: "Portfolio Builder",
      description: "Drag-and-drop portfolio builder with real-time previews",
      tags: ["TypeScript", "Firebase", "Material UI"],
      icon: <DesignServices />,
    },
    {
      title: "API Dashboard",
      description: "Analytics dashboard for monitoring API performance",
      tags: ["React", "Chart.js", "REST API"],
      icon: <Code />,
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "80vh",
        // backgroundColor: theme.palette.background.default,
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center" mb={8}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 700 }}
          >
            My Projects
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Showcasing my frontend development work and solutions
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: theme.shadows[8],
                  },
                }}
              >
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: theme.palette.primary.main }}>
                      {project.icon}
                    </Avatar>
                  }
                  title={project.title}
                  titleTypographyProps={{ variant: "h6", fontWeight: 600 }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    {project.description}
                  </Typography>
                  <Box
                    sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}
                  >
                    {project.tags.map((tag, i) => (
                      <Chip
                        key={i}
                        label={tag}
                        size="small"
                        variant="outlined"
                      />
                    ))}
                  </Box>
                </CardContent>
                <Box sx={{ p: 2 }}>
                  <Button
                    variant="outlined"
                    fullWidth
                    sx={{
                      borderWidth: 2,
                      "&:hover": { borderWidth: 2 },
                    }}
                  >
                    View Project
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;

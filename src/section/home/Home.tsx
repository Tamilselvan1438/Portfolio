import {
  Code,
  DesignServices,
  Email,
  GitHub,
  LinkedIn,
  PhoneAndroid,
  Storage
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Grid,
  IconButton,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import myPhoto from "../../image/myPhoto.jpg";

const Home = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  // const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "../image/resume.pdf";
    link.download = "Tamil_Selvan_cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const socialLinks = [
    {
      icon: <LinkedIn />,
      url: "https://www.linkedin.com/in/tamil-selvan-p-b08849354/",
    },
    { icon: <GitHub />, url: "https://github.com/Tamilselvan1438" },
    // { icon: <Twitter />, url: "#" },
    // { icon: <Email />, url: "mailto:your.email@example.com" },
  ];

  const skills = [
    { name: "React.js", icon: <Code />, level: 90 },
    { name: "JavaScript", icon: <Code />, level: 85 },
    { name: "HTML/CSS", icon: <DesignServices />, level: 95 },
    { name: "Material UI", icon: <DesignServices />, level: 80 },
    { name: "Responsive Design", icon: <PhoneAndroid />, level: 85 },
    { name: "REST APIs", icon: <Storage />, level: 75 },
  ];

  const projects = [
    {
      title: "E-commerce Dashboard",
      description:
        "Built a responsive admin dashboard with React and Chart.js for analytics",
      tags: ["React", "Material UI", "Chart.js"],
    },
    {
      title: "Portfolio Website",
      description:
        "Designed and developed a personal portfolio with animations",
      tags: ["React", "Framer Motion", "CSS3"],
    },
    {
      title: "Task Management App",
      description: "Created a drag-and-drop task board with React DnD",
      tags: ["React", "React DnD", "Firebase"],
    },
  ];

  const experience = [
    {
      role: "Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2021 - Present",
      description:
        "Developing responsive web applications using React.js and optimizing performance",
    },
    {
      role: "UI Developer",
      company: "Digital Creations",
      period: "2019 - 2021",
      description: "Implemented design systems and collaborated with UX team",
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Hero Section */}
      <Box sx={{ minHeight: "80vh", display: "flex", alignItems: "center" }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                  lineHeight: 1.2,
                  mb: 2,
                }}
              >
                Hi, I'm{" "}
                <span style={{ color: theme.palette.primary.main }}>
                  Tamil Selvan
                </span>
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
                  mb: 3,
                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Frontend Developer
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mt: 2,
                  color: "text.secondary",
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  lineHeight: 1.6,
                  mb: 4,
                }}
              >
                I specialize in building responsive, accessible, and performant
                web applications using modern technologies. With 1+ years of
                experience, I create digital solutions that are both beautiful
                and functional.
              </Typography>

              <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontWeight: "bold",
                    borderRadius: "50px",
                    boxShadow: `0 4px 15px ${theme.palette.primary.main}40`,
                    "&:hover": {
                      transform: "translateY(-3px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                  onClick={handleDownload}
                  component={motion.button}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download CV
                </Button>

                <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
                  {socialLinks.map((item, index) => (
                    <IconButton
                      key={index}
                      target="_blank"
                      href={item.url}
                      sx={{
                        color: "text.primary",
                        backgroundColor: "background.paper",
                        "&:hover": {
                          color: theme.palette.primary.main,
                        },
                      }}
                    >
                      {item.icon}
                    </IconButton>
                  ))}
                </Box>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: { xs: 250, md: 350 },
                  height: { xs: 250, md: 350 },
                }}
              >
                <Avatar
                  alt="Tamil Selvan - Frontend Developer"
                  src={myPhoto}
                  sx={{
                    width: "100%",
                    height: "100%",
                    border: `4px solid ${theme.palette.primary.main}`,
                    boxShadow: `0 10px 30px ${theme.palette.primary.main}40`,
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Box>

      {/* Skills Section */}
      <Box sx={{ my: 12 }} id="skills">
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 6,
            textAlign: "center",
            position: "relative",
            "&:after": {
              content: '""',
              position: "absolute",
              bottom: -8,
              left: "50%",
              transform: "translateX(-50%)",
              width: "80px",
              height: "4px",
              background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            },
          }}
        >
          My Skills
        </Typography>

        <Grid container spacing={4}>
          {skills.map((skill, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div whileHover={{ y: -5 }}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    height: "100%",
                    borderLeft: `4px solid ${theme.palette.primary.main}`,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    {skill.icon}
                    <Typography variant="h6" sx={{ ml: 1, fontWeight: 600 }}>
                      {skill.name}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      height: 8,
                      backgroundColor: "divider",
                      borderRadius: 4,
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      sx={{
                        width: `${skill.level}%`,
                        height: "100%",
                        background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      }}
                    />
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{ mt: 1, textAlign: "right" }}
                  >
                    {skill.level}%
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Experience Section */}
      <Box sx={{ my: 12 }} id="experience">
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 6,
            textAlign: "center",
            position: "relative",
            "&:after": {
              content: '""',
              position: "absolute",
              bottom: -8,
              left: "50%",
              transform: "translateX(-50%)",
              width: "80px",
              height: "4px",
              background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            },
          }}
        >
          Work Experience
        </Typography>

        <Box sx={{ position: "relative" }}>
          <Divider
            orientation="vertical"
            sx={{
              position: "absolute",
              left: "50%",
              height: "100%",
              display: { xs: "none", md: "block" },
            }}
          />

          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  mb: 6,
                  position: "relative",
                  "&:last-child": { mb: 0 },
                }}
              >
                <Box
                  sx={{
                    width: { xs: "100%", md: "50%" },
                    textAlign: {
                      xs: "left",
                      md: index % 2 === 0 ? "right" : "left",
                    },
                    pr: { xs: 0, md: index % 2 === 0 ? 4 : 0 },
                    pl: { xs: 0, md: index % 2 === 0 ? 0 : 4 },
                    order: { xs: 2, md: index % 2 === 0 ? 1 : 2 },
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    {exp.role}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "text.secondary", mb: 1 }}
                  >
                    {exp.company} • {exp.period}
                  </Typography>
                  <Typography variant="body1">{exp.description}</Typography>
                </Box>

                <Box
                  sx={{
                    width: { xs: "100%", md: "50%" },
                    textAlign: {
                      xs: "left",
                      md: index % 2 === 0 ? "left" : "right",
                    },
                    order: { xs: 1, md: index % 2 === 0 ? 2 : 1 },
                    mb: { xs: 2, md: 0 },
                  }}
                >
                  <Box
                    sx={{
                      display: "inline-block",
                      backgroundColor: theme.palette.primary.main,
                      color: "white",
                      px: 2,
                      py: 1,
                      borderRadius: 1,
                      fontWeight: 600,
                    }}
                  >
                    {exp.period}
                  </Box>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Box>

      {/* Projects Section */}
      <Box sx={{ my: 12 }} id="projects">
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 6,
            textAlign: "center",
            position: "relative",
            "&:after": {
              content: '""',
              position: "absolute",
              bottom: -8,
              left: "50%",
              transform: "translateX(-50%)",
              width: "80px",
              height: "4px",
              background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            },
          }}
        >
          Featured Projects
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    height: "100%",
                    borderRadius: 2,
                    background: `linear-gradient(135deg, ${theme.palette.background.paper}, #f5f5f5)`,
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "text.secondary", mb: 2 }}
                  >
                    {project.description}
                  </Typography>
                  <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                    {project.tags.map((tag, i) => (
                      <Chip
                        key={i}
                        label={tag}
                        size="small"
                        sx={{
                          backgroundColor: theme.palette.primary.light,
                          color: theme.palette.getContrastText(
                            theme.palette.primary.light
                          ),
                        }}
                      />
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Contact CTA */}
      <Box
        sx={{
          my: 12,
          textAlign: "center",
          p: 6,
          borderRadius: 2,
          background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          color: "white",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
          Have a project in mind?
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, maxWidth: 600, mx: "auto" }}>
          I'm currently available for freelance work or full-time positions.
          Let's discuss how I can help bring your ideas to life.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          startIcon={<Email />}
          sx={{
            fontWeight: "bold",
            borderRadius: "50px",
            px: 4,
            color: theme.palette.primary.dark,
          }}
          component={motion.button}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/contacts")}
        >
          Contact Me
        </Button>
      </Box>
    </Container>
  );
};

export default Home;

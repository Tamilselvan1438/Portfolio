import { Code, Email, GitHub, LinkedIn } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Chip,
  Divider,
  IconButton,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const StyledPaper = styled(Paper)(({ theme }) => ({
  background:
    theme.palette?.mode === "dark"
      ? "linear-gradient(to bottom right, #1a1a2e, #16213e)"
      : "linear-gradient(to bottom right, #f8f9ff, #eef2ff)",
  borderRadius: "32px",
  padding: theme.spacing(6),
  position: "relative",
  overflow: "hidden",
  "&:before": {
    content: '""',
    position: "absolute",
    top: "-50%",
    left: "-50%",
    width: "200%",
    height: "200%",
    background:
      theme.palette?.mode === "dark"
        ? "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)"
        : "radial-gradient(circle, rgba(199,210,254,0.3) 0%, transparent 70%)",
    animation: "rotate 20s linear infinite",
    "@keyframes rotate": {
      "0%": { transform: "rotate(0deg)" },
      "100%": { transform: "rotate(360deg)" },
    },
  },
}));

// const GlowingDot = styled("div")(({ theme }) => ({
//   position: "absolute",
//   width: "12px",
//   height: "12px",
//   borderRadius: "50%",
//   background: theme.palette?.primary?.main || "#6366f1",
//   filter: "blur(2px)",
//   boxShadow: `0 0 10px ${theme.palette?.primary?.main || "#6366f1"}, 0 0 20px ${
//     theme.palette?.primary?.main || "#6366f1"
//   }`,
// }));

const SkillChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  padding: theme.spacing(1.5),
  borderRadius: "12px",
  fontWeight: 600,
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-3px)",
  },
}));

const About = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 4,
        position: "relative",
        overflow: "hidden",
        // background: theme.palette?.mode === 'dark'
        //   ? 'radial-gradient(circle at top, #1e1b4b, #0f172a)'
        //   : 'radial-gradient(circle at top, #e0e7ff, #ffffff)',
        "&:before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage:
            theme.palette?.mode === "dark"
              ? "radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.1) 0%, transparent 25%)"
              : "radial-gradient(circle at 20% 30%, rgba(199, 210, 254, 0.3) 0%, transparent 25%)",
          pointerEvents: "none",
        },
      }}
    >
      {/* Floating background elements */}
      {/* <GlowingDot sx={{ top: '15%', left: '10%' }} /> */}
      {/* <GlowingDot sx={{ 
        top: '80%', 
        right: '15%', 
        background: theme.palette?.secondary?.main || '#a855f7' 
      }} /> */}

      <StyledPaper elevation={3}>
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: 6,
          }}
        >
          {/* Profile Section with animation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Box
              sx={{
                position: "relative",
                minWidth: { xs: 220, md: 300 },
                height: { xs: 220, md: 300 },
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  borderRadius: "24px",
                  background: "linear-gradient(45deg, #6366f1, #a855f7)",
                  transform: "rotate(5deg)",
                  zIndex: 1,
                  boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)",
                }}
              />
              <Avatar
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  borderRadius: "24px",
                  zIndex: 2,
                  bgcolor: theme.palette?.primary?.light || "#c7d2fe",
                  fontSize: "100px",
                  border: "4px solid",
                  borderColor: theme.palette?.background?.paper || "#ffffff",
                  boxShadow:
                    theme.shadows?.[10] || "0px 5px 15px rgba(0,0,0,0.1)",
                }}
              >
                👨‍💻
              </Avatar>
            </Box>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ maxWidth: 600 }}
          >
            <Typography
              variant="h2"
              component="h1"
              sx={{
                mb: 3,
                fontWeight: 800,
                background: "linear-gradient(45deg, #4f46e5, #7c3aed)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: { xs: "2.5rem", md: "3rem" },
              }}
            >
              About Me
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mb: 3,
                lineHeight: 1.8,
                fontSize: "1.1rem",
                color: theme.palette?.mode === "dark" ? "#e2e8f0" : "#4b5563",
              }}
            >
              I'm a passionate{" "}
              <Box
                component="span"
                sx={{
                  fontWeight: 700,
                  background: "linear-gradient(45deg, #4f46e5, #7c3aed)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Frontend Developer
              </Box>{" "}
              with 1+ years of experience crafting exceptional digital
              experiences. I combine technical expertise with creative design to
              build applications that are both beautiful and functional.
            </Typography>

            <Divider
              sx={{
                my: 4,
                background:
                  theme.palette?.mode === "dark"
                    ? "linear-gradient(to right, transparent, rgba(99, 102, 241, 0.5), transparent)"
                    : "linear-gradient(to right, transparent, rgba(199, 210, 254, 0.5), transparent)",
                height: "2px",
              }}
            />

            <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
              My Tech Stack
            </Typography>

            <Box sx={{ display: "flex", flexWrap: "wrap", mb: 4 }}>
              {[
                { name: "React", icon: "⚛️" },
                { name: "Material UI", icon: "🎨" },
                { name: "TypeScript", icon: "📝" },
                { name: "Next.js", icon: "⏭️" },
                { name: "Redux", icon: "🔄" },
                { name: "GraphQL", icon: "📊" },
                { name: "Framer Motion", icon: "✨" },
                { name: "Node.js", icon: "🟢" },
              ].map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <SkillChip
                    label={skill.name}
                    avatar={
                      <Avatar
                        sx={{
                          bgcolor: "transparent",
                          fontSize: "16px",
                          color: theme.palette?.primary?.main || "#6366f1",
                        }}
                      >
                        {skill.icon}
                      </Avatar>
                    }
                    sx={{
                      background:
                        theme.palette?.mode === "dark"
                          ? "rgba(99, 102, 241, 0.15)"
                          : "rgba(199, 210, 254, 0.5)",
                      color:
                        theme.palette?.mode === "dark"
                          ? theme.palette?.primary?.light || "#e0e7ff"
                          : theme.palette?.primary?.dark || "#4338ca",
                    }}
                  />
                </motion.div>
              ))}
            </Box>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
              <motion.div whileHover={{ scale: 1.03 }}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<Code />}
                  sx={{
                    borderRadius: "14px",
                    px: 4,
                    py: 1.5,
                    background: "linear-gradient(45deg, #6366f1, #8b5cf6)",
                    fontWeight: 600,
                    textTransform: "none",
                    boxShadow: "0 8px 20px rgba(99, 102, 241, 0.3)",
                    "&:hover": {
                      background: "linear-gradient(45deg, #5a5fdd, #7e4af1)",
                    },
                  }}
                  onClick={() => navigate("/projects")}
                >
                  View Projects
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }}>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<Email />}
                  sx={{
                    borderRadius: "14px",
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    textTransform: "none",
                    borderWidth: "2px",
                    "&:hover": {
                      borderWidth: "2px",
                    },
                  }}
                  onClick={() => navigate("/contacts")}
                >
                  Contact Me
                </Button>
              </motion.div>
            </Box>

            <Box sx={{ mt: 4, display: "flex", gap: 1 }}>
              {[
                {
                  icon: <LinkedIn fontSize="large" />,
                  color: "#0A66C2",
                  url: "https://www.linkedin.com/in/tamil-selvan-p-b08849354/",
                },
                {
                  icon: <GitHub fontSize="large" />,
                  color: theme.palette?.mode === "dark" ? "#f0f6fc" : "#161B22",
                  url: "https://github.com/Tamilselvan1438",
                },
                // {
                //   icon: <Email fontSize="large" />,
                //   color: "#EA4335",
                //   url: "#",
                // },
              ].map((social, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IconButton
                    target="_blank"
                    href={social.url}
                    sx={{
                      backgroundColor:
                        theme.palette?.mode === "dark"
                          ? "rgba(255, 255, 255, 0.08)"
                          : "rgba(0, 0, 0, 0.04)",
                      "&:hover": {
                        backgroundColor:
                          theme.palette?.mode === "dark"
                            ? "rgba(255, 255, 255, 0.12)"
                            : "rgba(0, 0, 0, 0.08)",
                      },
                    }}
                  >
                    {social.icon}
                  </IconButton>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </Box>
      </StyledPaper>
    </Box>
  );
};

export default About;

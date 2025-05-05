// import { Code, Email, GitHub, LinkedIn } from "@mui/icons-material";
// import {
//   Avatar,
//   Box,
//   Button,
//   Chip,
//   Divider,
//   IconButton,
//   Paper,
//   Typography,
//   useTheme,
// } from "@mui/material";
// import { styled } from "@mui/system";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// const StyledPaper = styled(Paper)(({ theme }) => ({
//   background:
//     theme.palette?.mode === "dark"
//       ? "linear-gradient(to bottom right, #1a1a2e, #16213e)"
//       : "linear-gradient(to bottom right, #f8f9ff, #eef2ff)",
//   borderRadius: "32px",
//   padding: theme.spacing(6),
//   position: "relative",
//   overflow: "hidden",
//   "&:before": {
//     content: '""',
//     position: "absolute",
//     top: "-50%",
//     left: "-50%",
//     width: "200%",
//     height: "200%",
//     background:
//       theme.palette?.mode === "dark"
//         ? "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)"
//         : "radial-gradient(circle, rgba(199,210,254,0.3) 0%, transparent 70%)",
//     animation: "rotate 20s linear infinite",
//     "@keyframes rotate": {
//       "0%": { transform: "rotate(0deg)" },
//       "100%": { transform: "rotate(360deg)" },
//     },
//   },
// }));

// // const GlowingDot = styled("div")(({ theme }) => ({
// //   position: "absolute",
// //   width: "12px",
// //   height: "12px",
// //   borderRadius: "50%",
// //   background: theme.palette?.primary?.main || "#6366f1",
// //   filter: "blur(2px)",
// //   boxShadow: `0 0 10px ${theme.palette?.primary?.main || "#6366f1"}, 0 0 20px ${
// //     theme.palette?.primary?.main || "#6366f1"
// //   }`,
// // }));

// const SkillChip = styled(Chip)(({ theme }) => ({
//   margin: theme.spacing(0.5),
//   padding: theme.spacing(1.5),
//   borderRadius: "12px",
//   fontWeight: 600,
//   transition: "all 0.3s ease",
//   "&:hover": {
//     transform: "translateY(-3px)",
//   },
// }));

// const About = () => {
//   const theme = useTheme();
//   const navigate = useNavigate();

//   return (
//     <Box
//       sx={{
//         minHeight: "80vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         p: 4,
//         position: "relative",
//         overflow: "hidden",
//         // background: theme.palette?.mode === 'dark'
//         //   ? 'radial-gradient(circle at top, #1e1b4b, #0f172a)'
//         //   : 'radial-gradient(circle at top, #e0e7ff, #ffffff)',
//         "&:before": {
//           content: '""',
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           backgroundImage:
//             theme.palette?.mode === "dark"
//               ? "radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.1) 0%, transparent 25%)"
//               : "radial-gradient(circle at 20% 30%, rgba(199, 210, 254, 0.3) 0%, transparent 25%)",
//           pointerEvents: "none",
//         },
//       }}
//     >
//       {/* Floating background elements */}
//       {/* <GlowingDot sx={{ top: '15%', left: '10%' }} /> */}
//       {/* <GlowingDot sx={{
//         top: '80%',
//         right: '15%',
//         background: theme.palette?.secondary?.main || '#a855f7'
//       }} /> */}

//       <StyledPaper elevation={3}>
//         <Box
//           sx={{
//             position: "relative",
//             zIndex: 2,
//             display: "flex",
//             flexDirection: { xs: "column", md: "row" },
//             alignItems: "center",
//             gap: 6,
//           }}
//         >
//           {/* Profile Section with animation */}
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <Box
//               sx={{
//                 position: "relative",
//                 minWidth: { xs: 220, md: 300 },
//                 height: { xs: 220, md: 300 },
//               }}
//             >
//               <Box
//                 sx={{
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                   width: "100%",
//                   height: "100%",
//                   borderRadius: "24px",
//                   background: "linear-gradient(45deg, #6366f1, #a855f7)",
//                   transform: "rotate(5deg)",
//                   zIndex: 1,
//                   boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)",
//                 }}
//               />
//               <Avatar
//                 sx={{
//                   position: "relative",
//                   width: "100%",
//                   height: "100%",
//                   borderRadius: "24px",
//                   zIndex: 2,
//                   bgcolor: theme.palette?.primary?.light || "#c7d2fe",
//                   fontSize: "100px",
//                   border: "4px solid",
//                   borderColor: theme.palette?.background?.paper || "#ffffff",
//                   boxShadow:
//                     theme.shadows?.[10] || "0px 5px 15px rgba(0,0,0,0.1)",
//                 }}
//               >
//                 👨‍💻
//               </Avatar>
//             </Box>
//           </motion.div>

//           {/* Content Section */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             style={{ maxWidth: 600 }}
//           >
//             <Typography
//               variant="h2"
//               component="h1"
//               sx={{
//                 mb: 3,
//                 fontWeight: 800,
//                 background: "linear-gradient(45deg, #4f46e5, #7c3aed)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 fontSize: { xs: "2.5rem", md: "3rem" },
//               }}
//             >
//               About Me
//             </Typography>

//             <Typography
//               variant="body1"
//               sx={{
//                 mb: 3,
//                 lineHeight: 1.8,
//                 fontSize: "1.1rem",
//                 color: theme.palette?.mode === "dark" ? "#e2e8f0" : "#4b5563",
//               }}
//             >
//               I'm a passionate{" "}
//               <Box
//                 component="span"
//                 sx={{
//                   fontWeight: 700,
//                   background: "linear-gradient(45deg, #4f46e5, #7c3aed)",
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                 }}
//               >
//                 Frontend Developer
//               </Box>{" "}
//               with 1+ years of experience crafting exceptional digital
//               experiences. I combine technical expertise with creative design to
//               build applications that are both beautiful and functional.
//             </Typography>

//             <Divider
//               sx={{
//                 my: 4,
//                 background:
//                   theme.palette?.mode === "dark"
//                     ? "linear-gradient(to right, transparent, rgba(99, 102, 241, 0.5), transparent)"
//                     : "linear-gradient(to right, transparent, rgba(199, 210, 254, 0.5), transparent)",
//                 height: "2px",
//               }}
//             />

//             <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
//               My Tech Stack
//             </Typography>

//             <Box sx={{ display: "flex", flexWrap: "wrap", mb: 4 }}>
//               {[
//                 { name: "React", icon: "⚛️" },
//                 { name: "Material UI", icon: "🎨" },
//                 { name: "TypeScript", icon: "📝" },
//                 { name: "Next.js", icon: "⏭️" },
//                 { name: "Redux", icon: "🔄" },
//                 { name: "GraphQL", icon: "📊" },
//                 { name: "Framer Motion", icon: "✨" },
//                 { name: "Node.js", icon: "🟢" },
//               ].map((skill) => (
//                 <motion.div
//                   key={skill.name}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <SkillChip
//                     label={skill.name}
//                     avatar={
//                       <Avatar
//                         sx={{
//                           bgcolor: "transparent",
//                           fontSize: "16px",
//                           color: theme.palette?.primary?.main || "#6366f1",
//                         }}
//                       >
//                         {skill.icon}
//                       </Avatar>
//                     }
//                     sx={{
//                       background:
//                         theme.palette?.mode === "dark"
//                           ? "rgba(99, 102, 241, 0.15)"
//                           : "rgba(199, 210, 254, 0.5)",
//                       color:
//                         theme.palette?.mode === "dark"
//                           ? theme.palette?.primary?.light || "#e0e7ff"
//                           : theme.palette?.primary?.dark || "#4338ca",
//                     }}
//                   />
//                 </motion.div>
//               ))}
//             </Box>

//             <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
//               <motion.div whileHover={{ scale: 1.03 }}>
//                 <Button
//                   variant="contained"
//                   size="large"
//                   startIcon={<Code />}
//                   sx={{
//                     borderRadius: "14px",
//                     px: 4,
//                     py: 1.5,
//                     background: "linear-gradient(45deg, #6366f1, #8b5cf6)",
//                     fontWeight: 600,
//                     textTransform: "none",
//                     boxShadow: "0 8px 20px rgba(99, 102, 241, 0.3)",
//                     "&:hover": {
//                       background: "linear-gradient(45deg, #5a5fdd, #7e4af1)",
//                     },
//                   }}
//                   onClick={() => navigate("/projects")}
//                 >
//                   View Projects
//                 </Button>
//               </motion.div>

//               <motion.div whileHover={{ scale: 1.03 }}>
//                 <Button
//                   variant="outlined"
//                   size="large"
//                   startIcon={<Email />}
//                   sx={{
//                     borderRadius: "14px",
//                     px: 4,
//                     py: 1.5,
//                     fontWeight: 600,
//                     textTransform: "none",
//                     borderWidth: "2px",
//                     "&:hover": {
//                       borderWidth: "2px",
//                     },
//                   }}
//                   onClick={() => navigate("/contacts")}
//                 >
//                   Contact Me
//                 </Button>
//               </motion.div>
//             </Box>

//             <Box sx={{ mt: 4, display: "flex", gap: 1 }}>
//               {[
//                 {
//                   icon: <LinkedIn fontSize="large" />,
//                   color: "#0A66C2",
//                   url: "https://www.linkedin.com/in/tamil-selvan-p-b08849354/",
//                 },
//                 {
//                   icon: <GitHub fontSize="large" />,
//                   color: theme.palette?.mode === "dark" ? "#f0f6fc" : "#161B22",
//                   url: "https://github.com/Tamilselvan1438",
//                 },
//                 // {
//                 //   icon: <Email fontSize="large" />,
//                 //   color: "#EA4335",
//                 //   url: "#",
//                 // },
//               ].map((social, index) => (
//                 <motion.div
//                   key={index}
//                   whileHover={{ y: -3 }}
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   <IconButton
//                     target="_blank"
//                     href={social.url}
//                     sx={{
//                       backgroundColor:
//                         theme.palette?.mode === "dark"
//                           ? "rgba(255, 255, 255, 0.08)"
//                           : "rgba(0, 0, 0, 0.04)",
//                       "&:hover": {
//                         backgroundColor:
//                           theme.palette?.mode === "dark"
//                             ? "rgba(255, 255, 255, 0.12)"
//                             : "rgba(0, 0, 0, 0.08)",
//                       },
//                     }}
//                   >
//                     {social.icon}
//                   </IconButton>
//                 </motion.div>
//               ))}
//             </Box>
//           </motion.div>
//         </Box>
//       </StyledPaper>
//     </Box>
//   );
// };

// export default About;
import {
  Code,
  Email,
  GitHub,
  LinkedIn,
  School,
  Work,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Chip,
  Divider,
  Grid,
  IconButton,
  Paper,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/system";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

interface FloatingOrbProps {
  color: string;
  size: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

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

const FloatingOrb = styled("div")<FloatingOrbProps>(
  ({ color, size, top, left, right, bottom }) => ({
    position: "absolute",
    width: size,
    height: size,
    borderRadius: "50%",
    background: `radial-gradient(circle at center, ${color} 0%, transparent 70%)`,
    filter: "blur(10px)",
    top,
    left,
    right,
    bottom,
    opacity: 0.6,
    zIndex: 0,
    animation: "float 8s ease-in-out infinite",
    "@keyframes float": {
      "0%": { transform: "translateY(0px)" },
      "50%": { transform: "translateY(-20px)" },
      "100%": { transform: "translateY(0px)" },
    },
  })
);

const SkillChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  padding: theme.spacing(1.5),
  borderRadius: "12px",
  fontWeight: 600,
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-3px)",
    boxShadow: theme.shadows,
  },
}));

const ExperienceCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: "16px",
  background:
    theme.palette.mode === "dark"
      ? "rgba(30, 41, 59, 0.5)"
      : "rgba(255, 255, 255, 0.7)",
  backdropFilter: "blur(10px)",
  border: `1px solid ${
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, 0.1)"
      : "rgba(0, 0, 0, 0.1)"
  }`,
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: theme.shadows,
  },
}));

const About = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const controls = useAnimation();
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Responsive breakpoints
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  // Responsive particles configuration
  const particlesOptions: any = {
    particles: {
      number: {
        value: isMobile ? 20 : 30,
        density: {
          enable: true,
          value_area: isMobile ? 500 : 800,
        },
      },
      color: {
        value: theme.palette.primary.main,
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,
        random: true,
      },
      size: {
        value: 3,
        random: true,
      },
      links: {
        enable: true,
        distance: 150,
        color: theme.palette.primary.light,
        opacity: 0.3,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
      },
    },
  };

  const experiences = [
    {
      title: "Frontend Developer",
      company: "Drylogic Solutions",
      period: "2025 - Present",
      icon: <Work color="primary" />,
      description:
        "Building responsive web applications with React and TypeScript.",
    },
    {
      title: "M.Sc Mathematics",
      company: "Bharathiar University",
      period: "2022 - 2024",
      icon: <School color="info" />,
      description:
        "Specialized in web development and human-computer interaction.",
    },
  ];

  const stats = [
    { value: "5+", label: "Projects" },
    { value: "10K+", label: "Lines of Code" },
    { value: "100%", label: "Satisfaction" },
    { value: "∞", label: "Creativity" },
  ];

  // Responsive experiences display
  const displayExperiences = isMobile ? [experiences[0]] : experiences;

  useEffect(() => {
    const currentRef = ref.current; // Copy ref.current to a variable

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          controls.start("visible");
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [controls]); // Add ref to dependencies if it can change

  return (
    <Box
      ref={ref}
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: isMobile ? 2 : 4,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Responsive background elements */}
      {isDesktop && (
        <>
          <FloatingOrb
            color={theme.palette.primary.main}
            size={isMobile ? "100px" : "200px"}
            top="10%"
            left="5%"
          />
          <FloatingOrb
            color={theme.palette.secondary.main}
            size={isMobile ? "80px" : "150px"}
            bottom="15%"
            right="10%"
          />
          <FloatingOrb
            color={theme.palette.warning.main}
            size={isMobile ? "60px" : "100px"}
            top="60%"
            left="15%"
          />
        </>
      )}

      {/* Particles background - reduced on mobile */}
      {!isMobile && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        >
          <Particles
            id="tsparticles"
            init={particlesInit}
            options={particlesOptions}
          />
        </Box>
      )}

      <StyledPaper
        elevation={3}
        sx={{
          p: isMobile ? 3 : 6,
          mx: isMobile ? 1 : 0,
          width: isMobile ? "100%" : "auto",
        }}
      >
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: { xs: 4, md: 6 },
          }}
        >
          {/* Profile Section with animation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            style={{ position: "relative", width: isMobile ? "100%" : "auto" }}
          >
            <Box
              sx={{
                position: "relative",
                minWidth: { xs: 180, sm: 220, md: 300 },
                height: { xs: 180, sm: 220, md: 300 },
                mx: "auto",
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
                  fontSize: { xs: "80px", md: "100px" },
                  border: "4px solid",
                  borderColor: theme.palette?.background?.paper || "#ffffff",
                  boxShadow: theme.shadows[10],
                  transition: "all 0.5s ease",
                  "&:hover": {
                    transform: "scale(1.03)",
                  },
                }}
              >
                👨‍💻
              </Avatar>
              {/* <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  position: "absolute",
                  top: "-10px",
                  left: "-10px",
                  right: "-10px",
                  bottom: "-10px",
                  borderRadius: "50%",
                  border: `2px dashed ${theme.palette.primary.main}`,
                  zIndex: 3,
                  pointerEvents: "none",
                }}
              /> */}
            </Box>

            {/* Stats */}
            <Grid container spacing={2} sx={{ mt: 3 }}>
              {stats.map((stat, index) => (
                <Grid item xs={6} sm={6} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Paper
                      sx={{
                        p: 2,
                        textAlign: "center",
                        borderRadius: "12px",
                        background:
                          theme.palette.mode === "dark"
                            ? "rgba(30, 41, 59, 0.5)"
                            : "rgba(255, 255, 255, 0.7)",
                        backdropFilter: "blur(5px)",
                      }}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 800,
                          background:
                            "linear-gradient(45deg, #4f46e5, #7c3aed)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        {stat.value}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        {stat.label}
                      </Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              maxWidth: 600,
              flex: 1,
              width: isMobile ? "100%" : "auto",
            }}
          >
            <Typography
              variant="h2"
              component="h1"
              sx={{
                mb: 2,
                fontWeight: 800,
                background: "linear-gradient(45deg, #4f46e5, #7c3aed)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: {
                  xs: "2rem",
                  sm: "2.5rem",
                  md: "3rem",
                },
                textAlign: { xs: "center", md: "left" },
                position: "relative",
                display: "inline-block",
                "&:after": {
                  content: '""',
                  position: "absolute",
                  bottom: "-8px",
                  left: 0,
                  width: "100%",
                  height: "4px",
                  background: "linear-gradient(90deg, #4f46e5, #7c3aed)",
                  borderRadius: "2px",
                },
              }}
            >
              About Me
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mb: 3,
                lineHeight: 1.8,
                fontSize: { xs: "1rem", sm: "1.1rem" },
                textAlign: { xs: "center", md: "left" },
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
                  position: "relative",
                  "&:after": {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "2px",
                    background: "linear-gradient(90deg, #4f46e5, #7c3aed)",
                  },
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

            <Typography
              variant="h5"
              sx={{
                mb: 3,
                fontWeight: 700,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              My Tech Stack
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                mb: 4,
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              {[
                { name: "Material UI", icon: "🎨", level: 100 },
                { name: "TailwindCSS", icon: "📊", level: 100 },
                { name: "React", icon: "⚛️", level: 99 },
                { name: "TypeScript", icon: "📝", level: 99 },
                { name: "Next.js", icon: "⏭️", level: 99 },
                { name: "Redux", icon: "🔄", level: 99 },
                { name: "Node.js", icon: "🟢", level: 99 },
                { name: "Framer Motion", icon: "✨", level: 85 },
              ].map((skill) => (
                <Box
                  key={skill.name}
                  sx={{
                    m: 0.5,
                    flexBasis: isMobile ? "40%" : "auto",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Tooltip
                      title={`${skill.level}% proficiency`}
                      arrow
                      placement="top"
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
                          position: "relative",
                          overflow: "hidden",
                          width: isMobile ? "100%" : "auto",
                          "&:after": {
                            content: '""',
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            width: `${skill.level}%`,
                            height: "3px",
                            background: theme.palette.primary.main,
                            borderRadius: "0 0 12px 12px",
                          },
                        }}
                      />
                    </Tooltip>
                  </motion.div>
                </Box>
              ))}
            </Box>

            <Typography
              variant="h5"
              sx={{
                mb: 3,
                fontWeight: 700,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Experience & Education
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 1,
                overflowX: "auto",
                pb: 2,
                scrollSnapType: "x mandatory",
                "& > *": {
                  scrollSnapAlign: "start",
                  minWidth: isMobile ? "85vw" : "280px",
                },
              }}
            >
              {displayExperiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  // whileHover={{ scale: 1.02 }}
                >
                  <ExperienceCard>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 2,
                        "& svg": {
                          fontSize: "2rem",
                          mr: 2,
                        },
                      }}
                    >
                      {exp.icon}
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 700 }}>
                          {exp.title}
                        </Typography>
                        <Typography variant="subtitle2" color="text.secondary">
                          {exp.company} • {exp.period}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography variant="body2">{exp.description}</Typography>
                  </ExperienceCard>
                </motion.div>
              ))}
            </Box>

            <Box
              sx={{
                mt: 4,
                display: "flex",
                gap: 2,
                flexWrap: "wrap",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <motion.div whileHover={{ scale: 1.03 }}>
                <Button
                  variant="contained"
                  size={isMobile ? "medium" : "large"}
                  startIcon={<Code />}
                  sx={{
                    borderRadius: "14px",
                    px: isMobile ? 3 : 4,
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
                  size={isMobile ? "medium" : "large"}
                  startIcon={<Email />}
                  sx={{
                    borderRadius: "14px",
                    px: isMobile ? 3 : 4,
                    py: 1.5,
                    fontWeight: 600,
                    textTransform: "none",
                    borderWidth: "2px",
                    "&:hover": {
                      borderWidth: "2px",
                      background:
                        theme.palette.mode === "dark"
                          ? "rgba(99, 102, 241, 0.1)"
                          : "rgba(199, 210, 254, 0.3)",
                    },
                  }}
                  onClick={() => navigate("/contacts")}
                >
                  Contact Me
                </Button>
              </motion.div>
            </Box>

            <Box
              sx={{
                mt: 4,
                display: "flex",
                gap: 1,
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              {[
                {
                  icon: <LinkedIn fontSize="large" />,
                  color: "#0A66C2",
                  url: "https://www.linkedin.com/in/tamil-selvan-p-b08849354/",
                  tooltip: "Connect on LinkedIn",
                },
                {
                  icon: <GitHub fontSize="large" />,
                  color: theme.palette?.mode === "dark" ? "#f0f6fc" : "#161B22",
                  url: "https://github.com/Tamilselvan1438",
                  tooltip: "Check my GitHub",
                },
              ].map((social, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Tooltip title={social.tooltip} arrow>
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
                          color: social.color,
                        },
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  </Tooltip>
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

// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import MailOutlineIcon from "@mui/icons-material/MailOutline";
// import PhoneIcon from "@mui/icons-material/Phone";
// import SendIcon from "@mui/icons-material/Send";
// import {
//   Avatar,
//   Box,
//   Button,
//   Chip,
//   Container,
//   Paper,
//   TextField,
//   Typography,
//   useTheme,
// } from "@mui/material";
// import { motion } from "framer-motion";
// import React, { useState } from "react";
// import emailjs from "@emailjs/browser";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });
//   const [status, setStatus] = useState<string>("");
//   const theme = useTheme();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setStatus("Sending...");

//     const serviceID = "service_8nqmyju";
//     const templateID = "template_1v4acx8";
//     const publicKey = "0snfVrqLFggoKTRzr";

//     try {
//       await emailjs.send(
//         serviceID,
//         templateID,
//         {
//           from_name: formData.name,
//           from_email: formData.email,
//           subject: formData.subject,
//           message: formData.message,
//         },
//         publicKey
//       );

//       setStatus("Message sent successfully!");
//       setFormData({
//         name: "",
//         email: "",
//         subject: "",
//         message: "",
//       });
//       setTimeout(() => setStatus(""), 5000);
//     } catch (error) {
//       console.error("Failed to send email:", error);
//       setStatus("Failed to send message. Please try again.");
//     }
//   };

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };

//   return (
//     <Container sx={{ py: 6, minHeight: "80vh" }}>
//       <motion.div
//         initial="hidden"
//         animate="visible"
//         variants={containerVariants}
//       >
//         <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//           {/* ========== CONTACT FORM SECTION ========== */}
//           <Paper
//             elevation={5}
//             sx={{
//               padding: 4,
//               borderRadius: "16px",
//               background: "white",
//               boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
//             }}
//           >
//             <Typography
//               variant="h5"
//               sx={{
//                 textAlign: "center",
//                 fontWeight: 700,
//                 mb: 2,
//                 background: "linear-gradient(90deg, #3f51b5, #5c6bc0)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//               }}
//             >
//               Get In Touch
//             </Typography>
//             <Typography
//               variant="body2"
//               sx={{
//                 textAlign: "center",
//                 color: theme.palette.text.secondary,
//                 mb: 3,
//               }}
//             >
//               Have a project or opportunity to discuss? I'd love to hear from
//               you!
//             </Typography>

//             <Box
//               component="form"
//               onSubmit={handleSubmit}
//               sx={{ display: "flex", flexDirection: "column", gap: 3 }}
//             >
//               {[
//                 { label: "Your Name", name: "name", type: "text" },
//                 { label: "Email Address", name: "email", type: "email" },
//                 { label: "Subject", name: "subject", type: "text" },
//                 {
//                   label: "Your Message",
//                   name: "message",
//                   type: "text",
//                   multiline: true,
//                   rows: 5,
//                 },
//               ].map((field) => (
//                 <motion.div key={field.name} variants={itemVariants}>
//                   <TextField
//                     label={field.label}
//                     name={field.name}
//                     variant="outlined"
//                     value={formData[field.name as keyof typeof formData]}
//                     onChange={handleChange}
//                     fullWidth
//                     required
//                     type={field.type}
//                     multiline={field.multiline}
//                     rows={field.rows}
//                     sx={{
//                       "& .MuiOutlinedInput-root": {
//                         borderRadius: "12px",
//                         "& fieldset": { borderColor: "#e0e0e0" },
//                         "&:hover fieldset": { borderColor: "#3f51b5" },
//                       },
//                     }}
//                   />
//                 </motion.div>
//               ))}

//               <motion.div
//                 variants={itemVariants}
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 <Button
//                   type="submit"
//                   variant="contained"
//                   fullWidth
//                   startIcon={<SendIcon />}
//                   sx={{
//                     background: "linear-gradient(to right, #3f51b5, #5c6bc0)",
//                     color: "white",
//                     fontWeight: "bold",
//                     borderRadius: "12px",
//                     py: 1.5,
//                     fontSize: "1rem",
//                     textTransform: "none",
//                     boxShadow: "0 4px 6px rgba(63, 81, 181, 0.2)",
//                     "&:hover": {
//                       background: "linear-gradient(to right, #303f9f, #3949ab)",
//                       boxShadow: "0 6px 8px rgba(63, 81, 181, 0.3)",
//                     },
//                   }}
//                 >
//                   Send Message
//                 </Button>
//               </motion.div>
//             </Box>

//             {status && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <Box
//                   sx={{
//                     mt: 3,
//                     p: 2,
//                     borderRadius: "12px",
//                     background: status.includes("successfully")
//                       ? "rgba(76, 175, 80, 0.1)"
//                       : status.includes("Sending")
//                       ? "rgba(33, 150, 243, 0.1)"
//                       : "rgba(244, 67, 54, 0.1)",
//                     border: status.includes("successfully")
//                       ? "1px solid #4caf50"
//                       : status.includes("Sending")
//                       ? "1px solid #2196f3"
//                       : "1px solid #f44336",
//                   }}
//                 >
//                   <Typography
//                     variant="body1"
//                     sx={{
//                       textAlign: "center",
//                       color: status.includes("successfully")
//                         ? "#4caf50"
//                         : status.includes("Sending")
//                         ? "#2196f3"
//                         : "#f44336",
//                       fontWeight: "500",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       gap: 1,
//                     }}
//                   >
//                     <span style={{ fontSize: "1.2rem" }}>
//                       {status.includes("successfully")
//                         ? "✓"
//                         : status.includes("Sending")
//                         ? "↻"
//                         : "✕"}
//                     </span>
//                     {status}
//                   </Typography>
//                 </Box>
//               </motion.div>
//             )}
//           </Paper>

//           {/* ========== PERSONAL DETAILS SECTION ========== */}
//           <Paper
//             elevation={3}
//             sx={{
//               p: 4,
//               alignContent: "center",
//               borderRadius: "16px",
//               background: "linear-gradient(135deg, #f5f7ff 0%, #ffffff 100%)",
//               boxShadow: "0 8px 32px rgba(31, 38, 135, 0.05)",
//               border: "1px solid rgba(63, 81, 181, 0.1)",
//             }}
//           >
//             <Box sx={{ textAlign: "center" }}>
//               {/* Avatar with Gradient Border */}
//               <motion.div whileHover={{ scale: 1.05 }}>
//                 <Avatar
//                   src="../image/myphoto.jpg" // Replace with your image
//                   sx={{
//                     width: 120,
//                     height: 120,
//                     margin: "0 auto 16px",
//                     border: "4px solid transparent",
//                     backgroundImage:
//                       "linear-gradient(white, white), linear-gradient(90deg, #3f51b5, #5c6bc0)",
//                     backgroundOrigin: "border-box",
//                     backgroundClip: "content-box, border-box",
//                   }}
//                 />
//               </motion.div>

//               {/* Name */}
//               <Typography
//                 variant="h4"
//                 sx={{
//                   fontWeight: 800,
//                   mb: 1,
//                   background: "linear-gradient(90deg, #3f51b5, #2196f3)",
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                 }}
//               >
//                 Tamil Selvan P
//               </Typography>

//               {/* Title with Animated Underline */}
//               <Box
//                 sx={{ position: "relative", display: "inline-block", mb: 3 }}
//               >
//                 <Typography
//                   variant="body1"
//                   sx={{
//                     color: theme.palette.text.secondary,
//                     fontWeight: 500,
//                   }}
//                 >
//                   Front-End Developer | React Specialist
//                 </Typography>
//                 <motion.div
//                   style={{
//                     position: "absolute",
//                     bottom: -4,
//                     left: 0,
//                     height: "2px",
//                     background: "linear-gradient(90deg, #3f51b5, #5c6bc0)",
//                   }}
//                   initial={{ width: 0 }}
//                   animate={{ width: "100%" }}
//                   transition={{
//                     duration: 1.5,
//                     repeat: Infinity,
//                     repeatType: "reverse",
//                   }}
//                 />
//               </Box>

//               {/* Skills Chips */}
//               <Box
//                 sx={{
//                   display: "flex",
//                   justifyContent: "center",
//                   gap: 1,
//                   mb: 3,
//                   flexWrap: "wrap",
//                 }}
//               >
//                 {[
//                   { name: "React", logo: "../image/logo/react.png" },
//                   { name: "Next.js", logo: "../image/logo/nextjs.png" },
//                   { name: "TypeScript", logo: "../image/logo/typescript.png" },
//                   { name: "Tailwind", logo: "../image/logo/tailwind.png" },
//                 ].map((skill) => (
//                   <Chip
//                     key={skill.name}
//                     label={skill.name}
//                     size="small"
//                     avatar={<Avatar src={skill.logo} alt={skill.name} />}
//                     sx={{
//                       fontWeight: 600,
//                       background: "rgba(63, 81, 181, 0.1)",
//                       color: theme.palette.primary.main,
//                     }}
//                   />
//                 ))}
//               </Box>

//               {/* Contact Information */}
//               <Box
//                 sx={{
//                   display: "grid",
//                   gap: 1.5,
//                   maxWidth: 300,
//                   margin: "0 auto",
//                 }}
//               >
//                 <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
//                   <MailOutlineIcon sx={{ color: theme.palette.primary.main }} />
//                   <Typography
//                     variant="body2"
//                     sx={{ color: theme.palette.text.secondary }}
//                   >
//                     tamilselvan962913@gmail.com
//                   </Typography>
//                 </Box>
//                 <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
//                   <PhoneIcon sx={{ color: theme.palette.primary.main }} />
//                   <Typography
//                     variant="body2"
//                     sx={{ color: theme.palette.text.secondary }}
//                   >
//                     +91 9025044967
//                   </Typography>
//                 </Box>
//                 <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
//                   <LocationOnIcon sx={{ color: theme.palette.primary.main }} />
//                   <Typography
//                     variant="body2"
//                     sx={{ color: theme.palette.text.secondary }}
//                   >
//                     Coimbatore, India
//                   </Typography>
//                 </Box>
//               </Box>
//             </Box>
//           </Paper>
//         </Box>
//       </motion.div>
//     </Container>
//   );
// };

// export default Contact;

import emailjs from "@emailjs/browser";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import SendIcon from "@mui/icons-material/Send";
import {
  Avatar,
  Box,
  Button,
  Chip,
  Container,
  Paper,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<string>("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await emailjs.send(
        "service_8nqmyju",
        "template_1v4acx8",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "0snfVrqLFggoKTRzr"
      );

      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Failed to send email:", error);
      setStatus("Failed to send message. Please try again.");
    } finally {
      setTimeout(() => setStatus(""), 5000);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  // Theme-based styles
  const gradient = {
    primary: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
    text: `linear-gradient(90deg, ${theme.palette.primary.main}, ${
      theme.palette.secondary.main || "#2196F3"
    })`,
  };

  return (
    <Container sx={{ py: 6, minHeight: "80vh" }}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: 4,
            alignItems: "stretch",
          }}
        >
          {/* PERSONAL DETAILS SECTION */}
          <Paper
            elevation={3}
            sx={{
              p: 4,
              flex: 1,
              borderRadius: "16px",
              background: theme.palette.background.paper,
              boxShadow: theme.shadows[4],
              border: `1px solid ${theme.palette.divider}`,
              minWidth: isMobile ? "100%" : "300px",
            }}
          >
            <Box sx={{ textAlign: "center" }}>
              {/* Avatar with Gradient Border */}
              <motion.div whileHover={{ scale: 1.05 }}>
                <Avatar
                  src="../image/myphoto.jpg"
                  sx={{
                    width: 120,
                    height: 120,
                    margin: "0 auto 16px",
                    border: `4px solid transparent`,
                    backgroundImage: `linear-gradient(white, white), ${gradient.primary}`,
                    backgroundOrigin: "border-box",
                    backgroundClip: "content-box, border-box",
                  }}
                />
              </motion.div>

              {/* Name */}
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  mb: 1,
                  background: gradient.text,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Tamil Selvan P
              </Typography>

              {/* Title */}
              <Box
                sx={{ position: "relative", display: "inline-block", mb: 3 }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: theme.palette.text.secondary,
                    fontWeight: 500,
                  }}
                >
                  Front-End Developer | React Specialist
                </Typography>
                <motion.div
                  style={{
                    position: "absolute",
                    bottom: -4,
                    left: 0,
                    height: "2px",
                    background: gradient.primary,
                  }}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </Box>

              {/* Skills Chips */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 1,
                  mb: 3,
                  flexWrap: "wrap",
                }}
              >
                {["React", "Next.js", "TypeScript", "TailwindCSS"].map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    size="small"
                    sx={{
                      fontWeight: 600,
                      background: theme.palette.action.selected,
                      color: theme.palette.text.primary,
                    }}
                  />
                ))}
              </Box>

              {/* Contact Info */}
              <Box
                sx={{
                  display: "grid",
                  gap: 1.5,
                  maxWidth: 300,
                  margin: "0 auto",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <MailOutlineIcon sx={{ color: theme.palette.primary.main }} />
                  <Typography
                    variant="body2"
                    sx={{ color: theme.palette.text.secondary }}
                  >
                    tamilselvan962913@gmail.com
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <PhoneIcon sx={{ color: theme.palette.primary.main }} />
                  <Typography
                    variant="body2"
                    sx={{ color: theme.palette.text.secondary }}
                  >
                    +91 9025044967
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <LocationOnIcon sx={{ color: theme.palette.primary.main }} />
                  <Typography
                    variant="body2"
                    sx={{ color: theme.palette.text.secondary }}
                  >
                    Coimbatore, India
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Paper>

          {/* CONTACT FORM SECTION */}
          <Paper
            elevation={5}
            sx={{
              p: 4,
              flex: 2,
              borderRadius: "16px",
              background: theme.palette.background.default,
              boxShadow: theme.shadows[6],
              minWidth: isMobile ? "100%" : "400px",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                textAlign: "center",
                fontWeight: 700,
                mb: 2,
                background: gradient.text,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Get In Touch
            </Typography>

            <Typography
              variant="body2"
              sx={{
                textAlign: "center",
                color: theme.palette.text.secondary,
                mb: 3,
              }}
            >
              Have a project or opportunity to discuss? I'd love to hear from
              you!
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ display: "flex", flexDirection: "column", gap: 3 }}
            >
              {[
                { label: "Your Name", name: "name" },
                { label: "Email Address", name: "email", type: "email" },
                { label: "Subject", name: "subject" },
                {
                  label: "Your Message",
                  name: "message",
                  multiline: true,
                  rows: 5,
                },
              ].map((field) => (
                <motion.div key={field.name} variants={itemVariants}>
                  <TextField
                    {...field}
                    variant="outlined"
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleChange}
                    fullWidth
                    required
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "12px",
                        "& fieldset": {
                          borderColor: theme.palette.divider,
                        },
                        "&:hover fieldset": {
                          borderColor: theme.palette.primary.main,
                        },
                      },
                    }}
                  />
                </motion.div>
              ))}

              <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  startIcon={<SendIcon />}
                  sx={{
                    background: gradient.primary,
                    color: theme.palette.primary.contrastText,
                    fontWeight: "bold",
                    borderRadius: "12px",
                    py: 1.5,
                    fontSize: "1rem",
                    textTransform: "none",
                    boxShadow: theme.shadows[2],
                    "&:hover": {
                      boxShadow: theme.shadows[4],
                      background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.dark} 100%)`,
                    },
                  }}
                >
                  Send Message
                </Button>
              </motion.div>
            </Box>

            {status && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Box
                  sx={{
                    mt: 3,
                    p: 2,
                    borderRadius: "12px",
                    background: status.includes("successfully")
                      ? theme.palette.success.light
                      : status.includes("Sending")
                      ? theme.palette.info.light
                      : theme.palette.error.light,
                    border: `1px solid ${
                      status.includes("successfully")
                        ? theme.palette.success.main
                        : status.includes("Sending")
                        ? theme.palette.info.main
                        : theme.palette.error.main
                    }`,
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      textAlign: "center",
                      color: status.includes("successfully")
                        ? theme.palette.success.dark
                        : status.includes("Sending")
                        ? theme.palette.info.dark
                        : theme.palette.error.dark,
                      fontWeight: "500",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 1,
                    }}
                  >
                    <span style={{ fontSize: "1.2rem" }}>
                      {status.includes("successfully")
                        ? "✓"
                        : status.includes("Sending")
                        ? "↻"
                        : "✕"}
                    </span>
                    {status}
                  </Typography>
                </Box>
              </motion.div>
            )}
          </Paper>
        </Box>
      </motion.div>
    </Container>
  );
};

export default Contact;

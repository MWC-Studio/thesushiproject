import * as React from "react";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Snackbar from "@mui/material/Snackbar";
import {
  Typography,
  FormControl,
  FormLabel,
  Grid,
  Box,
  IconButton,
  TextField,
  Portal,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { API } from "aws-amplify";
import { createContactUs } from "../src/graphql/mutations";

export default function FormDialog(props) {
  const themes = useTheme();
  const isSmall = useMediaQuery(themes.breakpoints.down("sm"));

  const { openPopup, setOpenPopup } = props;

  const [alert, setAlert] = useState({
    open: false,
    message: "",
    backgroundColor: "",
  });

  const handleClickOpen = () => {
    setOpenPopup(true);
  };
  const handleClose = () => {
    setOpenPopup(false);
  };

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    comments: "",
  });

  const contactUsText =
    "If you want to learn more about the numbers, the operation, and the process, send us the email or call us. You can also visit one of our locations. Open to anyone who is passionate and is ready to get this rollin’. \n Join us today!";

  const handleContactFormSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, state, comments } = formState;
    if (name && email && phone && state && comments) {
      try {
        await API.graphql({
          query: createContactUs,
          variables: {
            input: {
              name,
              email,
              phone,
              state,
              comments,
            },
          },
        });
        console.log("Congratulations");
        setAlert({
          open: true,
          message: "Message sent successfully!",
          backgroundColor: "#4BB543",
        });
        setFormState({
          name: "",
          email: "",
          phone: "",
          state: "",
          comments: "",
        });
        //onClose();
      } catch (e) {
        setAlert({
          open: true,
          message: "Something went wrong, please try again!",
          backgroundColor: "#FF3232",
        });
        //console.log("Error", e.message);
      }
    } else {
      setAlert({
        open: true,
        message: "Please verify all fields are filled out",
        backgroundColor: "#FF3232",
      });
      handleClickOpen();
    }
  };

  return (
    <Portal>
      <Dialog
        open={openPopup}
        onClose={handleClose}
        fullScreen={props.isMobile}
        PaperProps={{
          style: {
            backgroundColor: "#40464D",
            m: 0,
            maxWidth: isSmall ? "auto" : "900px",
            maxHeight: isSmall ? "auto" : "783px",
          },
        }}
      >
        <form onSubmit={handleContactFormSubmit}>
          <DialogTitle
            sx={{ pt: 5 }}
            color="#FFFFFF"
            variant={isSmall ? "h3" : "h2"}
            align="center"
          >
            Let’s get this Rollin’!
          </DialogTitle>
          <DialogContent>
            <DialogContentText
              sx={{ px: isSmall ? 0 : 19, pb: 3, whiteSpace: "pre-line" }}
              color="#FFFFFF"
              variant={isSmall ? "body2" : "body1"}
              align="center"
            >
              {contactUsText}
            </DialogContentText>
            <Grid item sx={{ px: isSmall ? 0 : 30 }}>
              <FormControl fullWidth>
                <FormLabel>
                  <Typography variant={isSmall ? "h6" : "h6"} color="#F48A88">
                    Full Name
                  </Typography>
                </FormLabel>
                <TextField
                  id="name"
                  variant="outlined"
                  color="secondary"
                  focused
                  size="small"
                  style={{ backgroundColor: "#FFFFFF" }}
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                />
              </FormControl>
              <FormControl sx={{ pt: 1 }} fullWidth>
                <FormLabel>
                  <Typography variant={isSmall ? "h6" : "h6"} color="#F48A88">
                    Email
                  </Typography>
                </FormLabel>
                <TextField
                  id="email"
                  variant="outlined"
                  color="secondary"
                  focused
                  size="small"
                  style={{ backgroundColor: "#FFFFFF" }}
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                />
              </FormControl>
              <FormControl sx={{ pt: 1 }} fullWidth>
                <FormLabel>
                  <Typography variant={isSmall ? "h6" : "h6"} color="#F48A88">
                    Phone
                  </Typography>
                </FormLabel>
                <TextField
                  id="phone"
                  variant="outlined"
                  color="secondary"
                  focused
                  size="small"
                  style={{ backgroundColor: "#FFFFFF" }}
                  value={formState.phone}
                  onChange={(e) =>
                    setFormState({ ...formState, phone: e.target.value })
                  }
                />
              </FormControl>
              <FormControl sx={{ pt: 1 }} fullWidth>
                <FormLabel>
                  <Typography variant={isSmall ? "h6" : "h6"} color="#F48A88">
                    State
                  </Typography>
                </FormLabel>
                <TextField
                  id="state"
                  variant="outlined"
                  color="secondary"
                  focused
                  size="small"
                  style={{ backgroundColor: "#FFFFFF" }}
                  value={formState.state}
                  onChange={(e) =>
                    setFormState({ ...formState, state: e.target.value })
                  }
                />
              </FormControl>
              <FormControl sx={{ pt: 1 }} fullWidth>
                <FormLabel>
                  <Typography variant={isSmall ? "h6" : "h6"} color="#F48A88">
                    Questions/Comments
                  </Typography>
                </FormLabel>
                <TextField
                  id="comments"
                  variant="outlined"
                  color="secondary"
                  focused
                  size="small"
                  style={{ backgroundColor: "#FFFFFF" }}
                  value={formState.comments}
                  onChange={(e) =>
                    setFormState({ ...formState, comments: e.target.value })
                  }
                  multiline
                  rows={6}
                />
              </FormControl>
            </Grid>
          </DialogContent>

          <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
            <Button
              onClick={handleClose}
              type="submit"
              variant="outlined"
              sx={{
                backgroundColor: "secondary.main",
                borderColor: "secondary.main",
                color: "#40464D",
                "&:hover": {
                  borderColor: "secondary.main",
                  color: "#FFFFFF",
                },
              }}
            >
              Submit
            </Button>
          </DialogActions>
          {/*close Icon added: right */}
          <Box sx={{ position: "absolute", right: 6, top: 10 }}>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 5,
                color: "primary.contrastText",
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </form>
      </Dialog>
      <Snackbar
        open={alert.open}
        message={alert.message}
        ContentProps={{ style: { backgroundColor: alert.backgroundColor } }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={() => setAlert({ ...alert, open: false })}
        autoHideDuration={4000}
      />
    </Portal>
  );
}

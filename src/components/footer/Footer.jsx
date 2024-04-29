import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FolderIcon from "@mui/icons-material/Folder";
import "../../styles/variables.css";

export default function Footer() {
  return (
    <>
      <Grid container sx={{ backgroundColor: "#021633 ", color: "#ffffff" }}>
        <Grid
          item
          sx={{ border: "1px solid black", padding: 2 }}
          xs={12}
          sm={3}
        >
          <Grid container flex-direction="column">
            <Grid
              item
              width="100%"
              sx={{
                fontSize: 16,
                fontWeight: 600,
                color: "var(--printary-color)",
              }}
            >
              hi-doc
            </Grid>
            <br />
            <br />

            <Grid item width="100%">
              <Typography>
                Fastest growing medical platform for doctors
              </Typography>
            </Grid>
            <br />
            <br />
            <br />

            <Grid item width="100%">
              <FacebookIcon />
              &nbsp; &nbsp; &nbsp;
              <WhatsAppIcon />
              &nbsp; &nbsp; &nbsp;
              <YouTubeIcon />
              &nbsp; &nbsp; &nbsp;
              <LinkedInIcon />
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          sx={{ border: "1px solid black", padding: 2 }}
          sm={3}
          xs={12}
        >
          <Grid item width="100%">
            <Typography>REACH US</Typography>
          </Grid>
          <br />
          <Grid item width="100%">
            <Typography>
              Please contact the below details for any other information
            </Typography>
          </Grid>
          <br />

          <Grid item width="100%">
            <Typography>Email:</Typography>
            <Typography>info@hidoc.co</Typography>
          </Grid>
          <br />

          <Grid item width="100%">
            <Typography>Address:</Typography>
            <Typography>
              Hidoc Dr. Inc, 2055 Limestone Rd, STE 200-C, Wilmington, DE,
              19098, United States.
            </Typography>
          </Grid>
        </Grid>

        <Grid
          item
          sx={{ border: "1px solid black", padding: 2 }}
          sm={6}
          xs={12}
        >
          <Grid item width="100%">
            <Typography>HIDOC DR. FEATURES</Typography>
          </Grid>
          <Grid container width="100%" sx={{ textAlign: "center", my: 2 }}>
            <Grid
              sm={3}
              xs={12}
              sx={{
                backgroundColor: "var(--primary-color)",
                borderRadius: 1,
                border: "0.5px solid #021633",
                py: 2,
              }}
            >
              <FolderIcon />
              <br />

              <Typography>Drug Database</Typography>
            </Grid>
            <Grid
              sm={3}
              xs={12}
              sx={{
                backgroundColor: "var(--primary-color)",
                borderRadius: 1,
                border: "0.5px solid #021633",
                py: 2,
              }}
            >
              <FolderIcon />
              <br />

              <Typography>Drug Database</Typography>
            </Grid>
            <Grid
              sm={3}
              xs={12}
              sx={{
                backgroundColor: "var(--primary-color)",
                borderRadius: 1,
                border: "0.5px solid #021633",
                py: 2,
              }}
            >
              <FolderIcon />
              <br />

              <Typography>Drug Database</Typography>
            </Grid>
            <Grid
              sm={3}
              xs={12}
              sx={{
                backgroundColor: "var(--primary-color)",
                borderRadius: 1,
                border: "0.5px solid #021633",
                py: 2,
              }}
            >
              <FolderIcon />
              <br />

              <Typography>Drug Database</Typography>
            </Grid>
            <Grid
              sm={3}
              xs={12}
              sx={{
                backgroundColor: "var(--primary-color)",
                borderRadius: 1,
                border: "0.5px solid #021633",
                py: 2,
              }}
            >
              <FolderIcon />
              <br />

              <Typography>Drug Database</Typography>
            </Grid>
            <Grid
              sm={3}
              xs={12}
              sx={{
                backgroundColor: "var(--primary-color)",
                borderRadius: 1,
                border: "0.5px solid #021633",
                py: 2,
              }}
            >
              <FolderIcon />
              <br />
              <Typography>Drug Database</Typography>
            </Grid>
            <Grid
              sm={3}
              xs={12}
              sx={{
                backgroundColor: "var(--primary-color)",
                borderRadius: 1,
                border: "0.5px solid #021633",
                py: 2,
              }}
            >
              <FolderIcon />
              <br />

              <Typography>Drug Database</Typography>
            </Grid>
            <Grid
              sm={3}
              xs={12}
              sx={{
                backgroundColor: "var(--primary-color)",
                borderRadius: 1,
                border: "0.5px solid #021633",
                py: 2,
              }}
            >
              <FolderIcon />
              <br />

              <Typography>Drug Database</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        sx={{
          backgroundColor: "lightgray ",
          textAlign: "center",
          py: 2,
        }}
      >
        <Grid> &copy; Copyright 2022 Hidoc Dr. Inc</Grid>
        <Grid>Terms & Conditons | Privacy Policy</Grid>
      </Grid>
    </>
  );
}

import React from "react";
// import style from "../../styles/app.module.css";
import "../../styles/variables.css";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import "../../index.css";
import "../../styles/app.module.css";

import {
  Avatar,
  Box,
  Chip,
  Divider,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

const style = {
  navbar: {
    paddingY: 1,
    backgroundColor: "var(--secondary-color)",
    display: "flex",
    alignItem: "center",
    justifyContent: "space-between",
  },

  options: {
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
  },

  usertabs: {
    height: "20px",
  },

  chip: {
    height: "20px",
  },

  avatar: {
    height: "20px",
    width: "20px",
    bgcolor: "yellowgreen",
  },

  logo: {
    paddingLeft: 1,
  },

  highlight: {
    textTransform: "uppercase",
    color: "blue",
  },
};

export default function header() {
  return (
    <>
      <Grid container sx={style.navbar}>
        <Grid item sm={2} sx={style.logo}>
          <Box>
            {/* <img src="" alt="hidoc-logo" /> */}
            <VaccinesIcon sx={{ height: 20, width: 20 }} />
          </Box>
        </Grid>
        <Grid item sm={8} className="stack">
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={1}
            sx={style.options}
          >
            <Box>Drug</Box>
            <Box>Calculator</Box>
            <Box>Articles</Box>
            <Box>News</Box>
            <Box>Quizzes</Box>
            <Box>Surveys</Box>
            <Box>Webinars</Box>
            <Box>Guidelines</Box>
          </Stack>
        </Grid>
        <Grid item sm={2} sx={style.user}>
          <Stack
            direction="row"
            spacing={1}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              paddingRight: 1,
              alignItems: "center",
            }}
          >
            <MenuIcon />
            <Chip label="247" variant="outlined" sx={style.chip} />
            {/* <Avatar sx={style.avatar}>H</Avatar> */}
            <Avatar sx={style.avatar}>N</Avatar>
          </Stack>
        </Grid>
      </Grid>

      <Grid
        sx={{
          backgroundColor: "var(--tertiary-color)",
          width: "100%",
          textAlign: "center",
          padding: 5,
        }}
        xs={12}
      >
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 14,
            paddingY: 0,
            fontWeight: 600,
          }}
        >
          Your one stop solution for
          <span
            style={{
              textTransform: "uppercase",
              marginLeft: 5,
              fontSize: 16,
              color: "var(--primary-color)",
            }}
          >
            medical learning & updates
          </span>
        </Typography>
      </Grid>

      <Grid
        container
        sx={{
          backgroundColor: "var(--secondary-color)",
          width: "100%",
          paddingY: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item xs={12} sm={6}>
          <Typography
            sx={{
              fontSize: 14,
              display: "flex",
              justifyContent: "center",
              fontWeight: 600,
            }}
          >
            Get knowledge of the
            <span
              style={{
                color: "var(--primary-color)",
                textTransform: "uppercase",
                marginLeft: 5,
                fontSize: 16,
              }}
            >
              approved drugs
            </span>
          </Typography>
        </Grid>

        <Grid
          item
          xs={8}
          sm={2.5}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Paper
            component="form"
            sx={{
              // p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: "100%",
              borderRadius: 10,
            }}
          >
            <InputBase
              sx={{ ml: 1.5, flex: 1 }}
              placeholder="Enter drug type"
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

import {
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "../../styles/variables.css";
import "../../index.css";

export default function Main() {
  const [selectLabel, setSelectLabel] = useState("");

  const handleMeds = (label) => {
    console.log("handleMeds", label);
    setSelectLabel(label);
  };

  return (
    <>
      <Grid sx={{ padding: 5 }}>
        <Grid container sx={{ display: "flex", alignItems: "center" }}>
          <Grid sm={6} xs={12} sx={{ paddingX: 5 }}>
            <span>
              Dailymed Drug Database: The DailyMed database contains 143072
              labeling submitted to the Food and Drug Administration (FDA) by
              companies. DailyMed does not contain a complete listing of
              labeling for FDA-regulated products (e.g., labeling that is not
              submitted to the FDA).
            </span>
          </Grid>

          <Grid
            container
            sm={6}
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Chip
              onClick={() => handleMeds("Anasthesia")}
              clickable={false}
              sx={{
                margin: 0.5,
                cursor: "pointer",
                backgroundColor:
                  selectLabel === "Anasthesia"
                    ? "var(--button-hightlight)"
                    : "",
              }}
              variant="outlined"
              label="Anasthesia"
            />
            <Chip
              onClick={() => handleMeds("Cardiology")}
              clickable={false}
              sx={{
                margin: 0.5,
                cursor: "pointer",

                backgroundColor:
                  selectLabel === "Cardiology"
                    ? "var(--button-hightlight)"
                    : "",
              }}
              variant="outlined"
              label="Cardiology"
            />
            <Chip
              onClick={() => handleMeds("Critical Care")}
              clickable={false}
              sx={{
                margin: 0.5,
                cursor: "pointer",

                backgroundColor:
                  selectLabel === "Critical Care"
                    ? "var(--button-hightlight)"
                    : "",
              }}
              variant="outlined"
              label="Critical Care"
            />
            <Chip
              onClick={() => handleMeds("Dentistry")}
              clickable={false}
              sx={{
                margin: 0.5,
                cursor: "pointer",

                backgroundColor:
                  selectLabel === "Dentistry" ? "var(--button-hightlight)" : "",
              }}
              variant="outlined"
              label="Dentistry"
            />
            <Chip
              onClick={() => handleMeds("Dermatology")}
              clickable={false}
              sx={{
                margin: 0.5,
                cursor: "pointer",

                backgroundColor:
                  selectLabel === "Dermatology"
                    ? "var(--button-hightlight)"
                    : "",
              }}
              variant="outlined"
              label="Dermatology"
            />
            <Chip
              onClick={() => handleMeds("Diabetology")}
              clickable={false}
              sx={{
                margin: 0.5,
                cursor: "pointer",

                backgroundColor:
                  selectLabel === "Diabetology"
                    ? "var(--button-hightlight)"
                    : "",
              }}
              variant="outlined"
              label="Diabetology"
            />
          </Grid>
        </Grid>

        <Grid container>
          <Grid
            sm={6}
            xs={12}
            container
            sx={{
              py: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Card sx={{ width: "50%", textAlign: "center" }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Drug Data
                </Typography>
                <Divider />
                <br />

                <Typography variant="body1" color="text.secondary">
                  Allegtra
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Calpol
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Paracetamol
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    backgroundColor: "var(--primary-color)",
                    fontWeight: 600,
                    borderRadius: 5,
                  }}
                >
                  Ferrum oxydatum pellet
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid
            sm={6}
            xs={12}
            container
            sx={{
              py: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Card sx={{ width: "50%", textAlign: "center" }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Drug Details
                </Typography>
                <Divider />
                <br />

                <Typography
                  variant="body1"
                  sx={{ color: "var(--primary-color)", fontWeight: 600 }}
                >
                  Ferrum oxydatum pellet
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Kelatin, glycerin, polyethylene glycol, povidone, propylene
                  glycol, purified water, sorbitol-sorbitan solution, titanium
                  dioxide
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid container>
          <Grid sm={4} xs={12} sx={{ padding: 2 }}>
            <div style={{ fontSize: 16, fontWeight: 600 }}>
              Explore more on Hidoc Dr.
            </div>
            <div style={{ color: "gray", fontWeight: 600 }}>News</div>
            <div style={{ fontWeight: 600, fontSize: 14 }}>
              Education: Diabetes and tooth loss together cause cognitive
              impairment.
            </div>
            <div style={{ fontSize: 8 }}>
              Diabetes and tooth loss both contribute to cognitive impairment
              and cognitive decline in older adults, according to new research
              published in a special issue of the Journal of Dental Research.
            </div>
            <div style={{ color: "gray", fontWeight: 600, fontSize: 8 }}>
              Posted on 15 Mar 2023
            </div>
          </Grid>

          <Grid sm={4} xs={12} sx={{ padding: 2 }}>
            <div style={{ color: "gray", fontWeight: 600, fontSize: 8 }}>
              <span>CRITICAL CARE</span>
              &nbsp; &bull; &nbsp;<span>10 Mar 2023</span>
            </div>
            <div style={{ fontSize: 12, fontWeight: 600 }}>
              Discovering Arthrogryposis:
              <br />
              Understanding The Causes, Symptoms and Diagnosis
            </div>
            <div style={{ fontSize: 8 }}>
              Arthrogryposis, also known as Curvature of the Joints, is a rare
              condition that affects the joints in the body.
            </div>
          </Grid>

          <Grid sm={4} xs={12} sx={{ padding: 2 }}>
            <div style={{ color: "gray", fontWeight: 600, fontSize: 8 }}>
              <span>CRITICAL CARE</span>
              &nbsp; &bull; &nbsp;<span>10 Mar 2023</span>
            </div>
            <div style={{ fontWeight: 600, fontSize: 12 }}>
              The Science Behind Crest Disease: Exploring the underlying
            </div>
            <br />
            <Divider />
            <br />
            <div style={{ color: "gray", fontWeight: 600, fontSize: 8 }}>
              <span>CRITICAL CARE</span>
              &nbsp; &bull; &nbsp;<span>10 Mar 2023</span>
            </div>
            <div style={{ fontWeight: 600, fontSize: 12 }}>
              A Comprehensive Guide To Apache Scoring: How It Works And Why You
              Should Use It
            </div>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

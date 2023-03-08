import { Box, Container, Grid } from "@mui/material";
import React from "react";

function Home() {
  return (
    <>
     <Grid item xs={12}>
        <Box sx={{ height: "auto" }}>
        <div className="ws-video-header-wrap">
          <div className="ws-video-header">
            <video
              id="the-video"
              title
              style={{width:"100%" }}
              loop
              muted
              playsInline
              autoPlay
              data-src="https://www.spirstar.de/wp-content/uploads/2022/03/header_spirstar.mp4"
              data-ftype="video/mp4"
              data-mobile="https://www.spirstar.de/wp-content/uploads/2022/05/header_spirstar_mobile.mp4"
              data-mtype="video/mp4"
            >
              <source
                src="https://www.spirstar.de/wp-content/uploads/2022/03/header_spirstar.mp4"
                type="video/mp4"
                media="all"
              />
            </video>
          </div>
        </div>
      </Box>
    </Grid>
    <Grid item xs={12}>
        <Box sx={{ height: "auto" }}>
        <div className="ws-video-header-wrap">
          {" "}
          <div className="ws-video-header">
            <video
              id="the-video"
              title
              style={{ width:"100%" }}
              loop
              muted
              playsInline
              autoPlay
              data-src="https://www.spirstar.de/wp-content/uploads/2022/03/header_spirstar.mp4"
              data-ftype="video/mp4"
              data-mobile="https://www.spirstar.de/wp-content/uploads/2022/05/header_spirstar_mobile.mp4"
              data-mtype="video/mp4"
            >
              <source
                src="https://www.spirstar.de/wp-content/uploads/2022/03/header_spirstar.mp4"
                type="video/mp4"
                media="all"
              />
            </video>
          </div>
        </div>
      </Box>
    </Grid>
    
    </>
   
  );
}

export default Home;

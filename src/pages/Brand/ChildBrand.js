import React from "react";
import { useParams } from "react-router-dom";

import { Box } from "@mui/material";
import cat_pumps from "../../assets/images/cat_pumps.png";
import spir_star from "../../assets/images/spir_star.png";
import techcal from "../../assets/images/techcal.png";
import hydraulics_international from "../../assets/images/hydraulics_international.png";
import graphic from "../../assets/images/graphic.png";
import norriseal from "../../assets/images/norriseal.png";
import taylor from "../../assets/images/taylor.png";
import hidraulics from "../../assets/images/hidraulics.png";

const arrBrand = [cat_pumps, spir_star, techcal, hydraulics_international, graphic, norriseal, taylor, hidraulics];

function ChildBrand() {
    let { id } = useParams();
    return ( 
        <Box
            component="img"
            sx={{
                width: { xs: "50%", md: "70%" },
                aspectRatio: " 3/2",
                objectFit: "contain",
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
            }}
            //   alt="The house from the offer."
            src={arrBrand[id]}
            />
     );
}

export default ChildBrand;
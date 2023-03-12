import React from "react";
import { useParams } from "react-router-dom";

import { Box } from "@mui/material";

import br1 from "../../assets/images/Picture1.png";
import br2 from "../../assets/images/Picture2.png";
import br3 from "../../assets/images/Picture3.png";
import br4 from "../../assets/images/Picture4.png";
import br5 from "../../assets/images/Picture5.png";
import br6 from "../../assets/images/Picture6.png";
import br7 from "../../assets/images/Picture7.png";
import br8 from "../../assets/images/Picture8.png";

const arrBrand = [br1, br2, br3, br4, br5, br6, br7, br8];
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
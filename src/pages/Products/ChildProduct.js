import React from "react";
import { useParams } from "react-router-dom";

function ChildProduct() {
    let { id } = useParams();
    return ( 
        <div>
            asdasdasd {id}
        </div>
     );
}

export default ChildProduct;
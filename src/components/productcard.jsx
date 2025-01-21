import React from "react";
import ViewButton from "./button";

const Productcard=()=>{
    const ProductImage="https://img.freepik.com/premium-photo/ultra-realistic-orange-background-4k-hd-photo-product_1193781-21514.jpg";
    const ProductName="hand wash bottle";
    const Price="200";


return(
    <div style={{border:"1px solid black"}}>
        <img src={ProductImage} style={{height:"100px", width:"100px"}}></img>
        <h2>{ProductName}</h2>
        <p>{Price}</p>
        <ViewButton/>
    </div>
)
}
export default Productcard;

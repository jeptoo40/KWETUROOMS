import React from "react";

export default function Navbar() {
  return (
    <nav style={{display:"flex",justifyContent:"space-between",padding:"20px 50px",boxShadow:"0 2px 5px rgba(0,0,0,0.1)"}}>
      <h2>Debby Designs</h2>
      <ul style={{display:"flex",gap:"20px"}}>
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
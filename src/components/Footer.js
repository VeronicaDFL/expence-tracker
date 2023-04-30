import React from "react";

export const Footer = () => {
const currentYear = new Date().getFullYear();
    return(
        <h4 className= "footer-container">&copy; {currentYear} Veronica De Felice</h4>
    )
}
import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear();

    return <footer>
        <p>Copyright &copy; {currentYear} Lasantha Mudalige. All rights reserved.</p>
    </footer>
}

export default Footer;
import React from "react";
import "./footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container text-center">
                <p>© {new Date().getFullYear()} Mahmoud Mohamed. All Rights Reserved.</p>
                <div className="footer-links">
                    <a href="https://github.com/mahmoud2ali" target="_blank" rel="noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/mahmoud2mohamed/" target="_blank" rel="noreferrer">LinkedIn</a>
                    <a href="mailto:mahmoud2m2ali@gmail.com">Email</a>
                </div>
            </div>
        </footer>
    );
}

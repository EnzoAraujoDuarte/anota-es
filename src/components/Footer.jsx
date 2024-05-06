import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p><a class="footerlink" href="https://github.com/EnzoAraujoDuarte">Enzo Araujo Duarte</a> | 🧑🏽‍💻☕ {year}</p>
    </footer>
  );
}

export default Footer;
 
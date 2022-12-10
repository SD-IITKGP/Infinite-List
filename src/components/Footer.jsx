import React from "react";
const today = new Date();
const year = today.getFullYear();
function Footer() {
  return (
    <footer className="container-fluid Footer">
      Copyright &copy;{" "}
      <a href="https://sourabhchoudhary.live">sourabhchoudhary.live</a> {year}
    </footer>
  );
}

export default Footer;

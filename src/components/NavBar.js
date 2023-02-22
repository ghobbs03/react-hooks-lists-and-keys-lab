import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkElements = links.map((link_text, index) => {
    return <a key={index} href={"#" + link_text}>{link_text}</a>
  })

  return <nav>
    {linkElements}
  </nav>;

}

export default NavBar;

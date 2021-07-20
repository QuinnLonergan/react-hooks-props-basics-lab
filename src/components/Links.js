import React from "react";

function Links(prop) {
    return (
      <div>
        <h3>Links</h3>
        <a href={prop.gitHub}>{prop.gitHub}</a>
        <a href={prop.linkeDin}>{prop.linkeDin}</a>
      </div>
    );
  }
  
export default Links;

  
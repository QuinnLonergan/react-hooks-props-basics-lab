import React from "react";
import Links from "./Links"

function About(prop) {
  const bioText = prop.bio

  function bio(){
    if (bioText) {
    return <p>{prop.bio}</p>
    }
  }

  return (
    <div id="about">
      <h2>About Me</h2> 
      {bio()}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links 
        gitHub={prop.github}
        linkeDin={prop.linkedin}
      />
    </div>
  );
}

export default About;

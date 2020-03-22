import React from "react";
import Typewriter from "typewriter-effect";
import { TimelineMax } from "gsap";

import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
// Force CSSPlugin to not get dropped during build
gsap.registerPlugin(CSSPlugin);

const Header = () => {
  const timeline = new TimelineMax();
  return (
    <header className="header">
      <div className="wrapper iron-man">
        <div className="wrapper center-content">
          <div>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "Designer",
                    "Programmer",
                    "Web Developer",
                    "Android Developer"
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 10,
                  cursor: ".",
                  start: 3000
                }}
              />
            </h1>
            <h4>and a little of everything.</h4>
          </div>
        </div>
      </div>

      <div className="logo">Lishu gupta</div>
    </header>
  );
};

export default Header;

import React, { useEffect } from "react";
import "./NavBar.modules.css";
import BarIcon from "../../features/BarIcon/BarIcon";
import NightMood from "../../features/NightMood/NightMood";

export default function NavBar() {
  function Nav() {
    // console.log("hello");
    let link = document.querySelector("ul.link");
    let bar = document.querySelector(".bar");
    bar.addEventListener("click", () => {
      // console.log("fff");
      if (link.classList.contains("hidden")) {
        link.classList.remove("hidden");
      } else {
        link.classList.add("hidden");
      }
    });
    // link.classList.contains("hidden")
    // console.log(link);
    // console.log(link.classList.contains("hidden"));
    // console.log(bar.classList.contains("hidden"));
  }

  function ActiveLink() {
    let link = document.querySelectorAll("ul.link li a");

    link.forEach((li) => {
      li.addEventListener("click", () => {
        // console.log("clicked", li);
        link.forEach((lis) => {
          lis.classList.remove("active");
        });
        li.classList.add("active");
      });
    });
  }

  useEffect(() => {
    ActiveLink();
  }, []);

  return (
    <>
      <header className="fixed w-full bg-color t-w z-50">
        <div className="container mx-auto px-3 md:px-10 py-5 flex items-center justify-between">
          <div className="logo gradient-text text-3xl font-extrabold">
            <a href="#Home">El Masry</a>
          </div>
          <div className="links flex items-center gap-4">
            <ul className="link items-center hidden  gap-4 md:flex absolute md:static">
              <li>
                <a href="#Home" className="pb-1 px-2 tran">
                  Home
                </a>
              </li>
              <li>
                <a href="#About" className="pb-1 px-2 tran">
                  About
                </a>
              </li>
              <li>
                <a href="#Skills" className="pb-1 px-2 tran">
                  Skills
                </a>
              </li>
              <li>
                <a href="#Projects" className="pb-1 px-2 tran">
                  Projects
                </a>
              </li>
              <li>
                <a href="#Contact" className="pb-1 px-2 tran">
                  Contact
                </a>
              </li>
            </ul>
            <div className="bar md:hidden" onClick={Nav}>
              <BarIcon />
            </div>
            {/* <NightMood /> */}
          </div>
        </div>
      </header>
    </>
  );
}

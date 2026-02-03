import React, { useEffect, useState } from "react";
import "./FilterProjectsLinks.modules.css";

import { ProjectsData } from "../../data";
import ProjectsBox from "../ProjectsBox/ProjectsBox";

export default function FilterProjectsLinks({ data }) {
  const [filterData, setfilterData] = useState();
  // let newData = setfilterData(data);

  // function getData(dataPro) {
  //   setfilterData(dataPro);
  // }

  function filterDataProjects(el) {
    if (el.currentTarget.getAttribute("id") == "All") {
      setfilterData(data);
    } else if (el.currentTarget.getAttribute("id") == "HTML & CSS") {
      setfilterData(data.filter((da) => da.type == "html-css"));
    } else if (el.currentTarget.getAttribute("id") == "Javascript") {
      setfilterData(data.filter((da) => da.type == "js"));
    } else if (el.currentTarget.getAttribute("id") == "React") {
      setfilterData(data.filter((da) => da.type == "react"));
    }
  }
  // console.log(data);
  // console.log(filterData);

  useEffect(() => {
    // getData(data);
    setfilterData(data);
  }, []);

  return (
    <>
      <div className="projects-filter flex justify-center">
        <ul className="flex flex-wrap items-center justify-center gap-5">
          <li
            id="All"
            onClick={(el) => filterDataProjects(el)}
            className="px-5 py-2 rounded-lg cursor-pointer"
          >
            All
          </li>
          <li
            id="HTML & CSS"
            onClick={(el) => filterDataProjects(el)}
            className="px-5 py-2 rounded-lg cursor-pointer"
          >
            HTML & CSS
          </li>
          <li
            id="Javascript"
            onClick={(el) => filterDataProjects(el)}
            className="px-5 py-2 rounded-lg cursor-pointer"
          >
            Javascript
          </li>
          <li
            id="React"
            onClick={(el) => filterDataProjects(el)}
            className="px-5 py-2 rounded-lg cursor-pointer"
          >
            React
          </li>
        </ul>
      </div>

      <ProjectsBox filterdataProject={filterData} />
    </>
  );
}

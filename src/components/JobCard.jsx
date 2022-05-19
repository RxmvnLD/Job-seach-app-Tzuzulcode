import React from "react";
//import { Link } from "react-router-dom";
import logo from "../imports/img/logo.png";

function JobCard({ jobs }) {
  //console.log("==JobCard==");
  //console.log(jobs);
  return (
    <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 m-2 grid grid-cols-3 cursor-pointer">
      <img src={logo} alt="Company logo" />
      <section>
        <article>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Job Title
          </h5>
        </article>
        <article className="font-normal text-gray-700 dark:text-gray-400">
          Company
        </article>
      </section>
      <section className="font-normal text-gray-700 dark:text-gray-400">
        <article>Working hours</article>
        <article>Remote</article>
        <article>Salario: {/* job.salary */}</article>
      </section>
    </div>
  );
}

export default JobCard;

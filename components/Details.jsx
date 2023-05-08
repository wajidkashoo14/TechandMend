import React from "react";
import data from "./detailsData";
import styles from "../styles/details.module.css";

function Details() {
  return (
    <section className={styles.container}>
      {data.map((item) => {
        const { id, label, number } = item;
        return (
          <article
            key={id}
            className="w-56 h-36 bg-[#225eff] flex flex-col justify-center items-center shadow-xl"
          >
            <span className="text-white font-semibold">{number}</span>
            <hr className="w-14 bg-[#ff9d19] h-1 rounded  my-1" />
            <span className="text-white text-xl font-semibold">{label}</span>
          </article>
        );
      })}
    </section>
  );
}

export default Details;

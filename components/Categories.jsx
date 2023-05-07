import React from "react";
import styles from "../styles/categories.module.css";
import data from "./categoriesData";
function Categories() {
  return (
    <>
      <section className={styles.container}>
      <h1 className="text-center text-5xl font-bold text-[#fff] my-20">Categories</h1>
        <div className="flex justify-center items-center flex-wrap gap-20 min-h-fit">
        {data.map((category) => {
          const { id, image, title, discription } = category;
          return (
            <article key={id} className="flex w-96 bg-[#fff] gap-5">
              <div className="text-3xl w-36 flex justify-center items-center text-[#fff] bg-[#2A7AFD] p-4">{image}</div>
              <div className="p-3">
                <h2 className="text-center text-lg font-semibold mb-2">{title}</h2>
                <p className="text-left text-[15px] text-[#a3968d]">{discription}</p>
              </div>
            </article>
          );
        })}
        </div>
      </section>
    </>
  );
}

export default Categories;
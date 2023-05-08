import React from "react";
import data from "./whyChooseUsData";
function WhyChooseUs() {
  return (
    <section className="w-full text-center min-h-screen">
      <h1 className="text-5xl text-[#47f] font-semibold my-12">
        Why Choose Us
      </h1>
      <div className="flex justify-center items-center flex-wrap gap-24">
        {data.map((item) => {
          const { id, title, description } = item;
          return (
            <article
              key={id}
              className="w-96 bg-white shadow-xl text-center p-5"
            >
              <h2 className="text-2xl text-[#47f] my-2 font-medium">{title}</h2>
              <p className="text-[#837469]">{description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default WhyChooseUs;

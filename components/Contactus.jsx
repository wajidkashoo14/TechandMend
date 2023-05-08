import Image from "next/image";
import React from "react";
import styles from "../styles/form.module.css";

function Contactus() {
  return (
    <section className="w-full min-h-screen flex justify-around items-center">
      <div>
        <Image
          src="/contact.jpg"
          alt="contact image"
          width={600}
          height={800}
        />
      </div>
      <form className="flex flex-col w-4/12 h-100% shadow-xl py-10 px-5">
        <h2 className="text-4xl text-[#47f] font-semibold my-5 text-center">
          Get in Touch!
        </h2>
        <div className="flex gap-10">
          <div className="flex flex-col">
            <label className="w-20 my-1">Name</label>
            <input type="text" className="focus:outline-blue-500 w-30 h-12 px-2 outline-none bg-[#eef1f3] " />
          </div>
          <div className="flex flex-col">
            <label className="w-36 my-1">Mobile Nmber</label>
            <input type="text" className="focus:outline-blue-500 w-30 h-12 px-2 outline-none bg-[#eef1f3]" />
          </div>
        </div>
        <div className="h-3/6 mt-3 w-full">
          <label className="w-20">Message</label>
          <textarea className={styles.textarea}></textarea>
        </div>
        <button className="w-full bg-[#47f] text-white py-2">Submit</button>
      </form>
    </section>
  );
}

export default Contactus;

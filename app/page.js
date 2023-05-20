"use client"
import { useEffect, useState } from "react";
import RepairTypes from "@/components/RepairTypes";
import Categories from "@/components/Categories";
import styles from "../styles/hero.module.css";
import WhyChooseUs from "@/components/WhyChooseUs";
import Details from "@/components/Details";
import Contactus from "@/components/Contactus";
import Image from "next/image";

export default function Home() {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    "/broken.jpg",
    "/brokeniphone.jpg",
    "/fixedphone.jpg",
    "/hero.jpg",
  ];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <section className={styles.hero}>
      {images.map((url, index) => (
        <Image
        width={1400}
        height={600}
          key={url}
          src={url}
          alt="Hero Banner"
          className={styles.heroBannerImage}
          style={{ opacity: index === imageIndex ? 1 : 0 }}
        />
      ))}
      <article className="flex flex-col items-center justify-center mt-48">
        <h1 className="text-5xl text-[#47f] font-bold justify-center">
          Welcome to Tech and Mend quick repair
        </h1>
        <p className="text-[#47f] text-xl font-semibold">
          Get your phones n Laptop fix at affordable rates
        </p>
        </article>
      </section>
      <RepairTypes />
      <Categories />
      <WhyChooseUs />
      <Details />
      <Contactus />
    </>
  );
}

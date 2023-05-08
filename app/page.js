import RepairTypes from "@/components/RepairTypes";
import Categories from "@/components/Categories";
import styles from "../styles/hero.module.css";
import WhyChooseUs from "@/components/WhyChooseUs";
import Details from "@/components/Details";
import Contactus from "@/components/Contactus";

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <h1 className="text-5xl font-bold text-[#fff] justify-center">
          Welcome to Tech and Mend quick repair
        </h1>
        <p className="text-[#47f] text-xl font-semibold">
          Get your phones n Laptop fix at affordable rates
        </p>
      </section>
      <RepairTypes />
      <Categories />
      <WhyChooseUs />
      <Details />
      <Contactus />
    </>
  );
}

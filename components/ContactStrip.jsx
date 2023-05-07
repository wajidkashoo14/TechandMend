import Image from "next/image";
import Link from "next/link";
import React from "react";

function ContactStrip() {
  return (
    <section className="flex justify-evenly items-center h-28">
      <Link href="/" className="flex items-center gap-1">
        <Image src="/nav.png" alt="repair shop logo" width={50} height={100} />
        <h2 className="text-md font-bold ">TECH&MEND</h2>
      </Link>

      <div>
        <h2 className="text-md font-semibold">4 Tickhill Rd, Maltby</h2>
        <p className="text-[#a3968d] text-[13px]">Rotherham S66 7BP, UK</p>
      </div>
      <div>
        <h2 className="text-md font-semibold">
          11, The Parade, Church St, Armthorpe
        </h2>
        <p className="text-[#a3968d] text-[13px]">
          Doncaster DN3 3AG, United Kingdom
        </p>
      </div>
      <div>
        <h2 className="text-md font-semibold">Mail Us</h2>
        <p className="text-[#a3968d] text-[13px]">Wkashoo14@gmail.com</p>
      </div>
    </section>
  );
}

export default ContactStrip;

"use client"

import { featuredProducts } from "@/components/data";
import Price from "@/components/Price";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const card = featuredProducts.find((item) => item.id === Number(id));

  if (!card) notFound();

  return (
    <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around md:flex-row gap-4">
      {/* Image Container  */}
      {card.img && (
        <div className="relative ">
          <Image src={card.img} alt={card.title} className="object-contain" />
        </div>
      )}
      {/* Text Container  */}
      <div className="flex-1 flex flex-col gap-4">
        <h1 className="text-2xl font-bold"> {card.title}</h1>
        <p className="text-xl">{card.desc}</p>
        <Price price={card.price} id={card.id} options={card.options} />
      </div>
    </div>
  );
};

export default page;

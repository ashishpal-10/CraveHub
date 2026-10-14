import cards from "@/components/data";
import Image from "next/image";
import React from "react";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const card = cards.find((item) => item.id === Number(id));

  return (
    <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around md:flex-row gap-04">
      {/* Image Container  */}
      {card?.image && (
        <div className="relative">
          <Image src={card.image} alt={card.name} className="object-contain" />
        </div>
      )}
      {/* Text Container  */}
      <div className="">
        {/* {card?.name} */}
        <h1 className=""> {card?.name}</h1>
        <p>{card?.description}</p>
        
      </div>
    </div>
  );
};

export default page;

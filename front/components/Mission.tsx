import React from "react";

export default function Mission() {
  return (
    <section className="z-10 flex flex-col place-items-center my-32 md:ml-80">
      <h3
        id="mission"
        className="text-2xl w-max text-white font-spaceMono mb-3"
      >
        Our mission
      </h3>
      <div className="max-w-xs bg-green-500 bg-opacity-40 rounded-3xl p-4 text-white font-roboto grid gap-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget faucibus
          dolor morbi elit ac. Nibh vivamus fames euismod tempus, nunc quam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
          ea, laborum quod dolorem vero magni sunt odio omnis. Dolore animi non,
          aut maxime quis tempore aperiam sint esse quam aspernatur.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo,
          laudantium. Voluptatum natus repudiandae iste libero error, vero
          minima optio consequatur?
        </p>
      </div>
    </section>
  );
}
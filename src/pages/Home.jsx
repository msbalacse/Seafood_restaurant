import React from "react";
import coverImage from "../assets/images/image_Cover.png";
import image1 from "../assets/images/image_1.png";
import image2 from "../assets/images/image_2.png";
import image3 from "../assets/images/image_3.png";
import imageTheme from "../assets/images/image_theme.png";
import ImageSwipper from "../components/ImageSwipper";

const Home = () => {
  return (
    <>
      {/* Hero section */}
      <div className="relative">
        <img
          className="object-cover w-full h-[500px] md:h-auto"
          src={coverImage}
          alt="home_cover_page"
        />
        <div className="absolute flex flex-col gap-4 translate-x-1/2 translate-y-1/2 bottom-1/2 right-1/2">
          <h1 className="font-semibold text-white text-7xl font-ubuntu">
            Savour real Seafood
          </h1>
          <p className="w-full md:w-[360px] text-sm text-white">
            With a deep-rooted love for all things seafood, our talented chefs
            combine culinary expertise with creativity to craft dishes that
            celebrate the ocean's treasures.
          </p>
        </div>
      </div>

      {/* About section */}
      <div className="grid grid-cols-1 gap-4 p-4 my-8 md:grid-cols-3">
        <div className="flex flex-col gap-4 md:col-start-2">
          <h1 className="text-4xl font-roslindale">
            Emperor's Cooking Dynasty:
          </h1>
          <h1 className="text-4xl font-roslindale">
            The History of Our Cuisine
          </h1>
        </div>
        <div className="flex flex-col gap-4 text-sm">
          <p>
            Our esteemed chef, renowned for their passion and expertise in
            seafood cuisine, elevates the freshest catches into culinary works
            of art that will delight your senses. With an unwavering dedication
            to sourcing the highest quality seafood, our chef is deeply
            committed to sustainability and responsible fishing practices,
            ensuring that each ingredient is not only delicious but also
            ethically sourced.
          </p>
          <p>
            Drawing inspiration from global flavors and techniques, our chef
            combines traditional culinary wisdom with innovative approaches to
            create unforgettable dishes. From succulent crab cakes with a hint
            of Cajun spice to seared tuna atop a bed of vibrant seaweed salad.
          </p>
        </div>
      </div>

      {/* About image */}
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-rows-2 md:grid-cols-4">
        <img
          src={image1}
          className="row-start-1 row-end-2 md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-3"
          alt="image1"
        />
        <img src={image2} className="" alt="image2" />
        <p className="text-sm">
          In addition to their culinary prowess, our chef exemplifies a profound
          dedication to sustainability and responsible fishing practices,
          forging a path towards a more ethical dining experience. Every
          delectable creation not only tantalizes your taste buds but also
          reflects a deep sense of environmental consciousness, guaranteeing
          that your enjoyment aligns with the principles of responsible
          sourcing.
        </p>
        <p className="text-sm">
          Indulge in the sublime pleasure of succulent crab cakes infused with a
          tantalizing Cajun spice, perfectly balancing richness and zest. Each
          bite transports you to the vibrant streets of Louisiana, awakening
          your senses to a symphony of flavors.
        </p>
        <img src={image3} className="" alt="image2" />
      </div>

      {/* image theme */}
      <div>
        <img
          className="w-full md:min-h-screen"
          src={imageTheme}
          alt="image__theme"
        />
      </div>

      {/* "swipper image" */}
      <div className="my-28 md:my-40">
        <h1 className="text-2xl text-center text-black md:text-4xl font-roslindale ">
          Our eatery provides an array of quality ingredients
        </h1>
        <ImageSwipper />
      </div>

      <h1 className="my-24 text-3xl text-center text-black md:text-4xl font-roslindale ">
        In our venue, we maintain a coastal ambiance with traditional IVORIAN
        elements like ivorian prints tissues walls and wood lighting fixtures.
      </h1>
    </>
  );
};

export default Home;

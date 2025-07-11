"use client";

import { Geist, Geist_Mono } from "next/font/google";

import PosterCarousel from "@/components/(carousel)/PosterCarousel";
import FilterComponent from "@/sections/FilterComponent";
import ManualCarousel from "@/components/(carousel)/ManualCarousel";
import MainSection from "@/sections/MainSection";

function Illustrated() {
  const posters = [
    {
      id: 1,
      imageUrl: "https://picsum.photos/300/400?random=1",
      title: "1 Amazing Adventure",
      rating: 4.5,
      likes: 15420,
      type: "illustrated",
      subtype: "manwha",
    },
    {
      id: 2,
      imageUrl: "https://picsum.photos/300/400?random=2",
      title: "2 of the Lost Kingdom",
      rating: 3.8,
      likes: 8950,
      type: "illustrated",
      subtype: "manwha",
    },
    {
      id: 3,
      imageUrl: "https://picsum.photos/300/400?random=3",
      title: "3 Odyssey: Beyond the Stars",
      rating: 4.9,
      likes: 45600,
      type: "illustrated",
      subtype: "manwha",
    },
    {
      id: 4,
      imageUrl: "https://picsum.photos/300/400?random=4",
      title: "4 Night Live",
      rating: 4.2,
      likes: 2340,
      type: "illustrated",
      subtype: "manwha",
    },
    {
      id: 5,
      imageUrl: "https://picsum.photos/300/400?random=5",
      title: "5 Amazing Adventure",
      rating: 4.5,
      likes: 15420,
      type: "illustrated",
      subtype: "manwha",
    },
    {
      id: 6,
      imageUrl: "https://picsum.photos/300/400?random=6",
      title: "6 of the Lost Kingdom",
      rating: 3.8,
      likes: 8950,
      type: "illustrated",
      subtype: "manwha",
    },
    {
      id: 7,
      imageUrl: "https://picsum.photos/300/400?random=7",
      title: "7 Odyssey: Beyond the Stars",
      rating: 4.9,
      likes: 45600,
      type: "illustrated",
      subtype: "manwha",
    },
    {
      id: 8,
      imageUrl: "https://picsum.photos/64/64?random=108",
      title: "8 Night Live",
      rating: 4.2,
      likes: 340,
      type: "illustrated",
      subtype: "manwha",
    },
    {
      id: 9,
      imageUrl: "https://picsum.photos/300/400?random=5",
      title: "The 9 Adventure",
      rating: 4.5,
      likes: 15420,
      ttype: "illustrated",
      subtype: "manwha",
    },
    {
      id: 10,
      imageUrl: "https://picsum.photos/300/400?random=6",
      title: "Mystery 10 the Lost Kingdom",
      rating: 3.8,
      likes: 8950,
      type: "illustrated",
      subtype: "manwha",
    },
    {
      id: 11,
      imageUrl: "https://picsum.photos/300/400?random=7",
      title: "11",
      rating: 4.9,
      likes: 45600,
      type: "illustrated",
      subtype: "manwha",
    },
    {
      id: 12,
      imageUrl: "https://picsum.photos/300/400?random=8",
      title: "12 Night Live",
      rating: 4.2,
      likes: 340,
      type: "illustrated",
      subtype: "manwha",
    },
    // {id: 13,
    // imageUrl: "https://picsum.photos/300/400?random=5",
    // title: "The Amazing Adventure",
    // rating: 4.5,
    // likes: 15420,
    // type:"anime"
    // },
    // {
    // id: 14,
    // imageUrl: "https://picsum.photos/300/400?random=6",
    // title: "Mystery of the Lost Kingdom",
    // rating: 3.8,
    // likes: 8950,
    // type:"manwha"
    // },
    // {
    // id: 15,
    // imageUrl: "https://picsum.photos/300/400?random=7",
    // title: "Space Odyssey: Beyond the Stars",
    // rating: 4.9,
    // likes: 45600,
    // },
    // {
    // id: 16,
    // imageUrl: "https://picsum.photos/300/400?random=8",
    // title: "Comedy Night Live",
    // rating: 4.2,
    // likes: 340,
    // type:"manga"
    // }
  ];

  const filterOptions = {
    Year: ["2020s", "2010s", "2000s", "1990s", "1980s"],
    Rating: ["5 stars", "4+ stars", "3+ stars", "2+ stars", "1+ stars"],
    Popular: ["This week", "This month", "This year", "All time"],
    Genre: ["Adventure", "Action", "Apocalypse", "Sports", "Shounen", "Others"],
    Type: ["Manhwa", "Manga", "Lightnovel"],
  };

  const intialFilters = {
    year: "",
    rating: "",
    popular: "",
    genre: "",
    category: "",
  };

  return (
    <div
      className="bg-neutral-950 text-zinc-200 w-full h-full"
      style={{
        minHeight: "100vh",
      }}
    >
      <h1 className="headline-2e w-full font-medium pt-10 mb-4 mx-auto text-center">
        The Illustrated
      </h1>
      <p className="font-extralight text-[20px] text-center mb-10">
        {" "}
        Your collection of Manwha and Manga{" "}
      </p>
      <PosterCarousel posters={posters} />
      <div className="mt-10 mb-10 mx-30">
        <FilterComponent
          filterOptions={filterOptions}
          intialFilters={intialFilters}
          searchSuggestions={[
            "The Great Adventure",
            "Comedy Gold",
            "Action Movies",
            "Best Documentaries",
            "Top Rated Series",
            "Recent Movies",
            "Popular Shows",
            "Award Winners",
            "Netflix Originals",
            "Marvel Movies",
            "Disney Films",
            "Horror Classics",
            "Romantic Comedies",
            // ... add more suggestions based on your data
          ]}
        />
      </div>
      <div className="ml-30">
        <h1 className="text-white font-extralight pb-1">Popular this week</h1>
        <div className="flex items-center mr-30">
          <hr className="flex-grow border-t border-gray-300" />
        </div>
      </div>
      <ManualCarousel slides={posters} />
      {/* <div className="bg-zinc-800 px-20 mx-30">
                <MainSection/>
            </div> */}
    </div>
  );
}

export default Illustrated;

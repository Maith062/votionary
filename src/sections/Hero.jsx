"use client";
import Carousel from "../components/Carousel";
import InfoCard from "../components/InfoCard";

export default function Hero() {
  // These are the settings for the carousel

  const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop",
      alt: "Beautiful landscape 1",
      text: "Beautiful landscape 1 ",
    },
    {
      id: 2,
      image:
        "https://picsum.photos/300/400?random=9",
      alt: "Beautiful landscape 2",
      text: "Beautiful landscape 2",
    },
    {
      id: 3,
      image:
        "https://picsum.photos/300/400?random=5",
      alt: "Beautiful landscape 3",
      text: "A really beautify Beautiful landscape 3",
    },
  ];

  // Icon SVG
  const iconData = {
    create: {
      viewBox: "0 0 512 512",
      paths: [
        {
          d: "M459.94,53.25a16.06,16.06,0,0,0-23.22-.56L424.35,65a8,8,0,0,0,0,11.31l11.34,11.32a8,8,0,0,0,11.34,0l12.06-12C465.19,69.54,465.76,59.62,459.94,53.25Z",
          fill: "#000000",
        },
        {
          d: "M399.34,90,218.82,270.2a9,9,0,0,0-2.31,3.93L208.16,299a3.91,3.91,0,0,0,4.86,4.86l24.85-8.35a9,9,0,0,0,3.93-2.31L422,112.66A9,9,0,0,0,422,100L412.05,90A9,9,0,0,0,399.34,90Z",
          fill: "#000000",
        },
        {
          d: "M386.34,193.66,264.45,315.79A41.08,41.08,0,0,1,247.58,326l-25.9,8.67a35.92,35.92,0,0,1-44.33-44.33l8.67-25.9a41.08,41.08,0,0,1,10.19-16.87L318.34,125.66A8,8,0,0,0,312.69,112H104a56,56,0,0,0-56,56V408a56,56,0,0,0,56,56H344a56,56,0,0,0,56-56V199.31A8,8,0,0,0,386.34,193.66Z",
          fill: "#000000",
        },
      ],
    },
    explore: {
      viewBox: "0 0 512 512",
      paths: [
        {
          d: "M337.988693,63.9552 L302.978347,87.29856 L340.096,180.032 L382.404693,167.613867 L337.988693,63.9552 Z M266.709333,111.445333 L55.0020267,252.605867 L59.9300267,262.461867 L298.965333,192.128 L266.709333,111.445333 Z M357.009067,0 L440.57856,194.9952 L283.413333,241.216 L346.66944,409.38432 L306.71936,424.365653 L242.368,253.290667 L213.44,261.781333 L153.778347,424.38016 L114.561493,407.572907 L162.56,276.757333 L37.7361067,313.4784 L-2.13162821e-14,238.005973 L357.009067,0 Z",
          fill: "currentColor",
          transform: "translate(42.666667, 42.666667)",
        },
      ],
    },
    review: {
      viewBox: "0 0 24 24",
      paths: [
        {
          d: "M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          fillRule: "evenodd",
          clipRule: "evenodd",
        },
      ],
    },
  };

  const introItems = [
    {
      imgValue: iconData.explore,
      label: "Explore",
      info: "Explore the most popular selection of manwha, manga, and anime",
      extraClasses: {
        bgColor: "hover:bg-green-500",
      },
    },
    {
      imgValue: iconData.create,
      label: "Create",
      info: "Curate lists based on personalized recommendations",
      extraClasses: {
        bgColor: "hover:bg-orange-300",
      },
    },
    {
      imgValue: iconData.review,
      label: "Review",
      info: "Comment and review content adding to a growing community",
      extraClasses: {
        bgColor: "hover:bg-blue-500",
      },
    },
  ];

  return (
    <>
      <div className="max-w-7xl flex flex-col">
        <div className="max-w-7xl flex flex-col lg:flex-row gap-10 mx-20">
          <div className="flex-[2] ">
            <Carousel slides={slides} />
          </div>

          {/* Structuring the introductory info */}
          <div className="container flex-1 mt-2">
            {" "}
            {/*Could've also done w-[25%]*/}
            <h1 className="headline-2">Welcome to Votionary!</h1>
            <div
              className="pt-5 grid gap-4 mb-0 pb-0"
              style={{
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              }}
            >
              {introItems.map(
                ({ imgValue, title, info, extraClasses }, key) => (
                  <InfoCard
                    key={key}
                    imgValue={imgValue}
                    title={title}
                    info={info}
                    extraClasses={extraClasses}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

"use client"
import Carousel from "./Carousel";
import InfoCard from "./InfoCard";

export default function Hero(){

    // These are the settings for the carousel

    const slides = [
         {
            id: 1,
            image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop",
            alt: "Beautiful landscape 1"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
            alt: "Beautiful landscape 2"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=400&fit=crop",
            alt: "Beautiful landscape 3"
        }
    ];

    const introItems = [
        {
            imgValue: '/icons/explore.svg',
            label: 'Explore',
            info: 'Explore the most popular selection of manwha, manga, and anime!'
        },
         {
            imgValue: '/icons/create.svg',
            label: 'Create',
            info: 'Curate lists based on personalized recommendations and share with your community!'
        },
        {
            imgValue: '/icons/heart.svg',
            label: 'Review',
            info: 'Like, Comment, and Review content allowing a community based scale!'
        },
       
    ];

    
    return(
        
            <div className="max-w-7xl flex flex-col lg:flex-row gap-10">
                <div className="flex-[2] ">
                    <Carousel slides={slides}/>
                </div>

                {/* Structuring the introductory info */}
                <div className="container flex-1"> {/*Could've also done w-[25%]*/}
                    <h1 className="headline-2">
                        Welcome to Votionary!
                    </h1>
                    <div className="pt-5 grid gap-4" style={{gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))'}}>
                        {
                            introItems.map(({imgValue, title, info}, key) =>
                            (
                                <InfoCard 
                                    key={key}
                                    imgValue={imgValue}
                                    title={title}
                                    info={info}
                                />
                            ))
                        }
                    </div>
                </div>

            </div>
        
    );
}
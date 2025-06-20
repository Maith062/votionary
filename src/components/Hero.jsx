"use client"
import Carousel from "./Carousel";

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
    
    return(
        
            <div className="max-w-7xl mx-2 flex flex-col lg:flex-row gap-10">
                <div className="flex-[2] ">
                    <Carousel slides={slides}/>
                </div>
                <div className="flex-1 bg-amber-200">
                    <h1 className="flex justify-center ">
                        Welcome to Votionary
                    </h1>
                </div>

            </div>
        
    );
}
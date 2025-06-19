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
        
            <div className="max-w-7xl mx-2 flex gap-8">
                <Carousel slides={slides}/>
                <div>
                    <h1>Will include a gridbox where the three things they can do are highlighted</h1>
                </div>

            </div>
        
    );
}
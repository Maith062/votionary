"use client"

import { useState } from 'react';
import { Star, Heart } from 'lucide-react'

export default function Content({   
    imageUrl,
    title,   
    ratings = 0,
    likes = 0,
    onClick,
    className = "",
    width = "w-30",
    height = "h-40",
    type

}){
    const [isHovered, setIsHovered] = useState(false);
    //determining the number of stars
    function renderStars(ratings){
        const stars = [];
        const fullStars = Math.floor(ratings);
        const hasHalfStar = ratings % 1 !== 0;

        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                stars.push(
                <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                );
            } else if (i === fullStars && hasHalfStar) {
                stars.push(
                <div key={i} className="relative w-3.5 h-3.5">
                    <Star className="w-3.5 h-3.5 text-gray-300 absolute" />
                    <div className="overflow-hidden w-1/2">
                    <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    </div>
                </div>
                );
            } else {
                stars.push(
                <Star key={i} className="w-3.5 h-3.5 text-gray-300" />
                );
            }
        }
        return stars;
    }

    // this is for determining the shorthand between thousands and millions
    const formatLikes = (count) => {
        if (count >= 1000000){
            return `${(count/1000000).toFixed(1)}M`
        }else if (count >= 1000) {
            return `${(count/1000).toFixed(1)}K`
        }

        return count.toString();
    }
    
    return(
        <div 
            className={`relative ${width} ${height} cursor-pointer transition-transform duration-300 hover:scale-105 ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
        >
            {/* Main poster image */}
            <div className="relative w-full h-full rounded-sm overflow-hidden shadow-lg ring-1 ring-zinc-500">
                <img 
                    src={imageUrl} 
                    alt={title}
                    className="w-full h-full object-cover transition-brightness duration-300"
                    style={{ filter: isHovered ? 'brightness(0.1)' : 'brightness(1)' }}
                />

                {/* Content that doesn't appear on hover */}
                <div className='absolute bottom-1.5 left-1.5 bg-white/70 rounded-sm p-0.5'>
                    <h1 className='text-[10px] font-semibold font-mono'>{type}</h1>
                </div>
                
                {/* Overlay content that appears on hover */}
                <div 
                    className={`absolute inset-0 bg-black/30 bg-opacity-50 flex flex-col justify-end p-3 transition-opacity duration-300 ${
                        isHovered ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                <div className="text-white">
                    {/* Title */}
                    <h3 className="text-sm font-bold mb-2 line-clamp-2">{title}</h3>
                    
                    {/* Rating */}
                    <div className="flex items-center mb-2">
                    <div className="flex mr-2">
                        {renderStars(ratings)}
                    </div>
                    <span className="text-xs font-medium">{ratings.toFixed(1)}</span>
                    </div>
                    
                    {/* Likes */}
                    <div className="flex items-center">
                    <Heart className="w-4 h-4 mr-1 fill-red-500 text-red-500" />
                    <span className="text-xs font-medium">{formatLikes(likes)} likes</span>
                    </div>
                </div>
                </div>
                
                {/* Optional loading state placeholder */}
                {/* <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg opacity-0" /> */}
            </div>
        </div>
    )
}
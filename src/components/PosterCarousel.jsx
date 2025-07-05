
import ContentBox from "./ContentBox"

import { useState, useEffect } from 'react'

export default function PosterCarousel({posters}){
   // Main CardCarousel component
    const [isPaused, setIsPaused] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const [animationOffset, setAnimationOffset] = useState(0);
     const [direction, setDirection] = useState(1);

    // Duplicate cards for seamless loop
    const triplePosters = [...posters, ...posters, ...posters];
    const cardWidth = 80
    const totalWidth = posters.length * cardWidth;


    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                setAnimationOffset(prev => {
                const newOffset = prev + (direction * 1);
                
                // Reset position when we've moved one full cycle
                if (newOffset >= totalWidth) {
                    return 0;
                } else if (newOffset < 0) {
                    return totalWidth - 1;
                }
                
                return newOffset;
                });
            }, 50); // Smooth animation speed

            return () => clearInterval(interval);
        }
    }, [isPaused, direction, totalWidth]);

    //eventually will have to be changed to go to the page
    const handleCardSelect = (card) => {
        setSelectedCard(card);
        console.log('Selected card:', card);
    };

    return (
        <div className="h-54 bg-zinc-900 mx-8 overflow-hidden rounded-lg relative flex items-center faded-edges">
            <div
                className="absolute left-0 top-0 w-16 h-full z-10 cursor-pointer bg-black/0 hover:bg-opacity-10 transition-colors"
                onMouseEnter={() => {
                    setDirection(1);
                    setIsPaused(false);
                    }}
                onMouseLeave={() => setIsPaused(false)}
            />

            {/* Right hover area */}
            <div
                className="absolute right-0 top-0 w-16 h-full z-10 cursor-pointer bg-black/0 hover:bg-opacity-10 transition-colors"
                onMouseEnter={() => {
                    setDirection(-1);
                    setIsPaused(false);
                    }}
                onMouseLeave={() => setIsPaused(false)}
            />
        {/* Moving cards container */}
        <div
            className="flex absolute transition-transform duration-75 ease-linear"
            style={{
                transform: `translateX(-${animationOffset + totalWidth}px)`,
                width: `${triplePosters.length * cardWidth}px`
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {triplePosters.map((card, index) => (
                <div key={`${card.id}-${index}`} className="mx-2">
                    <ContentBox
                        id={card.id}
                        imageUrl={card.imageUrl}
                        title={card.title}
                        // isSelected={selectedCard?.id === card.id}
                        onClick={() => handleCardSelect(card)}
                        isReview={false}
                        type={card.type}
                    />
                </div>
            ))}
        </div>

        {/* Selected card display */}
        {/* {selectedCard && (
            <div className="absolute bottom-2 left-4 bg-white rounded-lg p-2 shadow-lg">
                <div className="text-sm font-semibold text-gray-800">
                    Selected: {selectedCard.rank} of {selectedCard.suit}
                </div>
            </div>
        )} */}

        {/* Instructions */}
        {/* <div className="absolute top-2 right-4 text-white text-sm opacity-75">
            Hover to pause • Click to select
        </div> */}
        </div>
    );
}
import { useState, useEffect } from 'react'
import ContentBox from './ContentBox';

export default function ManualCarousel({slides}){

    const [currentSlide, setCurrentSlide] = useState(0);
    const [forceRender, setForceRender] = useState(0);
    const [posterPerRow, setPosterPerRow] = useState(4);
    const [isMobile, setIsMobile] = useState(false);

    const sectionArray = (array, sectionSize) => {
        const sections = []
        for (let i = 0; i < array.length; i += sectionSize){
            sections.push(array.slice(i, i + sectionSize));
        }
        return sections;
    }

    const sectionChunks = sectionArray(slides, posterPerRow);
    const totalSections = sectionChunks.length;

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 767px)");

        setIsMobile(mediaQuery.matches);
        setPosterPerRow(mediaQuery.matches ? 2: 4)

        function handleQueryEvent(event) {
           setPosterPerRow(event.matches ? 2: 4)
        }

        mediaQuery.addEventListener("change", handleQueryEvent);

        return () => {
        mediaQuery.removeEventListener("change", handleQueryEvent);
        };
    }, []);

    // Force re-render when currentSlide changes + pre-render all sections
    useEffect(() => {
        setForceRender(prev => prev + 1);
        
        // Pre-load all sections to ensure they're rendered
        const timer = setTimeout(() => {
            setForceRender(prev => prev + 1);
        }, 100);
        
        return () => clearTimeout(timer);
    }, [currentSlide]);

    // Debug logging
    console.log('Current slide:', currentSlide);
    console.log('Total sections:', totalSections);
    console.log('Section chunks:', sectionChunks);

    const nextSection = () => {
        setCurrentSlide((prev) => Math.min(prev + 1, totalSections - 1))
    }

    const prevSection = () => {
        setCurrentSlide((prev) => Math.max(prev - 1, 0))
    }

    const canGoNext = currentSlide < totalSections - 1;
    const canGoPrev = currentSlide > 0;

    return(
        <>
            <div className="flex justify-center">
                <div className="relative h-86 md:max-w-6xl rounded-sm overflow-hidden">
                    {/* Previous button */}
                    {canGoPrev && (
                        <button
                            onClick={prevSection}
                            className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-white/10 bg-opacity-20 backdrop-blur-sm text-gray-600 p-3 rounded-full hover:bg-opacity-30 hover:bg-white transition-all duration-200 shadow-lg z-10"
                            aria-label="Previous slide"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    )}

                    {/* Carousel container */}
                    <div className="flex justify-center h-full overflow-hidden" key={`carousel-${forceRender}`}>
                        <div 
                            className="flex transition-transform duration-800 ease-in-out"
                            style={{ 
                                transform: `translateX(-${currentSlide * 100}%)`,
                            }}
                        >
                            {sectionChunks.map((chunk, sectionIndex) => (
                                <div 
                                    key={`section-${sectionIndex}-${forceRender}`}
                                    className="flex flex-row gap-3 justify-center items-center min-w-full"
                                >
                                    {chunk.map((poster, posterIndex) => (
                                        <ContentBox 
                                            key={`${sectionIndex}-${posterIndex}`}
                                            id={poster.id}
                                            imageUrl={poster.imageUrl}
                                            title={poster.title}
                                            type={poster.type}
                                            width="w-55 "
                                            height="h-80"
                                            isReview={true}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Next button */}
                    {canGoNext && (
                        <button
                            onClick={nextSection}
                            className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-white/10 bg-opacity-20 backdrop-blur-sm text-gray-600 p-3 rounded-full hover:bg-opacity-40 hover:bg-white transition-all duration-200 shadow-lg z-10"
                            aria-label="Next slide"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    )}
                </div>   
            </div>
        </>
    )
}
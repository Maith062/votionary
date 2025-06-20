import { useState, useEffect } from 'react';

export default function Carousel({slides}){
    const [currentSlide, setCurrentSlide] = useState(0);
    const [clicked, setIsClicked] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => clicked ? prev : (prev + 1) % slides.length)
        }, 5000);

        return () => clearInterval(timer);
    }, [clicked, slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }

    const goToSlide = (index) => {
        setCurrentSlide(index);
        //making it so that if someone clicks a dot, it will stop there for 8 seconds
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 9000);
    };

    

    return (
        <>
            {/* Carousel Section */}
            <div className="flex-1">
                <div className="relative w-full h-80 lg:h-[450px] bg-gray-200 rounded-xl overflow-hidden shadow-lg">
                    {/* Slides Container */}
                    <div 
                        className="flex h-full transition-transform duration-500 ease-in-out"
                        style={{ 
                            transform: `translateX(-${currentSlide * 100}%)`,
                            width: `${slides.length * 100}%`
                        }}
                    >
                        {slides.map((slide, index) => (
                            <div 
                                key={slide.id}
                                className="w-full h-full flex-shrink-0"
                                style={{ width: `${100 / slides.length}%` }}
                            >
                                <img
                                    src={slide.image}
                                    alt={slide.alt}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 bg-opacity-20 backdrop-blur-sm text-gray-600 p-3 rounded-full hover:bg-opacity-30 hover:bg-white transition-all duration-200 shadow-lg"
                        aria-label="Previous slide"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 bg-opacity-20 backdrop-blur-sm text-gray-600 p-3 rounded-full hover:bg-opacity-40 hover:bg-white transition-all duration-200 shadow-lg"
                        aria-label="Next slide"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Dots Indicator */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-10 h-1 rounded-2xl transition-all duration-200 ${
                                    index === currentSlide 
                                        ? 'bg-white scale-110' 
                                        : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Slide Counter */}
                    <div className="absolute top-4 right-4 bg-black/10 text-white px-3 py-1 rounded-3xl text-sm">
                        {currentSlide + 1} / {slides.length}
                    </div>
                </div>
            </div>
        </>
    )
}
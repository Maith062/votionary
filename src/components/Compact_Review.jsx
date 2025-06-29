
import { Star, Heart } from 'lucide-react'

export default function Compact_Review({
    posterImage = "",
    imgUrl = "",
    releaseYear, 
    title,
    year,
    reviewDate,
    ratings,
    likes,
    userIcon,
    userName,
    reviewText,
    className = "",
    type = ""
}){

    const renderStars = (ratings) => {
        const stars = [];
        const fullStars = Math.floor(ratings);
        const halfStars = ratings % 1 !== 0;

        for (let i = 0; i < 5; i++){
            if (i < fullStars){
                stars.push(
                <Star key={i} className="w-3.5 h-3.5 fill-emerald-500 text-emerald-500" />
                );
            } else if (i === fullStars && halfStars) {
                stars.push(
                <div key={i} className="relative w-3.5 h-3.5">
                    <Star className="w-3.5 h-3.5 text-gray-300 absolute" />
                    <div className="overflow-hidden w-1/2">
                    <Star className="w-3.5 h-3.5 fill-emerald-500 text-emerald-500" />
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


    
    return(
        <>
            <div className="flex flex-row gap-5 p-4 mb-5 bg-zinc-700 rounded-sm shadow-md hover:shadow-lg transition-shadow duration-200">
                {/* Poster Image */}
                <div className="flex-shrink-0">
                    <a href={imgUrl} className="block">
                        <img 
                            src={posterImage}
                            alt={title}
                            className="w-24 h-36 object-cover rounded-md shadow-sm hover:shadow-md transition-shadow duration-200"
                        />
                    </a>
                    <p className="text-[12px] text-zinc-300 bg-white/20 rounded-xs mt-2 text-center p-">{type}</p>
                </div>
                
                {/* Content Section */}
                <div className="flex flex-col flex-1 min-w-0 space-y-3">
                    {/* Title and Year */}
                    <div className="flex flex-col">
                        <h2 className="text-lg font-semibold text-white line-clamp-2 leading-tight">
                            {title}
                        </h2>
                        <span className="text-sm text-gray-500 mt-1">
                            {releaseYear}
                        </span>
                    </div>
                    
                    {/* User Info and Rating */}
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                            <img 
                                src={userIcon}
                                alt={`${userName}'s avatar`}
                                className="w-8 h-8 rounded-full object-cover border-2 border-gray-200 shadow-sm"
                            />
                            <span className="text-sm font-medium text-gray-400 hover:text-emerald-200 cursor-pointer">
                                {userName}
                            </span>
                        </div>
                        
                        {/* Rating */}
                        <div className="flex items-center gap-1">
                            {renderStars(ratings)}
                            <span className="text-sm text-gray-300 ml-1">
                                {ratings}
                            </span>
                        </div>
                    </div>
                    
                    {/* Review Text */}
                    <div className="flex-1">
                        <p className="text-white text-sm leading-relaxed line-clamp-3">
                            {reviewText}
                        </p>
                    </div>
                    
                    {/* Footer with Likes and Date */}
                    <div className="flex items-center justify-between pt-2 border-t border-zinc-600">
                        <div className="flex items-center gap-1 text-gray-500">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm font-medium">
                                {likes.toLocaleString()}
                            </span>
                        </div>
                        
                        <span className="text-xs text-gray-400">
                            {new Date(reviewDate).toLocaleDateString('en-US', { 
                                year: 'numeric', 
                                month: 'short', 
                                day: 'numeric' 
                            })}
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}
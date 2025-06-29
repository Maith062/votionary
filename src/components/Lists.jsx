import ContentBox from "@/components/ContentBox"

export default function Lists({
    listArray = [], 
    listTitle, 
    userIcon, 
    userName, 
    likes = 0, 
    comments = 0
}){

    function formatting(metric){
        if (metric >= 1000000){
            return `${(metric/1000000).toFixed(1)}M` 
        }else if (metric >= 1000){
            return `${(metric/1000).toFixed(1)}K`
        }
        return metric  //return original number if less than 1000
    }

    // Limit to 5 images and arrange with left on top of right
    const displayImages = listArray.slice(0, 5);
    // console.log(displayImages)

    return(
        <div className="bg-zinc-800 rounded-xs shadow-md mt-3">
            {/* Images Grid - Left images on top of right */}
            <div className="relative flex flex-col ">
                <div className="bg-zinc-800 flex justify-center items-center">
                    <div className="flex -space-x-2">
                        {displayImages.map((image, index) => (
                            <div 
                                key={index} 
                                className="relative group"
                                style={{ zIndex: displayImages.length - index }}
                            >
                                <img
                                        src={image}
                                        className="w-25 h-30 rounded-lg shadow-2xl"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Show "+X more" if there are more than 5 items */}
                {listArray.length > 5 && (
                    <div className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-2 py-1">
                        +{listArray.length - 5} more
                    </div>
                )}
            </div>
            
            <div className="px-4 pt-2">
                {/* List Title */}
                <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                    {listTitle}
                </h3>

                {/* User Info */}
                

                {/* Stats */}
                <div className="flex items-center justify-between text-gray-300">
                    {/* <p className="text-sm">{listArray.length} contents</p>  Fixed: removed () from length */}
                    <div className="flex items-center gap-2 mb-3">
                        <img 
                            src={userIcon}
                            alt={`${userName}'s avatar`}  // Added alt attribute
                            className="w-6 h-6 rounded-full object-cover border-2 border-gray-200"  // Added missing className
                        />
                        <p className="text-sm text-gray-200 font-medium">{userName}</p>
                    </div>
                    <div className="flex items-center gap-4">
                        {/* Likes */}
                        <div className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm font-medium">
                                {formatting(likes)}
                            </span>
                        </div>

                        {/* Comments */}
                        <div className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 64 64">
                                <path fillRule="evenodd" clipRule="evenodd" d="M60,0H4C1.789,0,0,1.789,0,4v40c0,2.211,1.789,4,4,4h8v12 c0,1.617,0.973,3.078,2.469,3.695C14.965,63.902,15.484,64,16,64c1.039,0,2.062-0.406,2.828-1.172L33.656,48H60c2.211,0,4-1.789,4-4 V4C64,1.789,62.211,0,60,0z" />
                            </svg>
                            <span className="text-sm font-medium">  {/* Fixed typo: font-medim -> font-medium */}
                                {formatting(comments)}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

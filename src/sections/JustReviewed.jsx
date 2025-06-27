    "use client"

    import ContentBox from "@/components/ContentBox"

    export default function JustReviewed(){

        // In the future, it will be pulled in from a DB
        const reviews = [
            {
            id: 1,
            imageUrl: "https://picsum.photos/300/400?random=1",
            title: "The Amazing Adventure",
            rating: 4.5,
            likes: 15420,
            type: "Manwha"
            },
            {
            id: 2,
            imageUrl: "https://picsum.photos/300/400?random=2", 
            title: "Mystery of the Lost Kingdom",
            rating: 3.8,
            likes: 8950,
            type: "manwha"
            },
            {
            id: 3,
            imageUrl: "https://picsum.photos/300/400?random=3",
            title: "Space Odyssey: Beyond the Stars",
            rating: 4.9,
            likes: 45600,
            type: "manwha"
            },
            {
            id: 4,
            imageUrl: "https://picsum.photos/300/400?random=4",
            title: "Comedy Night Live",
            rating: 4.2,
            likes: 2340,
            type: "manwha"
            },
            {
            id: 5,
            imageUrl: "https://picsum.photos/300/400?random=5",
            title: "The Amazing Adventure",
            rating: 4.5,
            likes: 15420,
            type:"anime"
            },
            {
            id: 6,
            imageUrl: "https://picsum.photos/300/400?random=6", 
            title: "Mystery of the Lost Kingdom",
            rating: 3.8,
            likes: 8950,
            type:"manwha"
            },
            {
            id: 7,
            imageUrl: "https://picsum.photos/300/400?random=7",
            title: "Space Odyssey: Beyond the Stars",
            rating: 4.9,
            likes: 45600,
            },
            {
            id: 8,
            imageUrl: "https://picsum.photos/300/400?random=8",
            title: "Comedy Night Live",
            rating: 4.2,
            likes: 340,
            type:"manga"
            },
            {
            id: 9,
            imageUrl: "https://picsum.photos/300/400?random=5",
            title: "The Amazing Adventure",
            rating: 4.5,
            likes: 15420,
            type:"anime"
            },
            {
            id: 10,
            imageUrl: "https://picsum.photos/300/400?random=6", 
            title: "Mystery of the Lost Kingdom",
            rating: 3.8,
            likes: 8950,
            type:"manwha"
            },
            {
            id: 11,
            imageUrl: "https://picsum.photos/300/400?random=7",
            title: "Space Odyssey: Beyond the Stars",
            rating: 4.9,
            likes: 45600,
            },
            {
            id: 12,
            imageUrl: "https://picsum.photos/300/400?random=8",
            title: "Comedy Night Live",
            rating: 4.2,
            likes: 340,
            type:"manga"
            },
            // {id: 13,
            // imageUrl: "https://picsum.photos/300/400?random=5",
            // title: "The Amazing Adventure",
            // rating: 4.5,
            // likes: 15420,
            // type:"anime"
            // },
            // {
            // id: 14,
            // imageUrl: "https://picsum.photos/300/400?random=6", 
            // title: "Mystery of the Lost Kingdom",
            // rating: 3.8,
            // likes: 8950,
            // type:"manwha"
            // },
            // {
            // id: 15,
            // imageUrl: "https://picsum.photos/300/400?random=7",
            // title: "Space Odyssey: Beyond the Stars",
            // rating: 4.9,
            // likes: 45600,
            // },
            // {
            // id: 16,
            // imageUrl: "https://picsum.photos/300/400?random=8",
            // title: "Comedy Night Live",
            // rating: 4.2,
            // likes: 340,
            // type:"manga"
            // }
        ];

        const handleReviewClick = (review) => (
            console.log("This is a review ", review.title)
        )

        return(
            <>
                <h1 className="text-white font-extralight pb-1">Recently reviewed</h1>
                <div className="flex items-center">
                    <hr className="flex-grow border-t border-gray-300"/>
                        {/* <span class="px-3 text-gray-500">This is the text inserted between a HR</span>
                    <hr class="flex-grow border-t border-gray-300"/> */}
                </div>
                <div  
                    className="pt-5 grid gap-2 mx-3"
                    style={{
                        gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))",
                    }}
                >
                    {reviews.map((review) => (
                        <div key={review.id} className="relative group">
                            <ContentBox
                                imageUrl={review.imageUrl}
                                title={review.title}
                                ratings={review.rating}
                                likes={review.likes}
                                onClick={() => handleReviewClick(review)}
                                className="hover:shadow-2xl"
                                type={review.type}
                                width="w-20"
                                height="h-25"
                                isReview={true}
                            />
                            {/*Tooltip */}
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 text-sm font-medium text-white bg-zinc-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap whitespace-nowrap z-[9999] pointer-events-none">
                                {review.title}
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-zinc-700"></div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-10 text-white font-medium text-[30px] text-center">
                    <h1></h1>
                </div>
            </>
        )
    }
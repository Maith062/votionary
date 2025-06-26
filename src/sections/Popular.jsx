"use client"

import ContentBox from "@/components/ContentBox"

export default function Popular(){
    const samplePosters = [
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
        imageUrl: "https://picsum.photos/300/400?random=1",
        title: "The Amazing Adventure",
        rating: 4.5,
        likes: 15420,
        type:"anime"
        },
        {
        id: 6,
        imageUrl: "https://picsum.photos/300/400?random=2", 
        title: "Mystery of the Lost Kingdom",
        rating: 3.8,
        likes: 8950,
        type:"manwha"
        },
        {
        id: 7,
        imageUrl: "https://picsum.photos/300/400?random=3",
        title: "Space Odyssey: Beyond the Stars",
        rating: 4.9,
        likes: 45600,
        type:"anime"
        },
        {
        id: 8,
        imageUrl: "https://picsum.photos/300/400?random=4",
        title: "Comedy Night Live",
        rating: 4.2,
        likes: 2340,
        type:"manga"
        }
    ];

    const handlePosterClick = (poster) => (
        console.log(`Clicked on: ${poster.title}`)
    )

    return(
        <>
            <div  
                className="pt-5 grid gap-3 mx-3"
                style={{
                    gridTemplateColumns: "repeat(auto-fill, minmax(125px, 1fr))",
                }}
            >
                {samplePosters.map((poster) => (
                    <ContentBox
                        key={poster.id}
                        imageUrl={poster.imageUrl}
                        title={poster.title}
                        ratings={poster.rating}
                        likes={poster.likes}
                        onClick={() => handlePosterClick(poster)}
                        className="hover:shadow-2xl"
                        type={poster.type}
                    />
                ))}
            </div>
        </>
    );
}
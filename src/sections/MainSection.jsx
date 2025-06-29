    "use client"

    import ContentBox from "@/components/ContentBox"
    import CompactReview from "@/components/Compact_Review"
    import Lists from "@/components/Lists";

    export default function MainSection(){

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

        // Will be replaced in the future
       const tempReviews = [
            {
                id: 1,
                posterImage: "https://picsum.photos/300/400?random=1",
                imgUrl: "https://picsum.photos/300/400?random=1",
                releaseYear: "2014",
                title: "The Grand Budapest Hotel",
                year: 2014,
                reviewDate: "2024-12-15",
                ratings: 4.8,
                likes: 1247,
                userIcon: "https://picsum.photos/64/64?random=101",
                userName: "CinemaLover92",
                reviewText: "Wes Anderson's visual masterpiece! The symmetrical shots, pastel colors, and quirky characters create a whimsical world that's both nostalgic and timeless. Ralph Fiennes delivers a perfect performance as the legendary concierge.",
                type: "anime"
            },
            {
                id: 2,
                posterImage: "https://picsum.photos/300/400?random=2",
                imgUrl: "https://picsum.photos/300/400?random=2",
                releaseYear: "2019",
                title: "Parasite",
                year: 2019,
                reviewDate: "2024-12-14",
                ratings: 4.9,
                likes: 2156,
                userIcon: "https://picsum.photos/64/64?random=102",
                userName: "FilmCritic_Alex",
                reviewText: "Bong Joon-ho crafts a brilliant social thriller that's both entertaining and deeply thought-provoking. The film's exploration of class divide is masterfully executed through clever cinematography and outstanding performances from the entire cast.",
                type: "manwha"
            },
            {
                id: 3,
                posterImage: "https://picsum.photos/300/400?random=3",
                imgUrl: "https://picsum.photos/300/400?random=3",
                releaseYear: "2021",
                title: "Dune",
                year: 2021,
                reviewDate: "2024-12-13",
                ratings: 4.5,
                likes: 3421,
                userIcon: "https://picsum.photos/64/64?random=103",
                userName: "SciFiEnthusiast",
                reviewText: "Denis Villeneuve brings Frank Herbert's epic to life with stunning visuals and a haunting score. While it only covers half the book, it's a promising start to what could be an incredible sci-fi saga. Timothée Chalamet shines as Paul Atreides.",
                type: "manga"
            },
            {
                id: 4,
                posterImage: "https://picsum.photos/300/400?random=4",
                imgUrl: "https://picsum.photos/300/400?random=4",
                releaseYear: "2017",
                title: "Get Out",
                year: 2017,
                reviewDate: "2024-12-12",
                ratings: 4.7,
                likes: 1892,
                userIcon: "https://picsum.photos/64/64?random=104",
                userName: "HorrorMaven",
                reviewText: "Jordan Peele's directorial debut is a horror masterpiece that tackles racism with intelligence and creativity. The film keeps you on edge while delivering powerful social commentary. Daniel Kaluuya's performance is absolutely captivating.",
                type: "manga"
            },
            {
                id: 5,
                posterImage: "https://picsum.photos/300/400?random=5",
                imgUrl: "https://picsum.photos/300/400?random=5",
                releaseYear: "2020",
                title: "Soul",
                year: 2020,
                reviewDate: "2024-12-11",
                ratings: 4.6,
                likes: 987,
                userIcon: "https://picsum.photos/64/64?random=105",
                userName: "AnimationFan2024",
                reviewText: "Pixar delivers another emotional powerhouse! The animation is breathtaking, especially the jazz sequences in New York. The film's exploration of purpose and passion resonates deeply. A beautiful meditation on what makes life worth living.",
                type: "manga"
            },
            {
                id: 6,
                posterImage: "https://picsum.photos/300/400?random=6",
                imgUrl: "https://picsum.photos/300/400?random=6",
                releaseYear: "2018",
                title: "Spider-Man: Into the Spider-Verse",
                year: 2018,
                reviewDate: "2024-12-10",
                ratings: 4.8,
                likes: 2743,
                userIcon: "https://picsum.photos/64/64?random=106",
                userName: "ComicBookGuru",
                reviewText: "Revolutionary animation that feels like a living comic book! The multiverse concept is handled brilliantly, and Miles Morales' coming-of-age story is both heartfelt and action-packed. Every frame is a work of art.",
                type: "manwha"
            },
            {
                id: 7,
                posterImage: "https://picsum.photos/300/400?random=7",
                imgUrl: "https://picsum.photos/300/400?random=7",
                releaseYear: "2022",
                title: "Everything Everywhere All at Once",
                year: 2022,
                reviewDate: "2024-12-09",
                ratings: 4.9,
                likes: 3156,
                userIcon: "https://picsum.photos/64/64?random=107",
                userName: "IndieFilmLover",
                reviewText: "An absolutely wild ride that somehow manages to be both chaotic and deeply emotional. Michelle Yeoh gives a career-defining performance in this multiverse adventure that's equal parts absurd and profound. Pure creative genius!",
                type: "manwha"
            },
            {
                id: 8,
                posterImage: "https://picsum.photos/300/400?random=8",
                imgUrl: "https://picsum.photos/300/400?random=8",
                releaseYear: "2016",
                title: "Moonlight",
                year: 2016,
                reviewDate: "2024-12-08",
                ratings: 3,
                likes: 1534,
                userIcon: "https://picsum.photos/64/64?random=108",
                userName: "ArtHouseCinema",
                reviewText: "Barry Jenkins creates an intimate and powerful portrait of masculinity, identity, and self-discovery. The three-act structure following Chiron through different stages of life is beautifully executed. A deeply moving and important film.",
                type: "anime"
            }
        ];

        //this is also temporary until the backend is setup

        const popularLists = [
            {
                listArray: [
                    "https://picsum.photos/300/400?random=5",
                    "https://picsum.photos/300/400?random=6",
                    "https://picsum.photos/300/400?random=7",
                    "https://picsum.photos/300/400?random=8",
                    "https://picsum.photos/300/400?random=9",
                    "https://picsum.photos/300/400?random=10",
                    "https://picsum.photos/300/400?random=11",
                ],
                listTitle: "Random Title",
                userIcon: "https://picsum.photos/64/64?random=108",
                likes: 12122,
                comments: 11
            },
            {
                listArray: [
                    "https://picsum.photos/300/400?random=5",
                    "https://picsum.photos/300/400?random=6",
                    "https://picsum.photos/300/400?random=7",
                    "https://picsum.photos/300/400?random=8",
                    "https://picsum.photos/300/400?random=9",
                    "https://picsum.photos/300/400?random=10",
                    "https://picsum.photos/300/400?random=11",
                ],
                listTitle: "Random Title",
                userIcon: "https://picsum.photos/64/64?random=108",
                likes: 12122,
                comments: 11

            },
            {
                listArray: [
                   "https://picsum.photos/300/400?random=5",
                    "https://picsum.photos/300/400?random=6",
                    "https://picsum.photos/300/400?random=7",
                    "https://picsum.photos/300/400?random=8",
                    "https://picsum.photos/300/400?random=9",
                    "https://picsum.photos/300/400?random=10",
                    "https://picsum.photos/300/400?random=11",
                ],
                listTitle: "Random Title",
                userIcon: "https://picsum.photos/64/64?random=108",
                likes: 12122,
                comments: 11

            },
            {
                listArray: [
                   "https://picsum.photos/300/400?random=5",
                    "https://picsum.photos/300/400?random=6",
                    "https://picsum.photos/300/400?random=7",
                    "https://picsum.photos/300/400?random=8",
                    "https://picsum.photos/300/400?random=9",
                    "https://picsum.photos/300/400?random=10",
                    "https://picsum.photos/300/400?random=11",
                ],
                listTitle: "Random Title",
                userIcon: "https://picsum.photos/64/64?random=108",
                likes: 12122,
                comments: 11,
                userName: "Bob"

            },
        ];

        //once again, a temporary measure until the backend is set up
        const popularReviewers = [
            {
                userIcon: "https://picsum.photos/64/64?random=108",
                userName: "Jeff Goldblum",
                numberOfFilms: 2133,
                numberOfReviews: 1231
            },
            {
                userIcon: "https://picsum.photos/64/64?random=109",
                userName: "Maya Chen",
                numberOfFilms: 1847,
                numberOfReviews: 923
            },
            {
                userIcon: "https://picsum.photos/64/64?random=110",
                userName: "Diego Martinez",
                numberOfFilms: 1592,
                numberOfReviews: 1456
            },
            {
                userIcon: "https://picsum.photos/64/64?random=111",
                userName: "Zara Okafor",
                numberOfFilms: 2891,
                numberOfReviews: 2034
            },
            {
                userIcon: "https://picsum.photos/64/64?random=112",
                userName: "Kai Thompson",
                numberOfFilms: 1234,
                numberOfReviews: 887
            },
            {
                userIcon: "https://picsum.photos/64/64?random=113",
                userName: "Priya Patel",
                numberOfFilms: 3421,
                numberOfReviews: 1789
            },
            {
                userIcon: "https://picsum.photos/64/64?random=114",
                userName: "Zara Okafor",
                numberOfFilms: 2891,
                numberOfReviews: 2034
            },
            {
                userIcon: "https://picsum.photos/64/64?random=115",
                userName: "Kai Thompson",
                numberOfFilms: 1234,
                numberOfReviews: 887
            },
            {
                userIcon: "https://picsum.photos/64/64?random=116",
                userName: "Priya Patel",
                numberOfFilms: 3421,
                numberOfReviews: 1789
            }
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
                <div className="mt-10 text-white font-extralight text-[30px] text-center">
                    <h1 className="">Where stories spark conversations. Uncover hidden gems.</h1>
                    <h1>Discover where content meets community.</h1>
                    <h4 className="text-[15px] mt-5">Find some of the most popular reviews and lists this week. Join to create your own.</h4>
                  
                </div>
                <div className="max-w-7xl flex flex-col lg:flex-row gap-20 mt-13">
                    <div className="flex-[2]">
                        <h1 className="text-white font-extralight pb-1">Popular Reviews this week</h1>
                        <div className="flex items-center mb-5">
                            <hr className="flex-grow border-t border-gray-300/50"/>
                        </div>
                        {
                            tempReviews.map((review) => (
                                <CompactReview
                                    key={review.id}
                                    posterImage= {review.posterImage}
                                    imgUrl= {review.imgUrl}
                                    releaseYear= {review.releaseYear}
                                    title= {review.title}
                                    year= {review.year}
                                    reviewDate= {review.reviewDate}
                                    ratings= {review.ratings}
                                    likes= {review.likes}
                                    userIcon={review.userIcon}
                                    userName={review.userName}
                                    reviewText={review.reviewText}
                                    type={review.type}
                                />
                            ))
                        }
                    </div>
                     
                    <div className="flex-1">
                        <div>
                            <h1 className="text-white font-extralight pb-1">Popular Lists</h1>
                            <div className="flex items-center">
                                <hr className="flex-grow border-t border-gray-300/50"/>
                            </div>
                            <div className="mt-5">
                                {popularLists.map((item, index) => (
                                    <Lists
                                        key={index}
                                        listArray={item.listArray}
                                        listTitle={item.listTitle} 
                                        userIcon={item.userIcon}
                                        userName={item.userName} 
                                        likes={item.likes} 
                                        comments={item.comments}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="mt-13">
                            <h1 className="text-white font-extralight pb-1">Popular Reviewers</h1>
                            <div className="flex items-center">
                                <hr className="flex-grow border-t border-gray-300/50"/>
                            </div>
                            <div>
                                {popularReviewers.map((person, index) => (
                                    <div key={index} className="mt-6 text-zinc-300">
                                        <div className="flex items-center">
                                            
                                            <img 
                                                src={person.userIcon}
                                                className="w-10 h-10 rounded-full border-2 border-gray-300"
                                            />
                                            <div className="flex flex-col">
                                                <p className="pl-3">{person.userName}</p>
                                                <div className="pl-3 flex gap-4 text-xs">
                                                    <p>{`${person.numberOfReviews.toLocaleString()} reviews`}</p>
                                                    <p>{`${person.numberOfFilms.toLocaleString()} films`}</p>
                                                </div>
                                            </div>
                                        </div>
                                                                   

                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
               
            </>
        )
    }
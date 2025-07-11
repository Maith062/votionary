import { NextResponse } from 'next/server';
import { use } from 'react'

export async function GET(request, { params }) {
    const resolvedParams = await params // using the "use" because of some problem with a Promise?
    const { id } = resolvedParams;

    console.log("ID value in route.js, ", id)
  
  // This is where you'd fetch from your database
  // For now, mock data based on ID:
  const posters = [
        {
        id: 1,
        imageUrl: "https://picsum.photos/300/400?random=1",
        title: "1 Amazing Adventure",
        rating: 4.5,
        likes: 15420,
        type:"illustrated",
        tags: ["Adventure", "Action"],
        subtype: "manwha",
        text: "Follow an unlikely hero on an epic journey through mystical realms filled with ancient magic and mythical creatures. This heartwarming tale combines stunning animation with profound themes of friendship, courage, and self-discovery.",
        heroImage: "https://images.unsplash.com/photo-1489599000590-8b0e65b52e6c?w=1200&h=400&fit=crop",
        views: "2.1M",
        lists: "45.7K",
        ratings: [
            { source: "IMDb", rating: 8.4, maxRating: 10 },
            { source: "Rotten Tomatoes", rating: 92, maxRating: 100 },
            { source: "Metacritic", rating: 78, maxRating: 100 },
            { source: "Letterboxd", rating: 4.2, maxRating: 5 }
        ],
        reviews: [
            {
                id: 1,
                author: "Sarah Mitchell",
                rating: 5,
                date: "2 days ago",
                content: "Absolutely stunning! The cinematography is breathtaking and the story kept me engaged from start to finish. The character development is phenomenal and the ending left me wanting more."
            },
            {
                id: 2,
                author: "David Chen",
                rating: 4,
                date: "1 week ago",
                content: "A solid adventure film with great visual effects. While some plot points felt predictable, the overall execution was impressive. The lead performances really carry the emotional weight of the story."
            }
        ]
        },
        {
        id: 2,
        imageUrl: "https://picsum.photos/300/400?random=2", 
        title: "2 of the Lost Kingdom",
        rating: 3.8,
        likes: 8950,
        type:"illustrated",
        subtype: "manwha",
        tags: ["Adventure", "Fantasy", "Drama"],
        text: "A thrilling sequel that takes viewers deeper into a forgotten civilization where ancient secrets threaten the balance between worlds. Packed with spectacular battles and emotional depth as heroes face their greatest challenge yet.",
        heroImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=400&fit=crop",
        views: "1.8M",
        lists: "32.4K",
        ratings: [
            { source: "IMDb", rating: 7.8, maxRating: 10 },
            { source: "Rotten Tomatoes", rating: 85, maxRating: 100 },
            { source: "Metacritic", rating: 72, maxRating: 100 },
            { source: "Letterboxd", rating: 3.8, maxRating: 5 }
        ],
        reviews: [
            {
                id: 1,
                author: "Alex Johnson",
                rating: 4,
                date: "1 day ago",
                content: "A worthy sequel that expands the world beautifully. The action sequences are top-notch and the character development continues to impress."
            },
            {
                id: 2,
                author: "Maya Patel",
                rating: 4,
                date: "5 days ago",
                content: "Great world-building and emotional depth. Some pacing issues in the middle, but the finale more than makes up for it."
            }
        ]
        },
        {
        id: 3,
        imageUrl: "https://picsum.photos/300/400?random=3",
        title: "3 Odyssey: Beyond the Stars",
        rating: 4.9,
        likes: 45600,
        type:"illustrated",
        subtype: "manwha",
        tags: ["Sci-Fi", "Adventure", "Space Opera"],
        text: "An interstellar masterpiece that explores the far reaches of space and the human spirit. This visually stunning epic follows a diverse crew as they navigate cosmic mysteries, alien encounters, and the true meaning of home.",
        heroImage: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1200&h=400&fit=crop",
        views: "3.5M",
        lists: "78.2K",
        ratings: [
            { source: "IMDb", rating: 9.2, maxRating: 10 },
            { source: "Rotten Tomatoes", rating: 96, maxRating: 100 },
            { source: "Metacritic", rating: 88, maxRating: 100 },
            { source: "Letterboxd", rating: 4.8, maxRating: 5 }
        ],
        reviews: [
            {
                id: 1,
                author: "Chris Wong",
                rating: 5,
                date: "3 days ago",
                content: "A masterpiece of science fiction! The visuals are breathtaking and the story is both epic and intimate. This is what sci-fi should be."
            },
            {
                id: 2,
                author: "Elena Rodriguez",
                rating: 5,
                date: "1 week ago",
                content: "Incredible world-building and character development. The space battles are spectacular and the emotional core is deeply moving."
            }
        ]
        },
        {
        id: 4,
        imageUrl: "https://picsum.photos/300/400?random=4",
        title: "4 Night Live",
        rating: 4.2,
        likes: 2340,
        type:"illustrated",
        subtype: "manwha",
        tags: ["Supernatural", "Thriller", "Action"],
        text: "A supernatural thriller set in the shadows of a bustling city where creatures of the night come alive. Experience pulse-pounding action mixed with dark humor as unlikely allies band together to protect both worlds.",
        heroImage: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1200&h=400&fit=crop",
        views: "1.2M",
        lists: "28.9K",
        ratings: [
            { source: "IMDb", rating: 8.0, maxRating: 10 },
            { source: "Rotten Tomatoes", rating: 88, maxRating: 100 },
            { source: "Metacritic", rating: 75, maxRating: 100 },
            { source: "Letterboxd", rating: 4.1, maxRating: 5 }
        ],
        reviews: [
            {
                id: 1,
                author: "Jordan Kim",
                rating: 4,
                date: "2 days ago",
                content: "Great supernatural thriller with excellent pacing. The action sequences are well-choreographed and the dark humor adds perfect balance."
            },
            {
                id: 2,
                author: "Sam Taylor",
                rating: 4,
                date: "4 days ago",
                content: "Solid urban fantasy with compelling characters. The world-building is impressive and keeps you engaged throughout."
            }
        ]
        },
        {
        id: 5,
        imageUrl: "https://picsum.photos/300/400?random=5",
        title: "5 Amazing Adventure",
        rating: 4.5,
        likes: 15420,
        type:"illustrated",
        subtype: "manwha",
        tags: ["Adventure", "Fantasy", "Family"],
        text: "The fifth installment in the beloved adventure series brings fresh magic and wonder to familiar characters. Join them as they explore uncharted territories and face new challenges that will test their bonds like never before.",
        heroImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop",
        views: "2.3M",
        lists: "56.1K",
        ratings: [
            { source: "IMDb", rating: 8.6, maxRating: 10 },
            { source: "Rotten Tomatoes", rating: 91, maxRating: 100 },
            { source: "Metacritic", rating: 79, maxRating: 100 },
            { source: "Letterboxd", rating: 4.4, maxRating: 5 }
        ],
        reviews: [
            {
                id: 1,
                author: "Lisa Chen",
                rating: 5,
                date: "1 day ago",
                content: "Another fantastic entry in the series! The character development continues to be exceptional and the new locations are breathtaking."
            },
            {
                id: 2,
                author: "Ryan Murphy",
                rating: 4,
                date: "3 days ago",
                content: "Great continuation of the adventure series. Fresh take on familiar characters with exciting new challenges."
            }
        ]
        },
        {
        id: 6,
        imageUrl: "https://picsum.photos/300/400?random=6", 
        title: "6 of the Lost Kingdom",
        rating: 3.8,
        likes: 8950,
        type:"illustrated",
        subtype: "manwha",
        tags: ["Fantasy", "Adventure", "Mystery"],
        text: "The saga continues as ancient prophecies unfold and long-lost kingdoms rise from the depths of time. This chapter reveals hidden truths about the world's origin while delivering breathtaking action and emotional revelations.",
        heroImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=400&fit=crop",
        views: "1.5M",
        lists: "34.7K",
        ratings: [
            { source: "IMDb", rating: 7.6, maxRating: 10 },
            { source: "Rotten Tomatoes", rating: 82, maxRating: 100 },
            { source: "Metacritic", rating: 70, maxRating: 100 },
            { source: "Letterboxd", rating: 3.7, maxRating: 5 }
        ],
        reviews: [
            {
                id: 1,
                author: "Maria Santos",
                rating: 4,
                date: "2 days ago",
                content: "Intriguing mystery elements blend well with the fantasy adventure. The revelations about the world's history are fascinating."
            },
            {
                id: 2,
                author: "Tom Wilson",
                rating: 3,
                date: "1 week ago",
                content: "Decent entry in the series. Some pacing issues but the world-building remains strong and the mysteries are compelling."
            }
        ]
        },
        {
        id: 7,
        imageUrl: "https://picsum.photos/300/400?random=7",
        title: "7 Odyssey: Beyond the Stars",
        rating: 4.9,
        likes: 45600,
        type:"illustrated",
        subtype: "manwha",
        tags: ["Sci-Fi", "Space Opera", "Philosophy"],
        text: "The seventh chapter of this acclaimed space opera pushes the boundaries of imagination with its exploration of parallel dimensions and quantum realities. A mind-bending journey that challenges everything we thought we knew about the universe.",
        heroImage: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=1200&h=400&fit=crop",
        views: "4.1M",
        lists: "89.3K",
        ratings: [
            { source: "IMDb", rating: 9.1, maxRating: 10 },
            { source: "Rotten Tomatoes", rating: 95, maxRating: 100 },
            { source: "Metacritic", rating: 87, maxRating: 100 },
            { source: "Letterboxd", rating: 4.7, maxRating: 5 }
        ],
        reviews: [
            {
                id: 1,
                author: "Dr. Patricia Lee",
                rating: 5,
                date: "1 day ago",
                content: "Mind-blowing science fiction that explores deep philosophical concepts while delivering spectacular visuals. This is storytelling at its finest."
            },
            {
                id: 2,
                author: "Marcus Thompson",
                rating: 5,
                date: "4 days ago",
                content: "Absolutely incredible! The exploration of parallel dimensions is both scientifically fascinating and emotionally resonant."
            }
        ]
        },
        {
        id: 8,
        imageUrl: "https://picsum.photos/300/400?random=108",
        title: "8 Night Live",
        rating: 4.2,
        likes: 340,
        type:"illustrated",
        subtype: "manwha",
        tags: ["Supernatural", "Action", "Gothic"],
        text: "Dark forces gather as the night world's greatest champions face their most dangerous enemy yet. This intense installment combines gothic atmosphere with explosive action sequences that will leave you breathless.",
        heroImage: "https://picsum.photos/300/400?random=108",
        views: "890K",
        lists: "15.2K",
        ratings: [
            { source: "IMDb", rating: 7.9, maxRating: 10 },
            { source: "Rotten Tomatoes", rating: 86, maxRating: 100 },
            { source: "Metacritic", rating: 74, maxRating: 100 },
            { source: "Letterboxd", rating: 4.0, maxRating: 5 }
        ],
        reviews: [
            {
                id: 1,
                author: "Ashley Park",
                rating: 4,
                date: "3 days ago",
                content: "Intense and atmospheric! The gothic elements are perfectly balanced with the action sequences. Great character development."
            },
            {
                id: 2,
                author: "Jake Foster",
                rating: 4,
                date: "1 week ago",
                content: "Darker tone works well for this installment. The action is brutal and the atmosphere is genuinely creepy."
            }
        ]
        },
        {
        id: 9,
        imageUrl: "https://picsum.photos/300/400?random=5",
        title: "The 9 Adventure",
        rating: 4.5,
        likes: 15420,
        type:"illustrated",
        subtype: "manwha",
        tags: ["Epic", "Adventure", "Fantasy"],
        text: "Nine heroes unite for the ultimate quest in this epic conclusion that spans multiple realms and timelines. Witness legendary battles, unexpected alliances, and sacrifices that will determine the fate of all existence.",
        heroImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=400&fit=crop",
        views: "3.2M",
        lists: "67.8K",
        ratings: [
            { source: "IMDb", rating: 8.8, maxRating: 10 },
            { source: "Rotten Tomatoes", rating: 93, maxRating: 100 },
            { source: "Metacritic", rating: 82, maxRating: 100 },
            { source: "Letterboxd", rating: 4.6, maxRating: 5 }
        ],
        reviews: [
            {
                id: 1,
                author: "Hannah Lee",
                rating: 5,
                date: "2 days ago",
                content: "Epic finale that brings together all the storylines perfectly! The battles are legendary and the emotional payoff is incredible."
            },
            {
                id: 2,
                author: "Connor Davis",
                rating: 4,
                date: "5 days ago",
                content: "Satisfying conclusion to the saga. The nine heroes dynamic is fantastic and the scope is truly epic."
            }
        ]
        },
        {
        id: 10,
        imageUrl: "https://picsum.photos/300/400?random=6", 
        title: "Mystery 10 the Lost Kingdom",
        rating: 3.8,
        likes: 8950,
        type:"illustrated",
        subtype: "manwha",
        tags: ["Mystery", "Detective", "Fantasy"],
        text: "A mysterious tenth entry that unravels the deepest secrets of the Lost Kingdom. Follow detective-like characters as they piece together clues spanning centuries, revealing a conspiracy that threatens everything they hold dear.",
        heroImage: "https://images.unsplash.com/photo-1551085254-d96ba2d05ba4?w=1200&h=400&fit=crop",
        views: "1.3M",
        lists: "29.4K",
        ratings: [
            { source: "IMDb", rating: 7.5, maxRating: 10 },
            { source: "Rotten Tomatoes", rating: 80, maxRating: 100 },
            { source: "Metacritic", rating: 71, maxRating: 100 },
            { source: "Letterboxd", rating: 3.9, maxRating: 5 }
        ],
        reviews: [
            {
                id: 1,
                author: "Detective Sarah Kim",
                rating: 4,
                date: "1 day ago",
                content: "Excellent mystery elements! The detective work is well-researched and the historical conspiracy is fascinating to unravel."
            },
            {
                id: 2,
                author: "Mike Johnson",
                rating: 3,
                date: "6 days ago",
                content: "Interesting take on the series with mystery elements. Some plot points are predictable but the historical aspects are engaging."
            }
        ]
        },
        {
        id: 11,
        imageUrl: "https://picsum.photos/300/400?random=7",
        title: "11",
        rating: 4.9,
        likes: 45600,
        type:"illustrated",
        subtype: "manwha",
        tags: ["Philosophy", "Minimalist", "Drama"],
        text: "The enigmatic eleventh chapter presents a minimalist yet profound narrative that explores themes of identity, purpose, and transcendence. A contemplative masterpiece that invites viewers to look deeper into themselves.",
        heroImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop",
        views: "2.7M",
        lists: "73.5K",
        ratings: [
            { source: "IMDb", rating: 9.0, maxRating: 10 },
            { source: "Rotten Tomatoes", rating: 94, maxRating: 100 },
            { source: "Metacritic", rating: 89, maxRating: 100 },
            { source: "Letterboxd", rating: 4.8, maxRating: 5 }
        ],
        reviews: [
            {
                id: 1,
                author: "Prof. David Chen",
                rating: 5,
                date: "3 days ago",
                content: "A philosophical masterpiece that challenges conventional storytelling. The minimalist approach creates maximum emotional impact."
            },
            {
                id: 2,
                author: "Emma Watson",
                rating: 5,
                date: "1 week ago",
                content: "Profound and moving. This contemplative piece stays with you long after viewing. A true work of art."
            }
        ]
        },
        {
        id: 12,
        imageUrl: "https://picsum.photos/300/400?random=8",
        title: "12 Night Live",
        rating: 4.2,
        likes: 340,
        type:"illustrated",
        subtype: "manwha",
        tags: ["Finale", "Action", "Epic"],
        text: "The final night brings all storylines to a dramatic crescendo as heroes and villains clash in an ultimate battle for the soul of both worlds. This epic finale promises to deliver the most spectacular and emotionally satisfying conclusion.",
        heroImage: "https://picsum.photos/300/400?random=8",
        views: "45000000",
        lists: "95.7K",
        ratings: [
            { source: "IMDb", rating: 8.7, maxRating: 10 },
            { source: "Rotten Tomatoes", rating: 92, maxRating: 100 },
            { source: "Metacritic", rating: 85, maxRating: 100 },
            { source: "Letterboxd", rating: 4.5, maxRating: 5 }
        ],
        reviews: [
            {
                id: 1,
                author: "Alex Rodriguez",
                rating: 5,
                date: "1 day ago",
                content: "Perfect finale! All storylines converge beautifully and the final battle is absolutely epic. Emotionally satisfying ending to the series."
            },
            {
                id: 2,
                author: "Taylor Swift",
                rating: 4,
                date: "2 days ago",
                content: "Spectacular conclusion with amazing action sequences. The emotional payoff makes the entire journey worthwhile."
            },
            {
                id: 3,
                author: "Alex Rodriguez",
                rating: 5,
                date: "1 day ago",
                content: "Perfect finale! All storylines converge beautifully and the final battle is absolutely epic. Emotionally satisfying ending to the series."
            },
            {
                id: 4,
                author: "Taylor Swift",
                rating: 4,
                date: "2 days ago",
                content: "Spectacular conclusion with amazing action sequences. The emotional payoff makes the entire journey worthwhile."
            },
            {
                id: 5,
                author: "Alex Rodriguez",
                rating: 5,
                date: "1 day ago",
                content: "Perfect finale! All storylines converge beautifully and the final battle is absolutely epic. Emotionally satisfying ending to the series."
            },
            {
                id: 6,
                author: "Taylor Swift",
                rating: 4,
                date: "2 days ago",
                content: "Spectacular conclusion with amazing action sequences. The emotional payoff makes the entire journey worthwhile."
            }
        ]
        },
    ];

  const movie = posters[id -1];
  
  if (!movie) {
    return NextResponse.json({ error: 'Movie not found' }, { status: 404 });
  }

  return NextResponse.json(movie);
}
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
        subtype: "manwha",
        text: "Follow an unlikely hero on an epic journey through mystical realms filled with ancient magic and mythical creatures. This heartwarming tale combines stunning animation with profound themes of friendship, courage, and self-discovery."
        },
        {
        id: 2,
        imageUrl: "https://picsum.photos/300/400?random=2", 
        title: "2 of the Lost Kingdom",
        rating: 3.8,
        likes: 8950,
        type:"illustrated",
        subtype: "manwha",
        text: "A thrilling sequel that takes viewers deeper into a forgotten civilization where ancient secrets threaten the balance between worlds. Packed with spectacular battles and emotional depth as heroes face their greatest challenge yet."
        },
        {
        id: 3,
        imageUrl: "https://picsum.photos/300/400?random=3",
        title: "3 Odyssey: Beyond the Stars",
        rating: 4.9,
        likes: 45600,
        type:"illustrated",
        subtype: "manwha",
        text: "An interstellar masterpiece that explores the far reaches of space and the human spirit. This visually stunning epic follows a diverse crew as they navigate cosmic mysteries, alien encounters, and the true meaning of home."
        },
        {
        id: 4,
        imageUrl: "https://picsum.photos/300/400?random=4",
        title: "4 Night Live",
        rating: 4.2,
        likes: 2340,
        type:"illustrated",
        subtype: "manwha",
        text: "A supernatural thriller set in the shadows of a bustling city where creatures of the night come alive. Experience pulse-pounding action mixed with dark humor as unlikely allies band together to protect both worlds."
        },
        {
        id: 5,
        imageUrl: "https://picsum.photos/300/400?random=5",
        title: "5 Amazing Adventure",
        rating: 4.5,
        likes: 15420,
       type:"illustrated",
        subtype: "manwha",
        text: "The fifth installment in the beloved adventure series brings fresh magic and wonder to familiar characters. Join them as they explore uncharted territories and face new challenges that will test their bonds like never before."
        },
        {
        id: 6,
        imageUrl: "https://picsum.photos/300/400?random=6", 
        title: "6 of the Lost Kingdom",
        rating: 3.8,
        likes: 8950,
        type:"illustrated",
        subtype: "manwha",
        text: "The saga continues as ancient prophecies unfold and long-lost kingdoms rise from the depths of time. This chapter reveals hidden truths about the world's origin while delivering breathtaking action and emotional revelations."
        },
        {
        id: 7,
        imageUrl: "https://picsum.photos/300/400?random=7",
        title: "7 Odyssey: Beyond the Stars",
        rating: 4.9,
        likes: 45600,
        type:"illustrated",
        subtype: "manwha",
        text: "The seventh chapter of this acclaimed space opera pushes the boundaries of imagination with its exploration of parallel dimensions and quantum realities. A mind-bending journey that challenges everything we thought we knew about the universe."
        },
        {
        id: 8,
        imageUrl: "https://picsum.photos/64/64?random=108",
        title: "8 Night Live",
        rating: 4.2,
        likes: 340,
        type:"illustrated",
        subtype: "manwha",
        text: "Dark forces gather as the night world's greatest champions face their most dangerous enemy yet. This intense installment combines gothic atmosphere with explosive action sequences that will leave you breathless."
        },
        {
        id: 9,
        imageUrl: "https://picsum.photos/300/400?random=5",
        title: "The 9 Adventure",
        rating: 4.5,
        likes: 15420,
        type:"illustrated",
        subtype: "manwha",
        text: "Nine heroes unite for the ultimate quest in this epic conclusion that spans multiple realms and timelines. Witness legendary battles, unexpected alliances, and sacrifices that will determine the fate of all existence."
        },
        {
        id: 10,
        imageUrl: "https://picsum.photos/300/400?random=6", 
        title: "Mystery 10 the Lost Kingdom",
        rating: 3.8,
        likes: 8950,
        type:"illustrated",
        subtype: "manwha",
        text: "A mysterious tenth entry that unravels the deepest secrets of the Lost Kingdom. Follow detective-like characters as they piece together clues spanning centuries, revealing a conspiracy that threatens everything they hold dear."
        },
        {
        id: 11,
        imageUrl: "https://picsum.photos/300/400?random=7",
        title: "11",
        rating: 4.9,
        likes: 45600,
        type:"illustrated",
        subtype: "manwha",
        text: "The enigmatic eleventh chapter presents a minimalist yet profound narrative that explores themes of identity, purpose, and transcendence. A contemplative masterpiece that invites viewers to look deeper into themselves."
        },
        {
        id: 12,
        imageUrl: "https://picsum.photos/300/400?random=8",
        title: "12 Night Live",
        rating: 4.2,
        likes: 340,
        type:"illustrated",
        subtype: "manwha",
        text: "The final night brings all storylines to a dramatic crescendo as heroes and villains clash in an ultimate battle for the soul of both worlds. This epic finale promises to deliver the most spectacular and emotionally satisfying conclusion."
        },
    ];

  const movie = posters[id -1];
  
  if (!movie) {
    return NextResponse.json({ error: 'Movie not found' }, { status: 404 });
  }

  return NextResponse.json(movie);
}
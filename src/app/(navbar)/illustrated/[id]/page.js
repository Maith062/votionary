'use client';
import { useRouter } from 'next/navigation';
import { use, useState, useEffect } from 'react';
import Image from 'next/image';

const MoviePage = ({ params }) => {
  const router = useRouter();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const resolvedParams = use(params)

  useEffect(() => {
    const fetchIllustrated = async () => {
      console.log("Resolved Params id: ", resolvedParams.id)
      try {
        const response = await fetch(`/api/illustrated/${resolvedParams.id}`);
        const movieData = await response.json();
        setMovie(movieData);
      } catch (error) {
        console.error('Error fetching movie:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchIllustrated();
  }, [resolvedParams.id]);

  if (loading) return <div>Loading...</div>;
  if (!movie) return <div>Movie not found</div>;

  console.log(movie)

  return (
    <div className="container mx-auto px-4 py-8">
      <button 
        onClick={() => router.back()}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        ← Back
      </button>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <Image
            src={movie.imageUrl}
            alt={movie.title}
            width={400}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>
        
        <div className="md:w-2/3">
          <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
          <p className="text-lg mb-4">{movie.text}</p>
          {/* <div className="space-y-2">
            <p><strong>Release Date:</strong> {movie.releaseDate}</p>
            <p><strong>Genre:</strong> {movie.genre}</p>
            <p><strong>Rating:</strong> {movie.rating}/10</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
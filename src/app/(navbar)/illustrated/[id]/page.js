'use client';
import { useRouter } from 'next/navigation';
import { use, useState, useEffect } from 'react';
import Image from 'next/image';
import { Star, Heart, Bookmark, Eye, Users } from 'lucide-react';

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

  useEffect(() => {
    //for tomorrow, make sure for the layout, to switch between flex-col for small and no flex-col
    //for content container
  }, [])

  if (loading) return <div>Loading...</div>;
  if (!movie) return <div>Movie not found</div>;

  console.log(movie)

  const StarRating = ({ rating, maxRating = 5 }) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<Star key="half" className="w-4 h-4 fill-yellow-400/50 text-yellow-400" />);
    }
    
    const remainingStars = maxRating - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
    }
    
    return <div className="flex">{stars}</div>;
  };

  return (
    <div className="min-h-screen bg-zinc-950 px-20">
      {/* Hero Image */}
      <div className="relative h-96 w-full overflow-hidden faded-edges">
        <img 
          src={movie.heroImage} 
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex gap-4 relative">
          
          {/* Left Column - Fixed Position */}
          <div className="flex-shrink-0">
            <div className="md:sticky top-8">
              {/* Movie Poster */}
              <div className="mb-6">
                <img 
                  src={movie.imageUrl} 
                  alt={movie.title}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              
              {/* Stats */}
              <div className="bg-zinc-800 rounded-xs p-6  mb-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Eye className="w-5 h-5 text-gray-600" />
                      <span className="text-sm text-gray-600">Views</span>
                    </div>
                    <span className="font-semibold">{movie.views}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Heart className="w-5 h-5 text-red-500" />
                      <span className="text-sm text-gray-600">Likes</span>
                    </div>
                    <span className="font-semibold">{movie.likes}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Bookmark className="w-5 h-5 text-blue-500" />
                      <span className="text-sm text-gray-600">Lists</span>
                    </div>
                    <span className="font-semibold">{movie.lists}</span>
                  </div>
                </div>
              </div>
              
              {/* Additional Image */}
              <div className="bg-white rounded-lg p-4 shadow-md h-100">
                <img 
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop"
                  alt="Additional content"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="flex-1 min-w-0">
            <div className="flex gap-8">
              {/* Middle Column */}
              <div className="flex-1">
                <div className="bg-white rounded-lg p-8 shadow-md">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">{movie.title}</h2>
                  
                  {/* Movie Blurb */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Overview</h3>
                    <p className="text-gray-700 leading-relaxed">{movie.blurb}</p>
                  </div>
                  
                  {/* Tags */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Genres</h3>
                    <div className="flex flex-wrap gap-2">
                      {movie.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Ratings */}
              <div className="w-80 flex-shrink-0">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-semibold mb-6 text-gray-900">Ratings</h3>
                  
                  <div className="space-y-6">
                    {movie.ratings.map((rating, index) => (
                      <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-gray-900">{rating.source}</span>
                          <span className="text-lg font-bold text-blue-600">
                            {rating.rating}/{rating.maxRating}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${(rating.rating / rating.maxRating) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Reviews Section */}
            <div className="mt-16">
              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-2xl font-bold mb-8 text-gray-900">Reviews</h3>
                
                <div className="space-y-8">
                  {movie.reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold">
                              {review.author.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{review.author}</h4>
                            <p className="text-sm text-gray-500">{review.date}</p>
                          </div>
                        </div>
                        <StarRating rating={review.rating} />
                      </div>
                      <p className="text-gray-700 leading-relaxed">{review.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
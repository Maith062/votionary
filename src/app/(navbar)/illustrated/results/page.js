"use client"

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation'; // For App Router
// import { useRouter } from 'next/router'; // For Pages Router
import { X, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

import FilterComponent from '@/sections/FilterComponent';
import ContentBox from '@/components/ContentBox';

const ResultsPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams(); // For App Router
  // const { query } = router; // For Pages Router - use this instead of searchParams
  
  const [filters, setFilters] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  // Sample collection data (in real app, this would come from API/database)
  const sampleItems = [
    { id: 1, name: 'Attack on Titan', category: 'Manga', genre: 'Action', year: '2010s', rating: 5, type: 'Manga', imgUrl: 'https://picsum.photos/300/400?random=4' },
    { id: 2, name: 'Solo Leveling', category: 'Manhwa', genre: 'Fantasy', year: '2020s', rating: 5, type: 'Manhwa', imgUrl: 'https://picsum.photos/300/400?random=1' },
    { id: 3, name: 'Demon Slayer', category: 'Manga', genre: 'Action', year: '2010s', rating: 4, type: 'Manga', imgUrl: 'https://picsum.photos/300/400?random=2' },
    { id: 4, name: 'Tower of God', category: 'Manhwa', genre: 'Adventure', year: '2010s', rating: 4.6, type: 'Manhwa', imgUrl: 'https://picsum.photos/300/400?random=3' },
    { id: 5, name: 'One Piece', category: 'Manga', genre: 'Adventure', year: '1990s', rating: 5, type: 'Manga', imgUrl: 'https://picsum.photos/300/400?random=7'},
    { id: 6, name: 'Naruto', category: 'Manga', genre: 'Action', year: '1990s', rating: 4, type: 'Manga', imgUrl: 'https://picsum.photos/300/400?random=8'},
    { id: 7, name: 'Jujutsu Kaisen', category: 'Manga', genre: 'Supernatural', year: '2020s', rating: 4.8, type: 'Manga', imgUrl: 'https://picsum.photos/300/400?random=9'},
    { id: 8, name: 'The Beginning After The End', category: 'Manhwa', genre: 'Fantasy', year: '2020s', rating: 4.9, type: 'Manhwa', imgUrl: 'https://picsum.photos/300/400?random=10'},
    { id: 9, name: 'Chainsaw Man', category: 'Manga', genre: 'Horror', year: '2020s', rating: 4.7, type: 'Manga', imgUrl: 'https://picsum.photos/300/400?random=11'},
    { id: 10, name: 'Lore Olympus', category: 'Webtoon', genre: 'Romance', year: '2010s', rating: 4.5, type: 'Manhwa', imgUrl: 'https://picsum.photos/300/400?random=12'},
    { id: 11, name: 'Dragon Ball', category: 'Manga', genre: 'Action', year: '1980s', rating: 4.2, type: 'Manga', imgUrl: 'https://picsum.photos/300/400?random=13'},
    { id: 12, name: 'Vagabond', category: 'Manga', genre: 'Historical', year: '1990s', rating: 5, type: 'Manga', imgUrl: 'https://picsum.photos/300/400?random=14'},
    { id: 13, name: 'Mushoku Tensei', category: 'Light Novel', genre: 'Isekai', year: '2010s', rating: 4.7, type: 'Lightnovel', imgUrl: 'https://picsum.photos/300/400?random=15'} // Added a 'Light Novel' category example
];

  useEffect(() => {
    // Extract filters from URL parameters
    const extractedFilters = {};
    const extractedSearch = searchParams.get('search') || '';
    
    // For App Router
    ['year', 'rating', 'popular', 'genre', 'type'].forEach(key => {
      const value = searchParams.get(key);
      if (value) {
        extractedFilters[key] = value;
      }
    });
    
    // For Pages Router, use this instead:
    // const extractedSearch = query.search || '';
    // ['year', 'rating', 'popular', 'genre', 'type'].forEach(key => {
    //   if (query[key]) {
    //     extractedFilters[key] = query[key];
    //   }
    // });
    
    setFilters(extractedFilters);
    setSearchTerm(extractedSearch);
  }, [searchParams]); // For Pages Router, use [router.query] instead

  // const removeFilter = (filterKey) => {
  //   const newFilters = { ...filters };
  //   delete newFilters[filterKey];
  //   setFilters(newFilters);
    
  //   // Update URL
  //   const params = new URLSearchParams();
  //   Object.entries(newFilters).forEach(([key, value]) => {
  //     params.append(key, value);
  //   });
  //   if (searchTerm) {
  //     params.append('search', searchTerm);
  //   }
    
  //   router.push(`/illustrated/results?${params.toString()}`);
  // };

  // const removeSearch = () => {
  //   setSearchTerm('');
    
  //   // Update URL
  //   const params = new URLSearchParams();
  //   Object.entries(filters).forEach(([key, value]) => {
  //     params.append(key, value);
  //   });
    
  //   router.push(`/illustrated/results?${params.toString()}`);
  // };

  //core logic taking the sampleItems (to be replaced eventually with data pulled by an API)
  const getFilteredItems = () => {
    return sampleItems.filter(item => {
      const matchesType = !filters.type || item.type === filters.type;
      const matchesGenre = !filters.genre || item.genre === filters.genre;
      const matchesYear = !filters.year || item.year === filters.year;
      const matchesSearch = !searchTerm || 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.genre.toLowerCase().includes(searchTerm.toLowerCase());
      
      let matchesRating = true;
      if (filters.rating) {
        const minRating = parseInt(filters.rating.charAt(0));
        matchesRating = item.rating >= minRating;
      }

      return matchesType && matchesGenre && matchesYear && matchesSearch && matchesRating;
    });
  };

  const filteredItems = getFilteredItems();
  const hasActiveFilters = Object.values(filters).some(filter => filter && filter !== '') || (searchTerm && searchTerm.trim() !== '');

   const filterOptions = {
        Year: ['2020s', '2010s', '2000s', '1990s', '1980s'],
        Rating: ['5 stars', '4+ stars', '3+ stars', '2+ stars', '1+ stars'],
        Popular: ['This week', 'This month', 'This year', 'All time'],
        Genre: ['Adventure', 'Action', 'Apocalypse', 'Sports', 'Shounen', 'Others'],
        Type: ['Manhwa', 'Manga', 'Lightnovel']
    };

    const intialFilters = {
        year: '',
        rating: '',
        popular: '',
        genre: '',
        type: '',
    };

    const searchSuggestions=[
      'The Great Adventure',
      'Comedy Gold',
      'Action Movies',
      'Best Documentaries',
      'Top Rated Series',
      'Recent Movies',
      'Popular Shows',
      'Award Winners',
      'Netflix Originals',
      'Marvel Movies',
      'Disney Films',
      'Horror Classics',
      'Romantic Comedies',

    ];

  return (
    <div className='bg-zinc-800'>
        <div className="max-w-6xl mx-25 p-6">
            <div className="mb-6">
                <FilterComponent 
                    filterOptions={filterOptions}
                    intialFilters={intialFilters} 
                    searchSuggestions={searchSuggestions}
                />
                <Link 
                    href="/illustrated" 
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium mb-4"
                >
                    <ArrowLeft size={20} />
                    Back to Filters
                </Link> 
                
                <h1 className="text-3xl font-bold mb-4">
                Search Results ({filteredItems.length})
                </h1>
                
                {/* Active filters display */}
                {/* {hasActiveFilters && (
                <div className="flex flex-wrap gap-2 mb-6">
                    {Object.entries(filters).map(([key, value]) => (
                    <span key={key} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                        {key}: {value}
                        <button
                        onClick={() => removeFilter(key)}
                        className="hover:bg-blue-200 rounded-full p-1"
                        >
                        <X size={12} />
                        </button>
                    </span>
                    ))}
                    {searchTerm && (
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                        Search: {searchTerm}
                        <button
                        onClick={removeSearch}
                        className="hover:bg-green-200 rounded-full p-1"
                        >
                        <X size={12} />
                        </button>
                    </span>
                    )}
                </div>
                )} */}
            </div>

            {/* Results grid */}
            {filteredItems.length > 0 ? (
                <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-8 gap-5 lg:gap-2">
                {filteredItems.map(item => (
                    <div key={item.id} className='relative group'>
                      <ContentBox
                        key={item.id} 
                        id={item.id}
                        title={item.name}
                        imageUrl={item.imgUrl}
                        width='w-30'
                        height= ''
                        isReview={true}
                        type="illustrated"
                    
                      />
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 text-sm font-medium text-white bg-zinc-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap whitespace-nowrap z-[9999] pointer-events-none">
                          {item.name}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-zinc-700"></div>
                      </div>
                    </div>
                    // <div key={item.id} className="bg-white rounded-lg shadow-md p-4 border hover:shadow-lg transition-shadow">
                    // <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                    // <p className="text-gray-600 mb-1">Category: {item.category}</p>
                    // <p className="text-gray-600 mb-1">Genre: {item.genre}</p>
                    // <p className="text-gray-600 mb-1">Year: {item.year}</p>
                    // <p className="text-gray-600 mb-1">Type: {item.type}</p>
                    // <p className="text-gray-600">Rating: {item.rating}★</p>
                    // </div>
                ))}
                </div>
            ) : (
                <div className="text-center py-12">
                <p className="text-gray-500 text-lg mb-4">No items match your current filters.</p>
                <Link 
                    href="/filters"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg inline-block"
                >
                    Modify Filters
                </Link>
                </div>
            )}
        </div>
    </div>
  );
};

export default ResultsPage;
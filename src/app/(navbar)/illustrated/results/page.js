"use client"

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation'; // For App Router
// import { useRouter } from 'next/router'; // For Pages Router
import { X, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

import FilterComponent from '@/sections/FilterComponent';

const ResultsPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams(); // For App Router
  // const { query } = router; // For Pages Router - use this instead of searchParams
  
  const [filters, setFilters] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  // Sample collection data (in real app, this would come from API/database)
  const sampleItems = [
    { id: 1, name: 'Attack on Titan', category: 'Manga', genre: 'Action', year: '2010s', rating: 5, type: 'manga' },
    { id: 2, name: 'Solo Leveling', category: 'Manhwa', genre: 'Action', year: '2010s', rating: 5, type: 'manhwa' },
    { id: 3, name: 'Demon Slayer', category: 'Manga', genre: 'Action', year: '2010s', rating: 4, type: 'manga' },
    { id: 4, name: 'Tower of God', category: 'Manhwa', genre: 'Action', year: '2010s', rating: 4.6, type: 'manhwa' },
    { id: 5, name: 'One Piece', category: 'Manga', genre: 'Adventure', year: '1990s', rating: 5, type: 'manga' },
    { id: 6, name: 'Naruto', category: 'Manga', genre: 'Action', year: '1990s', rating: 4, type: 'manga' },
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

  const removeFilter = (filterKey) => {
    const newFilters = { ...filters };
    delete newFilters[filterKey];
    setFilters(newFilters);
    
    // Update URL
    const params = new URLSearchParams();
    Object.entries(newFilters).forEach(([key, value]) => {
      params.append(key, value);
    });
    if (searchTerm) {
      params.append('search', searchTerm);
    }
    
    router.push(`/illustrated/results?${params.toString()}`);
  };

  const removeSearch = () => {
    setSearchTerm('');
    
    // Update URL
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      params.append(key, value);
    });
    
    router.push(`/illustrated/results?${params.toString()}`);
  };

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
  const hasActiveFilters = Object.keys(filters).length > 0 || searchTerm;

   const filterOptions = {
        Year: ['2020s', '2010s', '2000s', '1990s', '1980s'],
        Rating: ['5 stars', '4+ stars', '3+ stars', '2+ stars', '1+ stars'],
        Popular: ['This week', 'This month', 'This year', 'All time'],
        Genre: ['5 stars', '4+ Stars', '3+ Stars', '2+ Stars', '1+ Stars'],
        Type: ['manwha', 'manga']
    };

    const intialFilters = {
        year: '',
        rating: '',
        popular: '',
        genre: '',
        type: '',
    }

  return (
    <div className='bg-zinc-800'>
        <div className="max-w-6xl mx-auto p-6">
            <div className="mb-6">
                <FilterComponent 
                    filterOptions={filterOptions}
                    intialFilters={intialFilters} 
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
                {hasActiveFilters && (
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
                )}
            </div>

            {/* Results grid */}
            {filteredItems.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map(item => (
                    <div key={item.id} className="bg-white rounded-lg shadow-md p-4 border hover:shadow-lg transition-shadow">
                    <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                    <p className="text-gray-600 mb-1">Category: {item.category}</p>
                    <p className="text-gray-600 mb-1">Genre: {item.genre}</p>
                    <p className="text-gray-600 mb-1">Year: {item.year}</p>
                    <p className="text-gray-600 mb-1">Type: {item.type}</p>
                    <p className="text-gray-600">Rating: {item.rating}★</p>
                    </div>
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
"use client"

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Filter, X, ChevronDown } from 'lucide-react';

export default function FilterComponent ({
  filterOptions = {},
  initialFilters = {},
  searchSuggestions = [] // Add this prop for search suggestions
}){
  const router = useRouter();
  
  // Initialize filters with empty values or provided initial values
  const [filters, setFilters] = useState({
    year: initialFilters.year || '',
    rating: initialFilters.rating || '',
    popular: initialFilters.popular || '',
    genre: initialFilters.genre || '',
    type: initialFilters.type || '',
    ...initialFilters // Allow additional filters
  });
  
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [filterSearchTerms, setFilterSearchTerms] = useState({});
  const dropdownRefs = useRef({});
  const searchRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (openDropdown && dropdownRefs.current[openDropdown] && 
          !dropdownRefs.current[openDropdown].contains(event.target)) {
        setOpenDropdown(null);
      }
      if (showSearchSuggestions && searchRef.current && 
          !searchRef.current.contains(event.target)) {
        setShowSearchSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openDropdown, showSearchSuggestions]);

  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);
    setOpenDropdown(null);
    setFilterSearchTerms({ ...filterSearchTerms, [filterType]: '' });
    // Navigate to results page when any filter changes
    if (value) {
      navigateToResults(newFilters, searchTerm);
    }
  };

  const handleFilterInputChange = (filterType, value) => {
    setFilterSearchTerms({ ...filterSearchTerms, [filterType]: value });
  };

  const toggleDropdown = (filterType) => {
    setOpenDropdown(openDropdown === filterType ? null : filterType);
  };

  const getFilteredOptions = (filterType, options) => {
    const searchTerm = filterSearchTerms[filterType] || '';
    if (!searchTerm) return options;
    return options.filter(option => 
      option.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setShowSearchSuggestions(value.length > 0);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setShowSearchSuggestions(false);
    navigateToResults(filters, searchTerm);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setShowSearchSuggestions(false);
    navigateToResults(filters, suggestion);
  };

  const getFilteredSuggestions = () => {
    if (!searchTerm || searchTerm.length < 1) return [];
    return searchSuggestions.filter(suggestion =>
      suggestion.toLowerCase().includes(searchTerm.toLowerCase())
    ).slice(0, 8); // Limit to 8 suggestions
  };

  const navigateToResults = (currentFilters, currentSearch) => {
    // Create URL search params
    const params = new URLSearchParams();
    
    // Add filters to URL (only non-empty values)
    Object.entries(currentFilters).forEach(([key, value]) => {
      if (value && value !== '') {
        params.append(key, value);
      }
    });
    
    // Add search term
    if (currentSearch && currentSearch.trim() !== '') {
      params.append('search', currentSearch);
    }
    
    // Navigate to results page with query parameters
    router.push(`/illustrated/results?${params.toString()}`);
  };

  const clearFilters = () => {
    const clearedFilters = Object.keys(filters).reduce((acc, key) => {
      acc[key] = '';
      return acc;
    }, {});
    setFilters(clearedFilters);
    setSearchTerm('');
    setFilterSearchTerms({});
    setOpenDropdown(null);
    setShowSearchSuggestions(false);
  };

  const hasActiveFilters = Object.values(filters).some(filter => filter && filter !== '') || (searchTerm && searchTerm.trim() !== '');

  return (
    <div className=" rounded-lg mb-6">
      <div className="space-y-4">
        {/* Header */}
        

        {/* Single row for search and filters */}
        <div className="flex flex-col gap-1">
          
            {/* Main filter and search row */}
            <div className="flex flex-col sm:flex-row gap-2 sm:items-center shadow-none">
              {/* Filter dropdowns */}
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-gray-600" />
                <h3 className="text-lg font-semibold text-gray-300">Browse By</h3>
              </div>
              <div className="flex gap-1">
                {Object.entries(filterOptions).map(([filterType, options]) => (
                  <div key={filterType} className="">
                    <select
                      value={filters[filterType.toLowerCase()] || ''}
                      onChange={(e) => handleFilterChange(filterType.toLowerCase(), e.target.value)}
                      className="w-25 px-2 py-2 text-white rounded-sm focus:ring-2 outline-none bg-zinc-700"
                    >
                      <option value="">{filterType}</option>
                      {options.map(option => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>

              {/* Search bar and clear button */}
              <div className="flex gap-4 items-center sm:ml-auto">
                {/* <h1>Or search for it</h1> */}
                {/* Search bar */}
                <div className="min-w-64 relative" ref={searchRef}>
                  <div className="relative">
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={handleSearchChange}
                      onFocus={() => searchTerm.length > 0 && setShowSearchSuggestions(true)}
                      placeholder="Or search directly..."
                      className="w-full px-4 py-2 pl-10  text-white rounded-sm bg-zinc-700 outline-none"
                      onKeyDown={(e) => e.key === 'Enter' && handleSearchSubmit(e)}
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  </div>
                  
                  {/* Search suggestions dropdown */}
                  {showSearchSuggestions && getFilteredSuggestions().length > 0 && (
                    <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-64 overflow-y-auto">
                      {getFilteredSuggestions().map((suggestion, index) => (
                        <button
                          key={index}
                          onClick={() => handleSuggestionClick(suggestion)}
                          className="w-full px-4 py-3 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none border-b border-gray-100 last:border-b-0"
                        >
                          <div className="flex items-center gap-3">
                            <Search className="w-4 h-4 text-gray-400" />
                            {suggestion}
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Clear button */}
                
              </div>
            </div>

            {/* Filter preview */}
            {hasActiveFilters && (
              <div className="bg-gray-50/20 p-3 rounded-lg">
                <div className='flex'>
                  <div className="text-sm font-medium text-gray-700 mb-2 mr-2">Current Filters:</div>
                  {hasActiveFilters && (
                    <button
                      onClick={clearFilters}
                      className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors whitespace-nowrap"
                    >
                      <X className="w-4 h-4" />
                      Clear All
                    </button>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(filters).map(([key, value]) => 
                    value && value !== '' && (
                      <span key={key} className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {key}: {value}
                      </span>
                    )
                  )}
                  
                  {searchTerm && searchTerm.trim() !== '' && (
                    <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      Search: {searchTerm}
                    </span>
                  )}
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};


import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, ChevronDown, ShoppingCart, Heart, Search, X } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../constants';
import { formatPrice } from '../lib/utils';
import { useAppContext } from '../AppContext';
import { Link } from 'react-router-dom';

export const Shop: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addToCart, toggleWishlist, wishlist } = useAppContext();
  
  const [selectedCategory, setSelectedCategory] = useState<string>(searchParams.get('category') || 'all');
  const [priceRange, setPriceRange] = useState<number>(50000);
  const [sortBy, setSortBy] = useState<string>('featured');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesPrice = product.price <= priceRange;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesPrice && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === 'low') return a.price - b.price;
    if (sortBy === 'high') return b.price - a.price;
    return 0; // featured
  });

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    if (catId === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', catId);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      {/* Header */}
      <div className="bg-white pt-16 pb-16 border-b border-[#E8E1D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-light italic mb-8">Collections</h1>
          
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
            <div className="relative w-full md:w-[450px]">
              <input
                type="text"
                placeholder="Find pieces for your home..."
                className="w-full bg-[#FAF9F6] border-none rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-1 focus:ring-[#C5A059] font-sans text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3D2B1F]/40" size={18} />
            </div>

            <div className="flex items-center gap-8 w-full md:w-auto">
              <div className="hidden md:flex items-center gap-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3D2B1F]/40">Sort By</span>
                <select 
                  className="bg-transparent border-none font-bold text-[11px] uppercase tracking-widest text-[#3D2B1F] outline-none cursor-pointer"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="featured">Featured</option>
                  <option value="low">Price: Low to High</option>
                  <option value="high">Price: High to Low</option>
                </select>
              </div>
              
              <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center gap-2 bg-[#3D2B1F] text-white px-8 py-3.5 text-[10px] uppercase tracking-[0.2em] font-bold lg:hidden w-full justify-center shadow-lg"
              >
                <Filter size={16} />
                Filters
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Desktop Sidebar Filters */}
          <aside className="hidden lg:block w-64 flex-shrink-0 space-y-12">
            <div>
              <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-[#3D2B1F]/40 mb-8 border-b border-[#E8E1D9] pb-4">Categories</h3>
              <ul className="space-y-4">
                <li>
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className={`text-[11px] uppercase tracking-[0.25em] font-bold transition-all ${selectedCategory === 'all' ? 'text-[#C5A059] translate-x-2' : 'text-[#3D2B1F]/60 hover:text-[#C5A059] hover:translate-x-1'}`}
                  >
                    All Items
                  </button>
                </li>
                {CATEGORIES.map(cat => (
                  <li key={cat.id}>
                    <button
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`text-[11px] uppercase tracking-[0.25em] font-bold transition-all ${selectedCategory === cat.id ? 'text-[#C5A059] translate-x-2' : 'text-[#3D2B1F]/60 hover:text-[#C5A059] hover:translate-x-1'}`}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-[#3D2B1F]/40 mb-8 border-b border-[#E8E1D9] pb-4">Budget</h3>
              <div className="space-y-6">
                <input
                  type="range"
                  min="0"
                  max="50000"
                  step="500"
                  className="w-full accent-[#C5A059]"
                  value={priceRange}
                  onChange={(e) => setPriceRange(parseInt(e.target.value))}
                />
                <div className="flex justify-between text-[11px] font-bold tracking-widest text-[#3D2B1F]/60">
                  <span>₹0</span>
                  <span className="text-[#C5A059]">{formatPrice(priceRange)}</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-grow">
            <div className="flex items-center justify-between mb-8">
              <p className="text-sm text-gray-500">
                Showing <span className="font-bold text-primary">{filteredProducts.length}</span> results
              </p>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product, index) => {
                  const isWishlisted = wishlist.some(i => i.id === product.id);
                  return (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100"
                    >
                      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                          <button 
                            onClick={() => addToCart(product)}
                            className="bg-white text-primary p-3 rounded-full hover:bg-primary hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0"
                          >
                            <ShoppingCart size={20} />
                          </button>
                          <Link 
                            to={`/product/${product.id}`}
                            className="bg-white text-primary p-3 rounded-full hover:bg-primary hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 delay-75"
                          >
                            <Search size={20} />
                          </Link>
                          <button 
                            onClick={() => toggleWishlist(product)}
                            className={`p-3 rounded-full transition-all transform translate-y-4 group-hover:translate-y-0 delay-150 ${
                              isWishlisted ? 'bg-accent text-white' : 'bg-white text-primary hover:bg-accent hover:text-white'
                            }`}
                          >
                            <Heart size={20} fill={isWishlisted ? "currentColor" : "none"} />
                          </button>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-[10px] text-accent font-bold uppercase tracking-widest mb-1">{product.category}</p>
                        <Link to={`/product/${product.id}`}>
                          <h3 className="text-lg font-serif font-semibold mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                        </Link>
                        <p className="text-primary font-bold">{formatPrice(product.price)}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-24 bg-white rounded-[40px] border border-gray-100">
                <p className="text-2xl font-serif text-gray-400 mb-4">No products found</p>
                <button 
                  onClick={() => {
                    setSelectedCategory('all');
                    setPriceRange(50000);
                    setSearchQuery('');
                  }}
                  className="text-primary font-bold underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Slideover */}
      <AnimatePresence>
        {isFilterOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm md:hidden"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white p-8 overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-2xl font-serif">Filters</h2>
                <button onClick={() => setIsFilterOpen(false)}><X size={24} /></button>
              </div>

              <div className="space-y-12">
                <div>
                  <h3 className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-6">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => handleCategoryChange('all')}
                      className={`px-4 py-2 rounded-full text-sm border transition-all ${selectedCategory === 'all' ? 'bg-primary text-white border-primary' : 'bg-white border-gray-200 text-gray-500'}`}
                    >
                      All
                    </button>
                    {CATEGORIES.map(cat => (
                      <button
                        key={cat.id}
                        onClick={() => handleCategoryChange(cat.id)}
                        className={`px-4 py-2 rounded-full text-sm border transition-all ${selectedCategory === cat.id ? 'bg-primary text-white border-primary' : 'bg-white border-gray-200 text-gray-500'}`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                   <h3 className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-6">Price Range</h3>
                   <input
                    type="range"
                    min="0"
                    max="50000"
                    step="500"
                    className="w-full accent-primary"
                    value={priceRange}
                    onChange={(e) => setPriceRange(parseInt(e.target.value))}
                  />
                  <div className="flex justify-between text-xs font-bold text-gray-400 mt-2">
                    <span>₹0</span>
                    <span>{formatPrice(priceRange)}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-6">Sort By</h3>
                  <div className="grid grid-cols-1 gap-2">
                    {['featured', 'low', 'high'].map(s => (
                      <button
                        key={s}
                        onClick={() => setSortBy(s)}
                        className={`w-full text-left px-4 py-3 rounded-xl border transition-all ${sortBy === s ? 'bg-primary text-white border-primary' : 'bg-muted border-transparent text-gray-500'}`}
                      >
                        {s === 'featured' ? 'Featured' : s === 'low' ? 'Price: Low to High' : 'Price: High to Low'}
                      </button>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => setIsFilterOpen(false)}
                  className="w-full bg-primary text-white h-14 rounded-2xl font-bold mt-12"
                >
                  Show Results
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

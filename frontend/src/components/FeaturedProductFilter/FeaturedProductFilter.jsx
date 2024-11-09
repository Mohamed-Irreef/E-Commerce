import React, { useState } from 'react';
import './FeaturedProductFilter.css';
import {
    popular1,
    popular2,
    popular4,
    popular5,
    popular6,
    popular7,
    popular8,
    popular9,
    popular10,
    popular11,
    popular12,
} from '../../assets/Images'; 

const products = [
    { id: 1, name: 'Casual Sneakers', image: popular1, category: 'popular', tag: 'Hot' },
    { id: 2, name: 'Running Shoes', image: popular2, category: 'popular', tag: 'New' },
    { id: 3, name: 'Leather Jacket', image: popular8, category: 'new', tag: 'Best Sell' },
    { id: 4, name: 'Denim Jeans', image: popular4, category: 'new', tag: 'Sale' },
    { id: 5, name: 'Sports Watch', image: popular5, category: 'featured', tag: 'Best Sell' },
    { id: 6, name: 'Backpack', image: popular6, category: 'featured', tag: 'New' },
    { id: 7, name: 'Sun Glasses', image: popular7, category: 'popular', tag: 'New' },
    { id: 8, name: 'Baseball Cap', image: popular8, category: 'popular', tag: 'New' },
    { id: 9, name: 'Wool Scarf', image: popular9, category: 'popular', tag: 'Hot' },
    { id: 10, name: 'Winter Gloves', image: popular10, category: 'popular',tag: 'New' },
    { id: 11, name: 'Sports Headphones', image: popular11, category: 'popular', tag: 'Best Sell' },
    { id: 12, name: 'Smartphone Case', image: popular12, category: 'popular', tag: 'Hot' },
];

const ProductFilter = () => {
    const [filter, setFilter] = useState('All');

    const filteredProducts = filter === 'All' 
        ? products 
        : products.filter(product => product.category === filter.toLowerCase());

    // Function to determine tag styles
    const getTagStyle = (tag) => {
        switch (tag) {
            case 'Hot':
                return { backgroundColor: '#ff80bf', color: 'white' };
            case 'New':
                return { backgroundColor: ' #66cc66', color: 'white' };
            case 'Best Sell':
                return { backgroundColor: ' #e6b800', color: 'white' };
            case 'Sale':
                return { backgroundColor: '	 #80ccff', color: 'white' };
            default:
                return { backgroundColor: 'transparent', color: 'black' };
        }
    };

    return (
        <div className="product-filter-container">
            {/* Filter Buttons */}
            <h2 className="animated-heading">
        <span className="highlight">Featured </span>
        <span className="categories">Products</span>
      </h2>
            <div className="filter-buttons">
                {['All', 'Featured', 'Popular', 'New'].map(category => (
                    <button
                        key={category}
                        onClick={() => setFilter(category)}
                        className={filter === category ? 'active' : ''}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Product Grid */}
            <div className="product-grid1">
                {filteredProducts.map(product => (
                    <div key={product.id} className="product-card1">
                        {product.tag && (
                            <p className='tag' style={getTagStyle(product.tag)}>
                                {product.tag}
                            </p>
                        )}
                        <img src={product.image} alt={product.name} />
                        <h4>{product.name}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductFilter;

import React, { useState, useEffect } from 'react';
import DualRangeSlider from './DualRangeSlider';
import { MOCK_PRODUCTS, MOCK_CATEGORIES, MOCK_BRANDS } from '../../data/mock-products';

export interface FilterState {
  priceRange: {
    min: number;
    max: number;
  };
  brands: number[];
  categories: number[];
}

interface ProductFilterProps {
  onFilterChange: (filters: FilterState) => void;
  initialFilters?: FilterState;
}

const MIN_PRICE = 0;
const MAX_PRICE = 50000000;

const ProductFilter: React.FC<ProductFilterProps> = ({ onFilterChange, initialFilters }) => {
  const [filters, setFilters] = useState<FilterState>({
    priceRange: initialFilters?.priceRange || { min: MIN_PRICE, max: MAX_PRICE },
    brands: initialFilters?.brands || [],
    categories: initialFilters?.categories || []
  });

  // Derive brands/categories with product counts from mock data
  const brandsWithCount = MOCK_BRANDS.map(b => ({
    ...b,
    product_count: MOCK_PRODUCTS.filter(p => p.brand_id === b.id).length
  })).filter(b => b.product_count > 0);

  const categoriesWithCount = MOCK_CATEGORIES.map(c => ({
    ...c,
    product_count: MOCK_PRODUCTS.filter(p => p.category_id === c.id).length
  })).filter(c => c.product_count > 0);

  useEffect(() => {
    onFilterChange(filters);
  }, [filters]);

  const handlePriceRangeChange = (min: number, max: number) => {
    setFilters(prev => ({ ...prev, priceRange: { min, max } }));
  };

  const handleBrandChange = (brandId: number) => {
    setFilters(prev => ({
      ...prev,
      brands: prev.brands.includes(brandId)
        ? prev.brands.filter(id => id !== brandId)
        : [...prev.brands, brandId]
    }));
  };

  const handleCategoryChange = (categoryId: number) => {
    setFilters(prev => ({
      ...prev,
      categories: prev.categories.includes(categoryId)
        ? prev.categories.filter(id => id !== categoryId)
        : [...prev.categories, categoryId]
    }));
  };

  const clearAllFilters = () => {
    setFilters({ priceRange: { min: MIN_PRICE, max: MAX_PRICE }, brands: [], categories: [] });
  };

  const hasActiveFilters =
    filters.priceRange.min !== MIN_PRICE ||
    filters.priceRange.max !== MAX_PRICE ||
    filters.brands.length > 0 ||
    filters.categories.length > 0;

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Bộ lọc</h3>
        {hasActiveFilters && (
          <button onClick={clearAllFilters} className="text-sm text-red-600 hover:text-red-700">
            Xóa tất cả
          </button>
        )}
      </div>

      <div className="space-y-4">
        {/* Brand Filter */}
        {brandsWithCount.length > 0 && (
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Thương hiệu</h4>
            <div className="space-y-2">
              {brandsWithCount.map(brand => (
                <label key={brand.id} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.brands.includes(brand.id)}
                      onChange={() => handleBrandChange(brand.id)}
                      className="rounded border-gray-300 text-red-600 focus:ring-red-500"
                    />
                    <span className="ml-2 text-sm text-gray-600">{brand.title}</span>
                  </div>
                  <span className="text-xs text-gray-500">({brand.product_count})</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Category Filter */}
        {categoriesWithCount.length > 0 && (
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Danh mục</h4>
            <div className="space-y-2">
              {categoriesWithCount.map(category => (
                <label key={category.id} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.categories.includes(category.id)}
                      onChange={() => handleCategoryChange(category.id)}
                      className="rounded border-gray-300 text-red-600 focus:ring-red-500"
                    />
                    <span className="ml-2 text-sm text-gray-600">{category.title}</span>
                  </div>
                  <span className="text-xs text-gray-500">({category.product_count})</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Price Range Filter */}
        <div>
          <h4 className="font-medium text-gray-900 mb-3">Khoảng giá</h4>
          <DualRangeSlider
            min={MIN_PRICE}
            max={MAX_PRICE}
            value={filters.priceRange}
            step={500000}
            onChange={newRange => handlePriceRangeChange(newRange.min, newRange.max)}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;

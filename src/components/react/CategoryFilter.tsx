import React, { useState, useEffect } from 'react';
import DualRangeSlider from './DualRangeSlider';
import { MOCK_PRODUCTS, MOCK_BRANDS } from '../../data/mock-products';

export interface FilterState {
  priceRange: { min: number; max: number };
  brands: number[];
}

interface CategoryFilterProps {
  onFilterChange: (filters: FilterState) => void;
  initialFilters?: FilterState;
  categoryId: number;
}

const MIN_PRICE = 0;
const MAX_PRICE = 50000000;

const CategoryFilter: React.FC<CategoryFilterProps> = ({ onFilterChange, initialFilters, categoryId }) => {
  const [filters, setFilters] = useState<FilterState>({
    priceRange: initialFilters?.priceRange || { min: MIN_PRICE, max: MAX_PRICE },
    brands: initialFilters?.brands || []
  });

  // Products in this category
  const categoryProducts = MOCK_PRODUCTS.filter(p => p.category_id === categoryId);

  const brandsWithCount = MOCK_BRANDS.map(b => ({
    ...b,
    product_count: categoryProducts.filter(p => p.brand_id === b.id).length
  })).filter(b => b.product_count > 0);

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

  const clearAllFilters = () => {
    setFilters({ priceRange: { min: MIN_PRICE, max: MAX_PRICE }, brands: [] });
  };

  const hasActiveFilters =
    filters.priceRange.min !== MIN_PRICE ||
    filters.priceRange.max !== MAX_PRICE ||
    filters.brands.length > 0;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 sticky top-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-900">Bộ lọc</h3>
        {hasActiveFilters && (
          <button onClick={clearAllFilters} className="text-sm text-red-600 hover:text-red-700 px-2 py-1 rounded hover:bg-red-50 transition-colors">
            Xóa tất cả
          </button>
        )}
      </div>

      <div className="space-y-6">
        {brandsWithCount.length > 0 && (
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Thương hiệu</h4>
            <div className="space-y-3">
              {brandsWithCount.map(brand => (
                <label key={brand.id} className="flex items-center justify-between cursor-pointer p-2 rounded hover:bg-gray-50 transition-colors">
                  <div className="flex items-center min-w-0 flex-1">
                    <input
                      type="checkbox"
                      checked={filters.brands.includes(brand.id)}
                      onChange={() => handleBrandChange(brand.id)}
                      className="rounded border-gray-300 text-red-600 focus:ring-red-500 w-4 h-4 flex-shrink-0"
                    />
                    <span className="ml-3 text-sm text-gray-700 truncate">{brand.title}</span>
                  </div>
                  <span className="text-xs text-gray-500 ml-2 flex-shrink-0">({brand.product_count})</span>
                </label>
              ))}
            </div>
          </div>
        )}

        <div>
          <h4 className="font-medium text-gray-900 mb-4">Khoảng giá</h4>
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

export default CategoryFilter;

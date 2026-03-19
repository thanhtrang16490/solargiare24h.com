import React, { useState, useEffect } from 'react';
import DualRangeSlider from './DualRangeSlider';
import { MOCK_PRODUCTS, MOCK_CATEGORIES } from '../../data/mock-products';

export interface FilterState {
  priceRange: { min: number; max: number };
  categories: number[];
}

interface BrandFilterProps {
  onFilterChange: (filters: FilterState) => void;
  initialFilters?: FilterState;
  brandId: number;
}

const MIN_PRICE = 0;
const MAX_PRICE = 50000000;

const BrandFilter: React.FC<BrandFilterProps> = ({ onFilterChange, initialFilters, brandId }) => {
  const [filters, setFilters] = useState<FilterState>({
    priceRange: initialFilters?.priceRange || { min: MIN_PRICE, max: MAX_PRICE },
    categories: initialFilters?.categories || []
  });

  // Products for this brand
  const brandProducts = MOCK_PRODUCTS.filter(p => p.brand_id === brandId);

  const categoriesWithCount = MOCK_CATEGORIES.map(c => ({
    ...c,
    product_count: brandProducts.filter(p => p.category_id === c.id).length
  })).filter(c => c.product_count > 0);

  useEffect(() => {
    onFilterChange(filters);
  }, [filters]);

  const handlePriceRangeChange = (min: number, max: number) => {
    setFilters(prev => ({ ...prev, priceRange: { min, max } }));
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
    setFilters({ priceRange: { min: MIN_PRICE, max: MAX_PRICE }, categories: [] });
  };

  const hasActiveFilters =
    filters.priceRange.min !== MIN_PRICE ||
    filters.priceRange.max !== MAX_PRICE ||
    filters.categories.length > 0;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 sticky top-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-900">Bộ lọc</h3>
        {hasActiveFilters && (
          <button onClick={clearAllFilters} className="text-sm text-red-600 hover:text-red-700">
            Xóa tất cả
          </button>
        )}
      </div>

      <div className="space-y-6">
        {categoriesWithCount.length > 0 && (
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Danh mục</h4>
            <div className="space-y-2">
              {categoriesWithCount.map(category => (
                <label key={category.id} className="flex items-center justify-between cursor-pointer">
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

export default BrandFilter;

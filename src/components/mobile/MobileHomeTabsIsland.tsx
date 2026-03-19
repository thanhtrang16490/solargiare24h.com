import React, { useState, useEffect } from 'react';
import MobileHomeTabs from './MobileHomeTabs';
import { CATEGORIES } from '../../data/client-data';

interface Category {
  name: string;
  slug: string;
  productCount: number;
}

const MobileHomeTabsIsland: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    setCategories(CATEGORIES.map(c => ({ name: c.name, slug: c.slug, productCount: c.product_count })));
  }, []);

  return <MobileHomeTabs categories={categories} />;
};

export default MobileHomeTabsIsland;

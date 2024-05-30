import { useState } from 'react';

export const useCustomFilters = () => {
  const [filter, setFilter] = useState({
    name: '',
  });

  const handleUpdateFilter = (name: string) => {
    setFilter((prev) => ({
      ...prev,
      name,
    }));
  };

  return { filter, handleUpdateFilter };
};

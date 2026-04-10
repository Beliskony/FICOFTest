import { useState, useMemo } from "react";
import type { Filters } from "../Interfaces/archivetype";

const PAGE_SIZE = 24;

type Filterable = {
  categorie: string;
  annee: number;
  [key: string]: unknown;
};

/**
 * Hook générique de filtrage + pagination côté client.
 * Pour de vrais milliers d'items, remplacer items[] par un appel API
 * avec les filtres en query params et la page en cursor/offset.
 */
export function usePaginatedFilter<T extends Filterable>(
  items: T[],
  searchKeys: (keyof T)[],
  pageSize = PAGE_SIZE
) {
  const [filters, setFilters] = useState<Filters>({ search: "", categorie: "", annee: "" });
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = filters.search.toLowerCase().trim();
    return items.filter((item) => {
      if (filters.categorie && item.categorie !== filters.categorie) return false;
      if (filters.annee && item.annee !== Number(filters.annee)) return false;
      if (q) {
        return searchKeys.some((k) => String(item[k]).toLowerCase().includes(q));
      }
      return true;
    });
  }, [items, filters, searchKeys]);

  const totalPages = Math.ceil(filtered.length / pageSize);
  const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);

  const updateFilter = (key: keyof Filters, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setPage(1);
  };

  return { paginated, filtered, filters, updateFilter, page, setPage, totalPages };
}
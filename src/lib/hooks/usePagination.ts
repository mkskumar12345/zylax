import { useMemo } from "react";

const usePagination = (totalPages: number, activePage: number) => {
  return useMemo(() => {
    // If the total pages are less than or equal to 5, return all pages
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // Generate the pagination array
    let pagination = [];

    // Add the first three pages
    pagination.push(1, 2, 3);

    // If the active page is greater than 3 and less than totalPages - 1, include it
    if (activePage > 3 && activePage < totalPages) {
      pagination.push(activePage);
    }

    // Add the last page
    if (!pagination.includes(totalPages)) {
      pagination.push(totalPages);
    }

    // Remove duplicates and sort
    pagination = Array.from(new Set(pagination)).sort((a, b) => a - b);

    return pagination;
  }, [totalPages, activePage]);
};

export default usePagination;

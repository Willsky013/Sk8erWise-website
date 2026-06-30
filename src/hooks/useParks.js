import { useMemo } from 'react'
import parksData from '../data/parks.json'

export const parks = parksData

// Look up a single park by id.
export function getParkById(id) {
  return parksData.find((p) => p.id === id)
}

// Filter parks by a free-text query (name/city/country/difficulty/amenity)
export function useFilteredParks(query = "", filters = {}) {
  return useMemo(() => {
    const q = query.trim().toLowerCase();
    const s = (v) => (v ?? "").toString().toLowerCase();

    return parksData.filter((park) => {
      const matchesQuery =
        !q ||
        s(park.name).includes(q) ||
        s(park.city).includes(q) ||
        s(park.country).includes(q) ||
        s(park.difficulty).includes(q) ||
        (Array.isArray(park.amenities) &&
          park.amenities.some((a) => s(a).includes(q)));

      const matchesDifficulty =
        !filters.difficulty || park.difficulty === filters.difficulty;

      const matchesAmenity =
        !filters.amenity || park.amenities.includes(filters.amenity);

      const matchesCountry =
        !filters.country ||
        filters.country === "All country" ||
        park.country === filters.country;

      const matchesCity =
        !filters.city ||
        filters.city === "All city" ||
        park.city === filters.city;

      return (
        matchesQuery &&
        matchesDifficulty &&
        matchesAmenity &&
        matchesCountry &&
        matchesCity
      );
    });
  }, [
    query,
    filters.difficulty,
    filters.amenity,
    filters.country,
    filters.city,
  ]);
}
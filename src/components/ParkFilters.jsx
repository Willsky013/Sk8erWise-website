export default function ParkFilters({
  parks = [],
  selectedCountry,
  setSelectedCountry,
  selectedCity,
  setSelectedCity,
}) {
  const countries = [...new Set(parks.map((park) => park.country))].sort();

  const cities = [
    ...new Set(parks.filter(
        (park) =>
          selectedCountry === "All country" ||
          park.country === selectedCountry)
        .map((park) => park.city)
  ),];

  function handleCountryChange(e) {
    setSelectedCountry(e.target.value);
    setSelectedCity("All city");
  }

  return (
    <div className="filters">
      <select className="dropdownFilter"
        value={selectedCountry}
        onChange={handleCountryChange}
      >
        <option value="All country">All country</option>

        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>

      <select className="dropdownFilter"
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
      >
        <option value="All city">All city</option>

        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
}
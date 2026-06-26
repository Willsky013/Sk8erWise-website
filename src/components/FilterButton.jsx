import countries from "../data/countries.json";

export default function DropdownFilter({ type, setFilters }) {
  
  // Create the option list
  const getOptions = () => {
    if (type === "country") {
      return countries.map((item) => item.country);
    }

    if (type === "city") {
      return countries.flatMap((item) => item.cities);
    }

    return [];
  };

  const options = getOptions();

  const handleChange = (e) => {
    setFilters((oldFilters) => ({
      ...oldFilters,
      [type]: e.target.value,
    }));
  };

    return (
    <select className="dropdownFilter" onChange={handleChange}>
        <option value="">All {type}</option>

        {options.map((option) => (
        <option key={option} value={option}>
            {option}
        </option>
        ))}
    </select>
    );
}
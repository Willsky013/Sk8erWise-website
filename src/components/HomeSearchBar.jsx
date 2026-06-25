function HomeSearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="home-search-bar">
      <input
        type="text"
        placeholder="Search for skateparks..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default HomeSearchBar;
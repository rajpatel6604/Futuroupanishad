export default function EventFilters({ filter, setFilter, searchTerm, setSearchTerm }) {
  return (
    <div className="mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
      <div className="flex gap-2 flex-wrap">
        {["all", "featured",].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              filter === f ? "bg-primary-1 text-white" : "bg-white text-gray-600 hover:bg-orange-100"
            }`}
          >
            {f === "all" ? "All Events" : f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      <input
        type="text"
        placeholder="Search events..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-primary-1 focus:border-transparent outline-none"
      />
    </div>
  );
}

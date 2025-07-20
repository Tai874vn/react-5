export default function SearchBar({ search, setSearch }) {
  return (
    <input
  placeholder="Search"
  value={search}
  onChange={e => setSearch(e.target.value)}
  className="border border-black p-1 w-full mb-2"
/>

  );
}

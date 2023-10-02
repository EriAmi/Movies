"use client";

const SearchField: React.FC<{
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
}> = ({ setSearchInput }) => {
  return (
    <div className="my-6 w-4/6">
      <input
        onChange={(e) => setSearchInput(e.target.value)}
        type="search"
        placeholder="Search..."
        className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
      />
    </div>
  );
};

export default SearchField;

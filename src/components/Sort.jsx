import { sortOptionsConfig } from "../config/sort-options-config";

const Sort = ({ selectedSort, handleSort }) => {
  return (
    <select
      value={selectedSort}
      onChange={handleSort}
      className="border bg-gray-300 p-2 rounded-lg "
    >
      <option value="">Sort by</option>
      {sortOptionsConfig.map((item) => (
        <option key={item.id} value={item.sortBy}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

export default Sort;

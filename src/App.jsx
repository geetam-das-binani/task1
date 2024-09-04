import { useEffect } from "react";
import { useState } from "react";
import Pagination from "./components/Pagination";
import Sort from "./components/Sort";
import Table from "./components/Table";

const ITEMS_PER_PAGE = 4;
const App = () => {
  let interval;
  const [data, setData] = useState([]);
  const [dataCopy, setDataCopy] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedSort, setSelectedSort] = useState("");

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const handleFetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();

      setData(data);
      setDataCopy(data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  const handleSearch = () => {
    if (!search.trim()) return;
    setPage(1);
    const filteredData = data.filter((item) => {
      return (
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.company.name.toLowerCase().includes(search.toLowerCase()) ||
        item.address.city.toLowerCase().includes(search.toLowerCase()) ||
        item.email.toLowerCase().includes(search.toLowerCase())
      );
    });

    setData(filteredData);
  };
  const getSortedData = (sortBy) => {
    let sortedData = [];

    if (sortBy === "company" || sortBy === "city") {
      sortedData = [...data].sort((a, b) => {
        const aName = a[sortBy]?.name?.toLowerCase();
        const bName = b[sortBy]?.name?.toLowerCase();
        const aAddress = a.address[sortBy]?.toLowerCase();
        const bAddress = b.address[sortBy]?.toLowerCase();
       

        if (aName < bName || aAddress < bAddress) return -1;
        if (aName > bName || aAddress > bAddress) return 1;
        return 0;
      });

    } 
    else {
      sortedData = [...data].sort((a, b) => {
        const aValue = a[sortBy]?.toLowerCase();
        const bValue = b[sortBy]?.toLowerCase();

        if (aValue < bValue) return -1;
        if (aValue > bValue) return 1;
        return 0;
      });
    }
    setData(sortedData);
  };

  const handleSort = (e) => {
    if (!e.target.value) {
      setData(dataCopy);
      setSelectedSort("");
      setPage(1);
      return;
    }
    setPage(1);
    setSelectedSort(e.target.value);
    getSortedData(e.target.value);
  };
  useEffect(() => {
    handleFetchData();
  }, []);

  useEffect(() => {
    if (search.trim()) {
      interval = setTimeout(() => {
        handleSearch();
      }, 1000);
    } else {
      setData(dataCopy);
    }
    return () => {
      clearTimeout(interval);
    };
  }, [search]);
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div
        className="relative overflow-x-auto border p-4 gap-2  
       border-gray-400 rounded-lg w-[650px] md:w-[850px]"
      >
        <div className="flex justify-between mb-3 items-center  ">
          <Sort handleSort={handleSort} selectedSort={selectedSort} />

          <div className="flex gap-2 items-center  ">
            <input
              type="text"
              className="border border-gray-400 p-2 rounded-lg  "
              placeholder="Search by name or city "
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <Table data={data} loading={loading} page={page} />
        <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      </div>
    </div>
  );
};

export default App;

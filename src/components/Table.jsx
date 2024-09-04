
const ITEMS_PER_PAGE = 4;
const Table = ({loading,data,page}) => {
  return (
    <table className=" w-full  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50  dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          UserId
        </th>
        <th scope="col" className="px-6 py-3">
          Name
        </th>
        <th scope="col" className="px-6 py-3">
          Email
        </th>
        <th scope="col" className="px-6 py-3">
          City
        </th>
        <th scope="col" className="px-6 py-3">
          Company
        </th>
      </tr>
    </thead>
    <tbody>
      {loading && <div>Loading...</div>}
      {data.length > 0 &&
        !loading &&
        data
          .slice(
            page * ITEMS_PER_PAGE - ITEMS_PER_PAGE,
            page * ITEMS_PER_PAGE
          )
          .map((item) => {
            return (
              <tr
                key={item.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.id}
                </th>
                <td className="px-6 py-4">{item.name}</td>
                <td className="px-6 py-4">{item.email}</td>
                <td className="px-6 py-4">{item.address.city}</td>
                <td className="px-6 py-4">{item.company.name}</td>
              </tr>
            );
          })}
    </tbody>
  </table>
  )
}

export default Table

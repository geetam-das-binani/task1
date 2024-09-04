
const Pagination = ({page,setPage,totalPages}) => {
  return (
    <div className="flex justify-center gap-3 mt-3">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="p-2 disabled:opacity-50 disabled:cursor-not-allowed
          disabled:hover:text-black
          rounded-lg transition-all hover:bg-gray-600 hover:text-white  text-black bg-gray-300"
          >
            {" "}
            ⬅️Prev
          </button>
          {[...new Array(totalPages)].map((_, index) => {
            return (
              <button
                className={`${page === index + 1 && "bg-gray-600 text-white"}
                
                p-2
              
              rounded-lg transition-all hover:bg-gray-600 hover:text-white  text-black bg-gray-300`}
                key={index}
                onClick={() => setPage(index + 1)}
              >
                {index + 1}
              </button>
            );
          })}
          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
            className="p-2
           disabled:opacity-50 disabled:cursor-not-allowed
          disabled:hover:text-black
           rounded-lg transition-all hover:bg-gray-600 hover:text-white  text-black bg-gray-300"
          >
            Next ➡️
          </button>
        </div>
  )
}

export default Pagination

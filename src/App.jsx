import { useState } from "react";
import jsonData from "../MOCK_DATA.json";
import ReactPaginate from "react-paginate";

import "./App.css";

function App() {
  const [users, setUsers] = useState(jsonData.slice(0, 800));
  const [pageNumber, setPageNumber] = useState(0);

  const userPerPage = 12;
  const pagesVisited = pageNumber * userPerPage;

  const dispalyUsers = users
    .slice(pagesVisited, pagesVisited + userPerPage)
    .map((user) => {
      return (
        <div className="flex items-center justify-center">
          <div className="flex flex-col  gap-3 items-start justify-center bg-gray-300 mb-5 p-3 h-40 w-80 rounded-lg">
            <h1>
              <span className="font-bold">FirstName :</span> {user.first_name}
            </h1>
            <h1>
              <span className="font-bold">LastName :</span> {user.last_name}
            </h1>
            <h1>
              <span className="font-bold">Email: </span>
              {user.email}
            </h1>
          </div>
        </div>
      );
    });
  const pageCount = Math.ceil(users.length / userPerPage);
  const changePage = ({selected})=>{
    setPageNumber(selected);
  }
  
  return (
    <>
      <div className="flex flex-col items-center justify-center w-[100vw]">
        <div className="flex flex-wrap gap-4 items-center justify-center my-10">{dispalyUsers}</div>
        
      <div>
      <ReactPaginate
      previousLabel = {"Previous"}
      nextLabel = {"Next"}
      pageCount={pageCount}
      onPageChange={changePage}
      containerClassName="paginationBttns w-4/5 h-10 flex justify-center"
      pageLinkClassName="px-2 py-0.5 m-2 rounded-lg border-2 border-solid border-blue-500 cursor-pointer text-blue-900 hover:text-white hover:bg-blue-500"
      previousLinkClassName="px-2 py-0.5 m-2 rounded-lg border-2 border-solid border-green-500 cursor-pointer text-blue-900 hover:text-white hover:bg-green-500"
      nextLinkClassName="px-2 py-0.5 m-2 rounded-lg border-2 border-solid border-green-500 cursor-pointer text-blue-900 hover:text-white hover:bg-green-500"
      // disabledClassName="text-grey bg-grey-600"
      // activeClassName=""
      />
      </div>
      </div>
    </>
  );
}

export default App;

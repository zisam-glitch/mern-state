import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
  return (
    <header className="shadow">
      <div className="flex justify-between items-center max-w-7xl mx-auto py-5 px-10">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-2xl flex flex-wrap">
            <span className="text-darkblue">Home</span>
            <span className="text-lightblue">Sellars</span>
          </h1>
        </Link>
        {/* <form
          onSubmit={handleSubmit}
          className='bg-slate-100 p-3 rounded-lg flex items-center'
        >
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className='text-slate-600' />
          </button>
        </form> */}
        <ul className="flex gap-6">
          <Link>
            <li className="hidden sm:inline font-medium text-black decoration-lightblue decoration-2	hover:underline hover:underline-offset-4 py-3 ">
              For sale
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline font-medium text-black decoration-lightblue decoration-2	hover:underline hover:underline-offset-4 py-3 ">
              To rent
            </li>
          </Link>
          <Link to="/profile">
            <li className="hidden sm:inline font-medium text-black decoration-lightblue decoration-2	hover:underline hover:underline-offset-4 py-3">
              New homes
            </li>
          </Link>
          <Link to="/profile">
            <li className="hidden sm:inline font-medium text-black decoration-lightblue decoration-2	hover:underline hover:underline-offset-4 py-3 ">
              House prices
            </li>
          </Link>
          <Link to="/valuation">
            <li className="hidden sm:inline font-medium text-black decoration-lightblue decoration-2	hover:underline hover:underline-offset-4 py-3 ">
              Agent valuation
            </li>
          </Link>
        </ul>
        <ul className="flex gap-6">
          {/* <Link to="/">
            <li className="hidden sm:inline font-medium text-black decoration-lightblue decoration-2	hover:underline hover:underline-offset-4 py-3 ">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline font-medium text-black decoration-lightblue decoration-2	hover:underline hover:underline-offset-4 py-3">
              About
            </li>
          </Link> */}
          <Link to="/profile">
            {currentUser ? (
              <img
                className="rounded-full h-7 w-7 object-cover"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <button className="flex gap-2 items-center bg-lightblue py-2 px-6 outline outline-lightblue outline-1 rounded hover:shadow-lg hover:bg-litedarkblue">
                <span className="text-white	"> Sign in</span>
              </button>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}

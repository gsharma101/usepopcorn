const navbar = () => {
  return (
    <>
      <nav className="flex justify-center items-center -text-color-white text-xl w-[100vw]">
        <div className="flex flex-row justify-between items-center -bg--color-navbar-purple p-4 rounded-xl mt-6 w-[90vw]">
          <div className="flex flex-row justify-between items-center">
            <span className="text-2xl" role="img">
              🍿
            </span>
            <span>usepopcorn</span>
          </div>
          <div>
            <input
              className="text-xl color-white text-white p-2 w-[25vw] rounded-xl -bg--color-search-background shadow-sm cursor-pointer border-none outline-none hover:shadow-3xl transition-all "
              type="text"
              name="search"
              id="search"
              placeholder="Search movies..."
            />
          </div>
          <div>
            <span>Found result</span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default navbar;

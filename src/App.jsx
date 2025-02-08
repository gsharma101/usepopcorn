import {
  NavbarContainer,
  WatchedListContainer,
  MovieListContainer,
} from "./containers";

function App() {
  return (
    <>
      <main>
        <NavbarContainer></NavbarContainer>
      </main>
      <div className="flex justify-center items-center">
        <div className="flex flex-row justify-center items-center px-10 pt-5 w-[95vw]">
          <MovieListContainer></MovieListContainer>
          <WatchedListContainer></WatchedListContainer>
        </div>
      </div>
    </>
  );
}

export default App;

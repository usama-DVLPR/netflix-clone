import "./App.css";
import Row from "./components/Row";
import requests from "./request/requests";
function App() {
  return (
    <div className="App">
      <h1>Lets build netflix Clone</h1>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;

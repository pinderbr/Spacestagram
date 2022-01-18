
import './App.css';
import { Nasa } from "./Nasa";

function App() {

  function reload() {
    window.location.reload(false);
  }

  return (
    <div className="App">
      <button class="fixed left-5 top-5 bg-purple-500 text-white px-8 ml-5 py-2.5 rounded-lg hover:bg-purple-600 transition-all ease-out duration-500">
        <a href="https://brycepinder1989.myshopify.com/">About Bryce</a>
      </button>
      <h1 class="font-mono text-6xl text-center">Spacestagram</h1>
      <h2 class="font-mono text-xl text-center">Brought to you by Nasa's Image API</h2>
      <button class="fixed right-5 top-5 bg-purple-500 text-white px-8 ml-5 py-2.5 rounded-lg hover:bg-purple-600 transition-all ease-out duration-500"
      onClick={reload}>Reload Images</button>
      <Nasa />
    </div>
  );
}

export default App;

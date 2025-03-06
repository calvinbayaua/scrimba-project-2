import Header from "./components/Header.jsx";
import Entry from "./components/Entry.jsx";
import entryData from "./data.js";

function App() {
  const entryElement = entryData.map((entry) => {
    return <Entry key={entry.id} entry={entry} />;
  });

  return (
    <>
      <Header />
      <main className="container">{entryElement}</main>
    </>
  );
}

export default App;

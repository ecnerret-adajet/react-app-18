import ListGroup from "./components/ListGroup";

function App() {

  let items = [
    "New York",
    "San Francisco",
    "Manila",
    "Tokyo",
    "Paris",
    "London",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return <div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/></div>
}

export default App;
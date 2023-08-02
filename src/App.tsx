import ListGroup from "./components/ListGroup";

function App() {

  const items = ['New York', 'Los Angeles', "San Francisco"];


  return (
    <>
        <ListGroup heading="Miami" items={items} onSelectItem={() => console.log('selected')}/>
    </>
  );
}

export default App;
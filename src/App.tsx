import { useState } from 'react';
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {

  const [visible, setVisible] = useState(false);

  return (
    <>
    { visible && <Alert onClose={() => setVisible(false)}>This is an alert message</Alert>}
    
    <Button onClick={() => { setVisible(true) }}>
      My button
    </Button>
    </>
  );
}

export default App;
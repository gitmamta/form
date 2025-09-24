import React from 'react';
import Form from './pages/form/Form';

function App() {
  return (
    <div className="container">
      <h1>User Form</h1>
      <Form/>
    </div>
  );
}

export default App;


// npm install -g json-server
// json-server --watch db.json --port 3001

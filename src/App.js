import React from 'react';

function App() {
  return (
    <React.Fragment>
      <label htmlFor="bar">bar</label>
      <input type="text" onChange={() => {console.log("i am clicked.")}} />
    </React.Fragment>
  )
}

export default App;

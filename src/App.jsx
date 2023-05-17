import { useState } from "react";

import data from "./data";
import List from "./List";
const App = () => {
  const [people,setPeople]=useState(data)
  return <div className="app">
    <List people={people} setPeople={setPeople} />
    <button type="button" className="btn btn-block"
      onClick={()=>setPeople([])} 
    >Clear All</button>
  </div>;
};
export default App;

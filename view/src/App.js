import React from "react";

//prime imports
import 'primereact/resources/themes/saga-purple/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

//pages
import { Menu } from './pages/Menu'

function App() {
  return (
    <div className="App">
      <Menu/>
    </div>
  );
}

export default App;

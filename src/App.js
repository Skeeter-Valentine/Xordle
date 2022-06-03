import './App.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
// import {createContext, useState} from "react";
// import { boardDefault } from './components/Words';

// export const AppContext = createContext()

function App() {
  // const [board, setBoard] = useState(boardDefault)
  return (
    <div className="App">
      <nav>
      Wordle
      </nav>
      
        <Board />
        <Keyboard />
      
    </div>
  );
}

export default App;

// <AppContext.Provider value={{board, setBoard}}></AppContext.Provider>
// </AppContext.Provider>
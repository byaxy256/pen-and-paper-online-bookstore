import { useEffect } from 'react';

const API_URL = 'https://openlibrary.org/search.json'
 

const App = () => {
  
  const SearchBooks = async (title) => {
    const response = await fetch (`${API_URL}&s={title}`);
    const data = await response.json();

    console.log(data.Search);
  }
  useEffect(() => {
    SearchBooks('animal farm')
  }, []);

  return(
    <div className='app'>
      <h1> Pen And Paper</h1>
      <div className='search'>
        <input
        placeholder='search for books'
        value=''
        onChange={() => {}}
        />
        <img
        src={SearchIcon}
        alt='search'
        onClick={() => {}}
        />
      </div>
        <div className='container'>

        </div>
    </div>
  );
}
export default App;

/*
import './App.css';
import LoginForm from './components/LoginForm/LoginForm';

function App() {
  return (
    <div>
      <LoginForm/>
    </div>
  
  );
}

export default App;
*/


// import React from 'react';
// import Navbar from './components/Navbar/Navbar.jsx';


// const App = () => {
//   return (
//     <div>
//       <Navbar/>
//     </div>
//   );

// };
// export default App;


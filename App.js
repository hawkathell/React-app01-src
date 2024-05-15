// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// import './App.css';
// const App =() =>(
//   <section className="banner">
//     <h3>My First React JS App.</h3>
//   </section>
// );
// export default App;

// import Header from './Header';
// const App =() =>(
//   // <Header/>
//   <Header appName='React 2.0'/>
// );
// export default App;

import { Fragment } from 'react';
import Header from './Header';
import Contacts from './Contacts';

const App =() =>(
  <Fragment>
  <Header appName='React 2.0'/>
  <Contacts/>
  </Fragment>
);
export default App;
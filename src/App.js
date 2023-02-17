import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes';


function App() {
  return (
    <div className="App bg-gradient-to-r from-violet-800 via-purple-500 to-pink-500 ...">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;

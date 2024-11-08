import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
// This is my test change

function App() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;

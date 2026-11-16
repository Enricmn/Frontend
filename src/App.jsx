import { Outlet } from 'react-router-dom';

// de moment només deixem espai per la pàgina que toqui, més endavant hi podem posar un menú
function App() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App;
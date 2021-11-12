import { useState } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Navbar from './components/Navbar';

const App = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <div className="App">
      <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Header />
    </div>
  );
}

export default App;

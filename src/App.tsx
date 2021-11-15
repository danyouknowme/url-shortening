import { useState } from 'react';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import Link from './components/Link';
import Menu from './components/Menu';
import Navbar from './components/Navbar';

const App = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <div className="App" style={{ overflowX: 'hidden'}}>
      <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Header />
      <Content />
      <Link />
      <Footer />
    </div>
  );
}

export default App;

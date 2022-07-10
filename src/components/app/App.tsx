import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import '../../styles/index.scss';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Main from '../main/Main';
import Test from '../test/Test';

const App = () => {


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path="/test" element={<Test />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

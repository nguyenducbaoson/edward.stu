import './App.css';
import Header from './components/header/Header';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Home from './pages/Home';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className='overflow-hidden'>
      <Header />
      <Home />
      <Footer />

    </div>
  );
}

export default App;

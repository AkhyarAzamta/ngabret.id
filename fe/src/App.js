import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Layout>
        <Home/>
        <Contact/>
        <About/>
      </Layout>
    </div>
  );
}

export default App;

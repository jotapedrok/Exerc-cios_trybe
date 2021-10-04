import './App.css';
import Headers from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Headers className="title"/>
      <Content/>
      <Footer className="footer"/>
    </div>
  );
}

export default App;

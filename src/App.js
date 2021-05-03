import './App.css';
import Content from './components/Content';
import Navbar from './components/Navbar';
import useTwitchAuthentication from './hooks/useTwitchAuthentication';

function App() {
  const isAuthenticated = useTwitchAuthentication();

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="App">
      <Navbar />
      <Content />
    </div>
  );
}

export default App;

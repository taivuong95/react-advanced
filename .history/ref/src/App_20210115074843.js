import logo from './logo.svg';
import './App.css';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FowardRefParentInput from './components/FowardRefParentInput';

function App() {
  return (
    <div className="App">
      <FowardRefParentInput/>
    </div>
  );
}

export default App;

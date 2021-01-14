import logo from './logo.svg';
import './App.css';
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter';
import User from './components/User';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Counter>
        {(count, incrementCount) => (
          <ClickCounter count={count} incrementCount={incrementCount} />
        )}
      </Counter>
      <Counter>
        {(count, incrementCount) => (
          <HoverCounter count={count} incrementCount={incrementCount} />
        )}
      </Counter>
      {/* <Counter 
      render={(count, incrementCount) => (
        <ClickCounter count={count} incrementCount={incrementCount}/>
      )}
    />
    <Counter 
      render={(count, incrementCount) => (
        <HoverCounter count={count} incrementCount={incrementCount}/>
      )}
    />*/}

      {/* <ClickCounter />
      <HoverCounter />
      <User render={(isLoggedIn) => isLoggedIn ? 'Tai' : 'Guest'} />*/}
    </div>
  );
}

export default App;

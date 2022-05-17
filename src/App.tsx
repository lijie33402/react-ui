import React from 'react';
import Button from './components/Button/button';
import SimpleCountdown from './components/Countdown/simple-countdown';
import CountdownPropsUi from './components/Countdown/countdown-render-props-ui';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>sass h1</h1>
        <h2>sass h2</h2>
        <h3>sass h3</h3>
        <Button btnType='danger' size='lg'>danger</Button>
        <SimpleCountdown date={new Date('2022-05-20')} />
        <CountdownPropsUi date={new Date('2022-05-20')} />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

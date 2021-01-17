import './App.css';
import {Loader} from './components/Loader'
import { useState, useEffect } from 'react';
function App() {
  let initialLoadPercentage = 0
  const [loadPercentage, setLoadPercentage] = useState(initialLoadPercentage);
  const [isLoadingPaused, setIsLoadingPaused] = useState(false);
  useEffect(() => {
    var timer;
    if(isLoadingPaused) {
      return () => clearInterval(timer);
    }
    if(loadPercentage < 100 && !isLoadingPaused) {
      var timer = setInterval(() => {
        if(!isLoadingPaused) {
          setLoadPercentage(loadPercentage + 1);
        }
        
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [loadPercentage, isLoadingPaused]);
  const resetLoading = () => {
    setIsLoadingPaused(false);
    setLoadPercentage(0);
  }
  const pauseLoading = () => {
    setIsLoadingPaused(true);
  }
  return (
    <div className="App">
      <Loader initialLoad={loadPercentage}></Loader>
      <button onClick={resetLoading}>Reset</button> &nbsp;
      <button onClick={pauseLoading}>Pause</button>
    </div>
  );
}

export default App;

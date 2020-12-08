import Dashboard from './Dashboard'
import './App.css';
import { useNotify } from "./Nofications/NotificationProvider";

function App() {
  const { notify } = useNotify();

  console.log('notify', notify);
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;

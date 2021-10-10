import './App.css';
import UserList from './components/UserList';
import { Provider } from './store';

function App() {
  return (
    <Provider>
      <div className="mx-auto p-10">
        <UserList/>
      </div>
    </Provider>
  );
}

export default App;

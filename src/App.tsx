import "./App.css";
import UserList from "./components/UserList";
import { Provider } from "./store";

function App() {
	return (
		<Provider>
			<div className="mx-auto p-10 flex-col">
				<div>
					<button>Add new user</button>
				</div>
				<div>
					<UserList />
				</div>
			</div>
		</Provider>
	);
}

export default App;

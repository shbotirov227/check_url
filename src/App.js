import { BrowserRouter, Routes, Route } from "react-router-dom";

// import User from "./pages/User/User";

import { Home, User } from "./pages";

import "./assets/index.scss";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>

					<Route path="/" element={<Home />} />
					<Route path="/sign-in*" element={<User />} />
					<Route path="/sign-up" element={<User />} />
					{/* <Route path="users/*" element={<User />} /> */}
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

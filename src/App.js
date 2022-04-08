/** @format */

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowProducts from "./Components/ShowProducts";
import CreateProduct from "./Components/CreateProduct";
import EditProduct from "./Components/EditProduct";

const App = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<ShowProducts />} />
					<Route path="/create" element={<CreateProduct />} />
					<Route path="/edit/:id" element={<EditProduct />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

/** @format */

import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const endpoint = process.env.REACT_APP_URL;
const CreateProduct = () => {
	const [description, setDescription] = useState("");
	const [stock, setStock] = useState(0);
	const [price, setPrice] = useState(0);
	const navigate = useNavigate();

	const store = async (e) => {
		e.preventDefault();

		await axios.post(endpoint, {
			description: description,
			price: price,
			stock: stock,
		});
		navigate("/");
	};

	return (
		<div>
			<h3>Create Product</h3>

			<form onSubmit={store}>
				<div className="mb-3">
					<label className="form-label">Description</label>
					<input
						type="text"
						value={description}
						className="form-control"
						onChange={(e) => setDescription(e.target.value)}
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Price</label>
					<input
						type="text"
						value={price}
						className="form-control"
						onChange={(e) => setPrice(e.target.value)}
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Stock</label>
					<input
						type="text"
						value={stock}
						className="form-control"
						onChange={(e) => setStock(e.target.value)}
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Store
				</button>
			</form>
		</div>
	);
};

export default CreateProduct;

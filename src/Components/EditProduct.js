/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = "http://127.0.0.1:8000/api/product/";
const EditProduct = () => {
	const [description, setDescription] = useState("");
	const [stock, setStock] = useState(0);
	const [price, setPrice] = useState(0);
	const navigate = useNavigate();
	const { id } = useParams();
	const update = async (e) => {
		e.preventDefault();

		await axios.put(`${endpoint}${id}`, {
			description: description,
			price: price,
			stock: stock,
		});
		navigate("/");
	};

	useEffect((id) => {
		const getProductById = async () => {
			const response = await axios.get(`${endpoint}${id}`);
			setDescription(response.data.description);
			setDescription(response.data.price);
			setDescription(response.data.stock);
		};
		getProductById();
	}, []);
	return (
		<div>
			<h3>Edit Product</h3>

			<form onSubmit={update}>
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
					Update
				</button>
			</form>
		</div>
	);
};

export default EditProduct;

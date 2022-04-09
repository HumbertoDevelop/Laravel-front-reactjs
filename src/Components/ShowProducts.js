/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const endpoint = 'http://127.0.0.1:8000/api/'
console.log(endpoint);
const ShowProducts = () => {
	console.log(endpoint);
	const [products, setProducts] = useState([]);
	useEffect(() => {
		getAllProducts();
	}, []);

	const getAllProducts = async () => {
		const response = await axios.get(`${endpoint}products`);
		setProducts(response.data);
	};

	const deleteProduct = async (id) => {
		await axios.delete(`${endpoint}product/${id}`);
		getAllProducts();
	};

	return (
		<div>
			<div className="d-grid gap-2">
				<Link
					to="/create"
					className="btn btn-success btn-lg mt-2 mb-2 text-white">
					Create
				</Link>
			</div>

			<table className="table table-striped">
				<thead className="bg-primary text-white">
					<tr>
						<th>Description</th>
						<th>Price</th>
						<th>Stock</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{console.log(products)}
					{products?.map((p) => (
						<tr key={p.id}>
							<td>{p.description}</td>
							<td>{p.price}</td>
							<td>{p.stock}</td>
							<td>
								<Link to={`/edit/${p.id}`} className="btn btn-warning">
									Edit
								</Link>
								<button
									onClick={() => deleteProduct(p.id)}
									className="btn btn-danger">
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ShowProducts;

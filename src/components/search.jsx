import { useState } from "react";

export default function Search({ onSearch }) {
	const [query, setQuery] = useState("");

	const handleChange = (e) => {
		const value = e.target.value;
		setQuery(value);
		onSearch(value);
	};

	return (
		<div className="search">
			<input
				type="text"
				placeholder="Search products..."
				value={query}
				onChange={handleChange}
				className="search__input"
			/>
		</div>
	);
}

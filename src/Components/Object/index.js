const ObjectComponent = () => {

	const obj = {
		name: "Serhii",
		age: "37"
	}
	const text = `
	const obj = {
		name: "Serhii",
		age: "37"
	}`
	return (
		<>
			<h2>Object</h2>
			<p>{text}</p>
			<h4>{obj.name}</h4>
		</>);
}

export default ObjectComponent;
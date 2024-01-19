interface HelloWorldProps {
	greeting?: string;
	greeted?: string;
	silent?: boolean;
	onMouseOver?: () => void;
}

export default function HelloWorld({ greeted, greeting, silent, onMouseOver }: HelloWorldProps) {
	if (!greeting) {
		return null;
	}

	const num = Math.floor(Math.random() * 1e7)
		.toString()
		.replace(/.d+/gi, "");

	return (
		<div className="HelloWorld" title={`You are visitor number ${num}`} onMouseOver={onMouseOver} onFocus={onMouseOver}>
			<strong>{greeting.slice(0, 1).toUpperCase() + greeting.slice(1).toLowerCase()}</strong>

			{greeting.endsWith(",") ? " " : <span style={{ color: "grey" }}>&quot;</span>}

			<em>{greeted}</em>

			{silent ? "." : "!"}
		</div>
	);
}

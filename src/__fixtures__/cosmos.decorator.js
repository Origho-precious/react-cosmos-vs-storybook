// eslint-disable-next-line import/no-anonymous-default-export
export default ({ children }) => (
	<div
		style={{
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
      alignItems: "center",
      height: "100vh"
		}}
	>
		{children}
	</div>
);

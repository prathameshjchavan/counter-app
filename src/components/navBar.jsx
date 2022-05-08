const NavBar = ({ totalCounters }) => {
	console.log("NavBar - Rendered");

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container-fluid">
				<a className="navbar-brand" href="/">
					NavBar
					<span className="badge rounded-pill bg-secondary ms-2">
						{totalCounters}
					</span>
				</a>
			</div>
		</nav>
	);
};

export default NavBar;

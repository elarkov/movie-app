import React from "react";

import { Header } from '../../layout/header.jsx';
import { Main } from '../../layout/main.jsx';
import { Footer } from '../../layout/footer.jsx';

import './app.css';

const App = () => {

	return (
		<div>
			<Header />
			<Main/>
			<Footer/>
		</div>
	)
};

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import PageHome from './pages/pageHome';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./_index.scss"


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<PageHome />
	</React.StrictMode>
);


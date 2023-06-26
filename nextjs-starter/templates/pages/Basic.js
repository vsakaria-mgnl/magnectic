import { EditableArea, EditableComponent } from '@magnolia/react-editor';
import { useLayoutEffect, useState } from 'react';
import { HomeHeader } from './Home';
import Footer from '../components/Footer';

function Basic(props) {
	const { title, description, main } = props;

	const [header, setHeader] = useState();

	useLayoutEffect(() => {
		setHeader(JSON.parse(sessionStorage.getItem('header')));
	}, []);

	return (
		<div className="Basic">
			<div className="text-center">
				{title && <div className="page-title">{title}</div>}
				{description && <div className="text">{description}</div>}
			</div>

			<HomeHeader />
			{main && <EditableArea content={main} />}
			<Footer />
		</div>
	);
}

export default Basic;

import { useState } from 'react';
import { css } from '@emotion/react';
import FadeLoader from 'react-spinners/FadeLoader';

const override = css`
	display: block;
	margin: 300px auto;
`;

const Loader = () => {
	let [loading, setLoading] = useState(true);

	return (
		<div className="sweet-loading">
			<FadeLoader color="#D0021B" loading={loading} css={override} size={350} />
		</div>
	);
};

export default Loader;

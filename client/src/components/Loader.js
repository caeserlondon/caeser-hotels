import { css } from '@emotion/react';
import FadeLoader from 'react-spinners/FadeLoader';

const override = css`
	display: block;
	margin: 350px auto;
`;

const Loader = () => {
	return (
		<div className="sweet-loading">
			<FadeLoader color="#D0021B" loading={true} css={override} size={350} />
		</div>
	);
};

export default Loader;

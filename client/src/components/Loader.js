// https://www.npmjs.com/package/react-spinners

import { css } from '@emotion/react'
import CircleLoader from 'react-spinners/CircleLoader'

const override = css`
	display: block;
	margin: 350px auto;
`

const Loader = () => {
	return (
		<div className='sweet-loading'>
			<CircleLoader color='#a49366' loading={true} css={override} size={200} />
		</div>
	)
}

export default Loader

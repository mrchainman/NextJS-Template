const mq = [`@media (min-width: 1px)`, `@media (min-width: 50px)`, `@media (min-width: 700px)`];

const light = {
	colors: {
		c_gray1: '#525564',
		c_gray2: '#74828F',
		c_gray3: '#BEB9B5',
		c_blue: '#96C0CE',

		c_red: '#C25B56',
		c_ping: '#FEF6EB',
	},
};

const dark = {
	colors: {
		c_gray1: '#525564',
		c_gray2: '#74828F',
		c_gray3: '#BEB9B5',
		c_blue: '#96C0CE',

		c_red: '#C25B56',
		c_ping: '#FEF6EB',
	},
};

const defaults = {
	breakpoints: [
		'50px', '700px'
	],



	fontSizes: {
		small: '10px',
		normal: '30px',
		big: '60px',
	},





	variants: {
		head: {
			borderWidth: '5px',
			borderStyle: 'solid',
			padding: '10px',
			borderRadius: '15px',
			width: '100%',
			marginBottom: '20px',
			textAlign: 'center',
			'&:hover': {
				opacity: '0.5'
			},
		},

		block: {
			borderWidth: '5px',
			borderStyle: 'solid',
			padding: '10px',

			marginTop: '20px',
			borderRadius: '15px',
			'&:hover': {
				opacity: '0.5'
			},

			[mq[1]]: {
				width: '100%',
			},
			[mq[2]]: {
				width: '45%',
				ml: '2.5%',
				mr: '2.5%'
			},
		},

		pic: {
			[mq[1]]: {
				width: '95%',
				mx: '2.5%',
				my: '2.5%',
			},
			[mq[2]]: {
				width: '45%',
				mx: '2.5%',

			},
		},
	},
};



export const darkTheme = { ...defaults, ...dark }
export const lightTheme = { ...defaults, ...light }

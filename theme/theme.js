const mq = [`@media (min-width: 0px)`, `@media (min-width: 900px)`, `@media (min-width: 1200px)`]
export default {
	breakpoints: [
		'900px', '1200px'
	],


	colors:{
	   c_gray1: '#525564',
	   c_gray2: '#74828F',
	   c_gray3: '#BEB9B5',
	   c_blue: '#96C0CE',

	   c_red: '#C25B56',
	   c_ping: '#FEF6EB',
	},

	fontSizes: {
		small: '10px',
		normal: '30px',
		big: '60px',
	},





	variants: {

		v1: {
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

		v2: {
			borderWidth: '5px',
			borderStyle: 'solid',
			padding: '10px',

			mt: '20px',
			borderRadius: '15px',
			'&:hover': {
				opacity: '0.5'
			},

			[mq[0]]: {
				width: '100%',
				mx: '40px',
			},

			[mq[1]]: {
				width: '100%',
				mx: '40px',
			},
			[mq[2]]: {
				width: '45%',
				ml: '2.5%',
				mr: '2.5%'
			},



		},





	},

}

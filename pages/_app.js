import { ThemeProvider } from 'emotion-theming'
import theme from '../theme/theme.js'
import { Global, css } from '@emotion/core'


const GlobalStyles = () => (
    <>
        <Global styles={css`
            html {
                line-height: 1.15; /* 1 */
                -ms-text-size-adjust: 100%; /* 2 */
                -webkit-text-size-adjust: 100%; /* 2 */
                margin: 0;
				width: 100%;
				height: 100%;
            }
            body {
                margin: 0;
				width: 100%;
				height: 100%;
				background: #09090A;

            }

            img {
				align: center;
				max-width: 100%;
			}

            .slideshow {

				display: block;
				position: absolute;
				top: 25%;
				left: 0;
				width: 100%;
				height: 70%;
				object-fit: cover;
				z-index: 0;
				filter: grayscale(0%) opacity(100%);
				--organic-arrow-thickness: ;
				--organic-arrow-height: ;
				--slider-height-percentage: ;
				--loader-bar-color: ;
				--loader-bar-height: ;
				--control-button-width: ;
				--control-button-height: ;
				--control-button-opacity: ;
				--control-button-hover-opacity: ;
				--control-button-background: ;
				--transition-bezier: ;
				--slider-transition-duration: ;
				--organic-arrow-color: ;
				--organic-arrow-border-radius: ;
				--control-bullet-color: ;
				--control-bullet-active-color: ;
				--content-background-color: #1a1919;

			}





        `}/>
    </>
)





function MyApp({ Component, pageProps}) {




	return (
        <>
            <ThemeProvider theme={theme}>
				<GlobalStyles/>
				< Component {...pageProps} />
            </ThemeProvider>
        </>
    )

};



export default MyApp


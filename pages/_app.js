// 	Components
//import Header from 'components/Header'
//import Navbar from 'components/Navbar'

// 	Reflexbox
//import { Flex, Box } from 'reflexbox'

// 	Themes
// import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'emotion-theming'
// import styled from '@emotion/styled'
// import {lightTheme, darkTheme } from 'theme/theme.js'
// import useDarkMode from 'use-dark-mode'

// 	Slidershow
// import 'react-awesome-slider/dist/styles.css'
// import 'react-awesome-slider/dist/custom-animations/cube-animation.css'
// import 'react-awesome-slider/dist/custom-animations/fall-animation.css'
// import 'react-awesome-slider/dist/custom-animations/fold-out-animation.css'
// import 'react-awesome-slider/dist/custom-animations/open-animation.css'
// import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css'

// 	Menu
// import { slide as Menu } from "react-burger-menu";


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

	// For use with dark mode theme

	// const [isMounted, setIsMounted] = useState(true)
	// const darkMode = useDarkMode(true)
	// const theme = darkMode.value ? darkTheme : lightTheme
	// useEffect(() => {
	// 	setIsMounted(true)
	// }, [])
	// Add these Buttons somewhere
	// <Button onClick={darkMode.enable}>DARK</Button>
	// <Button onClick={darkMode.disable}>LIGHT</Button>



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


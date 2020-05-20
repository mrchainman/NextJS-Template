import styled from '@emotion/styled'
import { Flex, Box } from 'reflexbox'




const Header = () => {

    return (
		<Top>
		</Top>
    )
}



export default Header



const Top = styled.div`
font-size: ${props => props.theme.fontSizes.huge};
background-color: ${props => props.theme.colors.bg};
color: ${props => props.theme.colors.text};
border-width: ${props => props.theme.borderWidths.thick};
border-style: ${props => props.theme.borderStyles.nice};
border-color: ${props => props.theme.colors.borderColor};
text-align: center;
width: 100%;

`

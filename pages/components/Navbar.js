import { Flex, Box } from 'reflexbox'
import { slide as Menu } from "react-burger-menu";




const Navbar = () => {


	return (
		<Nav>
		<Menu width={ '320px' } noOverlay>
		<Link href="/index" ><Button>HOME</Button></Link>
		<Link href="/gallery" ><Button>Gallery</Button></Link>
		<Link href="/blogs" ><Button>Blogs</Button></Link>
		</Menu>
		</Nav>

	)
}



const Nav = styled.div`
	.bm-burger-button {
	  position: fixed;
	  width: 36px;
	  height: 30px;
	  left: 36px;
	  top: 36px;
	}


	.bm-burger-bars {
	  background: ${props => props.theme.colors.text};
	}


	.bm-cross-button {
	  height: 24px;
	  width: 24px;
	}


	.bm-cross {
	  background: ${props => props.theme.colors.text};
	}


	.bm-menu {
	  background: #000000;
	  opacity: 0.8;
	  padding: ${props => props.theme.space.pmenu};
	  top: 0;

	}


`
export default Navbar

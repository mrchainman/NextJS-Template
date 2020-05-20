import {
  Box,
  Card,
  Image,
  Heading,
  Text,
  Flex,
  Link
} from 'rebass'



export default function Home() {
  return (
	  <>
	  </>
  )
}

export async function getServerSideProps () {
	const {API_URL} = process.env
	const res = await fetch(`${API_URL}/<++>`)
	const data = await res.json()

	return {
		props: {
			<++>: data
		}

	}
};

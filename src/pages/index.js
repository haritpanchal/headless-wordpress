import * as React from "react";
import { useStaticQuery, graphql, Link} from 'gatsby';
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
} from '@chakra-ui/react';

const HomePage = () => {

  const data = useStaticQuery(graphql`
    query MyQuery {
      allWpPost {
        nodes {
          id
          title
          excerpt
          uri
        }
      }
    }
  `);

  const { allWpPost } = data;

  return (
    <>
      <Container maxW={'xl'} centerContent>
          <Heading
            as={'h1'}
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            WordPress - Gatsby
          </Heading>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
          padding={'0 20%'}
          >
            { allWpPost.nodes.map( ({id, title, excerpt, uri}) => ( 
              <Box key={id} p={5} shadow={'md'} borderWidth={'1px'}>
                  <Heading as={'h2'}>{title}</Heading>
                    <span dangerouslySetInnerHTML={{__html: excerpt}} />
                    <Link to={uri} rel="next">Read More</Link>
              </Box>
            ))}
        </Stack>
      </Container>
    </>
  );
}
export default HomePage
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

const wpPost = ({data}) => {
    const { wpPost } = data;
    return(
        <Container centerContent>
            <Stack padding={'0 20%'}>
                <Heading as={"h1"}>
                    {wpPost.title}
                </Heading>
                    <div dangerouslySetInnerHTML={{__html: wpPost.content}} />
                <Link to="/">Back to Blog</Link>
            </Stack>
        </Container>
    )
}

export default wpPost;

export const query = graphql`
    query SinglePost($id: String = "") {
        wpPost(id: {eq: $id}) {
        __typename
        id
        uri
        title
        content
        date
        }
    }
`;
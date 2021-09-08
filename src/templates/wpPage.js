import * as React from "react";
import { graphql, Link} from 'gatsby';
import {
  Heading,
  Container,
  Stack,
} from '@chakra-ui/react';

const wpPage = ({data}) => {
    console.log(data);
    const { wpPage } = data;
    return(
        <Container >
            <Stack padding={'0 20%'}>
                <Heading as={"h1"}>
                    {wpPage.title}
                </Heading>
                <div dangerouslySetInnerHTML={{__html: wpPage.content}} />
                <Link to="/">Back to Home</Link>
            </Stack>
        </Container>
    )
}

export default wpPage;

export const query = graphql`
    query SinglePage($id: String = "") {
        wpPage(id: {eq: $id}) {
        __typename
        id
        slug
        uri
        status
        title
        content
        date
        }
    }
`;
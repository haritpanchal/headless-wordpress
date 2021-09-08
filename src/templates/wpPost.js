import * as React from "react";
import { graphql, Link} from 'gatsby';
import {
  Heading,
  Container,
  Stack,
} from '@chakra-ui/react';
import Header from "../components/Header/header";

const wpPost = ({data}) => {
    const { wpPost } = data;
    return(
        <Container padding={'0 20%'}>
            <Header/>
            <div>
                <Heading as={"h1"}>
                    {wpPost.title}
                </Heading>
                <div dangerouslySetInnerHTML={{__html: wpPost.content}} />
                <Link to="/">Back to Blog</Link>
            </div>
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
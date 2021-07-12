exports.createPages = async ({actions, graphql, reporter}) => {
    const result = await graphql(`
        query MyQuery {
            allWpPost {
            nodes {
                __typename
                id
                databaseId
                uri
                }
            }
        }
    `);

    if(result?.errors){
        reporter.error("There was error fetching posts", result.errors)
    }

    const { allWpPost } = result?.data;
 
    let temp = require.resolve( './src/templates/wpPost.js' );

    allWpPost.nodes.map( post => {
        actions.createPage( {
            path : post.uri,
            component: temp,
            context : post,
        })
    })
}


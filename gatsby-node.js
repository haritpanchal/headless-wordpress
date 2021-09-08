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

    const pagesResult = await graphql(`
        query MyPageQuery {
            allWpPage {
            nodes {
                __typename
                id
                databaseId
                uri
                title
            }
            }
        }
    `);

    if(result?.errors){
        reporter.error("There was error fetching posts", result.errors)
    }

    if(pagesResult?.errors){
        reporter.error("There was error fetching page data", pagesResult.errors)
    }

    const { allWpPost } = result?.data;
    const { allWpPage } = pagesResult?.data;
 
    let temp = require.resolve( './src/templates/wpPost.js' );
    let pageTemp = require.resolve( './src/templates/wpPage.js' );

    allWpPost.nodes.map( post => {
        console.log(post);
        actions.createPage( {
            path : post.uri,
            component: temp,
            context : post,
        })
    })

    allWpPage.nodes.map( page => {
        actions.createPage( {
            path : page.uri,
            component: pageTemp,
            context : page,
        })
    })
}


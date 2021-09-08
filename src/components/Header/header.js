import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import * as containerStyles from './header.module.css'

const Header = () => {

    const topMenu = useStaticQuery(graphql`    
        query MyMenuQuery {
            allWpMenu(filter: {locations: {in: PRIMARY}}) {
                nodes {
                    menuItems {
                        nodes {
                            url
                            target
                            path
                            parentId
                            parentDatabaseId
                            order
                            locations
                            id
                            label
                        }
                    }
                }
            }
            allSite {
                nodes {
                  siteMetadata {
                    title
                  }
                }
              }
        }`)
        
        const { allWpMenu, allSite } = topMenu
        console.log(allSite);
        const menuArray = allWpMenu.nodes[0].menuItems.nodes;
    return (
        <>  
            <div className= {containerStyles.nav}>
                <a href="/"><h2 className= {containerStyles.siteName}>{allSite.nodes[0].siteMetadata.title}</h2></a>
                <div className= {containerStyles.menuNav} >
                    <ul className= {containerStyles.menuInLine}>
                        {
                            menuArray.map( (menuItem) => (
                                <a className= {containerStyles.menu_link} href={menuItem.url}>
                                    <li>{menuItem.label}</li>
                                </a>
                                ) )
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header;
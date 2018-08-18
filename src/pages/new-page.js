import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

class NewPage extends React.Component {
  render() {
    const siteTitle = 'Johnny Packard'
    const siteDescription = 'A personal website for Johnny Packard'

    return (
      <div>
        <Helmet>
            <title>{siteTitle}</title>
            <meta name="description" content={siteDescription} />
        </Helmet>

        <h1>This is a new page</h1>

      </div>
    )
  }
}

export default NewPage

export const pageQuery = graphql`
  query NewPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  // if (isRootPath) {
    header = (
      <div className="header">
          <Link to="/" className="logo">
            <StaticImage
              layout="fixed"
              src="../images/logo.svg"
              width={42}
              height={29}
              alt="Profile picture"
            />
            {/* <embed src="..//test.svg" style="display:block;width:330px;height:240px" /> */}
          </Link>
          <Link to="/">首页</Link>
          <Link to="/">分类</Link>
      </div>
    )
  // } else {
  //   header = (
  //     <Link className="header-link-home" to="/">
  //       {title}
  //     </Link>
  //   )
  // }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        Copyright © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout

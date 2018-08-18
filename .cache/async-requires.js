// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-post-js": require("gatsby-module-loader?name=component---src-templates-blog-post-js!/Users/johnnypackard/Portfolio/johnnypackard.github.io/src/templates/blog-post.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/Users/johnnypackard/Portfolio/johnnypackard.github.io/src/pages/index.js"),
  "component---src-pages-new-page-js": require("gatsby-module-loader?name=component---src-pages-new-page-js!/Users/johnnypackard/Portfolio/johnnypackard.github.io/src/pages/new-page.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/Users/johnnypackard/Portfolio/johnnypackard.github.io/.cache/json/layout-index.json"),
  "hello-world.json": require("gatsby-module-loader?name=path---hello-world!/Users/johnnypackard/Portfolio/johnnypackard.github.io/.cache/json/hello-world.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Users/johnnypackard/Portfolio/johnnypackard.github.io/.cache/json/index.json"),
  "new-page.json": require("gatsby-module-loader?name=path---new-page!/Users/johnnypackard/Portfolio/johnnypackard.github.io/.cache/json/new-page.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/Users/johnnypackard/Portfolio/johnnypackard.github.io/.cache/layouts/index.js")
}
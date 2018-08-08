// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-post-js": require("gatsby-module-loader?name=component---src-templates-blog-post-js!/Users/johnnypackard/Portfolio/johnnypackard.github.io/src/templates/blog-post.js"),
  "component---cache-dev-404-page-js": require("gatsby-module-loader?name=component---cache-dev-404-page-js!/Users/johnnypackard/Portfolio/johnnypackard.github.io/.cache/dev-404-page.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/Users/johnnypackard/Portfolio/johnnypackard.github.io/src/pages/index.js"),
  "component---src-pages-new-page-js": require("gatsby-module-loader?name=component---src-pages-new-page-js!/Users/johnnypackard/Portfolio/johnnypackard.github.io/src/pages/new-page.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/Users/johnnypackard/Portfolio/johnnypackard.github.io/.cache/json/layout-index.json"),
  "hello-world.json": require("gatsby-module-loader?name=path---hello-world!/Users/johnnypackard/Portfolio/johnnypackard.github.io/.cache/json/hello-world.json"),
  "my-second-post.json": require("gatsby-module-loader?name=path---my-second-post!/Users/johnnypackard/Portfolio/johnnypackard.github.io/.cache/json/my-second-post.json"),
  "hi-folks.json": require("gatsby-module-loader?name=path---hi-folks!/Users/johnnypackard/Portfolio/johnnypackard.github.io/.cache/json/hi-folks.json"),
  "dev-404-page.json": require("gatsby-module-loader?name=path---dev-404-page!/Users/johnnypackard/Portfolio/johnnypackard.github.io/.cache/json/dev-404-page.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Users/johnnypackard/Portfolio/johnnypackard.github.io/.cache/json/index.json"),
  "new-page.json": require("gatsby-module-loader?name=path---new-page!/Users/johnnypackard/Portfolio/johnnypackard.github.io/.cache/json/new-page.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/Users/johnnypackard/Portfolio/johnnypackard.github.io/.cache/layouts/index.js")
}
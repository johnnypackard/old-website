// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/johnnypackard/Portfolio/johnnypackard.github.io/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("/Users/johnnypackard/Portfolio/johnnypackard.github.io/src/templates/blog-post.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/johnnypackard/Portfolio/johnnypackard.github.io/.cache/dev-404-page.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/johnnypackard/Portfolio/johnnypackard.github.io/src/pages/index.js")),
  "component---src-pages-new-page-js": preferDefault(require("/Users/johnnypackard/Portfolio/johnnypackard.github.io/src/pages/new-page.js"))
}

exports.json = {
  "layout-index.json": require("/Users/johnnypackard/Portfolio/johnnypackard.github.io/.cache/json/layout-index.json"),
  "hello-world.json": require("/Users/johnnypackard/Portfolio/johnnypackard.github.io/.cache/json/hello-world.json"),
  "my-second-post.json": require("/Users/johnnypackard/Portfolio/johnnypackard.github.io/.cache/json/my-second-post.json"),
  "hi-folks.json": require("/Users/johnnypackard/Portfolio/johnnypackard.github.io/.cache/json/hi-folks.json"),
  "dev-404-page.json": require("/Users/johnnypackard/Portfolio/johnnypackard.github.io/.cache/json/dev-404-page.json"),
  "index.json": require("/Users/johnnypackard/Portfolio/johnnypackard.github.io/.cache/json/index.json"),
  "new-page.json": require("/Users/johnnypackard/Portfolio/johnnypackard.github.io/.cache/json/new-page.json")
}
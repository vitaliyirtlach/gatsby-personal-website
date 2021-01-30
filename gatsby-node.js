exports.onCreatePage = async ({ page, actions, graphql }) => {
  const { createPage } = actions
  if (page.path.match(/^\/app/)) {
      page.matchPath = "/app/*"
      createPage(page)
  }
} 
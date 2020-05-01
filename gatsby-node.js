const { fetchCategories, fetchArticlesByCategory, fetchArticleById } = require('./stitch-server');

exports.createPages = async ({ actions: { createPage } }) => {
    const categories = await fetchCategories();

    // createPage({
    //     path: `/categories`,
    //     component: require.resolve('./src/templates/Articles/Categories'),
    //     context: { categories }
    // });

    for (const category of Object.values(categories)) {
        const articles = await fetchArticlesByCategory(category._id);

        // createPage({
        //     path: `/categories/${category.name}`,
        //     component: require.resolve('./src/templates/Articles/Articles'),
        //     context: { articles }
        // });

        for (const article of Object.values(articles)) {
            const articleFull = await fetchArticleById(article._id);
            createPage({
                path: `/${article._id}`,
                component: require.resolve('./src/templates/Articles/Article'),
                context: { article: articleFull }
            });
        }
    }
};
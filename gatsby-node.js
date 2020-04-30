import { fetchCategories, fetchArticlesByCategory, fetchArticleById } from './src/util';

exports.createPages = async ({ actions: { createPage } }) => {
    const categories = await fetchCategories();

    createPage({
        path: `/categories`,
        component: require.resolve('./src/templates/Articles/Categories'),
        context: { categories }
    });

    for (const category of categories) {
        const articles = await fetchArticlesByCategory(category._id);

        createPage({
            path: `/categories/${category.name}`,
            component: require.resolve('./src/templates/Articles/Articles'),
            context: { articles }
        });

        for (const article of articles) {
            const articleFull = await fetchArticleById(article._id);
            createPage({
                path: `/categories/${category.name}/${article.name}`,
                component: require.resolve('./src/templates/Articles/Article'),
                context: { article: articleFull }
            });
        }
    }
};
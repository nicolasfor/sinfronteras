const {
    Stitch,
    BSON,
    AnonymousCredential,
    RemoteMongoClient
} = require('mongodb-stitch-server-sdk');

const client = Stitch.initializeDefaultAppClient('asf-ewvhw');

const db = client.getServiceClient(RemoteMongoClient.factory, 'asf-service').db('asf');


const loginStitch = async () => {
    await client.auth.loginWithCredential(new AnonymousCredential());
}

const fetchArticleById = async (id) => {
    await loginStitch();
    const doc = await client.callFunction('getArticleById', [id]);
    return doc ? { ...doc, _id: String(doc._id) } : null;
};

const fetchMostVisited = async () => {
    await loginStitch();
    const docs = await client.callFunction('getMostVisited');
    return docs.map(doc => ({ ...doc, _id: String(doc._id) }));
};

const fetchMostRecent = async () => {
    await loginStitch();
    const docs = await client.callFunction('getMostRecent');
    return docs.map(doc => ({ ...doc, _id: String(doc._id) }));
};

const fetchArticlesByString = async (str) => {
    await loginStitch();
    const docs = await db.collection('articles')
        .find(
            {
                $or: [
                    { "title": new RegExp(str, "i") },
                    { "content": new RegExp(str, "i") },
                ]
            },
            {
                projection: {
                    title: 1,
                    subtitle: 1
                },
                sort: {
                    views: -1
                },
                limit: 20
            })
        .asArray();
    const obj = {}
    docs.forEach((doc) => {
        obj[doc._id] = { ...doc, _id: String(doc._id) }
    })
    return obj;
};

const fetchArticlesByCategory = async (categoryId) => {

    await loginStitch();
    const docs = await db.collection('articles').find(
        {
            categories: {
                $elemMatch: {
                    $eq: new BSON.ObjectId(categoryId)
                }
            }
        },
        {
            projection: {
                title: 1,
                subtitle: 1
            },
            sort: {
                views: -1
            },
        })
        .asArray();
    const obj = {}
    docs.forEach((doc) => {
        obj[doc._id] = { ...doc, _id: String(doc._id) }
    })
    return obj;

};

const fetchCategories = async () => {
    await loginStitch();
    const docs = await db.collection('categories').find({}, { limit: 100 }).asArray();
    const obj = {}
    docs.forEach((doc) => {
        obj[doc._id] = { ...doc, _id: String(doc._id) }
    })
    return obj;

};

module.exports = {
    fetchArticleById,
    fetchMostVisited,
    fetchMostRecent,
    fetchArticlesByString,
    fetchArticlesByCategory,
    fetchCategories
}
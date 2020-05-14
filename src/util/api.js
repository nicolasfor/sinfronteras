
/**
 * Función para invocar una petición post
 *
 * @param {String} url endpoint del servicio
 * @param {Object} data datos que se envian en el post
 */
export const post = (url, data) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json());
};


const api = () => {
    let client, RemoteMongoClient, Stitch, db, AnonymousCredential, BSON;

    return () => {

        if (!client) {
            const sdk = require("mongodb-stitch-browser-sdk");

            Stitch = sdk.Stitch;
            RemoteMongoClient = sdk.RemoteMongoClient;
            AnonymousCredential = sdk.AnonymousCredential;
            BSON = sdk.BSON;
            client = Stitch.initializeDefaultAppClient('asf-ewvhw');

            db = client.getServiceClient(RemoteMongoClient.factory, 'asf-service').db('asf');

        }

        const loginStitch = async () => {
            await client.auth.loginWithCredential(new AnonymousCredential());
        }

        const fetchArticleById = async (id) => {
            await loginStitch();
            const doc = await client.callFunction('getArticleById', [id]);
            return doc ? { ...doc, _id: String(doc._id) } : null;
        };

        const updateViewsById = async (id) => {
            await loginStitch();
            await client.callFunction('updateViewsById', [id]);
        };

        const fetchMostVisited = async () => {
            await loginStitch();
            //const docs = await client.callFunction('getMostVisited');
            const docs = await post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/asf-ewvhw/service/Queries/incoming_webhook/mostVisited')
            return docs.map(doc => ({ ...doc, _id: String(doc._id.$oid) }));
        };

        const fetchMostRecent = async () => {
            await loginStitch();
            //const docs = await client.callFunction('getMostRecent');
            const docs = await post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/asf-ewvhw/service/Queries/incoming_webhook/mostRecent')
            return docs.map(doc => ({ ...doc, _id: String(doc._id.$oid) }));
        };

        const fetchArticlesByString = async (text) => {
            await loginStitch();
            const docs = await post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/asf-ewvhw/service/Queries/incoming_webhook/fetchArticlesByString', { text })
            const obj = {};
            docs.forEach((doc) => {
                obj[String(doc._id.$oid)] = { ...doc, _id: String(doc._id.$oid) }
            })
            return obj;
        };

        const fetchArticlesByCategory = async (categoryId, categoryName) => {

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
                obj[doc._id] = { ...doc, _id: String(doc._id), category: categoryName }
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

        return {
            fetchArticleById,
            fetchMostVisited,
            fetchMostRecent,
            fetchArticlesByString,
            fetchArticlesByCategory,
            fetchCategories,
            updateViewsById
        }
    }
}

export default api();
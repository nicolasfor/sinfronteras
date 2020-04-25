import React, { useEffect, useState } from 'react';
import {
    Stitch,
    AnonymousCredential,
    RemoteMongoClient
} from "mongodb-stitch-browser-sdk";
import List from './List';
import Content from './Content';

const client = Stitch.initializeDefaultAppClient('asf-ewvhw');

const db = client.getServiceClient(RemoteMongoClient.factory, 'asf-service').db('asf');

const Articles = () => {

    const [articles, setArticles] = useState({});
    const [currentArticle, setCurrentArticle] = useState([]);
    useEffect(() => {
        client.auth.loginWithCredential(new AnonymousCredential())
            .then(() =>
                db.collection('articles').find({}, { limit: 100 }).asArray()
            ).then(docs => {
                const obj = {}
                docs.forEach((doc, index) => {
                    if (index === 0) {
                        setCurrentArticle(doc)
                    }
                    obj[doc._id] = doc
                })
                setArticles(obj);
            }).catch(err => {
                console.error(err)
            });
    }, [])

    const onSelect = (id) => {
        setCurrentArticle(articles[id]);
    }

    return (
        <>
            <div className="black-section" />
            <section className="articles-container row">
                <div class="col-sm-12 col-md-4">
                    <List
                        onSelect={onSelect}
                        articles={articles}
                        selected={currentArticle && currentArticle._id} />
                </div>
                <div class="col-sm-12 col-md-8">
                    <Content article={currentArticle} />
                </div>
            </section>
        </>
    )

}

export default Articles
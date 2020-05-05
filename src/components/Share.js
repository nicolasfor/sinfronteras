import React from 'react';
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    FacebookIcon,
    WhatsappIcon,
    TwitterIcon,
    LinkedinIcon
} from 'react-share';

const Share = ({ url, title, twitterHandle, tags }) => {
    return (
        <div className="mt-4">
            <h6>Comparte:</h6>
            <div className="post-social">
                <FacebookShareButton url={url} className="button is-outlined is-rounded facebook" >
                    <FacebookIcon size={32} round />
                </FacebookShareButton>
                <WhatsappShareButton url={url} className="button is-outlined is-rounded whatsapp" title={title} >
                    <WhatsappIcon size={32} round />
                </WhatsappShareButton>
                <TwitterShareButton url={url} className="button is-outlined is-rounded twitter" title={title} via={twitterHandle.split('@').join('')} hashtags={tags} >
                    <TwitterIcon size={32} round />
                </TwitterShareButton>
                <LinkedinShareButton url={url} className="button is-outlined is-rounded linkedin" title={title} >
                    <LinkedinIcon size={32} round />
                </LinkedinShareButton>
            </div>
        </div>
    )
};

export default Share;
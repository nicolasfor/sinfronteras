import React from 'react';

const Ads = () => {

    const script = '<div id="336104938"> <script type="text/javascript"> try { window._mNHandle.queue.push(function (){ window._mNDetails.loadTag("336104938", "728x90", "336104938"); }); } catch (error) {} </script> </div>'
    return (
        <div className='advertisement' dangerouslySetInnerHTML={{ __html: script }}/>
    )
};

export default Ads;

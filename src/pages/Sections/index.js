import React from 'react';
import Header from './Header'
import Intro from './Intro'
import SectionWeDo from './SectionWeDo'
import SectionArticles from './SectionArticles'
import SectionTeam from './SectionTeam'
import SectionContact from './SectionContact'
import Ads from '../../components/Ads';

const Sections = () => {
    return (
        <>
            <Header />
            <Ads />
            <SectionArticles />
            <Intro />
            <Ads />
            <SectionWeDo />
            <Ads />
            <SectionTeam />
            <Ads />
            <SectionContact />
            <Ads />
        </>
    )
};

export default Sections;
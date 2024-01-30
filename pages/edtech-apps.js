import React, { useState, useEffect } from "react"
import Head from "next/head"
import Link from "next/link"
import axios from 'axios';
import EdtechAppsList from "../components/edtech/updated/EdtechappData"
import EdTechIntroData from "../components/edtech/updated/EdtechIntroData"
import EdTechRecentBlogs from "../components/edtech/updated/EdtechRecentBlogs"
import EdTechSidebarCatApplist from "../components/edtech/updated/EdtechSidebarCatApplist"
import Video from "../components/edtech/video"
import LowerComp from "../components/edtech/lowerSec"
import EdtechSkillwiseFilter from "../components/edtech/updated/EdtechSkillwiseFilter";
import ContactFormFeature from '../components/ContactFormFeature';

export default function EdTechApps() {

    function clickfunction() {
        document.getElementById("scrollbarsection").scrollIntoView({ behavior: 'smooth' });
        document.querySelector('.skillsearch-wrapper').classList.remove('skillsearch-wrapper-active')
    };

    // Skill-wise search
    const ageoptions = [
        // {value: '', text: '--Age--'},
        { value: 'Secondary Age (12-18 years)', text: 'Secondary Age (12-18 years)' },
        { value: 'Primary Age (5-11 Years)', text: 'Primary Age (5-11 Years)' },
        { value: 'Kindergarten (3-5 Years)', text: 'Kindergarten (3-5 Years)' },
        { value: 'College students', text: 'College students' },
        { value: 'Infants (0-3 years)', text: 'Infants (0-3 years)' },
    ];

    const skilloptions = [
        // {value: '', text: '--Skill--'},
        { value: 'communication_skills', text: 'Communication' },
        { value: 'cognitive_development', text: 'Cognitive Development' },
        { value: 'thinking_reasoning', text: 'Thinking & Reasoning' },
        { value: 'creative_development', text: 'Creative Development' },
        { value: 'tech_skills', text: 'Tech Skills' },
        { value: 'critical_thinking', text: 'Critical Thinking' },
    ];

    const [ageselected, agesetSelected] = useState(ageoptions[0].value);
    const [skillselected, skillsetSelected] = useState(skilloptions[0].value);

    function skillfilterfunction(e) {
        e.preventDefault();
        document.getElementById("scrollbarsection").scrollIntoView({ behavior: 'smooth' });
        document.querySelector('.skillsearch-wrapper').classList.add('skillsearch-wrapper-active')
        console.log(`${ageselected} & ${skillselected}`);
       
        axios.get(`https://admin.educationalmobileapps.com/edtechsearch?Age=${ageselected}&Skill=${skillselected}`)
        .then(response => {
            setPosts(response.data);
            console.log("api response",response)
            setLoading(false);
        });
     
    }
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    return (
        <>
            <Head>
                <title>Best Edtech Apps (Educational Technology Applications)</title>
                <meta name='description' content='Check out our  edtech app directory to explore and choose best ed tech apps that make learning a new subject or upgrading skills easy and efficient!' />
            </Head>

            {/* mainEdtechRow BANNER */}
            <div className="row mainEdtechRow">
                <div className="edtech-banner-section" id="edtechbanner-section">
                    <div className="edtech-banner-section-layers"></div>
                    <div className="edtech-banner-section-layers2"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 my-5">
                                <h1 className="mainTe">Find the Ed Tech App <br />You need from the 1000+ listed apps</h1>
                                <div className="edtech-search-bar">
                                    <div className="edtech-search-dropdown-wrapper">
                                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link active" id="cat1-tab" data-bs-toggle="tab" data-bs-target="#cat1-tab-pane" type="button" role="tab" aria-controls="cat1-tab-pane" aria-selected="true" onClick={clickfunction}>
                                                    <a href="#edtechhome-maincontent">
                                                        <span>
                                                            <img src="/images/edtech-icon1.svg" alt="educationalmobileapps.com EdTech" />
                                                        </span>
                                                        <strong>
                                                            Online Learning
                                                        </strong>
                                                    </a>
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="cat2-tab" data-bs-toggle="tab" data-bs-target="#cat2-tab-pane" type="button" role="tab" aria-controls="cat2-tab-pane" aria-selected="false" onClick={clickfunction}>
                                                    <a href="#edtechhome-maincontent">
                                                        <span>
                                                            <img src="/images/edtech-icon2.svg" alt="educationalmobileapps.com EdTech" />
                                                        </span>
                                                        <strong>
                                                            Digital Content
                                                        </strong>
                                                    </a>
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="cat3-tab" data-bs-toggle="tab" data-bs-target="#cat3-tab-pane" type="button" role="tab" aria-controls="cat3-tab-pane" aria-selected="false" onClick={clickfunction}>
                                                    <a href="#edtechhome-maincontent">
                                                        <span>
                                                            <img src="/images/edtech-icon3.svg" alt="educationalmobileapps.com EdTech" />
                                                        </span>
                                                        <strong>
                                                            International Ed & Language Learning
                                                        </strong>
                                                    </a>
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="cat4-tab" data-bs-toggle="tab" data-bs-target="#cat4-tab-pane" type="button" role="tab" aria-controls="cat4-tab-pane" aria-selected="false" onClick={clickfunction}>
                                                    <a href="#edtechhome-maincontent">
                                                        <span>
                                                            <img src="/images/edtech-icon4.svg" alt="educationalmobileapps.com EdTech" />
                                                        </span>
                                                        <strong>
                                                            AR, VR & Games
                                                        </strong>
                                                    </a>
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="cat5-tab" data-bs-toggle="tab" data-bs-target="#cat5-tab-pane" type="button" role="tab" aria-controls="cat5-tab-pane" aria-selected="false" onClick={clickfunction}>
                                                    <a href="#edtechhome-maincontent">
                                                        <span>
                                                            <img src="/images/edtech-icon5.svg" alt="educationalmobileapps.com EdTech" />
                                                        </span>
                                                        <strong>
                                                            Skill Upgrade
                                                        </strong>
                                                    </a>
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="cat6-tab" data-bs-toggle="tab" data-bs-target="#cat6-tab-pane" type="button" role="tab" aria-controls="cat6-tab-pane" aria-selected="false" onClick={clickfunction}>
                                                    <a href="#edtechhome-maincontent">
                                                        <span>
                                                            <img src="/images/edtech-icon6.svg" alt="educationalmobileapps.com EdTech" />
                                                        </span>
                                                        <strong>
                                                            STEAM, Coding & Language Learning
                                                        </strong>
                                                    </a>
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="cat7-tab" data-bs-toggle="tab" data-bs-target="#cat7-tab-pane" type="button" role="tab" aria-controls="cat7-tab-pane" aria-selected="false" onClick={clickfunction}>
                                                    <a href="#edtechhome-maincontent">
                                                        <span>
                                                            <img src="/images/edtech-icon7.svg" alt="educationalmobileapps.com EdTech" />
                                                        </span>
                                                        <strong>
                                                            Tutorial & Test Prep
                                                        </strong>
                                                    </a>
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="cat8-tab" data-bs-toggle="tab" data-bs-target="#cat8-tab-pane" type="button" role="tab" aria-controls="cat8-tab-pane" aria-selected="false" onClick={clickfunction}>
                                                    <a href="#edtechhome-maincontent">
                                                        <span>
                                                            <img src="/images/edtech-icon8.svg" alt="educationalmobileapps.com EdTech" />
                                                        </span>
                                                        <strong>
                                                            Discovery & Admissions
                                                        </strong>
                                                    </a>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <div className="searchskill-wise-form">
                                    <form onSubmit={skillfilterfunction}>
                                        <div>
                                            <span>Select Age:</span>
                                            <label>
                                                <select value={ageselected} onChange={(e) => agesetSelected(e.target.value)}>
                                                    {ageoptions.map(option => (
                                                    <option key={option.value} value={option.value}>
                                                        {option.text}
                                                    </option>
                                                    ))}
                                                </select>
                                                <i className="fa fa-angle-down"></i>
                                            </label>
                                        </div>
                                        <div>
                                            <span>Select Skill:</span>
                                            <label>
                                                <select value={skillselected} onChange={(e) => skillsetSelected(e.target.value)}>
                                                    {skilloptions.map(option => (
                                                    <option key={option.value} value={option.value}>
                                                        {option.text}
                                                    </option>
                                                    ))}
                                                </select>
                                                <i className="fa fa-angle-down"></i>
                                            </label>
                                        </div>
                                        <div>
                                            <button type="submit">Submit <i className="fa fa-arrow-right"></i></button>
                                        </div>
                                    </form>
                                </div> */}
                                <div id="scrollbarsection"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* MAIN CONTENT */}
            <div className="mainWrapper">
                <div className="mainFlexForContent">

                    {/* Start of Content */}
                    <div className="mainContent mt-3" id="edtechhome-maincontent">

                        <div className="skillsearch-wrapper">
                            <div className="row mainRowCards">
                                <EdtechSkillwiseFilter skillsetitems={posts} loading={loading} />
                            </div>
                        </div>

                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane show active" id="cat1-tab-pane" role="tabpanel" aria-labelledby="cat1-tab" tabIndex="0">
                                <EdTechIntroData appdatalist='online-learning' />
                                <div className="row mainRowCards">
                                    <EdtechAppsList appdatalist='online-learning' />
                                    <div className="mb-5 d-flex">
                                        <Link href='/edtech-apps/online-learning'>
                                            <a className="ms-auto btn btn-primary px-4">View more <i className="fa fa-arrow-right"></i></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane" id="cat2-tab-pane" role="tabpanel" aria-labelledby="cat2-tab" tabIndex="0">
                                <EdTechIntroData appdatalist='digital-content' />
                                <div className="row mainRowCards">
                                    <EdtechAppsList appdatalist='digital-content' />
                                    <div className="mb-5 d-flex">
                                        <Link href='/edtech-apps/digital-content'>
                                            <a className="ms-auto btn btn-primary px-4">View more <i className="fa fa-arrow-right"></i></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane" id="cat3-tab-pane" role="tabpanel" aria-labelledby="cat3-tab" tabIndex="0">
                                <EdTechIntroData appdatalist='international-ed-language-lea' />
                                <div className="row mainRowCards">
                                    <EdtechAppsList appdatalist='international-ed-language-lea' />
                                    <div className="mb-5 d-flex">
                                        <Link href='/edtech-apps/international-ed-language-lea'>
                                            <a className="ms-auto btn btn-primary px-4">View more <i className="fa fa-arrow-right"></i></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane" id="cat4-tab-pane" role="tabpanel" aria-labelledby="cat4-tab" tabIndex="0">
                                <EdTechIntroData appdatalist='ar-vr-games' />
                                <div className="row mainRowCards">
                                    <EdtechAppsList appdatalist='ar-vr-games' />
                                    <div className="mb-5 d-flex">
                                        <Link href='/edtech-apps/ar-vr-games'>
                                            <a className="ms-auto btn btn-primary px-4">View more <i className="fa fa-arrow-right"></i></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane" id="cat5-tab-pane" role="tabpanel" aria-labelledby="cat5-tab" tabIndex="0">
                                <EdTechIntroData appdatalist='workforce-and-skills' />
                                <div className="row mainRowCards">
                                    <EdtechAppsList appdatalist='workforce-and-skills' />
                                    <div className="mb-5 d-flex">
                                        <Link href='/edtech-apps/workforce-and-skills'>
                                            <a className="ms-auto btn btn-primary px-4">View more <i className="fa fa-arrow-right"></i></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane" id="cat6-tab-pane" role="tabpanel" aria-labelledby="cat6-tab" tabIndex="0">
                                <EdTechIntroData appdatalist='steam-coding-language-lear' />
                                <div className="row mainRowCards">
                                    <EdtechAppsList appdatalist='steam-coding-language-lear' />
                                    <div className="mb-5 d-flex">
                                        <Link href='/edtech-apps/steam-coding-language-lear'>
                                            <a className="ms-auto btn btn-primary px-4">View more <i className="fa fa-arrow-right"></i></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane" id="cat7-tab-pane" role="tabpanel" aria-labelledby="cat7-tab" tabIndex="0">
                                <EdTechIntroData appdatalist='tutorial-test-prep' />
                                <div className="row mainRowCards">
                                    <EdtechAppsList appdatalist='tutorial-test-prep' />
                                    <div className="mb-5 d-flex">
                                        <Link href='/edtech-apps/tutorial-test-prep'>
                                            <a className="ms-auto btn btn-primary px-4">View more <i className="fa fa-arrow-right"></i></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane" id="cat8-tab-pane" role="tabpanel" aria-labelledby="cat8-tab" tabIndex="0">
                                <EdTechIntroData appdatalist='discovery-admissions' />
                                <div className="row mainRowCards">
                                    <EdtechAppsList appdatalist='discovery-admissions' />
                                    <div className="mb-5 d-flex">
                                        <Link href='/edtech-apps/discovery-admissions'>
                                            <a className="ms-auto btn btn-primary px-4">View more <i className="fa fa-arrow-right"></i></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Video />
                    </div>
                    {/* End of Content */}

                    {/* Start of SideBar */}
                    <div className="mainSide mt-3">
                        <div className="sidebar-inner">
                            <div className="">
                                <div className="top-banner">
                                    <Link href="https://www.redbytes.in/educational-app-development/?utm_source=Edsys_edtech_dir_pg&utm_medium=Right_banner&utm_campaign=LeadGen">
                                        <a target="_blank" className="pt-4 sidebar-banner">
                                            <img
                                                alt=""
                                                src="/images/side_banner.png"
                                                className="sidebar-banner-img"
                                            />
                                        </a>
                                    </Link>
                                </div>
                                <div className="sidebar-applist side-list mt-4">
                                    <h3>Know More Educational Apps</h3>
                                    <EdTechSidebarCatApplist />
                                </div>

                                <div className="sidebar-recent-blog side-list mt-4">
                                    <h3>Recent Blogs</h3>
                                    <EdTechRecentBlogs appdatalist='online-learning' />
                                </div>
                                <div className="bottom-banner pt-4">
                                    <Link href="https://mobileappdevelopmentcost.com/Calculator/Domain/?utm_source=EMA_EdTech_Dir&utm_medium=Right_Banner?&utm_campaign=Lead_gen">
                                        <a target="_blank" className="sidebar-banner">
                                            <img
                                                alt=""
                                                src="/images/girl-banner.png"
                                                width="300"
                                                height="400"
                                                className="sidebar-banner-img"
                                            />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End of SideBar */}
                </div>
            </div>

            {/* LOWER SECTION */}
            <LowerComp />
        </>
    )
}
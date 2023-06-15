import React from "react"
import Head from "next/head"
import Link from "next/link"
import EdtechAppsList from "../../components/edtech/updated/EdtechappData"
import EdTechIntroData from "../../components/edtech/updated/EdtechIntroData"
import EdTechRecentBlogs from "../../components/edtech/updated/EdtechRecentBlogs"
import EdTechSidebarCatApplist from "../../components/edtech/updated/EdtechSidebarCatApplist"
import Video from "../../components/edtech/video"
import LowerComp from "../../components/edtech/lowerSec"

export default function EdTechAppsInDetails7({edtechappsdata}) {

    let catelistdatalength = edtechappsdata.CategoriesData !== undefined;

    return (
        <>
            <Head>
                <title>{edtechappsdata.edtechcategory_show} | EdTech Apps | (Educational Technology Applications)</title>
                <meta name='description' content='EdTech Apps | Educational Technology Applications' />
            </Head>

            {/* mainEdtechRow BANNER */}
            <div className="row mainEdtechRow">
                <div className="edtech-banner-section" id="edtechbanner-section">
                    <div className="edtech-banner-section-layers"></div>
                    <div className="edtech-banner-section-layers2"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 my-5">
                                <h1 className="mainTe">{edtechappsdata.edtechcategory_show}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* MAIN CONTENT */}
            <div className="mainWrapper">
                <div className="mainFlexForContent">

                    {/* Start of Content */}
                    <div className="mainContent mt-3">
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane show active" id="cat1-tab-pane" role="tabpanel" aria-labelledby="cat1-tab" tabIndex="0">
                                <div className="conten-heading-wrapper">
                                    <h2 className="headingMains">
                                        {edtechappsdata.edtechcategory_show}
                                        <span className="conten-heading-number">
                                            {catelistdatalength ? edtechappsdata.CategoriesData.length : null}
                                        </span>
                                    </h2>
                                </div>
                                <div className="mt-4 paragraph-text">
                                    <p>{edtechappsdata.category_description}</p>
                                </div>
                                <div className="row mainRowCards">
                                    <EdtechAppsList appdatalist='tutorial-test-prep' />
                                </div>
                            </div>
                        </div>
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
                                    <EdTechRecentBlogs appdatalist='tutorial-test-prep' />
                                </div>
                                <div className="bottom-banner pt-4">
                                    <Link href="https://appcostcalculator.redbytes.co.uk/?utm_source=edsys_edtech_dir_pg&#038;utm_medium=right_banner&#038;utm_campaign=leadgen">
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

export async function getStaticProps() {
    const edtechappsdatares = await fetch('https://admin.educationalmobileapps.com/edtechappcategories?category_slug=tutorial-test-prep')
    const edtechappsdata = await edtechappsdatares.json()  
    return {
      props: {
        edtechappsdata,
      },
      revalidate: 10,
    }
  }
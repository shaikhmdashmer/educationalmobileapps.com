import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function EdtechSkillwiseFilter(props) {

    let skillsetitems = props.skillsetitems;
    let loading = props.loading;

    return (
        <>
            {!loading && 
                skillsetitems.SearchData.map((skillsetitems) => (
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6 scrollbar_app_list my-5" key={skillsetitems.id}>
                        <div className="card mainCard">
                            <div className="card-header headingCard">
                                {
                                    skillsetitems.logo_link ?
                                        <img
                                            alt=""
                                            src={skillsetitems.logo_link}
                                            width="100"
                                            height="100"
                                            className="card-img"
                                        />
                                        :
                                        <div className='card-img no-cardimg'>
                                            <i className='fa fa-image'></i>
                                        </div>
            
                                }
                                <h4>{skillsetitems.app_name}</h4>
                            </div>
            
                            <div className="card-body childCard">
                                <div className="innerText ">
                                    <p className="greyText">
                                        {skillsetitems.description}
                                    </p>
                                </div>
                                <h6>Age Group: {skillsetitems.age}</h6>
            
                                <div className="similarApp">
                                    <div className="developBtn mb-3">
                                        <Link href="https://mobileappdevelopmentcost.com/Calculator/Domain/?utm_source=EMA_EdTech_Dir&utm_medium=Wanna_App_Butn?&utm_campaign=Lead_gen">
                                            <a target="_blank" rel="noreferrer" className="similar-btn-app">
                                                Want to develop a similar aap ?
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="playSLinks">
                                        <div>
                                            {skillsetitems.play_store && 
                                                <>
                                                    <Link
                                                        href={skillsetitems.play_store}
                                                        target="_blank"
                                                    >
                                                        <a target="_blank" rel="noreferrer">
                                                            <img
                                                                alt=""
                                                                src="/images/playicon.png"
                                                                width="136"
                                                                height="40"
                                                            />
                                                        </a>
                                                    </Link>
                                                </>
                                            }
                                        </div>
                                        <div>
                                            {skillsetitems.app_store && 
                                                <>
                                                    <Link href={skillsetitems.app_store}>
                                                        <a target="_blank">
                                                            <img
                                                                alt=""
                                                                src="/images/appicon_new.png"
                                                                width="138"
                                                                height="40"
                                                            />
                                                        </a>
                                                    </Link>
                                                </>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                
                ))
            }
        </>
    )
}

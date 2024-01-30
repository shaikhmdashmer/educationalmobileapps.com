import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import Image from "next/image";
import Link from 'next/link';

export default function EdtechAppsList(props) {

    let appdatalistvalue = props.appdatalist;

    useEffect(() => {
        getPost();
    }, []);

    const getPost = () => {
        axios.get(`https://admin.educationalmobileapps.com/edtechappcategories?category_slug=${appdatalistvalue}`)
            .then(response => {
                setPosts(response.data.CategoriesData);
                setLoading(false);
                setPageCount(Math.ceil(response.data.CategoriesData.length / 12))
            });
    }

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pageItems, setPageItems] = useState([]);
    const [pageCount, setPageCount] = useState([]);

    const updatePageItems = (pageNo) => {
        const end = pageNo * 12
        const start = end - 12
        const items = posts.slice(start, end)
        setPageItems(items)
    }

    useEffect(() => {
        const items = posts.slice(0, 12)
        setPageItems(items)
    }, [posts]);

    const handlePageClick = (data) => {
        // console.log(data);
        updatePageItems(data.selected + 1)
    }

    const genPosts = () => {
        const allPost = [];
        pageItems.map(post => {
            allPost.push(<Post key={post.id} {...post} />);
        });
        return allPost;
    }

    const allPost = genPosts();

    return (
        <div className='mainpostslist'>
            <div className='row portfoliolist-row'>
                {loading ? <Loader /> : allPost}
            </div>

            <div className='paginate'>
                <ReactPaginate
                    pageCount={pageCount}
                    onPageChange={handlePageClick}
                    previousLabel={'<'}
                    nextLabel={'>'}
                    pageRangeDisplayed={12}
                    containerClassName={'pagination justify-content-end'}
                    pageClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    previousClassName={'page-item'}
                    previousLinkClassName={'page-link'}
                    nextClassName={'page-item'}
                    nextLinkClassName={'page-link'}
                    breakClassName={'page-item'}
                    breakLinkClassName={'page-link'}
                    activeClassName={'active'}
                />
            </div>
        </div>
    )
}

const Post = props => {
    return (
        // <div className="col-lg-4" key={props.id}>
        //     <div>
        //         <h3>{props.app_name}</h3>
        //         <p>{props.description.substring(0,200)}</p>
        //     </div>
        // </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6 scrollbar_app_list my-5" key={props.logo_link}>
            <div className="card mainCard">
                <div className="card-header headingCard">
                    {
                        props.logo_link ?
                        <img
                            alt=""
                            src={props.logo_link}
                            width="100"
                            height="100"
                            className="card-img"
                        />
                        :
                        <div className='card-img no-cardimg'>
                            <i className='fa fa-image'></i>
                        </div>

                    }
                    <h4>{props.app_name}</h4>
                </div>

                <div className="card-body childCard">
                    <div className="innerText ">
                        <p className="greyText">
                            {props.description}
                        </p>
                    </div>
                    <h6>Age Group : {props.age}</h6>

                    <div className="similarApp">
                        <div className="developBtn mb-3">
                            <Link href="https://mobileappdevelopmentcost.com/Calculator/Domain/?utm_source=EMA_EdTech_Dir&utm_medium=Wanna_App_Butn?&utm_campaign=Lead_gen">
                                <a target="_blank" className="similar-btn-app">
                                    Want to develop a similar aap ?
                                </a>
                            </Link>
                        </div>
                        <div className="playSLinks">
                            <div>
                                {props.play_store && 
                                    <>
                                        <Link
                                            href={props.play_store}
                                            target="_blank"
                                        >
                                            <a target="_blank">
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
                                {props.app_store && 
                                    <>
                                        <Link href={props.app_store}>
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
    )
}

// Loader component -------------------------------
const Loader = props => {

    return (
        <div className='postlistloader'>
            Loading...
            <i className="fas fa-sync-alt fa-spin"></i>
        </div>
    )
}
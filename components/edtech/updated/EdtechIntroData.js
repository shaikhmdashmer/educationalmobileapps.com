import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function EdTechIntroData(props) {

    let appdatalistvalue = props.appdatalist;

    useEffect(() => {
        axios.get(`https://admin.educationalmobileapps.com/edtechappcategories?category_slug=${appdatalistvalue}`)
            .then(response => {
                setPosts(response.data);
                setLoading(false);
            });
    }, []);

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    let catelistdatalength = posts.CategoriesData !== undefined;

    return (
        <>
            <div className="conten-heading-wrapper">
                <h2 className="headingMains">
                    {!loading && posts.edtechcategory_show}
                    {!loading && 
                        <span className="conten-heading-number">{catelistdatalength ? posts.CategoriesData.length : null}</span>
                    }
                </h2>
            </div>
            <div className="mt-4 paragraph-text">
                <p>{!loading && posts.category_description}</p>
            </div>
        </>
    )
}

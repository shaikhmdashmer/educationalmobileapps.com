import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function EdTechRecentBlogs(props) {

    let appdatalistvalue = props.appdatalist;

    useEffect(() => {
        axios.get(`https://admin.educationalmobileapps.com/edtechappcategories?category_slug=${appdatalistvalue}`)
            .then(response => {
                setPosts(response.data.RecentBlogsData);
                setLoading(false);
            });
    }, []);

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    return (
        <>
            <ul>
                {!loading && 
                    posts.map((recentblogs) => (
                        <li key={recentblogs.ID}>
                            <a href={recentblogs.guid} target="_blank" rel="noreferrer">
                                {recentblogs.post_title}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

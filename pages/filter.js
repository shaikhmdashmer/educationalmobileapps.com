import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { catdatalist } from "../data/catdata";

export default function Filter({ allcategoriesdata }) {

    // console.log(allcategoriesdata.message[0].app_name);
    const duplicateCheck = [];

    // setting categories data into LocalStorage
    // const setLocalStoreObject = allcategoriesdata.map((allcatlist) => (
    //     allcatlist.category,
    //     allcatlist.app_name,
    //     allcatlist.category_slug
    // ));

    const setLocalStoreObject = allcategoriesdata;
    if (typeof window !== 'undefined') {
        localStorage.setItem('setLocalStoreObject', JSON.stringify(setLocalStoreObject));
    }

    console.log(setLocalStoreObject);

    return (
        <>
            <Head>
                <title>Filter EdTech Apps</title>
                <meta name='description' content='EdTech Apps | Educational Technology Applications' />
            </Head>
            
            <ul style={{ display: `block`, margin: `200px auto`, width: `80%` }}>
                {/* allcategoriesdata.message?.filter */}
                {setLocalStoreObject?.filter(filtration => filtration.category_slug !== 'teacher-app' && filtration.category_slug !== 'apps-for-parents' && filtration.category_slug !== 'apps-for-students' && filtration.category_slug !== 'critical-thinking-apps').map((postlist, index) => {
                    if (duplicateCheck.includes(postlist.category)) return null;
                    duplicateCheck.push(postlist.category);
                    return (
                        <li key={postlist.category_slug}>
                            <Link href={postlist.category_slug}>
                                <a>
                                    <span>{postlist.category.replace("GK Apps", "General Knowledge Apps")}</span>
                                </a>
                            </Link>
                        </li>
                    );
                })}

            </ul>
        </>
    )
}

export async function getStaticProps() {
    // const pagedatares = await fetch(`https://admin.educationalmobileapps.com/educationappcategories`);
    // const allcategoriesdata = await pagedatares.json()

    const allcategoriesdata = catdatalist

    return {
        props: {
            allcategoriesdata,
        },
        revalidate: 10, // In seconds
    };
}

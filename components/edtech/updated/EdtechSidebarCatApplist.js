import React, { useEffect, useState } from 'react';
import { catdatalist } from "../../../data/catdata";
import { useRouter } from "next/router";

export default function EdTechSidebarCatApplist() {

    const router = useRouter();

    const allcategoriesdata = catdatalist
    
    const duplicateCheck = [];
    const [categorylinkfield, setcategorylinkfield] = useState(false);
    const [categoryvalueTrue, setcategoryvalueTrue] = useState('');

    return (
        <>
            <div className="categories">
                <div className="categoriesSpace mt-4">
                    {allcategoriesdata?.map((postlist, index) => {
                        if (duplicateCheck.includes(postlist.category)) return null;
                        duplicateCheck.push(postlist.category);
                        return (
                            <div key={postlist.category_slug} className={router.asPath == `/${postlist.category_slug}/` ? 'new-radiobtnlink new-radiobtnlink-active' : 'new-radiobtnlink'}>
                                <label htmlFor={postlist.category_slug}>
                                    <input type="radio" name="categorynamelink" id={postlist.category_slug} onChange={(e) => { setcategorylinkfield(e.target.checked); setcategoryvalueTrue(`${postlist.category_slug}`); router.push(`/${postlist.category_slug}`) }} required />
                                    <span>{postlist.category}</span>
                                </label>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

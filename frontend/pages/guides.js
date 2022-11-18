import React, { useState } from 'react';
import Link from "next/link";
import { fetchAPI } from "../lib/api";
import ReactMarkdown from "react-markdown";
import Sidemenu from "../components/sidemenu";

const Guides = ({ guides, categories, sectionHeaders, menus }) => {

    const [currentGuide, setCurrentGuide] = useState(guides[0])

    const handleClick = event => {
        setCurrentGuide(event)
    };


console.log(menus);

    return (
        <>
            <div className="guides-page-wrapper">
                <Sidemenu guides={guides} sectionHeaders={sectionHeaders} handleClick={handleClick} />
                <div className="documentation-page-wrapper">
                    <div>
                        <ReactMarkdown
                            source={currentGuide.attributes.content}
                            escapeHtml={false}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getStaticProps() {
    const [guidesRes, categoriesRes, sectionHeadersRes, menusRes] = await Promise.all([
        fetchAPI("/integration-guides", { populate: "*" }),
        fetchAPI("/categories", { populate: "*" }),
        fetchAPI("/section-headers", { populate: "*" }),
        fetchAPI("/menus", { populate: "*" }),
    ])

    return {
        props: {
            guides: guidesRes.data,
            categories: categoriesRes.data,
            sectionHeaders: sectionHeadersRes.data,
            menus: menusRes.data,
        },
        revalidate: 1,
    }
}

export default Guides;

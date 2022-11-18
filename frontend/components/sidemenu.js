import React from 'react';
import Guides from '../pages/guides';
import Link from "next/link";

const Sidemenu = ({ guides, sectionHeaders, handleClick }) => {

    console.log(sectionHeaders);

    return (
        <div className="side-menu-wrapper">
            {sectionHeaders.map((sectionHeader, i) => {
                return (
                    <>
                        <p className="sidemenu-section-header">{sectionHeader.attributes.title}</p>

                        {sectionHeader.attributes.integration_guides.data.map((guide, i) => {
                            return (
                                <Link href="" onClick={handleClick}>
                                    <a className="sidemenu-divider">{guide.attributes.title}</a>
                                </Link>
                            )
                        })}


                    </>
                )
            })}
        </div>
    )
}

export default Sidemenu;
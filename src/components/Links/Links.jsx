import React from "react";
import { linksdb } from "../Database";
import './Links.css'

const data = linksdb;
export default function Links() {
    return (
        <>
            <section className="link_section">
                <div className="links-container">
                    {
                        data.map((eachLink) => {
                            return (
                                <>
                                    <a href={eachLink.link} target="_blank" rel="noreferrer">
                                    <div className="link-card">
                                    <i className={eachLink.icon}></i>
                                        <p className="link_title"><strong>{eachLink.title}</strong></p>
                                    </div></a>
                                </>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}
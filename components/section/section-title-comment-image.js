
import React from "react";
import ButtonLinkUnderlineAnimated from "../button-link-underline-animated";
import Image from "next/image";


export default function SectionTitleCommentImage (props) {


    let videoId="T0lgE9NcTAc"
    let height="581"
    let width="900"
    // example where to catch the videoId on Youtube (after the v=) :
    // https://www.youtube.com/watch?v=T0lgE9NcTAc&ab_channel=MojoHelpdesk


    return (
        <section className="mt-5 pt-5 pb-5 border-bottom">
            <div className="container pb-5">
                <div className="text-center align-content-center justify-content-center">

                    <div className="mx-auto">
                        <h1 className="text-capitalize mb-4">{props.title}</h1>
                        <p className="pb-4">{props.comment}</p>
                    </div>

                    <Image
                        src={`/images/knowledgebasegif.gif`}
                        height={570}
                        width={800}
                        className="rounded border"
                    />


                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );


}
import YoutubeVideo from "../youtube";
import Link from "next/link";
import utils from "../../styles/utils.module.css";
import React from "react";
import ButtonLinkUnderlineAnimated from "../button-link-underline-animated";


export default function SectionTitleCommentImageVideo2Buttons (props) {


        let videoId="T0lgE9NcTAc"
        let height="581"
        let width="900"
        // example where to catch the videoId on Youtube (after the v=) :
        // https://www.youtube.com/watch?v=T0lgE9NcTAc&ab_channel=MojoHelpdesk


        return (
            <section className="mt-5 pt-5 pb-5 border-bottom">
                <div className="container">
                    <div className="text-center align-content-center justify-content-center">

                        <div className="mx-auto">
                            <h1 className="text-capitalize mb-4">{props.title}</h1>
                            <p>{props.comment}</p>
                        </div>

                        <YoutubeVideo
                            value={videoId}
                            width={width}
                            height={height}
                        />

                        <div className="row">
                            <div className="col-12 d-flex justify-content-center">
                                <ButtonLinkUnderlineAnimated
                                    title={"Try for free"}
                                    link={"https://signup.mojohelpdesk.com/signup/register/"}
                                />

                                <ButtonLinkUnderlineAnimated
                                    title={"Request a demo"}
                                    link={"/calendar-demo"}
                                />
                            </div>
                        </div>
                    </div>


                    {props.children}


                </div>
            </section>
        );


}
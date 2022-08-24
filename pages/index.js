import Link from 'next/link';
import BackHome from "../components/back-home";
import React from "react";
import YoutubeVideo from "../components/youtube";
import NavbarMojo from "../components/mojo/navbar-mojo";
import utils from "../styles/utils.module.css"
import SectionTitleCommentImageVideo2Buttons from "../components/mojo/section-title-comment-image-video-2-buttons";
import Image from "next/image";
import ButtonLinkUnderlineAnimated from "../components/button-link-underline-animated";
import SectionImageTitleText from "../components/mojo/section-image-title-text";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.videoId="T0lgE9NcTAc"
        this.height="581"
        this.width="900"
        // example where to catch the videoId on Youtube (after the v=) :
        // https://www.youtube.com/watch?v=T0lgE9NcTAc&ab_channel=MojoHelpdesk
    }

    render(){
        return (
            <>

                <NavbarMojo/>
                <SectionTitleCommentImageVideo2Buttons/>


                <section className="mt-5 pt-5 pb-5 border-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="text-capitalize text-secondary">
                                    The toll of the trade
                                </div>
                                <h1 className="text-capitalize">
                                    Centralize, assign, auto-assign, tag, reuse answers. Simple to start, powerful at scale.
                                </h1>
                                <p className="m-5 border-bottom">&nbsp;</p>
                                <p className="mb-4">Mojo Helpdesk is the all-in-one support platform designed to be simple to use while providing the tools to scale to millions of customers.
                                </p>
                                <p><strong>Over 2.5 million happy users.</strong></p>
                                <ButtonLinkUnderlineAnimated
                                    title={"Try for free"}
                                    link={"https://signup.mojohelpdesk.com/signup/register/"}
                                />
                            </div>
                            <div className="col-md-6">
                                <Image
                                    priority
                                    src="/images/happy-user.jpg"
                                    height={713}
                                    width={600}
                                    alt="happy-user"
                                    className="img-fluid rounded shadow"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <SectionImageTitleText
                    img={'call-center.jpg'}
                    height={'400'}
                    width={'600'}
                    title={'Get started in minutes at a fraction of the cost'}
                    text={"Mojo Helpdesk is an easy to use cloud ticket tracking that helps companies provide " +
                        "superior employee & customer service at a lower cost. Over 10 years ago, Metadot, " +
                        "the Mojo's parent company needed a help desk that would give our customers personal, " +
                        "dynamic, and natural experiences. We couldn’t find one that met our needs, so we built it." +
                        " We've now made this available for organization like yours, and today thousands of " +
                        "educational organizations, from small to large, use Mojo Helpdesk to manage their IT, " +
                        "maintenance requests from staff, faculty and more.\n"}
                    imagePosition={"left"} //left or anything because right is default
                >
                    <ButtonLinkUnderlineAnimated
                        title={"Try for free"}
                        link={"https://signup.mojohelpdesk.com/signup/register/"}>
                    </ButtonLinkUnderlineAnimated>

                </SectionImageTitleText>

                <BackHome/>
            </>
        )
    }

}

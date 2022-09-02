import Link from 'next/link';
import BackHome from "../components/back-home";
import React from "react";
import YoutubeVideo from "../components/youtube";
import NavbarMojo from "../components/navbar-mojo";
import utils from "../styles/utils.module.css"
import SectionTitleCommentVideo2ButtonsChild3Icons from "../components/section/section-title-comment-video-2-buttons-child-3-icons";
import Image from "next/image";
import ButtonLinkUnderlineAnimated from "../components/button-link-underline-animated";
import SectionImageTitleText from "../components/section/section-image-title-text";
import 'bootstrap/dist/css/bootstrap.min.css';
import SwiperComponent from "../components/swiper";
import MySwiperComponent from "../components/swiper";
import BlueSectionTitleThreeButtons from "../components/section/blue-section-title-three-buttons";
import Footer from "../components/footer";
import SectionCardsLink from "../components/section/section-cards-link";
import ThreeIcons from "../components/three-icons";


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
                <SectionTitleCommentVideo2ButtonsChild3Icons
                    title={"The Best Solution To Support Customers & Employees"}
                    comment={"Mojo Helpdesk makes customer service easy. Centralize requests, assign, automate," +
                        " track progress, and get more done faster."}
                >
                    <ThreeIcons/>
                </SectionTitleCommentVideo2ButtonsChild3Icons>


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


                <MySwiperComponent/>

                <BlueSectionTitleThreeButtons/>

                <SectionCardsLink
                    title={"What's New At Mojo"}
                    cards={[
                        {
                            link:"https://www.mojohelpdesk.com/blog/2020/06/how-to-keep-help-desk-agents-from-burning-out/",
                            img:"burnout.png",
                            height:170,
                            width:267,
                            alt:"burnout",
                            body:"How to Keep Help Desk Agents from Burning Out"
                        },
                        {
                            link:"/ressources/sona-dermatology",
                            img:"undraw_analysis.png",
                            height:170,
                            width:267,
                            alt:"undraw_analysis",
                            body:"Case study: Austin Community College Case & Mojo Helpdesk Study"
                        },
                        {
                            link:"/ressources/11-points-helpdesk",
                            img:"11-points-hd.jpg",
                            height:170,
                            width:267,
                            alt:"11-points-hd",
                            body:"FREE GUIDE: Why Every Help Desk Needs These 11 Functions"
                        },
                        {
                            // Todo: real link
                            link:"https://www.mojohelpdesk.com/blog/2020/06/how-to-keep-help-desk-agents-from-burning-out/",
                            img:"is_mojo_right.png",
                            height:170,
                            width:267,
                            alt:"is_mojo_right",
                            body:"Upcoming Webinar: Is Mojo Helpdesk right for your organization?"
                        },
                        {
                            // Todo: real link
                            link:"https://www.mojohelpdesk.com/blog/2020/06/how-to-keep-help-desk-agents-from-burning-out/",
                            img:"cyber-secu.png",
                            height:170,
                            width:267,
                            alt:"cyber-secu",
                            body:"On-demand Webinar: Cybersecurity for the Rest of Us"
                        },
                        {
                            // Todo: real link
                            link:"https://www.mojohelpdesk.com/blog/2020/06/how-to-keep-help-desk-agents-from-burning-out/",
                            img:"save-hundred-of-thousand.png",
                            height:170,
                            width:267,
                            alt:"burnout",
                            body:"On-demand Webinar: How to save hundreds of thousands of dollars with a Self-Service Knowledge Base"
                        },
                    ]}
                />

                <Footer/>
            </>
        )
    }

}

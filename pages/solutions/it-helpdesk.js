import Link from "next/link";
import React from "react";
import SectionTitleCommentImageVideo2Buttons from "../../components/mojo/section-title-comment-image-video-2-buttons";
import NavbarMojo from "../../components/mojo/navbar-mojo";
import SectionImageTitleText from "../../components/mojo/section-image-title-text";
import ButtonLinkUnderlineAnimated from "../../components/button-link-underline-animated";
import TwoBigButton from "../../components/mojo/two-big-button";
import FourCheckCircle from "../../components/mojo/four-check-circle";
import BlueSectionTitleThreeButtons from "../../components/mojo/blue-section-title-three-buttons";
import MySwiperComponent from "../../components/mojo/swiper";
import SectionCardsLink from "../../components/mojo/section-cards-link";
import Footer from "../../components/mojo/footer";
import SectionThreeIcons from "../../components/mojo/section-three-icons";

export default function ItHelpdesk() {
    return (
        <>
            <NavbarMojo/>

            <SectionImageTitleText
                img={'it-helpdesk.png'}
                height={'384'}
                width={'540'}
                title={'IT Service Desk'}
                text={"A complete Service Desk deployed instantly at the right price. Mojo Helpdesk has it all: " +
                    "request management, knowledge base, asset management, SLA and more..."}
                imagePosition={"right"} //left or anything because right is default
            >
                <FourCheckCircle
                    title={"Learn how IT use Mojo Helpdesk for:"}
                    text={["Single Sign On","Assets","Self-service help","Itsm"]}

                />
                <TwoBigButton/>

            </SectionImageTitleText>

            <SectionImageTitleText
                img={'knowledge-base.png'}
                height={'366'}
                width={'540'}
                title={'Self Service Knowledge Base'}
                text={"Cut up to 90% of user requests with Mojo Helpdesk knowledge base. Create and share Frequently " +
                    "Asked Questions with your users, measure what performs best and adjust as needed."}
                imagePosition={"left"} //left or anything because right is default
            >
                <ButtonLinkUnderlineAnimated
                    title={"Learn more about Mojo Helpdesk knowledge base"}
                    link={"/knowledge-base"}>
                </ButtonLinkUnderlineAnimated>

             </SectionImageTitleText>

            <SectionImageTitleText
                img={'gSuite.png'}
                height={'301'}
                width={'540'}
                title={'Use Mojo Helpdesk With Google Workspace Or Microsoft 365'}
                text={"Integrate Mojo with your organization Single Sign On (SSO) provider such as Microsoft Office " +
                    "365, Google Workspace, Active Directory, LDAP and SAML systems."}
            />

            <SectionImageTitleText
                img={'automation_hub.jpg'}
                height={'304'}
                width={'540'}
                title={'Automate Repetitive Tasks'}
                text={"Mojo Helpdesk can automate tickets assignments, send auto-responders, use predefined canned" +
                    " answers, automatically tag issues and escalate problematic tickets. " +
                    "Automation dramatically improves agents efficiency allowing them to serve more users, faster."}
                imagePosition={"left"}
            />

            <SectionImageTitleText
                img={'stats.png'}
                height={'445'}
                width={'540'}
                title={'Use Key Analytics At Your Fingertips'}
                text={"Are agents doing a good job? Checkout the key metrics such as time to first response," +
                    " backlog level, and agent activity. Discover which kind of issues are cause the most work."}
                imagePosition={"right"}
            />

            <SectionThreeIcons/>

            <SectionImageTitleText
                img={'assets.png'}
                height={'304'}
                width={'540'}
                title={'Asset Management'}
                text={"Keep track of any assets such as computers, laptops, license as well as and maintenance" +
                    " contracts. Mojo will notify for contracts renewal dates. Lists incidents for each asset. " +
                    "Use Check-in Checkout feature to assign assets to users."}
                imagePosition={"left"}
            >
                <ButtonLinkUnderlineAnimated
                    title={"Learn more about asset management"}
                    link={"/knowledge-base"}>
                </ButtonLinkUnderlineAnimated>
            </SectionImageTitleText>

            <SectionTitleCommentImageVideo2Buttons
                title={"Easy Mojo helpdesk User Interface"}
                comment={"Mojo Helpdesk user interface is simple to use while packed with powerful features."}
            />


            <SectionImageTitleText
                img={'process.png'}
                height={'450'}
                width={'450'}
                title={'Incident Management, Service Fulfilment, Change Management'}
                text={"Mojo Helpdesk enables IT Service Management (ITSM) processes while keeping everything simple. " +
                    "The powerful built-in tools combined with the reporting allow organizations to improve their " +
                    "service quality continually. \n Mojo Helpdesk enables IT teams to deliver IT services in an " +
                    "organized fashion."}
            />

            <MySwiperComponent/>
            <BlueSectionTitleThreeButtons/>
            <SectionCardsLink
                title={"Resources For The Services Desk"}
                cards={[
                    {
                        link:"https://www.mojohelpdesk.com/blog/2020/06/how-to-keep-help-desk-agents-from-burning-out/",
                        img:"tips.png",
                        height:170,
                        width:267,
                        alt:"tips",
                        body:"Practical Tips for Help Desk Agents"
                    },
                    {
                        link:"/ressources/sona-dermatology",
                        img:"undraw_analysis.png",
                        height:170,
                        width:267,
                        alt:"undraw_analysis",
                        body:"Case Study: Raksha Technologies uses Mojo Helpdesk to improve customer confidence"
                    },
                    {
                        link:"/ressources/11-points-helpdesk",
                        img:"11-points-hd.jpg",
                        height:170,
                        width:267,
                        alt:"11-points-hd",
                        body:"FREE GUIDE: Why Every Help Desk Needs These 11 Functions"
                    },
                ]}
            />

            <Footer/>

        </>

    );
}
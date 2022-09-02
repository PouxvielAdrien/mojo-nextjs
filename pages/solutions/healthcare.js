import Link from "next/link";
import React from "react";
import SectionTitleCommentVideo2ButtonsChild3Icons from "../../components/section/section-title-comment-video-2-buttons-child-3-icons";
import NavbarMojo from "../../components/navbar-mojo";
import SectionImageTitleText from "../../components/section/section-image-title-text";
import ButtonLinkUnderlineAnimated from "../../components/button-link-underline-animated";
import TwoBigButton from "../../components/two-big-button";
import FourCheckCircle from "../../components/four-check-circle";
import BlueSectionTitleThreeButtons from "../../components/section/blue-section-title-three-buttons";
import MySwiperComponent from "../../components/swiper";
import SectionCardsLink from "../../components/section/section-cards-link";
import Footer from "../../components/footer";
import SectionThreeIcons from "../../components/section/section-three-icons";
import SectionPercentQuote from "../../components/section/section-percent-quote";

export default function Healthcare() {
    return (
        <>
            <NavbarMojo/>

            <SectionImageTitleText
                img={'healthcare.jpg'}
                height={'360'}
                width={'540'}
                title={'A Help Desk For Healthcare'}
                text={"Keep your technology in operating order to support better patient outcomes."}
                imagePosition={"right"} //left or anything because right is default
            >
                <FourCheckCircle
                    title={"Learn how healthcare customers use Mojo Helpdesk for:"}
                    text={["CENTRALIZE REQUESTS","AUTOMATION","SELF-SERVICE HELP","COMPLIANCE"]}
                />
                <TwoBigButton/>
            </SectionImageTitleText>

            <SectionImageTitleText
                img={'mojo-all-in-one.png'}
                height={'366'}
                width={'540'}
                title={'Centralize All Requests In One Place'}
                text={"Mojo Helpdesk allows hospitals and healthcare providers efficiently handle requests from " +
                    "staff, administrators, and 3rd party vendors. Mojo Helpdesk centralize all requests and " +
                    "provide a battery of tools to boost agent efficiency. This includes an internal knowledge base " +
                    "and canned answers allowing agents to search for best practices to resolve issues quickly. " +
                    "Automation, triggers, reminders help automate repetitive tasks and ad-hoc reports provide deep " +
                    "insights into help desk activity."}
                imagePosition={"right"} //left or anything because right is default
            >
            </SectionImageTitleText>

            <SectionImageTitleText
                img={'knowledge-base.png'}
                height={'366'}
                width={'540'}
                title={'Self Service Knowledge Base'}
                text={"Cut up to 90% of user requests using Mojo Helpdesk's knowledge base. Create and share" +
                    " Frequently Asked Questions, measure what performs best, and adjust as needed."}
                imagePosition={"left"} //left or anything because right is default
            >
                <ButtonLinkUnderlineAnimated
                    title={"Learn more about Mojo Helpdesk knowledge base"}
                    link={"/knowledge-base"}>
                </ButtonLinkUnderlineAnimated>
            </SectionImageTitleText>


            <SectionImageTitleText
                img={'automation_hub.jpg'}
                height={'304'}
                width={'540'}
                title={'Automate Repetitive Tasks'}
                text={"Mojo Helpdesk can automate tickets assignments, send auto-responders, use predefined " +
                    "canned answers, automatically tag issues and escalate problematic tickets. Automation " +
                    "dramatically improves agents efficiency allowing them to serve more users, faster."}
                imagePosition={"left"}
            />

            <SectionImageTitleText
                img={'stats.png'}
                height={'366'}
                width={'540'}
                title={'Use Key Analytics At Your Fingertips'}
                text={"Are agents doing a good job? Checkout the key metrics such as time to first response, " +
                    "backlog level, and agent activity. Discover which kind of issues are cause the most work."}
                imagePosition={"right"}
            >
            </SectionImageTitleText>

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

            <SectionImageTitleText
                img={'process.png'}
                height={'450'}
                width={'450'}
                title={'HIPAA & GDPR Compliance'}
                text={"No need to worry. Mojo Helpdesk is designed to protect the privacy, security, and integrity " +
                    "of your patients’ health information. With Mojo Helpdesk you will be able to meet the national" +
                    " and international set of security and privacy standards for protecting patient health " +
                    "information. Mojo Helpdesk is HIPPA and GDPR compliant. Mojo Helpdesk is designed with " +
                    "strong encryption. Data is encrypted at rest and Personal Health Information is protected " +
                    "at all times even during network transfers. Mojo Helpdesk does not use or sell customer " +
                    "data in any way."}
                imagePosition={"right"}
            />

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

    );
}
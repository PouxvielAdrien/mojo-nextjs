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

export default function GrowingBusinesses() {
    return (
        <>
            <NavbarMojo/>

            <SectionImageTitleText
                img={'section-all-in-one.png'}
                height={'360'}
                width={'540'}
                title={'Solve Employee And Customer Problems Fast'}
                text={"As you face what’s next for your business, the right help desk supports your team and enables you to quickly adapt and make smarter decisions."}
                imagePosition={"right"} //left or anything because right is default
            >
                <FourCheckCircle
                    title={"Eliminate manual work, reduce human error, streamline processes."}
                    text={["CENTRALIZE REQUESTS","AUTOMATION","KNOWLEDGE BASE","SINGLE SIGN-ON"]}

                />
                <TwoBigButton/>
            </SectionImageTitleText>

            <SectionImageTitleText
                img={'centralize.png'}
                height={'366'}
                width={'540'}
                title={'Centralize requests'}
                text={"Mojo Helpdesk allows businesses to efficiently handle requests from employees, customers, " +
                    "3rd party vendors and partners. Mojo Helpdesk centralizes all requests and provides a battery " +
                    "of tools to boost agent efficiency. This includes an internal knowledge base and " +
                    "canned answers allow agents to search for existing best practices in order to resolve " +
                    "issues quickly. Automation accelerates repetitive tasks. Ad-hoc reports provide deep " +
                    "insights into help desk activity."}
                imagePosition={"left"} //left or anything because right is default
            >
                <ButtonLinkUnderlineAnimated
                    title={"Request a demo"}
                    link={"/calendar-demo"}>
                </ButtonLinkUnderlineAnimated>
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
                title={'Code Free Automation'}
                text={"No coding required. Automation dramatically improves agents efficiency allowing " +
                    "them to serve more users, faster. Mojo Helpdesk automates ticket assignments (round-robin, " +
                    "load-balancing, etc...), sends auto-responders, reminds people to respond on time, tags issues " +
                    "automatically and escalates problematic tickets."}
                imagePosition={"right"}
            />

            <SectionImageTitleText
                img={'assets.png'}
                height={'366'}
                width={'540'}
                title={'Manage Assets'}
                text={"Keep track of any assets such as computers, laptops, license as well as maintenance contracts. " +
                    "Mojo will notify for contracts renewal date. Lists incidents for each asset. Use check-in and " +
                    "checkout feature to assign assets to user."}
                imagePosition={"left"}
            >
                <ButtonLinkUnderlineAnimated
                    title={"Learn more about Mojo asset management"}
                    link={"/"}>
                </ButtonLinkUnderlineAnimated>
            </SectionImageTitleText>

            <SectionPercentQuote
                percent={100}
                subtitle={"satisfaction rate"}
                quote={'"After we set up the Mojo Helpdesk and created the right workflow, it becomes very ' +
                    'easy to assign the ticket to the right person."'}
                author={"Andrea Di Mauro, Customer support management, Synapses SRLS, Italy"}
            >
            </SectionPercentQuote>

            <SectionImageTitleText
                img={'gSuite.png'}
                height={'366'}
                width={'540'}
                title={'Enterprise Grade Security & Single Sign-On'}
                text={"Mojo Helpdesk is designed to protect the privacy, security, and integrity of your company’s " +
                    "information. Mojo Helpdesk uses strong encryption and provides a secure and reliable environment" +
                    " including audit logs, SSO, firewall and session management. With Single Sign On (SSO) Mojo " +
                    "Helpdesk integrates with Microsoft Office 365, Google Workspace, Active Directory," +
                    " LDAP and SAML systems. Mojo Helpdesk is GDPR compliant."}
                imagePosition={"right"}
            >
                <ButtonLinkUnderlineAnimated
                    title={"Learn about Mojo + Google Workspace"}
                    link={"/"}>
                </ButtonLinkUnderlineAnimated>
            </SectionImageTitleText>

            <MySwiperComponent/>

            <BlueSectionTitleThreeButtons/>
            <SectionCardsLink
                title={"What's New At Mojo"}
                cards={[
                    {
                        link:"/ressources/sona-dermatology",
                        img:"undraw_analysis.png",
                        height:170,
                        width:267,
                        alt:"undraw_analysis",
                        body:"Case study: Austin Community College Case & Mojo Helpdesk Study"
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
                    {
                        link:"https://www.mojohelpdesk.com/blog/2020/06/how-to-keep-help-desk-agents-from-burning-out/",
                        img:"burnout.png",
                        height:170,
                        width:267,
                        alt:"burnout",
                        body:"How to Keep Help Desk Agents from Burning Out"
                    },
                ]}
            />

            <Footer/>

        </>

    );
}
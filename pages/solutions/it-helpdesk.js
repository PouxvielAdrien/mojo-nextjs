import Link from "next/link";
import React from "react";
import SectionTitleCommentImageVideo2Buttons from "../../components/mojo/section-title-comment-image-video-2-buttons";
import NavbarMojo from "../../components/mojo/navbar-mojo";
import SectionImageTitleText from "../../components/mojo/section-image-title-text";
import ButtonLinkUnderlineAnimated from "../../components/button-link-underline-animated";
import TwoBigButton from "../../components/mojo/two-big-button";
import FourCheckCircle from "../../components/mojo/four-check-circle";

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


        </>

    );
}
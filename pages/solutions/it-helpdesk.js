import Link from "next/link";
import React from "react";
import SectionTitleCommentImageVideo2Buttons from "../../components/mojo/section-title-comment-image-video-2-buttons";
import NavbarMojo from "../../components/mojo/navbar-mojo";
import SectionImageTitleText from "../../components/mojo/section-image-title-text";

export default function ItHelpdesk() {
    return (
        <>
            <NavbarMojo/>

            <SectionImageTitleText
                img={'knowledge-base.png'}
                height={'366'}
                width={'540'}
                title={'Self Service Knowledge Base'}
                text={"Cut up to 90% of user requests with Mojo Helpdesk knowledge base. Create and share Frequently " +
                    "Asked Questions with your users, measure what performs best and adjust as needed."}
                imagePosition={"left"} //left or anything because right is default
            />

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


        </>

    );
}
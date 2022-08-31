import Link from "next/link";
import React from "react";
import SectionTitleCommentImageVideo2Buttons from "../../components/mojo/section-title-comment-image-video-2-buttons";
import NavbarMojo from "../../components/mojo/navbar-mojo";
import SectionImageTitleText from "../../components/mojo/section-image-title-text";
import ButtonLinkUnderlineAnimated from "../../components/button-link-underline-animated";
import TwoBigButton from "../../components/mojo/two-big-button";
import FourCheckCircle from "../../components/mojo/four-check-circle";
import BlueSectionTitleThreeButtons from "../../components/mojo/blue-section-title-three-buttons";

export default function SonaDermatology() {
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

                <TwoBigButton/>

            </SectionImageTitleText>


        </>

    );
}
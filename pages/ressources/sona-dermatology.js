import Link from "next/link";
import React from "react";
import SectionTitleCommentVideo2ButtonsChild3Icons from "../../components/section/section-title-comment-video-2-buttons-child-3-icons";
import NavbarMojo from "../../components/navbar-mojo";
import SectionImageTitleText from "../../components/section/section-image-title-text";
import ButtonLinkUnderlineAnimated from "../../components/button-link-underline-animated";
import TwoBigButton from "../../components/two-big-button";
import FourCheckCircle from "../../components/four-check-circle";
import BlueSectionTitleThreeButtons from "../../components/section/blue-section-title-three-buttons";

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
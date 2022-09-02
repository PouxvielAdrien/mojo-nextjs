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
import SectionTitleCommentImage from "../../components/section/section-title-comment-image";

export default function Ecommerce() {
    return (
        <>
            <NavbarMojo/>

            <SectionImageTitleText
                img={'Users.png'}
                height={'631'}
                width={'538'}
                title={'The #1 Solution To Support Staff & Faculty With IT, Maintenance Requests And All Other Requests.'}
                text={"Mojo Helpdesk makes customer service easy. Centralize requests, assign, automate, track progress, and get more done faster."}
                imagePosition={"right"} //left or anything because right is default
            >
                <FourCheckCircle
                    title={"Learn how educational teams use Mojo Helpdesk for:"}
                    text={["CENTRALIZE REQUESTS","TRUSTED","ASSETS","SSO"]}
                />
                <TwoBigButton/>
            </SectionImageTitleText>

            <SectionTitleCommentImage
                title={"Self-Service Knowledge Base"}
                comment={"A self-service knowledge base enables customers to find answers to frequently asked " +
                    "questions (FAQ) quickly."}
            />

            <SectionTitleCommentVideo2ButtonsChild3Icons>

            </SectionTitleCommentVideo2ButtonsChild3Icons>

            <SectionImageTitleText
                img={'rating.gif'}
                height={'450'}
                width={'450'}
                title={'Customer Satisfaction Ratings'}
                text={"Ensure customers are happy and that the team is providing excellent support with Mojo’s " +
                    "5-star customer service rating system. Statistics are available by agents and queues " +
                    "providing key insight on what needs to be improved."}
                imagePosition={"right"}
            />

            <MySwiperComponent/>

            <BlueSectionTitleThreeButtons/>

            <Footer/>

        </>

    );
}
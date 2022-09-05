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
import ThreeIcons from "../../components/three-icons";

export default function Education() {
    return (
        <>
            <NavbarMojo/>

            <SectionImageTitleText
                img={'Users.png'}
                height={'318'}
                width={'540'}
                title={'Turn Customers Into Advocates'}
                text={"Mojo Helpdesk is the tool support teams need to provide an excellent customer experience."}
                imagePosition={"right"} //left or anything because right is default
            >
                <TwoBigButton/>
            </SectionImageTitleText>


            <SectionTitleCommentVideo2ButtonsChild3Icons
                title={"The Best Solution To Manage Staff & Faculty IT, Maintenance Requests And More."}
                comment={"Centralize requests, assign, automate, track progress, and get more done faster."}
            >
                <ThreeIcons/>
            </SectionTitleCommentVideo2ButtonsChild3Icons>

            <SectionTitleCommentImage
                title={"Self-Service Knowledge Base"}
                comment={"A self-service knowledge base enables customers to find answers to frequently asked " +
                    "questions (FAQ) quickly."}
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

            <SectionPercentQuote
                percent={100}
                subtitle={"satisfaction rate"}
                quote={'"We were originally going to increase the tech support count before Mojo Helpdesk. Now we don’t have to."'}
                author={"Mike Hill, Director, Campus Technology Services - Austin Community College"}
            >
                <ButtonLinkUnderlineAnimated
                    link={"/"}
                    title={"Real case study"}
                />
            </SectionPercentQuote>

            <SectionImageTitleText
                img={'gSuite.png'}
                height={'366'}
                width={'540'}
                title={'Use Mojo Helpdesk With Google Workspace Or Microsoft 365'}
                text={"Integrate Mojo with your organization Single Sign On (SSO) provider such as Microsoft Office " +
                    "365, Google Workspace, Active Directory, LDAP, Classlink and SAML systems."}
                imagePosition={"right"}
            />

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

            <SectionImageTitleText
                img={'schoolkid.jpg'}
                height={'400'}
                width={'540'}
                title={'Did you know that over 90% of teachers self-fund in-class and virtual learning projects? ' +
                    'We want to help. Mojo Helpdesk is allocating 10% of every education sale through August ' +
                    '31st to DonorsChoose. DonorsChoose is the leading nonprofit classroom funding site.'}
                imagePosition={"left"} //left or anything because right is default
            >
                <ButtonLinkUnderlineAnimated
                    title={"Learn More"}
                    link={"https://www.mojohelpdesk.com/blog/2020/07/mojo-helpdesk-funds-teachers-learning-projects/"}>
                </ButtonLinkUnderlineAnimated>
            </SectionImageTitleText>

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
                        link:"https://www.mojohelpdesk.com/blog/2020/06/mojo-helpdesk-update-classlink-integration-better-looking-notifications-and-more/",
                        img:"class-link.png",
                        height:170,
                        width:267,
                        alt:"class-link",
                        body:"Mojo Helpdesk Update: ClassLink integration, better-looking notifications and more"
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
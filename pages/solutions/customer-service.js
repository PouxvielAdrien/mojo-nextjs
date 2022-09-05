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

export default function CustomerService() {
    return (
        <>
            <NavbarMojo/>

            <SectionImageTitleText
                img={'non-profits.jpg'}
                height={'360'}
                width={'540'}
                title={'Build Customer Relationships With Mojo Helpdesk'}
                text={"Delight your customers and they will remain loyal for life."}
                imagePosition={"right"} //left or anything because right is default
            >
                <FourCheckCircle
                    title={"Learn how organizations use Mojo Helpdesk for:"}
                    text={["RESOLVE ISSUES","SELF-HELP","AUTOMATION","SATISFACTION INDEX"]}

                />
                <TwoBigButton/>
            </SectionImageTitleText>

            <SectionImageTitleText
                img={'mojo-all-in-one.png'}
                height={'366'}
                width={'540'}
                title={'Resolve Customers Issues Fast With Mojo Helpdesk'}
                text={"Mojo Helpdesk centralize all customers requests and provide a battery of tools to " +
                    "boost agent efficiency. This includes an internal knowledge base and canned answers allowing " +
                    "agents to search for existing best practices and communicate them quickly to customers. " +
                    "Automation and Mojobots (i.e. triggers) automate repetitive tasks and ad-hoc reports provide " +
                    "deep insights into help desk activity. Mojo Helpdesk is the tool of trade."}
            />

            <SectionImageTitleText
                img={'knowledge-base.png'}
                height={'366'}
                width={'540'}
                title={'Customers find answers fast'}
                text={"The fastest way for your customers to get help is to provide them with a searchable " +
                    "knowledge base. It's like a mini-Google with your content for your own customers. " +
                    "A well done knowledge base with curated frequently asked questions can cut down up to " +
                    "90% of incoming help desk requests."}
                imagePosition={"left"} //left or anything because right is default
            >
                <ButtonLinkUnderlineAnimated
                    title={"Learn more about Mojo Helpdesk knowledge base"}
                    link={"/knowledge-base"}>
                </ButtonLinkUnderlineAnimated>
            </SectionImageTitleText>

            <SectionPercentQuote
                percent={25}
                subtitle={"reduction of incoming requests"}
                quote={'"Mojo Helpdesk knowledge base allows customers to help themselves, ' +
                    'cuttingdown on incoming tickets and saving considerable tech support time."'}
                author={"Philippe Herve, VP Solutions at Sparkcognition"}
            >
                <ButtonLinkUnderlineAnimated
                    title={"Try for free"}
                    link={"https://signup.mojohelpdesk.com/signup/register/"}>
                </ButtonLinkUnderlineAnimated>
            </SectionPercentQuote>

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
                img={'ratings.jpg'}
                height={'366'}
                width={'540'}
                title={'Are Your Customers Happy? Mojo Will Tell You'}
                text={"Keep a finger on the happiness pulse of your customers. Mojo Helpdesk sports a 5-star " +
                    "customer service rating systems that allows customers to give feedback on the service they " +
                    "were provided. Statistics are available by agents and queues providing key insight on what " +
                    "needs to be improved."}
            />

            <BlueSectionTitleThreeButtons/>
            <SectionCardsLink
                title={"What's New At Mojo"}
                cards={[
                    {
                        link:"https://www.mojohelpdesk.com/blog/2020/04/the-importance-of-the-it-team-moves-to-the-forefront-for-connected-health/",
                        img:"healthcare-users.jpg",
                        height:170,
                        width:267,
                        alt:"healthcare-users",
                        body:"The Importance of the IT Team Moves to the Forefront for Connected Health"
                    },
                    {
                        link:"https://www.mojohelpdesk.com/blog/2020/04/how-to-have-a-personal-touch-even-remotely/",
                        img:"shaking-hands.jpg",
                        height:170,
                        width:267,
                        alt:"shaking-hands",
                        body:"How to Have a Personal Touch, Even Remotely"
                    },
                    {
                        link:"https://www.mojohelpdesk.com/blog/2020/03/success-of-distance-learning-relies-on-your-technology/",
                        img:"distance-learning.jpg",
                        height:170,
                        width:267,
                        alt:"distance-learning",
                        body:"Success of Distance Learning Relies on Your Technology"
                    },
                ]}
            />

            <Footer/>

        </>

    );
}
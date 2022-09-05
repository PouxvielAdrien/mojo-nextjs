import React from "react";
import {Card} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Image from "next/image";
import utils from '/styles/utils.module.css'


export default function CaseStudy () {
    return (
        <>

            <section className={"bg-light border-bottom p-5"}>
                <Container>
                    <Card className={"card shadow pe-5 ps-5 pb-5"}>
                        <div className={"px-lg-5"}>

                            <div className={"row justify-content-around p-5"}>
                                <div className={"col-8"}>
                                    <Image
                                        src={`/images/case-study/sona-dermatology.jpg`}
                                        height={121}
                                        width={200}
                                        className=""
                                    />
                                </div>
                                <div className={"col pt-4"}>
                                    <h5>Sona Dermatology &amp; MedSpa</h5>
                                    <span className={utils.extraSmallText}>Todd Alexander,<br/> General Manager - Technology</span>


                                </div>
                            </div>






                            <h3 className={"mb-4"}>Sona Dermatology & MedSpa</h3>
                            <ul>

                                <li><strong>Key data:</strong> 4 agents serve 164 users (and counting as they are new to Mojo) in Sona Dermatology & MedSpa located in North Carolina, USA.</li>
                                <li><strong>Challenge:</strong> Previous ticket management system became another complex application to manage for this healthcare provider.</li>
                                <li><strong>Solution:</strong> Mojo Helpdesk made the ticketing process easy, all staff and doctors want to submit tickets.</li>
                                <li><strong>Results:</strong> Sona can now share more information about their patients using the help center feature as well as keeping organized in their daily processes.</li>
                            </ul>

                            <div className="case-study-subsection pb-3 pt-3"><h4>Challenge: Needed a ticket management system to
                                reduce complexity while providing exceptional patient support</h4><p>Sona
                                Dermatology &amp; MedSpa (Sona), headquartered in Charlotte, North Carolina, provides
                                medical and cosmetic skin care in five states--Arkansas, North Carolina, Tennessee,
                                Texas, and Virginia. Sona focuses on enabling their patients to have healthy skin for
                                life. Sona’s mission is to serve as a “trusted global leader in the medical aesthetics
                                industry by providing clients with affordable services, unsurpassed treatment efficacy
                                and the highest regard for personal safety. Our inspiration comes not only from natural
                                external beauty, but also from the beauty within.”</p><p>In the healthcare field,
                                processes are vital and prolific. Staying on top of patient requirements is an absolute
                                must for good client communication, outcomes and safety. This was a challenge for Sona
                                even though they were using a ticket management system.</p><p>Unfortunately, the system
                                they were using became too arduous. Staff complained often expressing how hard the
                                system was to use. “Our system grew into a cobbled spider web of applications that
                                created so much complexity that it hampered our business and profits,” said Todd
                                Alexander, General Manager of Technology at Sona Dermatology &amp; MedSpa. “Because of
                                this we battled numerous issues daily. We were constantly having to resolve issues
                                associated with system access, passwords, syncing data, outages and workflow
                                interruptions.”</p><p>The internal team found communicating with each other using the
                                previous ticket management system difficult. “Even ticket routing to our other teams was
                                difficult with the previous system,” said Alexander. “We had difficulty tracking down
                                tickets that had been lost as they were routed between agents and departments. We needed
                                another system that would make this easier for us!”</p></div>

                            <div className="case-study-subsection pb-3 pt-3"><h4>A solution at the right size and price that helps
                                address issues fast and is easy for both staff and doctors to use</h4><p>The solution
                                needed to reflect Sona’s commitment to “high quality skin care using leading edge
                                technology and medical expertise – all in a warm, welcoming environment.” The right tool
                                needed to be client-centric. Sona needed a tool that met three critical criteria: it
                                needed to be easy for all users to use, provide a self-service help center for staff,
                                and provide staff visibility to see communications about how to best serve each
                                patient.</p><p>Sona chose Mojo because it met these criteria with the added value of
                                being affordable. The new, protected visibility of communication that staff could view
                                enhanced Sona’ high quality services. “Our users wanted visibility into tickets opened
                                in their office,” said Alexander.“Mojo’s grouping feature allows this and has become a
                                favorite among all centers.”</p><p>“With Mojo we reduced the complexity and found a
                                solution that is sized and priced right for our business,” said Alexander. After Mojo
                                was adopted Alexander said staff noticed the difference. They got better personalized
                                service and they could use the help center to quickly find answers to questions on the
                                website.</p><p>While taking care of patient’s is the first priority, it’s also important
                                for the ticket management system to support the staff. With Mojo, the Sona staff
                                realized improved searchability and automation in their inboxes by using Mojo. “It’s so
                                easy! We like that emails received through Mojo include details of the ticket in the
                                subject line,” said Alexander. “We’re able to address issues much faster this way so
                                that patients know that we care about them. We are all so happy that we switched to
                                Mojo.”</p></div>
                        </div>
                    </Card>
                </Container>
            </section>


        </>
    );
}
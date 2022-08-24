import React from "react";
import NavbarMojo from "../components/mojo/navbar-mojo";
import SectionImageTitleText from "../components/mojo/section-image-title-text";

export default function KnowledgeBase() {
    return (
        <>
            <NavbarMojo/>

            <SectionImageTitleText
                img={'questionanswer.jpg'}
                height={'546'}
                width={'540'}
                title={'Self-Service Knowledge Base'}
                text={"Help customers or employees to find answers using Mojo self-service knowledge base. " +
                    "A well curated knowledge base can cut down the number of new tickets."}
            />
        </>

    );
}
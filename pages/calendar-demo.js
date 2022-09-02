import React from "react";
import NavbarMojo from "../components/navbar-mojo";
import SectionImageTitleText from "../components/section/section-image-title-text";

export default function CalendarDemo() {
    return (
        <>
            <NavbarMojo/>

            <SectionImageTitleText
                img={'demo.jpg'}
                height={'446'}
                width={'540'}
                title={'Schedule Your Personalized Demo'}
                text={"Wondering how Mojo can help your organization or how easy is it to get started? Mojo Helpdesk team offers one-on-one free demos and consultations."}
            />
        </>

    );
}
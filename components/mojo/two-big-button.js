import Link from "next/link";
import React from "react";

export default function TwoBigButton () {
    return (

        <>
            <div className="d-flex flex-column flex-md-row pb-3">
                <Link href="https://signup.mojohelpdesk.com/signup/register/90?referer=website">
                     <button className="btn btn-lg btn-danger mr-0 mr-md-2 fw-light text-uppercase me-2">
                         Try for free
                     </button>
                </Link>
                <Link href={"/calendar-demo"}>
                    <button className="btn btn-lg btn-outline-primary mt-2 mt-md-0 fw-light text-uppercase">
                        Book a Demo
                    </button>
                </Link>
            </div>
        </>
    );
}
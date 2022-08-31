import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";
import utils from "../../styles/utils.module.css";

export default function BlueSectionTitleThreeButtons(props) {

    return (
        <section className={`pt-5 pb-5 border-bottom  ${utils.blueSection}`}>
            <div className="container">
                <div className="text-center text-white">

                    <h2 className="fw-bold">Sign up for Mojo Helpdesk today</h2>
                    <div className="mt-5">
                        <Link href="https://signup.mojohelpdesk.com/signup/register/90?referer=website">
                            <button className="btn btn-lg btn-danger fw-light text-uppercase me-2">
                                Try for free
                            </button>
                        </Link>

                        <Link href={"/calendar-demo"}>
                            <button className="btn btn-lg btn-outline-light fw-light text-uppercase me-2">
                                Book a Demo
                            </button>
                        </Link>

                        <Link href={"/calendar-demo"}>
                            <button className="btn btn-lg btn-outline-light fw-light text-uppercase">
                                Attend a webinar
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );

}
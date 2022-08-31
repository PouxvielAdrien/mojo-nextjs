import React from "react";
import Image from "next/image";
import Link from "next/link";


/**
 *     When called, this function needs to have input:
 *     <SectionCardsLink
 *         title={"Title"}
 *         cards={[
 *             {
 *                 link:"https://www.example.com/",
 *                 img:"image.png",
 *                 height:168,
 *                 width:265,
 *                 alt:"image",
 *                 body:"text ..."
 *             }]}
 *     />
 */
export default function SectionCardsLink (props) {



    const cardsResults=[]

    {props.cards.forEach((cards) => {
        cardsResults.push (
            <div className={`col-12  col-sm-6  col-md-6 col-lg-3 p-3  mx-lg-4`} >
                <Link href={cards.link}>
                    <div className="card shadow rounded p-2">
                        <Image
                            src={`/images/cards/${cards.img}`}
                            height={cards.height}
                            width={cards.width}
                            alt={`${cards.alt} image`}
                            className="rounded border"
                        />
                        <div className="pe-2 ps-2 pb-3">
                            <h6 className={"text-capitalize mt-2"}>{cards.body}</h6>
                        </div>
                        <div className={"row justify-content-around pt-2"}>
                            <div className={"col-8"}>
                                <p className={"text-uppercase mt-2 fw-light"}>Learn More</p>
                            </div>
                            <div className={"col-2 pt-1 pe-3"}>
                                <svg className="svg-inline--fa fa-arrow-right fa-w-14 ml-auto" width={15} height={15} aria-hidden="true"
                                     focusable="false" data-prefix="fas" data-icon="arrow-right" role="img"
                                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                                    <path fill="currentColor"
                                          d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    })}


    return (
        <section className="mt-5 pt-5 pb-5 border-bottom">
            <div className="container ps-5 pe-5">

                <h2 className={"text-center"}>{props.title}</h2>

                <div className={"row justify-content-between"}>
                    {cardsResults}
                </div>

            </div>
        </section>
    );

}
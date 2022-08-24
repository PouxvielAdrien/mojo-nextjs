import React from "react";
import ButtonLinkUnderlineAnimated from "../button-link-underline-animated";
import Image from "next/image";




export default function SectionImageTitleText(props ) {

// const imageOrder = componentOrder(props.imagePosition).order.imageOrder
// const textOrder = componentOrder(props.imagePosition).order.textOrder
const {imageOrder, textOrder} =  componentOrder(props.imagePosition).order

    return (
            <section className="pt-5 mt-5 mb-5 pb-5 border-bottom">
                <div className="container">
                    <div className="row align-items-center">


                            <div className={`col-md-6 ${imageOrder}`}>
                                <Image
                                    priority
                                    src={`/images/${props.img}`}
                                    height={props.height}
                                    width={props.width}
                                    alt="image"
                                    className="img-fluid rounded shadow"
                                />
                            </div>

                            <div className={`col-md-6 ${textOrder}`}>
                                <h2 className="mb-3">{props.title}</h2>
                                <div className="mb-3">{props.text}</div>

                                <ButtonLinkUnderlineAnimated
                                    title={"Try for free"}
                                    link={"https://signup.mojohelpdesk.com/signup/register/"}
                                />
                            </div>



                    </div>
                </div>
            </section>
        );

}




export function componentOrder(imagePosition) {
    let imageOrder = ''
    let textOrder = ''
    if (imagePosition === "left" ){
        imageOrder = 'order-1'
        textOrder = 'order-2'

    }
    else {
        imageOrder = 'order-2'
        textOrder = 'order-1'
    }

    return {
        order: {
            imageOrder,
            textOrder
        },
    };
}
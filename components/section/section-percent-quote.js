import React from "react";
import utils from "../../styles/utils.module.css";

export default function SectionPercentQuote(props){
    return (
        <section className="pt-5 mt-5  pb-5 border-bottom">
            <div className="container">
                <div className="row">
                    <div className={`col-md-3 offset-md-1 pb-2 `}>
                        <div className="mt-2 mr-5 p-0 border-dark border-top">
                            <div className="display-1 fw-bold">{props.percent}%</div>
                            <div><b>{props.subtitle}</b></div>
                        </div>
                    </div>

                    <div className={`col-md-7 pb-2`}>
                        <p className={`pb-3 ${utils.percentQuote}`}>
                            {props.quote}
                        </p>
                        <div className="text-muted">{props.author}</div>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col-12 d-flex justify-content-center"}>
                        {/*Button Link*/}
                        {props.children}
                    </div>

                </div>
            </div>
        </section>
    );
}
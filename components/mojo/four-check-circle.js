import Link from "next/link";
import React from "react";
import utils from "/styles/utils.module.css"

export default function FourCheckCircle(props) {
    return (
        <>
            <div className="mt-4">
                <h4 className="mb-4">{props.title}</h4>
                <div className="row mb-4">
                    <div className="col-md p-0">
                        <ul>
                            <li className={`${utils.li}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                     className="bi bi-check-circle-fill me-1" viewBox="0 0 16 16">
                                    <path
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                </svg>
                                <Link href="/"><span className="fw-bold text-uppercase">{props.text[0]}</span></Link>

                            </li>
                            <li className={utils.li}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                     className="bi bi-check-circle-fill me-1" viewBox="0 0 16 16">
                                    <path
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                </svg>
                                <Link href={"/"}><span className="fw-bold text-uppercase">{props.text[1]}</span></Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md p-0">
                        <ul>
                            <li className={utils.li}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                     className="bi bi-check-circle-fill me-1" viewBox="0 0 16 16">
                                    <path
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                </svg>
                                <Link href="/"><span className="fw-bold text-uppercase">{props.text[2]}</span></Link>
                            </li>
                            <li className={utils.li}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                     className="bi bi-check-circle-fill me-1" viewBox="0 0 16 16">
                                    <path
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                </svg>
                                <Link href="/"><span className="fw-bold text-uppercase">{props.text[3]}</span></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
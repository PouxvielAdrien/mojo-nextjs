import Link from "next/link";
import React from "react";
import Container from "react-bootstrap/Container";

export default function SectionThreeIcons () {
    return (

        <section className={"bg-light border-bottom p-5"}>
            <Container>
               <div className={"row p-5"}>
                   <div className="col col-sm-12 col-md-12 col-lg-4 px-2">
                       <div className={"item"}>
                           <svg className="svg-inline--fa fa-user-shield fa-w-20 icon" aria-hidden="true" focusable="false"
                                data-prefix="fas" width={48} height={48} data-icon="user-shield" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 640 512" data-fa-i2svg="">
                               <path fill="currentColor"
                                     d="M622.3 271.1l-115.2-45c-4.1-1.6-12.6-3.7-22.2 0l-115.2 45c-10.7 4.2-17.7 14-17.7 24.9 0 111.6 68.7 188.8 132.9 213.9 9.6 3.7 18 1.6 22.2 0C558.4 489.9 640 420.5 640 296c0-10.9-7-20.7-17.7-24.9zM496 462.4V273.3l95.5 37.3c-5.6 87.1-60.9 135.4-95.5 151.8zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm96 40c0-2.5.8-4.8 1.1-7.2-2.5-.1-4.9-.8-7.5-.8h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c6.8 0 13.3-1.5 19.2-4-54-42.9-99.2-116.7-99.2-212z"></path>
                           </svg>
                           <h4 className={""}>Data Security</h4>
                           <p className={"text-muted"}>Mojo Helpdesk is HIPAA and GDPR compliant. All network
                               transfers are encrypted and data is encrypted at rest.
                           </p>
                       </div>
                   </div>

                   <div className="col col-sm-12 col-md-12 col-lg-4 px-2">
                       <div className="item">
                           <svg className="svg-inline--fa fa-tachometer-alt fa-w-18 icon" aria-hidden="true"
                                focusable="false" width={48} height={48} data-prefix="fas" data-icon="tachometer-alt" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg="">
                               <path fill="currentColor"
                                     d="M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm0 64c14.71 0 26.58 10.13 30.32 23.65-1.11 2.26-2.64 4.23-3.45 6.67l-9.22 27.67c-5.13 3.49-10.97 6.01-17.64 6.01-17.67 0-32-14.33-32-32S270.33 96 288 96zM96 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm48-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm246.77-72.41l-61.33 184C343.13 347.33 352 364.54 352 384c0 11.72-3.38 22.55-8.88 32H232.88c-5.5-9.45-8.88-20.28-8.88-32 0-33.94 26.5-61.43 59.9-63.59l61.34-184.01c4.17-12.56 17.73-19.45 30.36-15.17 12.57 4.19 19.35 17.79 15.17 30.36zm14.66 57.2l15.52-46.55c3.47-1.29 7.13-2.23 11.05-2.23 17.67 0 32 14.33 32 32s-14.33 32-32 32c-11.38-.01-20.89-6.28-26.57-15.22zM480 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"></path>
                           </svg>
                          <h4>Get Started In Minutes</h4>
                           <p className="text-muted">Mojo Helpdesk is ready to receive tickets from the web
                           and by email in just a few clicks.
                           </p>
                       </div>
                   </div>
                   <div className="col col-sm-12 col-md-12 col-lg-4 px-2">
                       <div className="item">
                           <svg className="svg-inline--fa fa-search-dollar fa-w-16 icon" aria-hidden="true"
                                focusable="false" width={48} height={48} data-prefix="fas" data-icon="search-dollar" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                               <path fill="currentColor"
                                     d="M505.04 442.66l-99.71-99.69c-4.5-4.5-10.6-7-17-7h-16.3c27.6-35.3 44-79.69 44-127.99C416.03 93.09 322.92 0 208.02 0S0 93.09 0 207.98s93.11 207.98 208.02 207.98c48.3 0 92.71-16.4 128.01-44v16.3c0 6.4 2.5 12.5 7 17l99.71 99.69c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.59.1-33.99zm-297.02-90.7c-79.54 0-144-64.34-144-143.98 0-79.53 64.35-143.98 144-143.98 79.54 0 144 64.34 144 143.98 0 79.53-64.35 143.98-144 143.98zm27.11-152.54l-45.01-13.5c-5.16-1.55-8.77-6.78-8.77-12.73 0-7.27 5.3-13.19 11.8-13.19h28.11c4.56 0 8.96 1.29 12.82 3.72 3.24 2.03 7.36 1.91 10.13-.73l11.75-11.21c3.53-3.37 3.33-9.21-.57-12.14-9.1-6.83-20.08-10.77-31.37-11.35V112c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v16.12c-23.63.63-42.68 20.55-42.68 45.07 0 19.97 12.99 37.81 31.58 43.39l45.01 13.5c5.16 1.55 8.77 6.78 8.77 12.73 0 7.27-5.3 13.19-11.8 13.19h-28.1c-4.56 0-8.96-1.29-12.82-3.72-3.24-2.03-7.36-1.91-10.13.73l-11.75 11.21c-3.53 3.37-3.33 9.21.57 12.14 9.1 6.83 20.08 10.77 31.37 11.35V304c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-16.12c23.63-.63 42.68-20.54 42.68-45.07 0-19.97-12.99-37.81-31.59-43.39z"></path>
                           </svg>
                           <h4>Cost Effective</h4>
                           <p className="text-muted">No need to break the bank. Mojo costs up to 90% less than
                           the competition.
                           </p>
                       </div>
                   </div>
               </div>
            </Container>
        </section>
    );
}
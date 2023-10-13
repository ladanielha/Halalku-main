import React from "react";
import Navbar from "@/Components/Navbar";
import aboutcs from "@/resources/css/aboutcs";
import aboutus from "@/resources/js/javascript/aboutus";

const Meetus = (props) => {
    return (
        <>
            <div>
                <Navbar user={props.auth.user} />
            </div>
            <div className="responsive-container-block outer-container">
                <div className="responsive-container-block inner-container">
                    <p className="text-blk heading-text">
                        Dream team
                    </p>
                    <div className="responsive-container-block card-container">
                        <div className="btn">
                            <div className="swiper-button-nexts">
                                <img className="arrow-right" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Path.svg" />
                            </div>
                            <div className="swiper-button-prevs">
                                <img className="arrow-left" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Path.svg" />
                            </div>
                        </div>
                        <div className="swiper-container team-swiper">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="card">
                                        <img className="team-member-image" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET3.jpg" />
                                        <p className="text-blk name">
                                            Gustavo Workman
                                        </p>
                                        <p className="text-blk position">
                                            CEO
                                        </p>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="card">
                                        <img className="team-member-image" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET4.jpg" />
                                        <p className="text-blk name">
                                            Gustavo Workman
                                        </p>
                                        <p className="text-blk position">
                                            CEO
                                        </p>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="card">
                                        <img className="team-member-image" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET5.jpg" />
                                        <p className="text-blk name">
                                            Gustavo Workman
                                        </p>
                                        <p className="text-blk position">
                                            CEO
                                        </p>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="card">
                                        <img className="team-member-image" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET3.jpg" />
                                        <p className="text-blk name">
                                            Gustavo Workman
                                        </p>
                                        <p className="text-blk position">
                                            CEO
                                        </p>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="card">
                                        <img className="team-member-image" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET4.jpg" />
                                        <p className="text-blk name">
                                            Gustavo Workman
                                        </p>
                                        <p className="text-blk position">
                                            CEO
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-pagination">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Meetus;


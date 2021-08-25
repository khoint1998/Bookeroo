import './ContactUs.css'
import book_1 from "../../pics/book-1.jpg";
import book_2 from "../../pics/book-2.jpg";
import book_3 from "../../pics/book-3.jpg";
import book_4 from "../../pics/book-4.jpg";
import book_5 from "../../pics/book-5.jpg";
import green_line from "../../pics/green_line.png";
import DevCard from '../DevCard/DevCard';

import React from 'react';

function AboutUs() {
    return (
        <div className="page">
            <div className="row">
                <div className="col_1">
                    <div className="about-slogan">
                        <h4>Best Sellings? Contact us~~</h4>
                        <h2>We got you</h2>
                        <h2 id="h2_blue"> covered</h2>
                        <div id="green_line_container">
                            <img src={green_line} alt="book"></img>
                        </div>
                        
                    </div>
                </div>
                <div className="vertical_line"></div>
                <div className="col">
                    <div className="devCards_col">
                        <DevCard name="Derren" role="Scrum Master" id="s7726728" profile="/profile_sarthak.png"></DevCard>
                        <DevCard name="Sarthak" role="Frontend Dev" id="s3816605" profile="../../pics/profile_sarthak.png"></DevCard>
                    </div>
                    <div className="devCards_col">
                        <div id="single_card">
                            <DevCard name="Khoi" role="Lead Dev" id="s3824293" profile="../../pics/profile_sarthak.png"></DevCard>
                        </div>
                        
                    </div>
                    <div className="devCards_col">
                        <DevCard name="Liam" role="Product Manager" id="s3678755" profile="../../pics/profile_sarthak.png"></DevCard>
                        <DevCard name="Chen Wang" role="Backend Dev" id="s3678755" profile="../../pics/profile_sarthak.png"></DevCard>
                    </div>
                    
                </div>
            </div>


            <div className="row">
                <div className="image_container">
                        <div className="image_box_huge">
                            <img className="book_1" src={book_5} alt="book"></img>
                        </div>
                    <div className="image_set">
                        <div className="image_row_small">
                            <div className="image_box_small">
                                <img className="book_1" src={book_2} alt="book"></img>
                            </div>
                            <div className="image_box_small">
                                <img className="book_1" src={book_3} alt="book"></img>
                            </div>
                        </div>

                        <div className="image_row_large">
                            <img className="book_1" src={book_4} alt="book"></img>
                        </div>

                    </div>
                    <div className="image_set">
                        <div className="image_row_large">
                            <img className="book_1" src={book_1} alt="book"></img>
                        </div>
                        <div className="image_row_small">
                            <div className="image_box_small">
                                <img className="book_1" src={book_2} alt="book"></img>
                            </div>
                            <div className="image_box_small">
                                <img className="book_1" src={book_3} alt="book"></img>
                            </div>
                        </div>

                    </div>

                    <div className="image_set">

                        <div className="image_row_small">
                            <div className="image_box_small">
                                <img className="book_1" src={book_2} alt="book"></img>
                            </div>
                            <div className="image_box_small">
                                <img className="book_1" src={book_3} alt="book"></img>
                            </div>
                        </div>

                        <div className="image_row_small">
                            <div className="image_box_small">
                                <img className="book_1" src={book_1} alt="book"></img>
                            </div>
                            <div className="image_box_small">
                                <img className="book_1" src={book_4} alt="book"></img>
                            </div>
                        </div>

                        <h4>Find out more on Bookeroo</h4>

                        <div id="green_line_container_small">
                            <img src={green_line} alt="book"></img>
                        </div>

                    </div>

                    

                </div>
            </div>
        </div>
    )
}

export default AboutUs;

import './AboutUs.css'
import React from 'react';

function AboutUs() {
    return (
        <div className="page">
            <div className="row">
                <div className="col_1">
                    {/* slogan */}
                    <div className="about-slogan">
                        <h4>Best Sellings? Contact us~~</h4>
                        <h2>We got you</h2>
                        <h2 id="h2_blue"> covered</h2>
                        <div id="green_line_container">
                            <img src="/pics/green_line.png" alt="book"></img>
                        </div>
                        
                    </div>
                </div>
                <div className="vertical_line"></div>
                {/* comment from user */}
                <div className="col">
                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”</p>
                </div>
            </div>


            <div className="row">
                {/* picture listing */}
                <div className="image_container">
                        <div className="image_box_huge">
                            <img className="book_1" src="./pics/book-5.jpg" alt="book"></img>
                        </div>
                    <div className="image_set">
                        <div className="image_row_small">
                            <div className="image_box_small">
                                <img className="book_1" src="./pics/book-4.jpg" alt="book"></img>
                            </div>
                            <div className="image_box_small">
                                <img className="book_1" src="./pics/book-1.jpg" alt="book"></img>
                            </div>
                        </div>

                        <div className="image_row_large">
                            <img className="book_1" src="./pics/book-2.jpg" alt="book"></img>
                        </div>

                    </div>
                    <div className="image_set">
                        <div className="image_row_large">
                            <img className="book_1" src="./pics/book-3.jpg" alt="book"></img>
                        </div>
                        <div className="image_row_small">
                            <div className="image_box_small">
                                <img className="book_1" src="./pics/book-5.jpg" alt="book"></img>
                            </div>
                            <div className="image_box_small">
                                <img className="book_1" src="./pics/book-4.jpg" alt="book"></img>
                            </div>
                        </div>

                    </div>

                    <div className="image_set">

                        <div className="image_row_small">
                            <div className="image_box_small">
                                <img className="book_1" src="./pics/book-1.jpg" alt="book_1"></img>
                            </div>
                            <div className="image_box_small">
                                <img className="book_1" src="./pics/book-2.jpg" alt="book_2"></img>
                            </div>
                        </div>

                        <div className="image_row_small">
                            <div className="image_box_small">
                                <img className="book_1" src="./pics/book-4.jpg" alt="book_4"></img>
                            </div>
                            <div className="image_box_small">
                                <img className="book_1" src="./pics/book-3.jpg" alt="book_3"></img>
                            </div>
                        </div>

                        <h4>Find out more on Bookeroo</h4>

                        <div id="green_line_container_small">
                            <img src="./pics/green_line.png" alt="green_line"></img>
                        </div>

                    </div>

                    

                </div>
            </div>
        </div>
    )
}

export default AboutUs;

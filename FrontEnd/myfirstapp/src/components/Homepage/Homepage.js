import React from 'react';
import DevCard from '../DevCard/DevCard';
import './Homepage.css'


function Homepage() {
    return (
        <div className="homepage--page">
            <div className="homepage--row">
                <div className="homepage--col_1_1">
                    <div className="homepage--header_s">Shop your favorite books, all in one place</div>
                    <div className="homepage--header_l">Your best Bookstore</div>
                    <div className="homepage--header_l">in the <span className="homepage--blue">town</span></div>
                    <div id="homepage--green_line_container">
                            <img src="/pics/green_line.png" alt="book"></img>
                    </div>
                </div>
                <div className="homepage--col_1_2">
                    <div className="homepage--image_container">
                        <img src="/pics/bookstore.png" alt="bookstore"></img>
                    </div>
                </div>
            </div>
            <div className="homepage--row">
                <div className="homepage--col_2_1">
                        
                        <div className="devCards_col">
                            <DevCard name="Derren" role="Scrum Master" id="s7726728" profile="/pics/profile_derren.png"></DevCard>
                            <DevCard name="Sarthak" role="Frontend Dev" id="s3816605" profile="/pics/profile_sarthak.png"></DevCard>
                        </div>
                        <div className="devCards_col">
                            <div id="single_card">
                                <DevCard name="Khoi" role="Lead Dev" id="s3824293" profile="/pics/profile_khoi.png"></DevCard>
                            </div>

                        </div>
                        <div className="devCards_col">
                            <DevCard name="Liam" role="Product Manager" id="s3678755" profile="/pics/profile_liam.png"></DevCard>
                            <DevCard name="Chen Wang" role="Backend Dev" id="s3678755" profile="/pics/profile_chen.png"></DevCard>
                        </div>

                </div>
                <div className="homepage--col_2_2">
                    <div>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”</div>
                </div>
            </div>
        </div>
    )
}

export default Homepage;
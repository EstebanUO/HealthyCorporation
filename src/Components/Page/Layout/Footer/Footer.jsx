import React from 'react';
// import { Nav } from '../../../UI/Nav/Nav';
import logo from '../../../Image/logo.png'
import face from '../../../Image/facebook.png'
import twii from '../../../Image/twitter.png'
import linke from '../../../Image/linkedin.png'
import dri from '../../../Image/dribbble.png'

export const Footer = () => {
    return (
        <div className="content_down">
            <footer className="site-footer">
                <div className="container">
                
                    <div className="row2">
                        <a href=""><img src={logo} alt="Logo" className='image_footer' /></a>
                        <div className="content_footer">
                            <h6 className="text_down">Información</h6>
                            <p className="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
                        </div>
                    </div>
                    <hr className='linea'/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <br /><p className="copyright-text">Copyright &copy; 2022 All Rights Reserved by-  
                                <a href="#">Healhty Corporation</a>.
                            </p>
                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <ul class="social-icons">
                                <li><a  href="#"><img src={face} alt="facebook" className="facebook" /></a></li>
                                <li><a  href="#"><img src={twii} alt="twitter" className="twitter"/></a></li>
                                <li><a  href="#"><img src={linke} alt="linkedin" className="dribbble"/></a></li>
                                <li><a href="#"><img src={dri} alt="dribbble" className="linkedin" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

    )
}

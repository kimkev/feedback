import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/Footer.css'
//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedin, faTwitter, faDribbble } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {

    const year = new Date().getFullYear()

    return (
        <footer class="site-footer">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-6">
                        <h6>About</h6>
                        <p class="text-justify">Kevin Kim Started learning about the software world in late 2016.
                        Took a 3 year college program to understand it better.
                        Currently expanding my knowledge by building projects.
                        </p>
                    </div>
                    <div class="col-xs-6 col-md-3">
                        <h6>Project Categories</h6>
                        <ul class="footer-links">
                            <li><a href="https://kimkev.github.io/assets/html/ReactPage.html">Basic React</a></li>
                            <li><a href="http://18.220.198.9/">MERN Feedback</a></li>
                            <li><a href="https://kimkev.itch.io/">Unity Games</a></li>
                        </ul>
                    </div>
                    <div class="col-xs-6 col-md-3">
                        <h6>Quick Links</h6>
                        <ul class="footer-links">
                            <li><a href="https://kimkev.github.io/">Website</a></li>
                            <li><a href="mailto:k6yk08@gmail.com">Contact Me</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Sitemap</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-sm-6 col-xs-12">
                        <p class="copyright-text">Copyright &copy; {year} &nbsp;
                        <a href="https://kimkev.github.io/">Kevin Kim</a>.
                        </p>
                    </div>
                    <div class="col-md-4 col-sm-6 col-xs-12">
                        <ul class="social-icons">
                            <li><a className="facebook" href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                            <li><a className="twitter" href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                            <li><a className="dribbble" href="#"><FontAwesomeIcon icon={faDribbble} /></a></li>
                            <li><a className="linkedin" href="https://www.linkedin.com/in/kimkevi/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
import '../css/footerStyles.css'
import { AiFillGithub, AiFillLinkedin, AiFillRedditSquare, AiFillTikTok, AiFillCopyrightCircle, AiFillShop, AiFillMail, AiFillPhone, AiFillPrinter } from "react-icons/ai";

export default function Footer(){

    return <footer className="footer">

        <div className="social">

            <p className='media-title'>Get connected with us on social networks:</p>

            <div className='media-icons'>

                <AiFillGithub className='icon'/>

                <AiFillLinkedin className='icon'/>

                <AiFillRedditSquare className='icon'/>

                <AiFillTikTok className='icon' />

            </div>

        </div>

        <div className='company'>

            <div className='company-info'>

                <h1 className='company-title'>Jobs Boarding Company</h1>

                <hr className='company-divider'></hr>

                <p className='company-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis sodales sem, non malesuada velit fringilla vitae. Aliquam erat volutpat. Etiam porttitor sem in turpis scelerisque tempus. Duis eget dui sed velit lobortis aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non nisl ante. Mauris mauris ligula, sodales nec molestie eget, vestibulum sit amet lectus. Sed scelerisque dolor lectus, nec vestibulum leo finibus at. </p>

            </div>

            <div className='products-section'>

                <h1 className='products-title'>Products</h1>

                <hr className='products-divider'></hr>

                <div className='products-list'>

                    <p className='product'>Job Automatic Seeker</p>

                    <p className='product'>Tutorials</p>

                    <p className='product'>Apps</p>

                    <p className='product'>Premium Subscription</p>

                </div>

            </div>

            <div className='links-section'>

                <h1 className='links-title'>Useful Links</h1>

                <hr className='links-divider'></hr>

                <div className='links-list'>

                    <p className='link'>Your Account</p>

                    <p className='link'>Become an affiliate</p>

                    <p className='link'>Shipping rates</p>

                    <p className='link'>Help</p>

                </div>

            </div>

            <div className='contact-section'>

                <h1 className='contact-title'>Contact</h1>

                <hr className='contact-divider'></hr>

                <div className='contact-list'>

                    <div className='contact'>

                        <AiFillShop />

                        <p className='contact-item'>New York,NY 1002,US</p>

                    </div>

                    <div className='contact'>

                        <AiFillMail />

                        <p className='contact-item'>jobs@board.com</p>

                    </div>

                    <div className='contact'>

                        <AiFillPhone />

                        <p className='contact-item'>+01 234 567 88  </p>

                    </div>

                    <div className='contact'>

                    <AiFillPrinter />

                    <p className='contact-item'>+01 234 567 89</p>

                    </div>


                </div>

            </div>



        </div>

        <div className='copyright'>

            <AiFillCopyrightCircle className='copyright-icon'/>

            <h3 className='copyright-dec'>
                2025 Copyright:

                <a href='https://github.com/GonzalezNavarroOscar' className='copyright-link'>https://github.com/GonzalezNavarroOscar</a>
                
            </h3>

        </div>

    </footer>
}
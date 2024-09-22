import Logo from '../assets/img/Logo.png'
import Contact from '../assets/img/Group3.png'

import Instagram from '../assets/img/Instagram.png'
import Whats from '../assets/img/Whats.png'
import Facebook from '../assets/img/Facebook.png'
import LinkedIn from '../assets/img/LinkedIn.png'

export default function Footer(){
    return(
        <>
        
        <footer>
            <div className='footerTop'>
                <div className='footerTop_Left'>
                    <div className='footerTop_logo'>
                        <img src={Logo} alt="" />
                    </div>
                    <div className='footerTop_email'>
                        <a href="">itsupportgroup@gmail.com</a>
                    </div>
                    <div className='footerTop_socials'>
                        <a href=""><img src={Instagram} alt="" /></a>
                        <a href=""><img src={Whats} alt="" /></a>
                        <a href=""><img src={Facebook} alt="" /></a>
                        <a href=""><img src={LinkedIn} alt="" /></a>
                    </div>
                    <div className='footerTop_button'>
                        <button type="button"><p>CONTACT US</p><img src={Contact} alt="" /></button>
                    </div>
                </div>
                <div className='footerTop_Mid'>
                    <div className='footerTop_officeText'>
                        <p>our offices</p>
                    </div>
                    <div className='footerTop_officeMinsk'>
                        <p>In Minsk</p>
                        <p>+ 375 (29) 675-12-22</p>
                        <p>44 Karl Liebknecht Street, floor 5, office 522</p>
                    </div>
                    <div className='footerTop_officeVilnius'>
                        <p>In Vilnius</p>
                        <p>+370 (52) 654-280-28</p>
                        <p>44 Karl Liebknecht Street, floor 5, office 522</p>
                    </div>
                </div>
                <div className='footerTop_Right'>
                    <div className='footerTop_service'>
                        <p>services</p>
                    </div>
                    <div className='footerTop_links'>
                        <ul>
                            <li><a href="">Technical Support</a></li>
                            <li><a href="">Frontend Development</a></li>
                            <li><a href="">Backend Development</a></li>
                            <li><a href="">Mobile app development</a></li>
                            <li><a href="">UI/UX Design</a></li>
                            <li><a href="">Software Development</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='footerBottom'>
                <p>Development by IT Support Group.</p>
                <p>Data Privacy.</p>
                <p>© 2023 IT Support Group</p>
            </div>
        </footer>

        </>
    )
}
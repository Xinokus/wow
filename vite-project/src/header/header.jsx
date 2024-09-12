import Logo from '../assets/img/Logo (1).png'
import Language from '../assets/img/Group2.png'
import Contact from '../assets/img/Group3.png'

function Header() {
  return (
    <>
      <header>
        <nav>
          <div className='logo'>
            <img src={Logo} alt="" />
          </div>
          <div className='links_buttons'>
            <div className='links'>
              <a href=""><p>about</p></a>
              <a href=""><p>our services</p></a>
              <a href=""><p>job opennings</p></a>
            </div>
            <div className='buttons'>
              <div className='button_eng'>
                <button type="button"><p>EN</p><img src={Language} alt="" /></button>
              </div>
              <div className='button_contact'>
                <button type="button"><p>CONTACT US</p><img src={Contact} alt="" /></button>
              </div>
            </div>
          </div>
        </nav>
        <div className='main_header'>
          <div className='header_top'>
            <div className='header_top_text'>
              <p>Developing IT solutions to scale up your business</p>
            </div>
          </div>
          <div className='header_bottom'>
            <div className='header_bottom_button'>
              <button><p>ESTIMATE PROJECT</p></button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header

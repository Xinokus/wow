import { photos } from './main'
import { titles } from './main'
import { content } from './button/button'
import { useState } from 'react'
import { tech_descs } from './main'
import { workings } from './main'

import SectFiveLeft from '../assets/img/SectFiveLeft.png'
import SectFiveMid from '../assets/img/SectFiveMid.png'
import SectFiveRight from '../assets/img/SectFiveRight.png'

import ButtonSectionFour from './buttonSectionFour/button'
import Button from './button/button'
import JSIcon from '../assets/img/Icon_1.png'
import Contact from '../assets/img/buttonContact.png'
import Send from '../assets/img/send.png'
import File from '../assets/img/file.png'

function Main() {
    const [con, setCon] = useState('Close-Knited fuck')
    const [con2, setCon2] = useState('fuck')
    

    function handleClick(type, type2){
        console.log('cum', type, type2)
        setCon(type)
        setCon2(type2)
    }

    function toggleClass(number){
            let buttonsSectFourTitle = document.getElementsByClassName('titleSectFour')
            let buttonsSectFour = document.getElementsByClassName('buttonSectionFour')
            let buttonsSectFourDiv = document.getElementsByClassName('buttonDiv')
            let imgsFuck = document.getElementsByClassName('four_img_inside')
            let buttonBackers = document.getElementsByClassName('buttonBacker')

            buttonsSectFourTitle[0].className='titleSectFour'
            buttonsSectFour[0].className='buttonSectionFour'
            buttonsSectFourDiv[0].className='buttonDiv'
            
            buttonsSectFourTitle[1].className='titleSectFour'
            buttonsSectFour[1].className='buttonSectionFour'
            buttonsSectFourDiv[1].className='buttonDiv'

            buttonsSectFourTitle[2].className='titleSectFour'
            buttonsSectFour[2].className='buttonSectionFour'
            buttonsSectFourDiv[2].className='buttonDiv'

            buttonsSectFourTitle[3].className='titleSectFour'
            buttonsSectFour[3].className='buttonSectionFour'
            buttonsSectFourDiv[3].className='buttonDiv'

            buttonsSectFourTitle[4].className='titleSectFour'
            buttonsSectFour[4].className='buttonSectionFour'
            buttonsSectFourDiv[4].className='buttonDiv'

            buttonsSectFourTitle[5].className='titleSectFour'
            buttonsSectFour[5].className='buttonSectionFour'
            buttonsSectFourDiv[5].className='buttonDiv'

            buttonsSectFourTitle[6].className='titleSectFour'
            buttonsSectFour[6].className='buttonSectionFour'
            buttonsSectFourDiv[6].className='buttonDiv'

            buttonsSectFourTitle[7].className='titleSectFour'
            buttonsSectFour[7].className='buttonSectionFour'
            buttonsSectFourDiv[7].className='buttonDiv'

            buttonsSectFourTitle[number].className='titleSectFour activeTitle'
            buttonsSectFour[number].className='buttonSectionFour buttonSectionFourActive'
            buttonsSectFourDiv[number].className='buttonDiv buttonDivActive'  

            imgsFuck[0].className = 'four_img_inside'
            imgsFuck[1].className = 'four_img_inside'
            imgsFuck[2].className = 'four_img_inside'
            imgsFuck[3].className = 'four_img_inside'
            imgsFuck[4].className = 'four_img_inside'
            imgsFuck[5].className = 'four_img_inside'
            imgsFuck[6].className = 'four_img_inside'
            imgsFuck[7].className = 'four_img_inside'

            imgsFuck[number].className = 'four_img_inside invis'

            buttonBackers[0].className = 'buttonBacker'
            buttonBackers[1].className = 'buttonBacker'
            buttonBackers[2].className = 'buttonBacker'
            buttonBackers[3].className = 'buttonBacker'
            buttonBackers[4].className = 'buttonBacker'
            buttonBackers[5].className = 'buttonBacker'
            buttonBackers[6].className = 'buttonBacker'
            buttonBackers[7].className = 'buttonBacker'
            
            buttonBackers[number].className = 'invisibleBacker buttonBacker'
    }



    function SectThreePop(number){
        let Block = document.getElementsByClassName('block')
        let mainTop = document.getElementsByClassName('three_main_top')
        let titlesP = document.getElementsByClassName('titleP')
        

        if(number == 0|| number == 1){
            mainTop[0].className = 'three_main_top extend'
        }
        else if(number == 2|| number == 3|| number == 4){
            mainTop[0].className = 'three_main_top'
        }

        titlesP[0].innerHTML = workings[0].text
        titlesP[1].innerHTML = workings[0].text
        titlesP[2].innerHTML = workings[0].text
        titlesP[3].innerHTML = workings[0].text
        titlesP[4].innerHTML = workings[0].text

        titlesP[number].innerHTML = workings[0].text1

        Block[0].className = 'three_main_top_two block'
        Block[1].className = 'three_main_top_two block'
        Block[2].className = 'three_main_top_two block'
        Block[3].className = 'three_main_top_two block'
        Block[4].className = 'three_main_top_two block'
        Block[number].className = 'three_main_top_two block three_main_block_active'

        
    }
    
    return(
    <>
        <main>
            <section className="one">
                <div className="sect_one_title">
                    <p>What are our goals?</p>
                </div>
                <div className="sect_one_main">
                    <div className="sect_one_top">
                        <div className="sect_one_top_one">
                            <div><p>{titles[0].number}</p></div>
                            <div><p>{titles[0].title}</p></div>
                            <div><p>{titles[0].description}</p></div>
                        </div>
                        <div className="sect_one_top_two">
                            <div><p>{titles[1].number}</p></div>
                            <div><p>{titles[1].title}</p></div>
                            <div><p>{titles[1].description}</p></div>
                        </div>
                        <div className="sect_one_top_three">
                            <img src={photos[0].photo} alt="" />
                        </div>
                    </div>
                    <div className="sect_one_middle">
                        <div className="sect_one_middle_one">
                            <img src={photos[1].photo} alt="" />
                        </div>
                        <div className="sect_one_middle_two">
                            <div><p>{titles[2].number}</p></div>
                            <div><p>{titles[2].title}</p></div>
                            <div><p>{titles[2].description}</p></div>
                        </div>
                    </div>
                    <div className="sect_one_bottom">
                        <div className="sect_one_bottom_one">
                            <div><p>{titles[3].number}</p></div>
                            <div><p>{titles[3].title}</p></div>
                            <div><p>{titles[3].description}</p></div>
                        </div>
                        <div className="sect_one_bottom_two">
                            <img src={photos[2].photo} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className='two'>
                <div className='two_title'>
                    <p>Why choose us?</p>
                </div>
                <div className='two_desc'>
                    <p>Fill the gaps in your competencies by setting up a remote IT team. We will find the best experts for you and arrange everything around it. You will get a perfect match both in skills and cultural fit.</p>
                </div>
                <div className='two_main'>
                    <div className='two_main_left'>
                        <div className='two_main_left_line_con'>
                            <div className='two_main_left_line'>

                            </div>
                            <div className='two_main_left_other_line' id='line'>

                            </div>
                        </div>
                        <div className='two_main_left_choice'>
                            <div>
                                <Button onClick = {() => handleClick(content[0].title, content[0].description)} fuck = 'Team'/>
                            </div>
                            <div>
                                <Button onClick = {() => handleClick(content[1].title, content[1].description)} fuck = 'Cummunication'/>
                            </div>
                            <div>
                                <Button onClick = {() => handleClick(content[2].title, content[2].description)} fuck = 'Solution'/>
                            </div>
                            <div>
                                <Button onClick = {() => handleClick(content[3].title, content[3].description)} fuck = 'Quality'/>
                            </div>
                        </div>
                    </div>
                    <div className='two_main_right'>
                        <div className='two_main_right_title'>
                            <p>{con}</p>
                        </div>
                        <div className='two_main_right_desc'>
                            <p>{con2}</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='three'>
                <div className='three_text'>
                    <p>How we work?</p>
                </div>
                <div className='three_main'>
                    <div className='three_main_top' id='sectThreeMain'>
                        <div className='three_main_top_one'>
                            <p>Requirements analysis and statement of work</p>
                        </div>
                        <div className='three_main_top_two block' id='sectThreeBlocks' onClick = {() => {SectThreePop(0)}}>
                            <p>Design (if required)</p>
                            <p className='titleP'>{workings[0].text}</p>
                        </div>
                        <div className='three_main_top_three block' id='sectThreeBlocks'  onClick = {() => {SectThreePop(1)}}>
                            <p>Development, show demo version</p>
                            <p className='titleP'>{workings[0].text}</p>
                        </div>
                    </div>
                    <div className='three_main_bot'>
                        <div className='three_main_bot_one block' id='sectThreeBlocks'  onClick = {() => {SectThreePop(2)}}>
                            <p>Testing, completion</p>
                            <p className='titleP'>{workings[0].text}</p>
                        </div>
                        <div className='three_main_bot_two block' id='sectThreeBlocks'  onClick = {() => {SectThreePop(3)}}>
                            <p>Product launch</p>
                            <p className='titleP'>{workings[0].text}</p>
                        </div>
                        <div className='three_main_bot_three block' id='sectThreeBlocks'  onClick = {() => {SectThreePop(4)}}>
                            <p>Continued technical support</p>
                            <p className='titleP'>{workings[0].text}</p>
                        </div>
                    </div>
                </div>
                <div className='three_button'>
                    <button type="button"><p>LEARN MORE</p></button>
                </div>
            </section>
            <section className='four'>
                <div className='four_text'>
                    <p>Used technologies</p>
                </div>
                <div className='four_desc'>
                    <p>Fill the gaps in your competencies by setting up a remote IT team. We will find the best experts for you and arrange everything around it. You will get a perfect match both in skills and cultural fit.</p>
                </div>
                <div className='four_main'>
                    <div className='four_buttons'>
                        <ButtonSectionFour onClick={() => {toggleClass(0)}}/>
                        <ButtonSectionFour onClick={() => {toggleClass(1)}}/>
                        <ButtonSectionFour onClick={() => {toggleClass(2)}}/>
                        <ButtonSectionFour onClick={() => {toggleClass(3)}}/>
                        <ButtonSectionFour onClick={() => {toggleClass(4)}}/>
                        <ButtonSectionFour onClick={() => {toggleClass(5)}}/>
                        <ButtonSectionFour onClick={() => {toggleClass(6)}}/>
                        <ButtonSectionFour onClick={() => {toggleClass(7)}}/>
                    </div>
                    <div className='four_titles'>
                        <p className='titleSectFour' id='buttonSectFourTitle'>{tech_descs[0].text}</p>
                        <p className='titleSectFour' id='buttonSectFourTitle'>{tech_descs[1].text}</p>
                        <p className='titleSectFour' id='buttonSectFourTitle'>{tech_descs[2].text}</p>
                        <p className='titleSectFour' id='buttonSectFourTitle'>{tech_descs[3].text}</p>
                        <p className='titleSectFour' id='buttonSectFourTitle'>{tech_descs[4].text}</p>
                        <p className='titleSectFour' id='buttonSectFourTitle'>{tech_descs[5].text}</p>
                        <p className='titleSectFour' id='buttonSectFourTitle'>{tech_descs[6].text}</p>
                        <p className='titleSectFour' id='buttonSectFourTitle'>{tech_descs[7].text}</p>
                    </div>
                    <div className='four_img'>
                        <div className='four_img_inside'><img src={JSIcon} alt="" /></div>
                        <div className='four_img_inside'><img src={JSIcon} alt="" /></div>
                        <div className='four_img_inside'><img src={JSIcon} alt="" /></div>
                        <div className='four_img_inside'><img src={JSIcon} alt="" /></div>
                        <div className='four_img_inside'><img src={JSIcon} alt="" /></div>
                        <div className='four_img_inside'><img src={JSIcon} alt="" /></div>
                        <div className='four_img_inside'><img src={JSIcon} alt="" /></div>
                        <div className='four_img_inside'><img src={JSIcon} alt="" /></div>
                    </div>
                </div>
            </section>
            <section className='SectFive'>
                <div className='SectFive_text'>
                    <p>Industries</p>
                </div>
                <div className='SectFive_main'>
                    <div className='SectFive_main_part'>
                        <div className='SectFive_main_part_img'><img src={SectFiveLeft} alt="" /></div>
                        <div className='SectFive_main_part_text'><p>Logistics</p></div>
                        <div className='SectFive_main_part_line'></div>
                        <div className='SectFive_main_part_desc'><p>Fill the gaps in your competencies by setting up a remote IT team. We will find the best experts for you and arrange everything around it. You will get a perfect match both in skills and cultural fit.</p></div>
                    </div>
                    <div className='SectFive_main_part'>
                        <div className='SectFive_main_part_img'><img src={SectFiveMid} alt="" /></div>
                        <div className='SectFive_main_part_text'><p>E-commerce</p></div>
                        <div className='SectFive_main_part_line'></div>
                        <div className='SectFive_main_part_desc'><p>Fill the gaps in your competencies by setting up a remote IT team. We will find the best experts for you and arrange everything around it. You will get a perfect match both in skills and cultural fit.</p></div>
                    </div>
                    <div className='SectFive_main_part'>
                        <div className='SectFive_main_part_img'><img src={SectFiveRight} alt="" /></div>
                        <div className='SectFive_main_part_text'><p>CRM systems</p></div>
                        <div className='SectFive_main_part_line'></div>
                        <div className='SectFive_main_part_desc'><p>Fill the gaps in your competencies by setting up a remote IT team. We will find the best experts for you and arrange everything around it. You will get a perfect match both in skills and cultural fit.</p></div>
                    </div>
                </div>
            </section>
            <section className='SectSix'>
                <div className='SectSix_Left'>
                    <div className='SectSix_text'>
                        <p>Get in touch with us</p>
                    </div>
                    <div className='SectSix_leftInputs'>
                        <input type="text" placeholder='Enter your Full Name'/>
                        <input type="email" name="" id="" placeholder='Enter your Email'/>
                        <input type="text" name="" id="" placeholder='Enter your Phone'/>
                    </div>
                    <div className='SectSix_leftButton'>
                        <button type="button"><p>SUBMIT</p><img src={Contact} alt="" /></button>
                    </div>
                </div>
                <div className='SectSix_Right'>
                    <div className='SectSix_desc'>
                        <p>Simply fill in your Email in our contact form or get in touch with us by our email - <a href="">itsupportgroup@gmail.com</a> - , and one of our experts will contact you shortly.
                        This could be the beginning of a wonderful collaboration and the easiest way to acquire a highly-experienced team.</p>
                    </div>
                    <div className='SectSix_rightButton'>
                        <button type="button"><p>Download the brief</p><img src={Send} alt="" /></button>
                    </div>
                    <div className='SectSix_rightInputs'>
                        <input type="text" name="" id="" placeholder='Describe your project'/>
                        <label htmlFor="fileUpload"><p>Upload file (max file size is 30 MB)</p><img src={File} alt="" /></label>
                        <input type="file" name="" id="fileUpload" placeholder='Upload file (max file size is 30 MB)' />
                    </div>
                </div>
            </section>
        </main>
    </> 
    )
    
}



export default Main
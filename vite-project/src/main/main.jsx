import { photos } from './main'
import { titles } from './main'
import { content } from './button/button'
import { useState } from 'react'
import { tech_descs } from './main'

import ButtonActive from './buttonActive/buttonActive'
import Button2 from './button2/button'
import Button from './button/button'
import JSIcon from '../assets/img/Icon_1.png'

function Main() {
    const [con, setCon] = useState('Close-Knited fuck')
    const [con2, setCon2] = useState('fuck')

    function handleClick(type, type2){
        console.log('cum', type, type2)
        setCon(type)
        setCon2(type2)
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
                    <div className='three_main_top'>
                        <div className='three_main_top_one'>
                            <p>Requirements analysis and statement of work</p>
                        </div>
                        <div className='three_main_top_two'>
                            <p>Design (if required)</p>
                            <p>Some words about this step in our work.</p>
                        </div>
                        <div className='three_main_top_three'>
                            <p>Development, show demo version</p>
                            <p>Some words about this step in our work.</p>
                        </div>
                    </div>
                    <div className='three_main_bot'>
                        <div className='three_main_bot_one'>
                            <p>Testing, completion</p>
                            <p>Some words about this step in our work.</p>
                        </div>
                        <div className='three_main_bot_two'>
                            <p>Product launch</p>
                            <p>Some words about this step in our work.</p>
                        </div>
                        <div className='three_main_bot_three'>
                            <p>Continued technical support</p>
                            <p>Some words about this step in our work. Some words about this step in our work. Some words about this step in our work.</p>
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
                        <ButtonActive/>
                        <Button2/>
                        <Button2/>
                        <Button2/>
                        <Button2/>
                        <Button2/>
                        <Button2/>
                        <Button2/>
                    </div>
                    <div className='four_titles'>
                        <p>{tech_descs[0].text}</p>
                        <p>{tech_descs[1].text}</p>
                        <p>{tech_descs[2].text}</p>
                        <p>{tech_descs[3].text}</p>
                        <p>{tech_descs[4].text}</p>
                        <p>{tech_descs[5].text}</p>
                        <p>{tech_descs[6].text}</p>
                        <p>{tech_descs[7].text}</p>
                    </div>
                    <div className='four_img'>
                        <img src={JSIcon} alt="" />
                    </div>
                </div>
            </section>
        </main>
    </> 
    )
    
}



export default Main
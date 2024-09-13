import { photos } from './main'
import { titles } from './main'
import { descs } from './main'
import Button from './button/button'

function Main() {
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
                                <p id='team'>Team</p>
                            </div>
                            <div>
                                <p id='cum'>Cummunication</p>
                            </div>
                            <div>
                                <p id='sol'>Solution</p>
                            </div>
                            <div>
                                <p id='qua'>Quality</p>
                            </div>
                        </div>
                    </div>
                    <div className='two_main_right'>
                        <div className='two_main_right_title'>
                            <p>{descs[0].title}</p>
                        </div>
                        <div className='two_main_right_desc'>
                            <p>{descs[0].description}</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <h1>fucking piece of shit</h1>
                <Button fuck = 'fuck'/>
                <Button fuck = 'shit'/>
                <Button fuck = 'piss'/>
            </section>
        </main>
        
    </> 
    )
    
}



export default Main
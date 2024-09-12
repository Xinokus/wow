import { photos } from './main'
import { titles } from './main'

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
                            <div className='two_main_left_other_line'>

                            </div>
                        </div>
                        <div className='two_main_left_choice'>
                            <div>
                                <p>Team</p>
                            </div>
                            <div>
                                <p>Cummunication</p>
                            </div>
                            <div>
                                <p>Solution</p>
                            </div>
                            <div>
                                <p>Quality</p>
                            </div>
                        </div>
                    </div>
                    <div className='two_main_right'>
                        <div className='two_main_right_title'>
                            <p>Close-knit team</p>
                        </div>
                        <div className='two_main_right_desc'>
                            <p>A small text describing one of the goals in two lines. A small text describing one of the goals in two lines. A small text describing one of the goals in two lines. A small text describing one of the goals in two lines. A small text describing one of the goals in two lines. A small text describing one of the goals in two lines. A small text describing one of the goals in two lines. A small text describing one of the goals in two lines.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </> 
    )
}

export default Main
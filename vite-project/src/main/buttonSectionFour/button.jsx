import './button.css'

export default function ButtonSectionFour({onClick, isActive}){
    return (
        <div className='buttonDiv' id='buttonSectFourDiv'>
            <div className='buttonBacker'>
                <button className='buttonSectionFour' id='buttonSectFour' onClick={onClick}>
        
                </button>
            </div>
            
        </div>
    )
}
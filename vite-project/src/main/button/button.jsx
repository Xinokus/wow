import './button.css'

export default function Button({fuck}){
    function handleClick(){
        console.log('butt')
    }

    return (
        <button className='button' onClick = {handleClick}>
        {fuck}
        </button>
    )
}
import './button.css'

export default function Button({fuck, onClick}){

    return (
        <button className='button' onClick={onClick}>
        {fuck}
        </button>
    )
}

export const content = [
    {
        title: 'Close-Knit fuck',
        description: 'fuck',
    },
    {
        title: 'Close-Knit cum',
        description: 'cum',
    },
    {
        title: 'Close-Knit bitch',
        description: 'bitch',
    },
    {
        title: 'Close-Knit pussy',
        description: 'pussy',
    },
]
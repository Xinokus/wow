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
        title: 'Close-Knited fuck',
        description: 'fuck',
    },
    {
        title: 'Close-Knit cum',
        description: 'cum',
    },
    {
        title: 'Close-Knitter bitch',
        description: 'bitch',
    },
    {
        title: 'Close-Knitta pussy',
        description: 'pussy',
    },
]
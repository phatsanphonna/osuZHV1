import './App.scss';
import Btn from './components/SocialBtn';
import Works from './components/Works';

const btns = [
    {
        url: 'https://www.reddit.com/r/OsuSkins/comments/njfa5d/ssuniie_zh_v1_ssuniie_中文_v1/',
        src: './images/reddit.png',
        alt: 'Reddit'
    },
    {
        url: 'https://github.com/ssuniie/osuZHV1',
        src: './images/github32.png',
        alt: 'GitHub'
    },
    {
        url: 'https://imgur.com/a/l2q1QCV',
        src: './images/photo.png',
        alt: 'Screenshots'
    },
    {
        url: 'https://github.com/ssuniie/osuZHV1/releases',
        src: './images/download.png',
        alt: 'Download'
    }
]

export default function App() {
    const btnElements = btns.map((btn, index) => {
        return <Btn
            key={index}
            url={btn.url}
            src={btn.src}
            alt={btn.alt}
        />
    })

    return (
        <div className="App mx-auto">
            <header className="App-header bg-black bg-opacity-90">
                <div className='title'>
                    <h2 className='text-7xl md:text-6xl sm:text-5xl font-extralight shadow-sm'>SSUNIIE</h2>
                    <h4 className='text-2xl md:text-xl sm:text-lg font-medium shadow-sm'>中文 V1 Skin</h4>
                </div>

                <img src='https://i.imgur.com/ZyHc2bB.png' className='sm:w-3/12 md:w-4/12 lg:w-5/12 shadow-lg rounded-xl' alt='pic1' />

                <div className='btn grid mx-auto grid-cols-2 gap-4'>
                    {btnElements}
                </div>
                <div className='works'>
                    <Works />
                </div>
            </header>
        </div>
    );
}

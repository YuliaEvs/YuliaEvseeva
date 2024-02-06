import './header.css'

export default function Header() {
    return (
        <header>
            <div className='logo-container'>
                <div className="logo">Y</div>
                <div className="logo">u</div>
                <div className="logo">l</div>
                <div className="logo uniq">i</div>
                <div className="logo">a</div>
                <div className="space">&nbsp;</div>
                <div className="logo">E</div>
                <div className="logo">v</div>
                <div className="logo">s</div>
                <div className="logo">e</div>
                <div className="logo">e</div>
                <div className="logo">v</div>
                <div className="logo">a</div>
                <p>You-lee-ya</p>
            </div>
            <div className='navbar'>
                <ul className='menu'>
                    <li>Info<p className='submenu'>about me</p></li>
                    <li>Work</li>
                    <li>Contact me<p className='submenu'>for collaboration</p></li>
                </ul>
            </div>
        </header>
    )
}
import './header.css'

export default function Header() {
    return (
        <header>
            <div className='logo-container'>
                <div className='logo-wrapper'>
                    <div className="logo">Y</div>
                    <div className="logo">u</div>
                    <div className="logo">l</div>
                    <div className="logo-uniq">i</div>
                    <div className="logo">a</div>
                    <div className="space">&nbsp;</div>
                    <div className="logo">E</div>
                    <div className="logo">v</div>
                    <div className="logo-uniq">s</div>
                    <div className="logo-uniq">e</div>
                    <div className="logo-uniq">e</div>
                    <div className="logo">v</div>
                    <div className="logo">a</div>
                </div>
                <p className='submenu'>You-lee-ya</p>
            </div>
            <div className='navbar'>
                <div className='menu'>
                    <a href='#'>Info<p className='submenu'>about me</p></a>
                    <a href='#'>Work</a>
                    <a href='#'>Contact me<p className='submenu'>for collaboration</p></a>
                </div>
            </div>
        </header>
    )
}
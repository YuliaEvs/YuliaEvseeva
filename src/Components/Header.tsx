import './header.css';
// import changeMode from '../script';

export default function Header() {
    return (
        <header>
            <div className='header-container'>
                <div className='logo-wrapper'>
                    <div className="logo">Y</div>
                    <div className="logo">U</div>
                    <div className="logo">l</div>
                    <div className="logo-uniq">I</div>
                    <div className="logo">A</div>
                    <div className="space">&nbsp;</div>
                    <div className="logo">E</div>
                    <div className="logo">V</div>
                    <div className="logo-uniq">S</div>
                    <div className="logo-uniq">E</div>
                    <div className="logo-uniq">E</div>
                    <div className="logo">V</div>
                    <div className="logo">A</div>
                </div>
                <div className='mode-icon'>
                    <button className="changeMode"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M206-206q-41-48-63.5-107.5T120-440q0-150 105-255t255-105h8l-64-64 56-56 160 160-160 160-57-57 63-63h-6q-116 0-198 82t-82 198q0 51 16.5 96t46.5 81l-57 57Zm234-14q0-23-15.5-45.5t-34.5-47q-19-24.5-34.5-51T340-420q0-58 41-99t99-41q58 0 99 41t41 99q0 30-15.5 56.5t-34.5 51q-19 24.5-34.5 47T520-220h-80Zm0 100v-60h80v60h-80Zm314-86-57-57q30-36 46.5-81t16.5-96q0-66-27.5-122.5T657-657l57-57q58 50 92 120.5T840-440q0 67-22.5 126.5T754-206Z"/></svg></button>
                </div>
                <p className='submenu'>You-lee-ya</p>
            </div>
            
            <div className='navbar'>
                <div className='menu'>
                    <a href='#'>INFO<p className='submenu'>about me</p></a>
                    <a href='#'>WORK</a>
                    <a href='#'>CONTACT<p className='submenu'>for collaboration</p></a>
                </div>
            </div>
        </header>
    )
}


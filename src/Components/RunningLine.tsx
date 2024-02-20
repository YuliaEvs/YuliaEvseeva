import './runningLine.css'

export default function RunningLine() {
// Run the line animation
setInterval(() => {
    const runningLine = document.getElementById('runningLine');
    if (runningLine) {
        const currentAnimation = window.getComputedStyle(runningLine).getPropertyValue('animation-name');
        const newAnimation = currentAnimation === 'runRight' ? 'runLeft' : 'runRight';
        runningLine.style.animation = `${newAnimation} 10s linear infinite`;
    }
}, 20000); // Repeat every 10 seconds


// Check if the user is scrolling down or up
// let lastScrollTop = 0;
// window.addEventListener('scroll', function() {
//     const st = window.pageYOffset || document.documentElement.scrollTop;
//     if (st > lastScrollTop){
//         // Scroll down, reverse animation direction
//         document.getElementById('runningLine')!.style.animation = 'runLeft 10s linear infinite';
//     } else {
//         // Scroll up, revert animation direction
//         document.getElementById('runningLine')!.style.animation = 'runRight 10s linear infinite';
//     }
//     lastScrollTop = st <= 0 ? 0 : st;
// }, false);



    return (
        <div className='line-container'>
            <div className="firstLine">
                <p>
                    CSS
                </p>
                <p>
                    JavaScript
                </p>
                <p>
                    TypeScript
                </p>
                <p>
                    React
                </p>

                <p>
                    C#
                </p>
                <p>
                    Java
                </p>
                <p>
                    API
                </p>
                <p>
                    and more...
                </p>
            </div>

            <div className="secondLine">
                <p>
                    CSS
                </p>
                <p>
                    JavaScript
                </p>
                <p>
                    TypeScript
                </p>
                <p>
                    React
                </p>

                <p>
                    C#
                </p>
                <p>
                    Java
                </p>
                <p>
                    API
                </p>
                <p>
                    and more...
                </p>
            </div>

        </div>
    )
}
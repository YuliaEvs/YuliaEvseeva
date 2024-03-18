import './projects.css'

export default function Projects() {
    return (
        <div className='projects-container'>
        <div className='projects-wrapper'>
            <div className="card" id='p1'>
                <div className="face flip-right">Project 1</div>
                <div className="back flip-left">Description</div>
            </div>
            <div className="card" id='p2'>
                <div className="face flip-down">Project 2</div>
                <div className="back flip-up">Description</div>
            </div>
            <div className="card" id='p3'>
                <div className="face flip-left">Project 3</div>
                <div className="back flip-right ">Description</div>
            </div>
            <div className="card" id='p4'>
                <div className="face flip-up">Project 4</div>
                <div className="back flip-down">Description</div>
            </div>
            <div className="card" id='p5'>
                <div className="face flip-down">Project 5</div>
                <div className="back flip-up">Description</div>
            </div>
            <div className="card" id='p6'>
                <div className="face flip-left">Project 6</div>
                <div className="back flip-right">Description</div>
            </div>
            <div className="card" id='p7'>
                <div className="face flip-up">Project 7</div>
                <div className="back flip-down">Description</div>
            </div>
            <div className="card" id='p8'>
                <div className="face flip-right">Project 8</div>
                <div className="back flip-left">Description</div>
            </div>

        </div>
        </div>
    )
}
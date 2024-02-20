import './projects.css'

export default function Projects() {
    return (
        <div className='projects-container'>
        <div className='projects-wrapper'>
            <div className="card" id='p1'>
                <div className="flip-right face">Project 1</div>
                <div className='flip-down back'>Description</div>
            </div>
            <div className="card" id='p2'>
                <div className="flip-right face">Project 2</div>
                <div className='flip-right back'>Description</div>
            </div>
            <div className="card" id='p3'>
                <div className="flip-down face">Project 3</div>
                <div className='flip-down back'>Description</div>
            </div>
            <div className="card" id='p4'>
                <div className="flip-down face">Project 4</div>
                <div className='flip-down back'>Description</div>
            </div>
            <div className="card" id='p5'>
                <div className="flip-down face">Project 5</div>
                <div className='flip-down back'>Description</div>
            </div>
            <div className="card" id='p6'>
                <div className="flip-down face">Project 6</div>
                <div className="flip-down back">Description</div>
            </div>
            <div className="card" id='p7'>
                <div className="flip-down face">Project 7</div>
                <div className="flip-down back">Description</div>
            </div>
            <div className="card" id='p8'>
                <div className="flip-down face">Project 8</div>
                <div className="flip-down back">Description</div>
            </div>

        </div>
        </div>
    )
}
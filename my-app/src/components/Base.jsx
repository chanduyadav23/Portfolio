const Base=()=>
    (
        <nav className="p-4 bg-grey-800 text-white flex justify=between">
            <h1 className="text-xl found-bold">My Portfolio</h1>
            <ul className="flex gap-4">
                <li> <a href="#about">About</a></li>
                <li> <a href="#project">Projects</a></li>
                <li> <a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
export default Base;
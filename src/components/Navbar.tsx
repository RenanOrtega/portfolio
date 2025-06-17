const Navbar = () => {
    return (
        <header className="flex justify-between items-center">
            <h1 className="font-bold text-lg text-light">Renan<span className="text-xs">®</span></h1>
            <nav className="flex gap-8 text-neutral-400">
                <a href="#projects" className="hover:text-light">Projects</a>
                <a href="#skills" className="hover:text-light">Skills</a>
                <a href="#contact" className="hover:text-light">Contact</a>
            </nav>
        </header>
    );
}

export default Navbar;
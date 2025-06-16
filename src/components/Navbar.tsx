const Navbar = () => {
    return (
        <header className="flex justify-between items-center">
            <h1 className="font-bold text-lg text-white">RJO</h1>
            <nav className="flex gap-8 text-neutral-400">
                <a href="#projects" className="hover:text-white">Projects</a>
                <a href="#skills" className="hover:text-white">Skills</a>
                <a href="#contact" className="hover:text-white">Contact</a>
            </nav>
        </header>
    );
}

export default Navbar;
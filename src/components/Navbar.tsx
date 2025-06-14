const Navbar = () => {
    return (
        <header className="flex justify-between items-center px-8 py-6">
            <h1 className="font-bold text-lg">Renan<span className="text-xs">®</span></h1>
            <nav className="flex gap-8 text-gray-500">
                <a href="#projects" className="hover:text-black">Projects</a>
                <a href="#skills" className="hover:text-black">Skills</a>
                <a href="#contact" className="hover:text-black">Contact</a>
            </nav>
        </header>
    );
}

export default Navbar;
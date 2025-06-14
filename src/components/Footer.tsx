import Divider from "./Divider";

const Footer = () => {
    return (
        <footer className="w-full mt-auto bg-white">
            <Divider />
            <div className="flex flex-col md:flex-row justify-between gap-10 pb-15 px-5 md:px-15">
                <span className="font-bold">RJO</span>
                <div className="flex flex-col md:flex-row gap-10">
                    <div className="flex flex-col">
                        <p className="font-semibold mb-2">Portfolio</p>
                        <a href="#projects" className="text-gray-400 font-semibold hover:text-gray-600 transition-colors">Projects</a>
                        <a href="#skills" className="text-gray-400 font-semibold hover:text-gray-600 transition-colors">Skills</a>
                        <a href="#contact" className="text-gray-400 font-semibold hover:text-gray-600 transition-colors">Contact</a>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-semibold mb-2">Connect</p>
                        <a href="mailto:renanortega.dev@gmail.com" className="text-gray-400 font-semibold hover:text-gray-600 transition-colors">Email</a>
                        <a href="https://www.linkedin.com/in/renan-ortega/" target="_blank" rel="noopener noreferrer" className="text-gray-400 font-semibold hover:text-gray-600 transition-colors">LinkedIn</a>
                        <a href="https://github.com/RenanOrtega" target="_blank" rel="noopener noreferrer" className="text-gray-400 font-semibold hover:text-gray-600 transition-colors">GitHub</a>
                    </div>
                </div>
            </div>
            <p className="text-gray-400 text-sm">
                © 2024 Seu Nome. Todos os direitos reservados.
            </p>
        </footer>
    );
}

export default Footer;
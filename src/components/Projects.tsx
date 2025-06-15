const items = [
    {
        image: "/admin-stickers.png",
        title: "Stickers Collection - Panel Admin",
        year: "2025"
    },
    {
        image: "/stickers-collection.png",
        title: "Stickers Collection - E-Commerce",
        year: "2025"
    },
    {
        image: "/admin-stickers.png",
        title: "Stickers Collection - Panel Admin",
        year: "2025"
    },
    {
        image: "/stickers-collection.png",
        title: "Stickers Collection - E-Commerce",
        year: "2025"
    }
]

const Projects = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {items.map((item, index) => (
                <div key={index} className="pb-4 ">
                    <img src={item.image} className="rounded-lg aspect-square object-cover" />
                    <p className="font-bold pt-3">{item.title}</p>
                    <p className="text-gray-400 font-semibold">{item.year}</p>
                </div>
            ))}
        </div>
    );
};

export default Projects;
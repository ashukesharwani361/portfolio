const ProjectCard = ({ title, description, link, image }) => (
  <div className="border rounded p-4 shadow hover:shadow-lg">
    <img src={image} alt={title} className="w-full h-36 object-cover rounded" />
    <h3 className="text-lg font-semibold mt-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
    <a href={link} className="text-blue-500 mt-2 inline-block" target="_blank" rel="noopener noreferrer">
      View Project
    </a>
  </div>
);
export default ProjectCard;

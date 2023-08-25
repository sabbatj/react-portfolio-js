import { FaInstagram, FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0a192f] text-white">
      <div className="container pt-20 mx-auto py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-4 justify-start md:pl-4"> 
          <div className="bg-gray-500 rounded-md p-2 aspect-w-1 aspect-h-1">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-800 rounded-md p-2 flex items-center justify-center"
            >
              <FaInstagram className="w-6 h-6 text-white" />
            </a>
          </div>
          <div className="bg-gray-500 rounded-md p-2 aspect-w-1 aspect-h-1">
            <a
              href="https://github.com/sabbatj"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black rounded-md p-2 flex items-center justify-center"
            >
              <FaGithub className="w-6 h-6 text-white" />
            </a>
          </div>
          <div className="bg-gray-500 rounded-md p-2 aspect-w-1 aspect-h-1">
            <a
              href="https://www.linkedin.com/in/juandre-sabbat-14b755237/" // Replace with your LinkedIn profile link
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 rounded-md p-2 flex items-center justify-center"
            >
              <FaLinkedin className="w-6 h-6 text-white" />
            </a>
          </div>
          <div className="bg-gray-500 rounded-md p-2 aspect-w-1 aspect-h-1">
            <a
              href="https://docdro.id/UJkQW1w"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 rounded-md p-2 flex items-center justify-center"
            >
              <FaFileDownload className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>
        <div className="text-right md:text-center text-gray-500 text-sm mt-4 md:mt-0 mr-4 md:mr-0">
          <div>© COPYRIGHT 2023. ALL RIGHTS RESERVED</div>
          <div className="flex items-center justify-center md:justify-start">
            <div>WEBSITE DESIGN BY</div>
            <a
              href="https://www.linkedin.com/in/juandre-sabbat-14b755237/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-500 ml-2 md:ml-0 hover:underline"
            >
              JUANDRE SABBAT
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


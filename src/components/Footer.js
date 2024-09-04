const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-gray-800 text-white py-4 px-6 text-center fixed bottom-0 w-full">
      <p className="mb-2">
        Created By
        <i className="fa-solid fa-heart text-red-500 mx-1"></i>
        <a
          href="https://www.linkedin.com/in/lnkdanchalarora/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-400"
          title="Anchal Arora's LinkedIn Profile"
        >
          Linked in Profile : Anchal Arora
        </a>
      </p>
      <p className="mb-2">
        <i className="fa-solid fa-copyright"></i> {year}
      </p>
      <a
        href="https://github.com/anchalarora/namaste-react-parcel-configured"
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-blue-400"
        title="Meal Mingle GitHub Repository"
      >
        <strong>
          Github Repository : Meal
          <span className="text-yellow-400">Mingle</span>
        </strong>
      </a>
    </div>
  );
};

export default Footer;

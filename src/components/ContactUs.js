const ContactUs = () => {
  return (
    <div className="about-container">
      <h1 className="flex justify-center">Contact Us Page</h1>
      <form>
        <input
          type="text"
          className="m-2 p-2 border border-black"
          placeholder="Enter Name"
        ></input>
        <input
          type="text"
          className="m-2 p-2 border border-black"
          placeholder="Enter Your Message"
        ></input>
        <button className="m-2 p-2 border border-black rounded-lg bg-gray-100">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;

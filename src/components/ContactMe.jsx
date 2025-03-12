export default function ContactMe() {
    const handleSubmit = (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
  
      const name = formData.get("name");
      const email = formData.get("email");
      const message = formData.get("message");
  
     
      const mailtoLink = `mailto:christopher.oconnor1@hotmail.com?subject=Contact from ${encodeURIComponent(
        name
      )}&body=Name: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(
        email
      )}%0D%0AMessage: ${encodeURIComponent(message)}`;
  
      
      window.location.href = mailtoLink;
    };
  
    return (
      <section className="bg-black text-white py-16 px-8 flex flex-col items-center h-screen">
        <h1 className="text-5xl font-bold mb-8 text-gray-300">Contact Me!</h1>
  
        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 p-8 rounded-2xl shadow-lg w-full max-w-lg border border-white"
        >
          <label className="block mb-4">
            <span className="text-gray-400">Your Name</span>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              className="mt-1 block w-full bg-gray-800 text-white border border-white rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"
              required
            />
          </label>
  
          <label className="block mb-4">
            <span className="text-gray-400">Your Email</span>
            <input
              type="email"
              name="email"
              placeholder="johndoe@example.com"
              className="mt-1 block w-full bg-gray-800 text-white border border-white rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"
              required
            />
          </label>
  
          <label className="block mb-6">
            <span className="text-gray-400">Your Message</span>
            <textarea
              name="message"
              rows="5"
              placeholder="Write your message here..."
              className="mt-1 block w-full bg-gray-800 text-white border border-white rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"
              required
            ></textarea>
          </label>
  
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 border border-white"
          >
            Send Message
          </button>
        </form>
      </section>
    );
  }
  
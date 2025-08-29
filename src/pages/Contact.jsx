const inputStyle =
  "p-2 rounded-lg focus:outline-none p-3 mb-6  border-1 border-white/10";
const Contact = () => {
  const submitHandler = (formData) => {
    // formData.preventDefault();
    console.log(Object.fromEntries(formData.entries()));
  };
  return (
    <div className="bg-gradient-to-t from-black/90 to-black min-h-screen w-dvw items-center justify-center flex  text-white/90">
      <div className="bg-black/90 w-md p-12 border-1 border-white/10 rounded-lg shadow-lg h-auto ">
        <div className="form-container flex justify-center items-center ">
          <form action={submitHandler} className="flex w-full flex-col gap-4">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className={inputStyle}
              placeholder="Full Name"
            ></input>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className={inputStyle}
              required
              placeholder="Email Address"
            ></input>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className={inputStyle}
              required
              placeholder="Write your message here."
            ></textarea>
            <button
              className=" bg-amber-400 text-amber-900 border-1 border-amber-400/50 px-4 py-2 rounded-lg shadow-lg hover:bg-amber-500 hover:text-white/90 hover:border-amber-500/50 transition-all duration-300 ease-in-out cursor-pointer mt-3"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

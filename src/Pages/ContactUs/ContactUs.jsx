import contactImg from "../../assets/contactUs/contact.avif";
import AnimatedComponent from "../../Components/AnimatedComponent/AnimatedComponent";

const ContactUs = () => {
  return (
    <>
      <AnimatedComponent animation="zoom-out">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url(${contactImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="hero-overlay bg-opacity-60 bg-black"></div>{" "}
          {/* Optional overlay for better contrast */}
          <div className="hero-content flex-col w-full justify-center items-center">
            <div className="card bg-base-100 w-3/4 shadow-2xl">
              <form className="card-body">
                {/* contact us text */}
                <div>
                  <p className="md:text-xl font-medium">Drop Us A Line</p>
                  <p className="text-lg">
                    Feel free to connect with us through our online channels for
                    updates, news, and more.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/*name  */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Full Name:</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Your Name"
                      name="password"
                      className="input input-bordered rounded-full"
                      required
                    />
                  </div>
                  {/* Email */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email Address:</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Email"
                      name="password"
                      className="input input-bordered rounded-full"
                      required
                    />
                  </div>
                  {/* Phone */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Phone Numbers:</span>
                    </label>
                    <input
                      type="password"
                      placeholder="ex 012345678"
                      name="password"
                      className="input input-bordered rounded-full"
                      required
                    />
                  </div>
                  {/* subject */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Subject:</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Enter Keyword"
                      name="password"
                      className="input input-bordered rounded-full"
                      required
                    />
                  </div>
                </div>

                {/* message */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Message:</span>
                  </label>
                  <textarea
                    type="password"
                    placeholder="Message"
                    name="password"
                    className="textarea textarea-bordered rounded-2xl"
                    required
                  />
                </div>

                {/* button */}
                <div className="form-control">
                  <button
                    type="submit"
                    className="btn bg-[#1563DF] text-white text-base rounded-full my-4"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </AnimatedComponent>
    </>
  );
};

export default ContactUs;

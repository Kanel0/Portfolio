import  { useState, useEffect, useRef } from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { AiOutlineMail, AiOutlineUser, AiOutlineMessage } from "react-icons/ai";
import { FiPhoneCall, FiMapPin } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";
import toast, { Toaster } from "react-hot-toast";
import { IoMdSend } from "react-icons/io"; // from Ionicons

function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const loadingToast = toast.loading("Sending message...");

    emailjs
      .sendForm(
        "service_e3v9o1n",
        "template_5vuhydv",
        form.current,
        "Vwpy6ku1xrCMrByMv"
      )
      .then(
        (result) => {
          toast.dismiss(loadingToast);
          toast.success("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          toast.dismiss(loadingToast);
          toast.error("Failed to send message. Please try again.");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div
      id="contact"
      className="w-full py-20 bg-gradient-to-br from-indigo-50 to-purple-50"
    >
      <Toaster position="top-center" />

      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Feel free
            to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div
            className="bg-white rounded-2xl shadow-xl p-8"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-lg">
                  <FiPhoneCall className="text-xl text-indigo-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-gray-500 text-sm font-medium">Phone</h4>
                  <a
                    href="tel:+261324855619"
                    className="text-gray-800 font-medium hover:text-indigo-600 transition-colors"
                  >
                    +261 32 48 556 19
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-lg">
                  <AiOutlineMail className="text-xl text-indigo-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-gray-500 text-sm font-medium">Email</h4>
                  <a
                    href="mailto:thelegendanelka@gmail.com"
                    className="text-gray-800 font-medium hover:text-indigo-600 transition-colors"
                  >
                    jaosoadongaanelka@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-lg">
                  <FiMapPin className="text-xl text-indigo-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-gray-500 text-sm font-medium">
                    Location
                  </h4>
                  <p className="text-gray-800 font-medium">
                    Ambohimandamina, Mahajanga
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Connect with me
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/leader.poseidon"
                  className="bg-gray-100 hover:bg-indigo-600 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="text-gray-600 text-xl group-hover:text-white" />
                </a>
                <a
                  href="https://www.instagram.com/dongaanelka/"
                  className="bg-gray-100 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsInstagram className="text-gray-600 text-xl group-hover:text-white" />
                </a>
                <a
                  href="https://twitter.com/DongaAnelka"
                  className="bg-gray-100 hover:bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsTwitter className="text-gray-600 text-xl group-hover:text-white" />
                </a>
                <a
                  href="https://github.com/Kanel0"
                  className="bg-gray-100 hover:bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-gray-600 text-xl group-hover:text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/anelka-donga-289b8122a/"
                  className="bg-gray-100 hover:bg-blue-700 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-gray-600 text-xl group-hover:text-white" />
                </a>
              </div>
            </div>

            <div className="mt-12 bg-indigo-50 rounded-xl p-6">
              <h4 className="font-semibold text-indigo-700 mb-2">
                Office Hours
              </h4>
              <p className="text-gray-700">Monday - Friday: 9am - 6pm</p>
              <p className="text-gray-700">Saturday: 10am - 2pm</p>
              <p className="text-gray-700">Sunday: Closed</p>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="bg-white rounded-2xl shadow-xl p-8"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-8">
              Send a Message
            </h3>

            <form ref={form} onSubmit={sendEmail}>
              <div className="space-y-6">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <AiOutlineUser className="text-gray-400 text-xl" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <AiOutlineMail className="text-gray-400 text-xl" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div className="relative">
                  <div className="absolute top-3 left-0 pl-3 flex items-start pointer-events-none">
                    <AiOutlineMessage className="text-gray-400 text-xl" />
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    rows="5"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <IoMdSend className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>

            <div className="mt-10 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
              <h4 className="font-semibold text-indigo-700 mb-2">
                Response Time
              </h4>
              <p className="text-gray-700">
                I typically respond to messages within 24 hours during weekdays.
              </p>
              <p className="text-gray-700 mt-2">
                For urgent inquiries, please call me directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

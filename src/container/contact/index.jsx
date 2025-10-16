import { motion } from "framer-motion";

export default function ContactInnerSection() {
    return (
        <section className="bg-[#0b0d17] text-white py-16 px-4 md:px-7 lg:px-12">
             <h4 className="uppercase text-sm text-gray-400 mb-2">Contact Us</h4>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Have a <span className="text-purple-500">Cool Project?</span> Get in Touch!
                    </h2>
           <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-10 items-center">
                
                {/* Left Image Section */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className=" w-full"
                >
                   

                    <img
                        src="Screenshot 2025-10-12 103810.png"
                        alt="Cool Project"
                        className=" w-full h-[600px] object-cover"
                    />

                </motion.div>

                {/* Right Form Section */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-[#121421] p-8  shadow-lg"
                >

                    <form className="space-y-4">
                        {/* Name */}
                        <div className="flex items-center  px-4 py-3">
                            <motion.div
                                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.7, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="mr-3 w-6 h-6 text-gray-400 bi bi-person" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Name"
                                className="bg-transparent border-b border-gray-600
                                 focus:border-white transition-colors duration-300 w-full outline-none text-sm text-white placeholder-gray-400"
                            />
                        </div>

                        {/* Phone */}
                        <div className="flex items-center  px-4 py-3">
                            <motion.div

                                animate={{ y: [0, -3, 0] }}
                                transition={{ duration: 1.2, repeat: Infinity }}
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 text-gray-500 mr-3 bi bi-telephone" viewBox="0 0 16 16">
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Phone"
                                className="bg-transparent border-b border-gray-600
                                 focus:border-white transition-colors duration-300 w-full outline-none text-sm text-white placeholder-gray-400"
                            />
                        </div>

                        {/* Email */}
                        <div className="flex items-center px-4 py-3">
                            <motion.div

                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 text-gray-500 mr-3 bi bi-envelope" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                            </svg>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="bg-transparent border-b border-gray-600
                                 focus:border-white transition-colors duration-300 w-full outline-none text-sm text-white placeholder-gray-400"
                            />
                        </div>

                        {/* Subject */}
                        <div className="flex items-center  px-4 py-3">
                            <motion.div

                                animate={{ scale: [1, 1.3, 1] }}
                                transition={{ duration: 1.3, repeat: Infinity }}
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className=" h-5 w-5 text-gray-500 mr-3 bi bi-exclamation-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Subject"
                                className="bg-transparent border-b border-gray-600
                                 focus:border-white transition-colors duration-300 w-full outline-none text-sm text-white placeholder-gray-400"
                            />
                        </div>

                        {/* Message */}
                        <div className="flex items-start  px-4 py-3">
                            <motion.div

                                animate={{ opacity: [1, 0.4, 1] }}
                                transition={{ duration: 1.2, repeat: Infinity }}
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-5 w-5 text-gray-500 mr-3 bi bi-pencil" viewBox="0 0 16 16">
                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                            </svg>
                            <textarea
                                rows="3"
                                placeholder="How can we help you? Feel free to get in touch!"
                                className="bg-transparent border-b border-gray-600 focus:border-white 
                                transition-colors duration-300 w-full outline-none text-sm text-white placeholder-gray-400 resize-none"
                            ></textarea>
                        </div>

                        {/* Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            className="bg-[#39ff14] text-black font-semibold px-6 py-3 rounded-xl mt-4 w-full md:w-auto"
                        >
                            Get in Touch
                        </motion.button>
                    </form>
                </motion.div>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 text-center mt-16 gap-8">
                <div>
                    <h3 className="text-xl font-bold mb-2">+1 (800) 123-4665</h3>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-2">
                        785 15th Street, Office 478 Berlin, De 81566
                    </h3>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-2">info@example.com</h3>
                </div>
            </div>
        </section>
    );
}

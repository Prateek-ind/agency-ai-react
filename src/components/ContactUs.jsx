import Title from "./Title";
import assets from "../assets/assets";
import toast from "react-hot-toast";
import { motion } from "motion/react";

const ContactUs = () => {
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append("access_key", "15865f8e-dbf1-434a-9a25-821bce5ec617");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        toast.success("Thank you for your submission.");
        event.target.reset();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="contact-us"
      className="flex flex-col items-center pt-30
    gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-700 dark:text-white
    "
    >
      <Title
        title="Reach out to us"
        description="From strategy to execution, we craft digital solutions that move your business forward."
      />

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full"
        onSubmit={onSubmit}
      >
        <div className="flex flex-col gap-2">
          <p className="mb-2 text-sm font-medium">Your Name</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.person_icon} alt="" />
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              required
              className="w-full p-3 text-sm outline-none"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="mb-2 text-sm font-medium">Email Id</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.email_icon} alt="" />
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              required
              className="w-full p-3 text-sm outline-none"
            />
          </div>
        </div>
        <div className="sm:col-span-2 flex flex-col gap-2">
          <p className="text-sm font-medium">Message</p>
          <textarea
            rows={8}
            placeholder="Enter your message"
            name="message"
            className="w-full p-3 text-sm outline-none rounded-lg
          border border-gray-300 dark:border-gray-600"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className=" w-max flex gap-2 bg-primary text-white text-sm 
        px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all
        "
        >
          Submit
          <img src={assets.arrow_icon} className="w-4" alt="" />
        </button>
      </motion.form>
    </motion.div>
  );
};

export default ContactUs;

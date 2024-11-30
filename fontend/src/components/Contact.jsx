import { useRef } from "react";

const Contact = () => {
  const contactRef = useRef(null);
  return (
    <section className="py-16" id="contact" ref={contactRef}>
      <div className="px-4 text-center">
        <h4 className="mb-8 text-3xl font-medium lg:text-4xl">Contact </h4>
        <p className="mb-4 text-lg lg:text-xl">Feel free to reach out to Us</p>
        <a href="mailto:cybercraftc2@gmail.com">cybercraftc2@gmail.com</a>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="px-4 text-center text-sm">
        <h5>© 2024 Vishal & CyberCraft ® All Rigths Reserved </h5>
      </div>
    </section>
  );
};

export default Contact;

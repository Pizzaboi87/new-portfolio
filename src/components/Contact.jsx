import emailjs from '@emailjs/browser';
import { useState, useRef, useContext } from 'react';
import { useInView, motion } from 'framer-motion';
import { styles } from '../styles';
import { CanvasWrapper, BB8Model } from './canvas';
import { SectionWrapper } from '../hoc';
import { textVariant, slideIn } from '../utils/motion';
import { CheckSizeContext } from '../context/checkSize.context';
import { DarkModeContext } from '../context/darkMode.context';

const Contact = () => {
  const smallView = useContext(CheckSizeContext);
  const [darkMode] = useContext(DarkModeContext);
  const DynamicDiv = smallView ? 'div' : motion.div;

  const formRef = useRef(null);
  const canvasRef = useRef(null);
  const isInView = useInView(canvasRef);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const valueCheck = (form) => {
    const nameRegex = /^[A-Za-z-/ñÑáÁéÉíÍóÓöÖőŐüÜűŰ\s]+$/;
    const messageRegex = /^[A-Za-z0-9,.\-;:?!()%"@$/€ñÑáÁéÉíÍóÓöÖőŐüÜűŰ\s]+$/;

    if (!nameRegex.test(form.name)) {
      alert('Please enter a valid name.');
      setLoading(false);
      return;
    }

    if (!messageRegex.test(form.message)) {
      alert('Please enter a valid message.');
      setLoading(false);
      return;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    valueCheck(form);
  };

  return (
    <div className="xl:flex-row flex-col-reverse flex gap-12 overflow-hidden">
      <DynamicDiv
        variants={slideIn('left', 'tween', 0.2, 1)}
        className={`${
          darkMode ? 'bg-tertiary' : 'bg-tertiaryLight'
        } flex-1 p-8 rounded-2xl`}
      >
        <DynamicDiv variants={textVariant(0)}>
          <p
            className={
              darkMode ? styles.sectionSubText : styles.sectionSubTextLight
            }
          >
            Get in touch
          </p>
          <h3
            className={
              darkMode ? styles.sectionHeadText : styles.sectionHeadTextLight
            }
          >
            <span className={darkMode ? 'text-orange' : 'text-blue'}>
              Contact{' '}
            </span>
            Me
          </h3>
        </DynamicDiv>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span
              className={`${
                darkMode ? 'text-white' : 'text-black'
              } font-medium mb-4`}
            >
              Your Name
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              required
              className={`${
                darkMode
                  ? 'bg-cardBg placeholder:text-secondary text-white'
                  : 'bg-cardBgLight placeholder:text-secondaryLight text-black'
              } py-4 px-6 rounded-lg outline-none border-none font-medium`}
            />
          </label>
          <label className="flex flex-col">
            <span
              className={`${
                darkMode ? 'text-white' : 'text-black'
              } font-medium mb-4`}
            >
              Your Email Address
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              required
              className={`${
                darkMode
                  ? 'bg-cardBg placeholder:text-secondary text-white'
                  : 'bg-cardBgLight placeholder:text-secondaryLight text-black'
              } py-4 px-6 rounded-lg outline-none border-none font-medium`}
            />
          </label>
          <label className="flex flex-col">
            <span
              className={`${
                darkMode ? 'text-white' : 'text-black'
              } font-medium mb-4`}
            >
              Your Message
            </span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What would you like to say?"
              required
              className={`${
                darkMode
                  ? 'bg-cardBg placeholder:text-secondary text-white'
                  : 'bg-cardBgLight placeholder:text-secondaryLight text-black'
              } py-4 px-6 rounded-lg outline-none border-none font-medium`}
            />
          </label>
          <button
            type="submit"
            disabled={loading}
            className={`${loading ? 'cursor-progress' : 'cursor-pointer'} ${
              darkMode ? 'bg-cardBg text-white' : 'bg-cardBgLight text-black'
            } py-3 px-8 outline-none w-fit font-bold shadow-md shadow-primary rounded-xl`}
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </DynamicDiv>
      <div
        ref={canvasRef}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[300px]"
      >
        {isInView && (
          <CanvasWrapper rotate={false}>
            <BB8Model smallView={smallView} />
          </CanvasWrapper>
        )}
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');

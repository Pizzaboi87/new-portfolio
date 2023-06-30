import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { BB8Canvas } from "./canvas";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section className="grid">
      <div className="w-full h-[100vh]" ref={ref}>
        {isInView && (
          <CanvasWrapper rotate={false}>
            <BB8 />
          </CanvasWrapper>
        )}
      </div>
    </section>
  );
};

export default Contact;

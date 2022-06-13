import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

function Card({ children, reverse }) {
  //   return <div className={`card ${reverse && "reverse"}`}>{children}</div>;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div
          className="card"
          style={{
            backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "#fff",
            color: reverse ? "#fff" : "#000",
          }}
        >
          {children}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
Card.defaultProps = {
  reverse: false,
};

Card.prototype = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;

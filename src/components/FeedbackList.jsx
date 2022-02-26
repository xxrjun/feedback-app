<<<<<<< HEAD
import React, { useContext } from "react";
=======
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
>>>>>>> 03a4785 (Feedback UI App)
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackList = () => {
  const { feedback } = useContext(FeedbackContext);
  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet.</p>;
  }
  return (
    <div className="feedback-list">
<<<<<<< HEAD
      {feedback.map((item) => {
        return <FeedbackItem key={item.id} item={item} />;
      })}
=======
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={item.id}
              item={item}
              handleDelete={handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
>>>>>>> 03a4785 (Feedback UI App)
    </div>
  );
};

export default FeedbackList;

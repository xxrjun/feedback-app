import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is context item 1.",
      rating: 7,
    },
    {
      id: 2,
      text: "This is context item 2.",
      rating: 10,
    },
    {
      id: 3,
      text: "This is context item 3.",
      rating: 9,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  // Add a feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  // Delete a feedback
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure to remove this feedback?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  // Update edit item
  const updateFeedback = (id, updateFeedback) => {
    console.log(id, updateFeedback);
    setFeedback(
      feedback.map((item) =>
        // merge certain feedback
        item.id === id ? { ...item, ...updateFeedback } : item
      )
    );

    // set feedbackEdit to be false
    setFeedbackEdit({
      item: {},
      edit: false,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        addFeedback,
        deleteFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;

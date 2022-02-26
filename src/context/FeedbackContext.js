import { createContext, useState, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });
  const base_URL = "/feedback";

  useEffect(() => {
    fetchFeedback();
  }, []);

  // Fetch feedback from backend
  const fetchFeedback = async () => {
    const response = await fetch(`${base_URL}?_sort=rating&_order=desc`);
    const data = await response.json();

    setFeedback(data);
    setIsLoading(false);
  };

  // Add a feedback
  const addFeedback = async (newFeedback) => {
    const response = await fetch(`${base_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback), // Parse json object to POST to backend server
    });

    // Note: After using server to store data,
    //       we no longer need uuid anymore
    //       because backend server would create id automatically
    // newFeedback.id = uuidv4();

    const data = await response.json();
    setFeedback([data, ...feedback]);
  };

  // Delete a feedback
  const deleteFeedback = async (id) => {
    if (window.confirm("Are you sure to remove this feedback?")) {
      await fetch(`${base_URL}/${id}`, {
        method: "DELETE",
      });
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // Update edit item
  const updateFeedback = async (id, updateFeedback) => {
    console.log(id, updateFeedback);

    const response = await fetch(`${base_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateFeedback),
    });

    const data = await response.json();

    setFeedback(feedback.map((item) => (item.id === id ? data : item)));

    // set feedbackEdit to be false
    setFeedbackEdit({
      item: {},
      edit: false,
    });
  };

  // Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
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

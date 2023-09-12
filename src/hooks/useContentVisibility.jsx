import { useState } from "react";

// Custom HOOK for Visibility 
const useContentVisibility = () => {
  const [contentVisibility, setContentVisibility] = useState(false);

  const changeVisibility = () => {
    setContentVisibility((prevState) => !prevState);
  };

  return { contentVisibility, changeVisibility };
};

export default useContentVisibility;

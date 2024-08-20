import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnLineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnLineStatus(false);
    });
    window.addEventListener("online", () => {
      setOnLineStatus(true);
    });
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;

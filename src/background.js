chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "fetchData") {
      const accessToken = message.accessToken;
  
      const fetchCourses = fetch(`https://osu.instructure.com/api/v1/courses`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }).then(response => response.json());
  
      const fetchTodo = fetch(`https://osu.instructure.com/api/v1/users/self/todo`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }).then(response => response.json());
  
      Promise.all([fetchCourses, fetchTodo])
        .then(([courses, todoItems]) => {
          sendResponse({ success: true, courses, todoItems });
        })
        .catch(error => {
          console.error("Error fetching data:", error);
          sendResponse({ success: false, error });
        });
  
      return true; // To indicate async response
    }
  });
  
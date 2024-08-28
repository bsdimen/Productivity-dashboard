
export const getLoggedUser = () => {
    const user = JSON.parse(localStorage.getItem('loggedUser'));
    return user || null; // Return the user object or null if not found
  };
  

  
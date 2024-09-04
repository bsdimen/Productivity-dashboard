
export const getLoggedUser = () => {
  
  const loggedUser = localStorage.getItem('loggedUser');
  if(loggedUser) {
    const user = JSON.parse(loggedUser);
    return user;
  }
  else {
    return null;
  }
    
  };
  

  
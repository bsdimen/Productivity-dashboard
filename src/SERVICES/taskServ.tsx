import axios from "axios";

interface showTasksListProps {
  id: number;
}
export const showTasksList = async (id : showTasksListProps)  => {
    try {
        const response = await axios.get("http://localhost:3500/taskslists"); // Adjust path as necessary

        if (response && response.data) {
          // const userTasks = response.data.find(user => user.id === id)?.tasks || [];
          // console.log(userTasks);
        }else {
          console.log("WEWE");

        }
        
      } catch (error) {
        console.error('Error fetching user tasks:', error);
      }

};

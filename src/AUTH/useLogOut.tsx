import { useNavigate } from "react-router-dom";
import { auth } from "../firebase"
import { useMutation } from '@tanstack/react-query';



const useLogOut = () => {

    const navigate = useNavigate()
    const logout = async () => {
        try {
            await auth.signOut(); // Sign out from Firebase
            localStorage.removeItem("login"); // Clear user information from localStorage

        } catch (error) {
            console.error("Error during logout:", error);
        }
    }

    const mutate = useMutation({
        mutationFn: () => logout(),
        onSuccess: () => {
            navigate("/");
            console.log("USER ADDED");
        },
        onError: (error) => {
            console.error("Error adding user:", error);
        },
    });

    return mutate

}
export default useLogOut
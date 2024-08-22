import axios from "axios";

export const handleLogin = async (email, pwd) => {


    try {
        const response = await axios.get("http://localhost:3500/users", {
            params: { email }
        });

        const user = response.data.find(user => user.email === email);
        
        if (user) {
            if (user.password === pwd) {
                console.log("Login successful");
                localStorage.setItem('authToken', 'some-token-value');
                return true;
            } else {
                console.log("Password incorrect");
            }
        } else {
            console.log("User not found");
        }
    } catch (err) {
        console.error("An error occurred:", err);
        throw err;
    }
};


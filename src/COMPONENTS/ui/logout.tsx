
import { useEffect } from "react";
import useLogOut from "../../HOOKS/AUTH/useLogOut";

const Logout = () => {

    const { mutate: logout } = useLogOut();

    useEffect(() => {
        logout();
    })

    return <div></div>
}

export default Logout;

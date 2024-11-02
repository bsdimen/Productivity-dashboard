import { useEffect, useState } from "react";
import { useAuth } from "../../Services/authContextServ";
import { framework } from "../../TYPES/FRAMEWORK"
import { db } from "../../firebase";
import { collection, DocumentData, getDocs, query, QueryDocumentSnapshot, where } from "firebase/firestore";
import { useMutation } from "@tanstack/react-query";


const useGetAllFrames = () => {
    const { user } = useAuth();
    const [frameworks, setFrameworks] = useState<framework[] | null>(null);

    const getAllFrames = async (id: string | undefined) => {

        if (!id) {
            return null;
        }
        try {
            const queryFrame = query(collection(db, "frameworks"), where("userId", "==", id));
            const frameSnapshot = await getDocs(queryFrame);
            const frameworksData = frameSnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            })) as framework[];

            return frameworksData;
        }
        catch (error) {
            return error;
        }
    }

    const { mutate, isError, isSuccess } = useMutation({
        mutationFn: () => getAllFrames(user?.id),
        onSuccess: (data) => {
            setFrameworks(data as framework[] | null)
        },
        onError: (error) => {
            return null;
            console.error("Error adding framework:", error);
        },
    });

    return { mutate, frameworks, isError, isSuccess };

}

export default useGetAllFrames
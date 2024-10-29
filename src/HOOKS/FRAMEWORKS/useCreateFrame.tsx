import React from 'react';

import { useAuth } from '../../Services/authContextServ';

import { framework } from '../../TYPES/FRAMEWORK';
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useMutation } from "@tanstack/react-query";



const useCreateFrame = (frame: framework) => {


    const addFrame = async (frame: framework) => {
        try {
            const docRef = await addDoc(collection(db, "frameworks"), frame);
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    const mutate = useMutation({
        mutationFn: () => addFrame(frame),
        onSuccess: () => {
            console.log("FRAMEWORK ADDED");
        },
        onError: (error) => {
            console.error("Error adding framework:", error);
        },
    });

    return mutate;

}

export default useCreateFrame

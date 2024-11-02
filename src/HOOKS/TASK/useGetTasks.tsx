import React from 'react';
import { useAuth } from '../../CONTEXTS/authContextServ';

interface TaskProps {
    idFrame: string;
}

const useGetTasks = (frame: TaskProps) => {
    const user = useAuth();




}
import React, { useEffect } from 'react';
import SideNavBar from "../COMPONENTS/ui/sideNavBar"
import useCreateFrame from '../HOOKS/FRAMEWORKS/useCreateFrame';

import { TrashIcon, PenIcon } from '../COMPONENTS/ui/icons';
import { useAuth } from '../CONTEXTS/authContextServ';



const Framework = () => {

    const { user } = useAuth();
    const frame = { title: "title test", description: "test desc", userId: user!.id }

    const { mutate } = useCreateFrame(frame);
    useEffect(() => {

    }, [])
    return (
        <div className='framework-container'>
            <SideNavBar />
            <FramesContainer />
        </div>
    );
}

export default Framework;

const FramesContainer = () => {

    return <div className='framework-wrapper'>
        <div className='framework-heading'>
            <h2>Frameworks</h2>
            <p>you will find here all your frameworks..Feel free to add more based on your needs</p>
        </div>
        <div className='framework-lists'>
            <FrameworkItem />
            <FrameworkItem />
            <FrameworkItem />
            <FrameworkItem />
            <FrameworkItem />
            <FrameworkItem />
            <FrameworkItem />
            <FrameworkItem />
            <FrameworkItem />
            <FrameworkItem />

        </div>
    </div>




}

const FrameworkItem = () => {
    return <div className='framework-item-container'>
        <div className='icons'>
            <PenIcon />
            <TrashIcon />
        </div>
        <h3>Heading of frame</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat</p>
        <button>See More</button>
    </div>
}
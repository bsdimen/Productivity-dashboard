import React, { useEffect } from 'react';
import SideNavBar from "../COMPONENTS/ui/sideNavBar"
import useCreateFrame from '../HOOKS/FRAMEWORKS/useCreateFrame';

import { TrashIcon, PenIcon, AddCircleIcon } from '../COMPONENTS/ui/icons';
import { useAuth } from '../CONTEXTS/authContextServ';



const Framework = () => {

    const { user } = useAuth();
    const frame = { title: "title test", description: "test desc", userId: user!.id }

    // const { mutate } = useCreateFrame(frame);
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
            <div className='framework-item-container add-new-frame'>
                <AddCircleIcon />
                <h3>Add New Framework</h3>
            </div>

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
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et</p>
        <button className="inline-btn">See More</button>
    </div>
}

const AddNewFrameTab = () => {
    return <div className='add-new-frame-tab'>
        <div className='frme-inputs'>
            <input type='text' placeholder='What do you want to call this framework?' />
            <input type='text' placeholder='Write a discription for this framework' />

        </div>
    </div>
}
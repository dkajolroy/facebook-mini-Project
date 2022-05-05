import React from 'react'
import { Toaster } from 'react-hot-toast';
import MainLayout from '../../Components/MainLayout/MainLayout';
import CreatePost from '../../Components/Posts/CreatePost';
import Stories from '../../Components/Stories/Stories';

function TimeLine() {


    return (
        <MainLayout>
            <div style={{ marginTop: "55px" }}>
                <Toaster />
                <Stories />
                <CreatePost />
            </div>
            <div className="new" style={{ height: "2000px", width: "200px" }}></div>
        </MainLayout>
    )
}

export default TimeLine
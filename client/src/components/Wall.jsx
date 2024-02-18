import React, { Fragment, useEffect, useState } from "react";
import Featured from './featured/FeaturedSection';
import { Link } from 'react-router-dom';


export default function Wall() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const getBlogs = async () => {
            try {
                const response = await fetch("http://localhost:5555/blogs");
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const jsonData = await response.json();
                console.log(jsonData);
                setBlogs(jsonData.data);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };
        getBlogs();
    }, []);

   

    return (
        <Fragment>
            <div className="w-[90%] mx-auto md:mt-0 mt-16 mb-12">
                <div>
                    <Featured />
                </div>
                
                <div className="text-5xl font-bold pt-10 pb-6 text-center bg-black text-sky-500 mt-10">
                    <h1>Discover the madness</h1>
                </div>
                <div className="bg-black grid grid-cols-1 md:grid-cols-3 gap-3 text-white">
                    {blogs.toReversed().map(blog => (
                        <div key={blog._id} className="hover:bg-blue-600 bg-black border-blue-600 border-[0.5px] px-14 py-10 hover:rounded-xl m-7 flex flex-col justify-center rounded-lg" style={{ backdropFilter: 'blur(20px)' }}>
                            <Link to={`/blogs/${blog._id}`} style={{ textDecoration: 'none' }}>
                            <div className="title font-extrabold text-4xl text-white mb-4">
                                <h1>{blog.title}</h1>
                            </div>
                            <div className="description font-normal my-5 text-[#CDF5FD]">
                                <p>" {blog.description_short} "</p>
                            </div>
                            {/* <div className="file text-[#CDF5FD]">
                                <p>Code Link :- {blog.file}</p>
                            </div>
                            */}
                            <div className="tags text-[#CDF5FD] mt-5 w-[100%] mx-auto rounded-md py-2 text-md">
                                <p><span className="font-bold">Tags : </span><span className="font-extralight ml-1"> {blog.tags}</span> </p>
                            </div> 
                            </Link>
                            
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    );
}

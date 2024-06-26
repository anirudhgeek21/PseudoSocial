import React, { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navigation from '../Navigation';
import Featured from '../featured/FeaturedSection'
import CategoryDiscussion from './CategoryDiscussion';

export default function CollegeHome() {
    const { category } = useParams();
    const trendingName = category ? `Trending in ${category}` : "Trending in General";
    const [blogs, setBlogs] = useState([]);
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    let url;
    if (selectedCategory === "") {
        url = 'https://code-store-backend.vercel.app/discussions';
    } else {
        url = `https://code-store-backend.vercel.app/discussions?category=${selectedCategory}`;
    }

    useEffect(() => {
        const getBlogs = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    console.log(response);
                    throw new Error('Failed to fetch data');
                }
                const jsonData = await response.json();
                setBlogs(jsonData.data);
                console.log(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };
        getBlogs();
    }, [selectedCategory, url]);



    return (
        <Fragment>
            <Navigation x="X" college={category || 'General'} />
            <CategoryDiscussion selectedCategory={selectedCategory} onCategorySelect={handleCategorySelect} />

            
        </Fragment>
    )
}

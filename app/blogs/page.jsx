import React from 'react';
import Link from 'next/link'; 
import './BlogMenu.css';

const BlogMenu = () => {
    const blogs = [
        {
            path: "/blogs/pilot",
            title: "Pilot",
            date: "2023-09-01",
            category: "Personal",
            coverImage: "/blog-cover-images/pilot.png"
        },
        {
            path: "/blogs/heart-disease",
            title: "Heart Disease Classification",
            date: "2023-10-01",
            category: "Machine Learning",
            coverImage: "/blog-cover-images/heart-disease.png"
        },
        {
            path: "/blogs/logistic-regression",
            title: "Logistic Regression",
            date: "2023-11-01",
            category: "Machine Learning",
            coverImage: "/blog-cover-images/logistic-regression.png"
        }
    ];

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Intl.DateTimeFormat('en-US', options).format(new Date(dateString));
    };

    return (
        <div className='blog-menu-container'>
            <h2 className='blog-menu-title'>My Blog Repository</h2>
            <div className='blog-menu-list'>
                {blogs.map((blog, index) => (
                    <Link href={blog.path} key={index} className='blog-menu-post'>
                        <img src={blog.coverImage} alt={blog.title} className='blog-cover-image'/>
                        <div className='blog-home-post-details'>
                            <h3 className='blog-home-post-title'>{blog.title}</h3>
                            <span className='blog-home-post-date'>{formatDate(blog.date)}</span>
                            <span className='blog-home-post-category'>{blog.category}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default BlogMenu;

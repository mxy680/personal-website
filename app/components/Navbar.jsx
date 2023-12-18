import React from 'react';
import Link from 'next/link';
import './NavBar.css';

export default function NavBar () {
    return (
        <div className='navbar-container'>
            <div className='navbar-links'>
                <Link href="/">Home</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/blogs">Blog</Link>
                <a href='/resume.pdf' target='_blank'>CV</a>
            </div>
        </div>
    );
}

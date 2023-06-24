'use client'

import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import Link from 'next/dist/client/link';
import { useRouter } from 'next/navigation';
import { Paperclip, Folder, Edit, Home, User, ArrowUpCircle, Zap, Cpu, Grid, Code, Book } from 'react-feather'
import styles from '../Navbar/styles.module.css'
import ToggleTheme from '../Theme';
import { useMediaQuery } from '@mui/material';

// const useMountEffect = fun => useEffect(fun, []);

const Navbar = ({ post }) => {

  const router = useRouter();
  const matches = useMediaQuery('(min-width:768px)');
  const [activeTheme, setActiveTheme] = useState('')
  const inactiveTheme = activeTheme === 'dark' ? 'light' : 'dark' 
  const darkTheme = activeTheme === 'dark'
  // const myRef = useRef(null);
  
    // const executeScroll = () => myRef.current.scrollIntoView(); // run this function from an event handler or pass it to useEffect to execute scroll
  
    // useMountEffect(executeScroll); // Scroll on mount
  
  useEffect(() => {
    const savedTheme = JSON.parse(localStorage.getItem('current-theme'))
  if (savedTheme) {
    setActiveTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(
      'current-theme',
      JSON.stringify(activeTheme)
    )
  }, [activeTheme])

  useEffect(() => {
      document.body.dataset.theme = activeTheme;
  }, [activeTheme])

  // const activePage = typeof window !== 'undefined' && window.location.pathname

  // const links = typeof document !== 'undefined' && document.querySelectorAll('nav a');

  function removeTrailingSlash(str) {
    // let removeSlash = str.replace(/\//,'');
    let keepLastElem = /[^/]*$/.exec(str)[0];
    return keepLastElem.charAt(0).toUpperCase() + keepLastElem.substring(1)
  }

  var links = typeof document !== 'undefined' && document.querySelectorAll('.ul a[href="'+document.URL+'"]');

  const isActive = () => {
    var pathname = typeof document !== 'undefined' && window.location.pathname
    var detectLink = ('.nav > li > a[href="'+pathname+'"]').parent().addClass('active');
    return detectLink;
  }

  // console.log("HI" + removeTrailingSlash(window.location.pathname))

  const hostname = typeof window !== 'undefined' && removeTrailingSlash(window.location.pathname) ? removeTrailingSlash(window.location.pathname) : '';

  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
    <header className={styles.header}>
    <nav isActive={isActive} className={styles.wrapper}>
      <ul className={styles.ul}>
      {/* <Link href='/'>
          <Home/>
          <span className={styles.brief}>Home</span>
        </Link> */}
        {/* <Link href='/about'>
      <a className={router.pathname == "/about" ? styles.active : styles.a}>
          <User/>
          <span className={styles.brief}>About</span>
        </a>
        </Link> */}
        {/* {matches ? <Link href='/code'>
      <a className={router.pathname == "/code" ? styles.active : styles.a}>
          <Code/>
          <span className={styles.brief}>Code</span>
        </a>
        </Link> : ''} */}
        {/* <Link href='/projects'>
      <a className={router.pathname == "/projects" ? styles.active : styles.a}>
          <Folder/>
          <span className={styles.brief}>Projects</span>
        </a>
        </Link>
        <Link href='/posts'>
      <a className={router.pathname == "/posts" ? styles.active : styles.a}>
          <Book/>
          <span className={styles.brief}>Posts</span>
        </a>
        </Link> */}
        <span className={styles.preBorder}/>
        <span className={styles.a}>
        <ToggleTheme>
        </ToggleTheme>
        <span className={styles.brief}>Theme</span>
        </span>
        <a
        scrollNav={scrollNav}
        onClick={toggleHome} to='/' className={styles.a}>
          <ArrowUpCircle/>
          <span className={styles.brief}>Top</span>
        </a>
        <Link href='/'>
        Sign In
          <span className={styles.brief}>Sign In</span>
        </Link>
        <Link href='/'>
        Register
          <span className={styles.brief}>Register</span>
        </Link>
      </ul>
     </nav>
     </header>
    </>
  );
};

export default Navbar;
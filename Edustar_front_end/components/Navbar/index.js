"use client";

import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import Link from "next/dist/client/link";
import { useRouter } from "next/navigation";
import styles from "../Navbar/styles.module.css";
// import ToggleTheme from '../Theme';
import { useMediaQuery } from "@mui/material";
import { ConnectWallet } from "@thirdweb-dev/react";
import { ethers } from "ethers";

// const useMountEffect = fun => useEffect(fun, []);

const Navbar = ({ post }) => {
  const router = useRouter();
  const matches = useMediaQuery("(min-width:768px)");
  const [activeTheme, setActiveTheme] = useState("");
  const inactiveTheme = activeTheme === "dark" ? "light" : "dark";
  const darkTheme = activeTheme === "dark";
  // const myRef = useRef(null);

  // const executeScroll = () => myRef.current.scrollIntoView(); // run this function from an event handler or pass it to useEffect to execute scroll

  // useMountEffect(executeScroll); // Scroll on mount

  // useEffect(() => {
  //   const savedTheme = JSON.parse(localStorage.getItem('current-theme'))
  // if (savedTheme) {
  //   setActiveTheme(savedTheme)
  //   }
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem(
  //     'current-theme',
  //     JSON.stringify(activeTheme)
  //   )
  // }, [activeTheme])

  // useEffect(() => {
  //     document.body.dataset.theme = activeTheme;
  // }, [activeTheme])

  // const activePage = typeof window !== 'undefined' && window.location.pathname

  // const links = typeof document !== 'undefined' && document.querySelectorAll('nav a');

  const handleWalletConnect = (provider) => {
    console.log("bruhbruhru");
    // redirect to new page upon successful connection
    router.push("/quiz");
  };

  function removeTrailingSlash(str) {
    // let removeSlash = str.replace(/\//,'');
    let keepLastElem = /[^/]*$/.exec(str)[0];
    return keepLastElem.charAt(0).toUpperCase() + keepLastElem.substring(1);
  }

  var links =
    typeof document !== "undefined" &&
    document.querySelectorAll('.ul a[href="' + document.URL + '"]');

  const isActive = () => {
    var pathname = typeof document !== "undefined" && window.location.pathname;
    var detectLink = ('.nav > li > a[href="' + pathname + '"]')
      .parent()
      .addClass("active");

    return detectLink;
  };

  // console.log("HI" + removeTrailingSlash(window.location.pathname))

  const hostname =
    typeof window !== "undefined" &&
    removeTrailingSlash(window.location.pathname)
      ? removeTrailingSlash(window.location.pathname)
      : "";

  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.wrapper}>
          <ul className={styles.ul}>
            <Link style={{ fontSize: "1.25rem" }} href="/">
              Edustar
            </Link>
            {/* <span className={styles.preBorder}/> */}
            {/* <WalletConnectButton/> */}
            {/* <ToggleTheme/> */}

            <div className={styles.navLinks}>
              <ConnectWallet theme="light" />
            </div>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;

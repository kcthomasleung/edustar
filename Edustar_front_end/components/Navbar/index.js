// "use client";

// import React, { useState, useEffect } from "react";
// import { animateScroll as scroll } from "react-scroll";
// import Link from "next/dist/client/link";
// import { useRouter } from "next/navigation";
// import styles from "../Navbar/styles.module.css";
// import { useMediaQuery } from "@mui/material";
// import { ConnectWallet } from "@thirdweb-dev/react";

// const Navbar = ({ post }) => {
//   const router = useRouter();
//   const matches = useMediaQuery("(min-width:768px)");
//   const [activeTheme, setActiveTheme] = useState("");
//   const inactiveTheme = activeTheme === "dark" ? "light" : "dark";
//   const darkTheme = activeTheme === "dark";

//   const handleWalletConnect = (provider) => {
//     console.log("bruhbruhru");
//     // redirect to new page upon successful connection
//     router.push("/quiz");
//   };

//   function removeTrailingSlash(str) {
//     // let removeSlash = str.replace(/\//,'');
//     let keepLastElem = /[^/]*$/.exec(str)[0];
//     return keepLastElem.charAt(0).toUpperCase() + keepLastElem.substring(1);
//   }

//   var links =
//     typeof document !== "undefined" &&
//     document.querySelectorAll('.ul a[href="' + document.URL + '"]');

//   const isActive = () => {
//     var pathname = typeof document !== "undefined" && window.location.pathname;
//     var detectLink = ('.nav > li > a[href="' + pathname + '"]')
//       .parent()
//       .addClass("active");

//     return detectLink;
//   };

//   const hostname =
//     typeof window !== "undefined" &&
//     removeTrailingSlash(window.location.pathname)
//       ? removeTrailingSlash(window.location.pathname)
//       : "";

//   const [scrollNav, setScrollNav] = useState(false);

//   const changeNav = () => {
//     if (window.scrollY >= 80) {
//       setScrollNav(true);
//     } else {
//       setScrollNav(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", changeNav);
//   }, []);

//   const toggleHome = () => {
//     scroll.scrollToTop();
//   };

//   return (
//     <>
//       <header className={styles.header}>
//         <nav className={styles.wrapper}>
//           <ul className={styles.ul}>
//             <Link style={{ fontSize: "1.25rem" }} href="/">
//               Edustar
//             </Link>
//             {/* <span className={styles.preBorder}/> */}
//             {/* <WalletConnectButton/> */}
//             {/* <ToggleTheme/> */}

//             <div className={styles.navLinks}>
//               <ConnectWallet theme="light" />
//             </div>
//           </ul>
//         </nav>
//       </header>
//     </>
//   );
// };

// export default Navbar;

"use client";

import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "../Navbar/styles.module.css";
import { useMediaQuery } from "@mui/material";
import { ConnectWallet } from "@thirdweb-dev/react";

const Navbar = ({ post }) => {
  const router = useRouter();
  const matches = useMediaQuery("(min-width:768px)");
  const [activeTheme, setActiveTheme] = useState("");
  const inactiveTheme = activeTheme === "dark" ? "light" : "dark";
  const darkTheme = activeTheme === "dark";

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
            <div className={styles.navLinks}>
              <Link href="/landing-page">
                <button className={styles.createCourseButton}>Home</button>
              </Link>
              <Link href="/create-course">
                <button className={styles.createCourseButton}>
                  Create Course
                </button>
              </Link>
              <ConnectWallet theme="light" />
            </div>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;

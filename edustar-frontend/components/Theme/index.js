import { useEffect, useState } from "react";
import styledcomponents from 'styled-components'
import styles from '../ToggleThemes/styles.module.css'
import useKey from "../useKey";

const ToggleThumb = styledcomponents.span`
  transition: transform 0.25s ease-in-out;
  transform: ${(p) =>
    p.activeTheme === ""
      ? "translate3d(calc(var(--toggle-width) - var(--toggle-height)), 0, 0)"
      : "none"};
`;

const ToggleTheme = () => {
    const [activeTheme, setActiveTheme] = useState('')
    const inactiveTheme = activeTheme === 'dark' ? 'light' : 'dark' 

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
    

    const handleToggle = (e) => {
        setActiveTheme(inactiveTheme)
        e.preventDefault();
    }

    useKey("KeyT", handleToggle)

  return (
    <ToggleThumb className={styles.circle} type="button"
    onKeyDown={(e)=> handleToggle(e)}
    onClick={(e)=> handleToggle(e)}>
    </ToggleThumb>
  );
}

export default ToggleTheme;
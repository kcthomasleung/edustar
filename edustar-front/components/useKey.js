import React, { useEffect, useRef } from 'react';

const useKey = (key, _callback) => {
    const _callbackRef = useRef(_callback);

    useEffect(() => {
        const handle = (e) => {
            if (e.code === key) {
                _callbackRef.current(e)
            }
        }
        document.addEventListener("keydown", handle);
        return () => document.removeEventListener("keydown", handle)
    }, [key])
}

export default useKey;
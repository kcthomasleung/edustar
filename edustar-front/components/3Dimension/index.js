import React, { useEffect } from 'react';
import styles from './styles.module.css';

const AtvImg = () => {
  useEffect(() => {
    const atvImg = () => {
      const imgs = document.querySelectorAll(`.${styles.atvImg}`);
      const totalImgs = imgs.length;
      const supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;

      if (totalImgs <= 0) {
        return;
      }

      for (let l = 0; l < totalImgs; l++) {
        const thisImg = imgs[l];
        const layerElems = thisImg.querySelectorAll(`.${styles.atvImgLayer}`);
        const totalLayerElems = layerElems.length;

        if (totalLayerElems <= 0) {
          continue;
        }

        while (thisImg.firstChild) {
          thisImg.removeChild(thisImg.firstChild);
        }

        const containerHTML = document.createElement('div');
        const shineHTML = document.createElement('div');
        const shadowHTML = document.createElement('div');
        const layersHTML = document.createElement('div');
        const layers = [];

        thisImg.id = `atvImg__${l}`;
        containerHTML.className = styles.atvImgContainer;
        shineHTML.className = styles.atvImgShine;
        shadowHTML.className = styles.atvImgShadow;
        layersHTML.className = styles.atvImgLayers;

        for (let i = 0; i < totalLayerElems; i++) {
          const layer = document.createElement('div');
          const imgSrc = layerElems[i].getAttribute('data-img');

          layer.className = styles.atvImgRenderedLayer;
          layer.setAttribute('data-layer', i);
          layer.style.backgroundImage = `url(${imgSrc})`;
          layersHTML.appendChild(layer);

          layers.push(layer);
        }

        containerHTML.appendChild(shadowHTML);
        containerHTML.appendChild(layersHTML);
        containerHTML.appendChild(shineHTML);
        thisImg.appendChild(containerHTML);

        const w = thisImg.clientWidth || thisImg.offsetWidth || thisImg.scrollWidth;
        thisImg.style.transform = `perspective(${w * 3}px)`;

        if (supportsTouch) {
          let preventScroll = false;

          thisImg.addEventListener('touchmove', (e) => {
            if (preventScroll) {
              e.preventDefault();
            }
            processMovement(e, true, thisImg, layers, totalLayerElems, shineHTML);
          });

          thisImg.addEventListener('touchstart', (e) => {
            preventScroll = true;
            processEnter(e, thisImg);
          });

          thisImg.addEventListener('touchend', (e) => {
            preventScroll = false;
            processExit(e, thisImg, layers, totalLayerElems, shineHTML);
          });
        } else {
          thisImg.addEventListener('mousemove', (e) => {
            processMovement(e, false, thisImg, layers, totalLayerElems, shineHTML);
          });

          thisImg.addEventListener('mouseenter', (e) => {
            processEnter(e, thisImg);
          });

          thisImg.addEventListener('mouseleave', (e) => {
            processExit(e, thisImg, layers, totalLayerElems, shineHTML);
          });
        }
      }
    };

    atvImg();
  }, []);

  const processMovement = (e, touchEnabled, elem, layers, totalLayers, shine) => {
    const bd = document.getElementsByTagName('body')[0];
    const htm = document.getElementsByTagName('html')[0];
    const bdst = bd.scrollTop || htm.scrollTop;
    const bdsl = bd.scrollLeft;
    const pageX = touchEnabled ? e.touches[0].pageX : e.pageX;
    const pageY = touchEnabled ? e.touches[0].pageY : e.pageY;
    const offsets = elem.getBoundingClientRect();
    const w = elem.clientWidth || elem.offsetWidth || elem.scrollWidth;
    const h = elem.clientHeight || elem.offsetHeight || elem.scrollHeight;
    const wMultiple = 320 / w;
    const offsetX = 0.52 - (pageX - offsets.left - bdsl) / w;
    const offsetY = 0.52 - (pageY - offsets.top - bdst) / h;
    const dy = pageY - offsets.top - bdst - h / 2;
    const dx = pageX - offsets.left - bdsl - w / 2;
    const yRotate = (offsetX - dx) * (0.07 * wMultiple);
    const xRotate = (dy - offsetY) * (0.1 * wMultiple);
    let imgCSS = `rotateX(${xRotate}deg) rotateY(${yRotate}deg)`;
    const arad = Math.atan2(dy, dx);
    let angle = (arad * 180) / Math.PI - 90;

    if (angle < 0) {
      angle = angle + 360;
    }

    if (elem.firstChild.className.indexOf(styles.over) !== -1) {
      imgCSS += ' scale3d(1.07,1.07,1.07)';
    }
    elem.firstChild.style.transform = imgCSS;

    shine.style.background = `linear-gradient(${angle}deg, rgba(255,255,255,${(pageY - offsets.top - bdst) / h * 0.4}) 0%,rgba(255,255,255,0) 80%)`;
    shine.style.transform = `translateX(${offsetX * totalLayers - 0.1}px) translateY(${offsetY * totalLayers - 0.1}px)`;

    let revNum = totalLayers;
    for (let ly = 0; ly < totalLayers; ly++) {
      layers[ly].style.transform = `translateX(${offsetX * revNum * (ly * 2.5) / wMultiple}px) translateY(${offsetY * totalLayers * (ly * 2.5) / wMultiple}px)`;
      revNum--;
    }
  };

  const processEnter = (e, elem) => {
    elem.firstChild.className += ` ${styles.over}`;
  };

  const processExit = (e, elem, layers, totalLayers, shine) => {
    const container = elem.firstChild;

    container.className = container.className.replace(` ${styles.over}`, '');
    container.style.transform = '';
    shine.style.cssText = '';

    for (let ly = 0; ly < totalLayers; ly++) {
      layers[ly].style.transform = '';
    }
  };

  return <></>;
};

export default AtvImg;

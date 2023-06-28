import { useEffect } from 'react';

// let scrollPosition = 0;

export const useDisableBodyScroll = (open) => {
    useEffect(() => {
        if (open) {
            document.body.style.paddingRight = `${getScrollbarWidth()}px`;
            document.body.style.overflow = 'hidden';
            document.getElementsByTagName('html')[0].style.overflow = 'hidden';
        } else {
            document.body.style.paddingRight = '0px';
            document.body.style.removeProperty('overflow');
            document.getElementsByTagName('html')[0].style.removeProperty('overflow');
        }
    }, [open]);
};

const getScrollbarWidth = () => {
    document.body.style.overflow = 'hidden';
    let width = document.body.clientWidth;
    document.body.style.overflow = 'scroll';

    width -= document.body.clientWidth;

    if (!width) width = document.body.offsetWidth - document.body.clientWidth;

    document.body.style.overflow = '';

    return width;
}

// const fixBody = () => {
// 	const body = document.body;

//     body.dataset.state = 'fixed';

//     scrollPosition = window.pageYOffset;
//     Object.assign(document.body.style, {
//         top: `-${scrollPosition}px`,
//         width: '100%',
//         overflow: 'hidden',
//         position:'fixed',
//        })
// }

// const releaseBody = () => {
// 	const body = document.body;

//     body.dataset.state = 'released';

//     body.style.removeProperty('overflow');
//     body.style.removeProperty('position');
//     body.style.removeProperty('top');
//     body.style.removeProperty('width');
//     window.scrollTo(0, scrollPosition);
// }
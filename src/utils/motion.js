const slideIn = (direction, type, delay, duration, child) => {
    const hidden = {
        opacity: 0,
        x: direction === "left" ? "-10%" : direction === "right" ? "10%" : 0,
        y: direction === "up" ? "10%" : direction === "down" ? "-10%" : 0,
    };
    
    const show = {
        x: 0,
        y: 0,
        opacity: 1,
    };

    return {
        hidden,
        show: child ? show : { ...show, transition: { type, duration, ease: "easeOut", delay } }
    };
};

const staggerContainer = () => {
    return {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.50,
            },
        },
    };
}

export {
    slideIn,
    staggerContainer,
}
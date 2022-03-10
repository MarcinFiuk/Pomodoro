const convertFromSecondToMinutes = (time) => {
    const min = Math.floor(time / 60);
    const sec = (time % 60).toString().padStart(2, '0');
    return `${min} : ${sec}`;
};

export default convertFromSecondToMinutes;

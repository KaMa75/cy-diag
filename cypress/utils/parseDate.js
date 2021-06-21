
const parseDate = (dateString) => {
    const splittedDate = dateString.split(/\/|, |:/);
    const date = new Date(parseInt(splittedDate[2]), parseInt(splittedDate[1]) - 1, parseInt(splittedDate[0]), parseInt(splittedDate[3]), parseInt(splittedDate[4]));
    return Date.parse(date);
}

export default parseDate;

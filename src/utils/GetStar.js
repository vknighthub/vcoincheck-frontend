function GetStar(number) {
    if (number >= 1600)
        return 5;
    if (number >= 1200 && number < 1600)
        return 4;
    if (number >= 900 && number < 1200)
        return 3;
    if (number >= 500 && number < 900)
        return 2;
    if (number >= 100 && number < 500)
        return 1;
    return 0;
}
export default GetStar;
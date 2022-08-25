function GetCategory(number) {
    if (number === 1)
        return "cardano-knowledge";
    if (number === 2)
        return "blockchain-knowledge";
    if (number === 3)
        return "cardano-dictionary";
    if (number === 4)
        return "catalyst-knowledge";
    return "";
}
export default GetCategory;
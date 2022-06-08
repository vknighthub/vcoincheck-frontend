
const GetContentLanguage = (lang,jname) => {
    var result
    Object.keys(jname).forEach(key => {
        if (lang === key) {
            result = jname[key]
        }
    })
    return result;

}
export default GetContentLanguage;
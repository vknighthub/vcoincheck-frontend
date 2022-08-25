import language from './MOCK_LANGUAGE.json'


const GetLanguageofpost = (t) => {
    const listLanguage = [];
    listLanguage.push({ "key": `${t('languageofpost')}`, "value": '' })
    language.forEach((key) => {
        const jobject = { "key": key.description, "value": key.languagecd }
        listLanguage.push(jobject)
    })
    return listLanguage

}
export default GetLanguageofpost;
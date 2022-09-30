/* eslint-disable no-undef */

const handleFaceError = (errCode) => {
    // Log all possible error codes during user interaction..
    // Refer to: https://faceio.net/integration-guide#error-codes
    // for a detailed overview when these errors are triggered.
    // const fioErrCode={PERMISSION_REFUSED:1,NO_FACES_DETECTED:2,UNRECOGNIZED_FACE:3,MANY_FACES:4,PAD_ATTACK:5,FACE_MISMATCH:6,NETWORK_IO:7,WRONG_PIN_CODE:8,PROCESSING_ERR:9,UNAUTHORIZED:10,TERMS_NOT_ACCEPTED:11,UI_NOT_READY:12,SESSION_EXPIRED:13,TIMEOUT:14,TOO_MANY_REQUESTS:15,EMPTY_ORIGIN:16,FORBIDDDEN_ORIGIN:17,FORBIDDDEN_COUNTRY:18,UNIQUE_PIN_REQUIRED:19,SESSION_IN_PROGRESS:20}

    let result = null
    switch (errCode) {
        case fioErrCode.PERMISSION_REFUSED:
            result = ("Access to the Camera stream was denied by the end user")
            break
        case fioErrCode.NO_FACES_DETECTED:
            result = ("No faces were detected during the enroll or authentication process")
            break
        case fioErrCode.UNRECOGNIZED_FACE:
            result = ("Unrecognized face on this application's Facial Index")
            break
        case fioErrCode.MANY_FACES:
            result = ("Two or more faces were detected during the scan process")
            break
        case fioErrCode.PAD_ATTACK:
            result = ("Presentation (Spoof) Attack (PAD) detected during the scan process")
            break
        case fioErrCode.FACE_MISMATCH:
            result = ("Calculated Facial Vectors of the user being enrolled do not matches")
            break
        case fioErrCode.WRONG_PIN_CODE:
            result = ("Wrong PIN code supplied by the user being authenticated")
            break
        case fioErrCode.PROCESSING_ERR:
            result = ("Server side error")
            break
        case fioErrCode.UNAUTHORIZED:
            result = ("Your application is not allowed to perform the requested operation (eg. Invalid ID, Blocked, Paused, etc.). Refer to the FACEIO Console for additional information")
            break
        case fioErrCode.TERMS_NOT_ACCEPTED:
            result = ("Terms & Conditions set out by FACEIO/host application rejected by the end user")
            break
        case fioErrCode.UI_NOT_READY:
            result = ("The FACEIO Widget code could not be (or is being) injected onto the client DOM")
            break
        case fioErrCode.SESSION_EXPIRED:
            result = ("Client session expired. The first promise was already fulfilled but the host application failed to act accordingly")
            break
        case fioErrCode.TIMEOUT:
            result = ("Ongoing operation timed out (eg, Camera access permission, ToS accept delay, Face not yet detected, Server Reply, etc.)")
            break
        case fioErrCode.TOO_MANY_REQUESTS:
            result = ("Widget instantiation requests exceeded for freemium applications. Does not apply for upgraded applications")
            break
        case fioErrCode.EMPTY_ORIGIN:
            result = ("Origin or Referer HTTP request header is empty or missing")
            break
        case fioErrCode.FORBIDDDEN_ORIGIN:
            result = ("Domain origin is forbidden from instantiating fio.js")
            break
        case fioErrCode.FORBIDDDEN_COUNTRY:
            result = ("Country ISO-3166-1 Code is forbidden from instantiating fio.js")
            break
        case fioErrCode.SESSION_IN_PROGRESS:
            result = ("Another authentication or enrollment session is in progress")
            break
        case fioErrCode.NETWORK_IO:
        default:
            result = ("Error while establishing network connection with the target FACEIO processing node")
            break
    }
    return result
}
export default handleFaceError;
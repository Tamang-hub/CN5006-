/* Third Exercise */
const dateofbirth="04/12/2005";

const getstudentName = () => {
    return"Rachana"
}
const getCampusName = () => {
    return("UEL Campus")
} 
//for exporting functions and variables outside the module
exports.getName=getstudentName
exports.Location=getCampusName
exports.dob= dateofbirth
//export function with parameters
exports.Studentgrade=(marks)=> {
    if(marks>30 && marks<60)
        return("B grade")
    else return("A grade)")
}
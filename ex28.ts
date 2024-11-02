
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
import fs from 'fs';

(async () => {

    let myfile = fs.readFileSync("./students.json", "utf8")
    let students: Array<any> = JSON.parse(myfile)

    // let result = students.filter(st=> !st.violations.find(i=> i > 7)).map(st=> ({name:st.name, violations: st.violations}))

    // let result = students.filter(st=> st.violations.length > 0 && !st.violations.find(i=> i > 7)).map(st=> ({name:st.name, violations: st.violations}))




    // console.log(result)

})()




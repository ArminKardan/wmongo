
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
import fs from 'fs';

(async () => {

    let myfile = fs.readFileSync("./students.json", "utf8")
    let students: Array<any> = JSON.parse(myfile)

    let result = students.filter(st=> st.violations.filter(i=> i > 5).length >= 2).map(st=> ({name:st.name, violations: st.violations}))

    console.log(result)

})()




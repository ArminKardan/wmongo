
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
import fs from 'fs';

//Immutable, Primitive ()

(async () => {
    let myfile = fs.readFileSync("./students.json", "utf8")
    let students: Array<any> = JSON.parse(myfile)

    let newstds = students.map(st => ({name: st.name, viol:st.violations}))
    newstds = JSON.parse(JSON.stringify(newstds))
    newstds[0].viol[0] = 1000

    console.log(students)

})()




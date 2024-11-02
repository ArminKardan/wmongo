
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
import fs from 'fs';

(async () => {

    let myfile = fs.readFileSync("./students.json", "utf8")
    let students: Array<any> = JSON.parse(myfile)

    let result = students.filter(st=> st.violations.length >= 3 && st.violations.find(v=> v > 5)).map(st=>{
        return {name: st.name, vcount:st.violations.length, vsum: st.violations.reduce((acc,cur)=> acc + cur, 0),

            violations: st.violations
        }
    })

    console.log(result)

})()


// {name:"...", vcount:.., vsum:..}


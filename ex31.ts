
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
import fs from 'fs';

(async () => {

    let myfile = fs.readFileSync("./students.json", "utf8")
    let students: Array<any> = JSON.parse(myfile)

    let result = students.map(st=> ({name:st.name, score: st.exam.find(exam=> exam.name == "math").score })).filter(st=> st.score > 70)

    console.log(100 * result.length / students.length)

})()


// {name:"...", vcount:.., vsum:..}


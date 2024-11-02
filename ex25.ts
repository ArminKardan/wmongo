
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
import fs from 'fs'


    // function kamran(a)
    // {
    //     return a.height > 165
    // }


    // let kamran = a =>{
    //     return a.height > 165
    // }

    // let kamran = a => a.height > 165





    ; (async () => {

        let myfile = fs.readFileSync("./students.json", "utf8")
        let students: Array<any> = JSON.parse(myfile)

        // let heights = students.filter(a => a.height > 165).map(a => a.height)
        let heights = students.map(a => a.height).filter(a => a > 165)

        // function ali(acc, cur) {
        //     return acc + cur / heights.length
        // }

        // let mean = 0
        // for(let h of heights)
        // {
        //     mean = mean + h / heights.length
        // }

        let mean = heights.reduce((mean, h) => mean + h / heights.length, 0)




        console.log(mean)

    })()




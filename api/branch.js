import express from 'express'
import {createClient} from '@supabase/supabase-js'
import bodyparse from 'body-parser'
const app = express()

const port = 3000
const supabase = createClient(
    'https://yxrsrqchqksojocudlox.supabase.co',
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4cnNycWNocWtzb2pvY3VkbG94Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc1MDIwNTIsImV4cCI6MTk5MzA3ODA1Mn0.7giud7LJFt_LiUKDVpx7QF_0EPpCQcJYto0Yp-OUn4U'
);
app.use(bodyparse.json())
app.use(
    bodyparse.urlencoded({
        extended: true,
    })
)






 export default async function branch(req, res) {
    const {data , error} = await supabase
    .from('Bank')
    .select()
    .ilike('branch',`${req.query.q}`)    
    .order('ifsc',{ascending:false})
    .range(parseInt(req.query.offset),parseInt(req.query.offset)+parseInt(req.query.limit)-1)
            res.send(data)
    
}

//      client.query(`Select * from bank_branch where LOWER(branch) ='${req.query.q.toLowerCase()}'order by ifsc desc limit ${req.query.limit} offset ${req.query.offset}`, (err, result)=>{
//         if(!err){
//             res.send(result.rows);
//         }
        
//     });

// })
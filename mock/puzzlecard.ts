const random_joke = [
    {
        setup:'What is the object oriented way to get wealthy?',
        punchline:'Inheritance'
    },
    {
        setup:'To understand what recursion is...',
        punchline:'You must first understand what recursion is'
    },
    {
        setup:'What do you call a factory that sells passable products?',
        punchline:'A satisfactory'
    }
];
let random_joke_call_count = 0;

// export default{
//     'get /random_joke':function(req:any,res:any){
//         const responseObj=random_joke[random_joke_call_count%random_joke.length];
//         random_joke_call_count++;
//         res.status(500);
//         res.json({});
//         // setTimeout(()=>{
//         //     res.json(responseObj);
//         // },3000);
//     }
// };
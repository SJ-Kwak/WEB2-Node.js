const express = require('express');
const app = express();
const uuidAPIKey = require('uuid-apikey');

const server = app.listen(3001, () => {
    console.log('Start Server: localhost:3001');
});

console.log(uuidAPIKey.create());

const key = {
    apiKey: '99TAKSP-QPXMHPQ-GGKFQCT-TSY7DG4',
    uuid: '4a74a9e6-bdbb-48da-8426-fbb3d67c76c0'
};

app.get('/api/users/:apikey/:type', async(req,res)=>{//colon:이 있는 path에는 어떤 값이든 들어갈 수 있다.
    let {
        apikey,
        type
    }=req.params;

    if(!uuidAPIKey.isAPIKey(apikey) || !uuidAPIKey.check(apikey, key.uuid)){
        res.send('apikey is not valid.');
    }else{
        if(type=='seoul'){
            let data=[
                {
                name:"홍길동", 
                city:"seoul"
                },
                {
                name:"김철수",
                city:"seoul"
                }
            ];
            res.send(data);
        }else if(type=='jeju'){
            let data=[
                {
                name:"박지성", 
                city:"jeju"
                },
                {
                name:"손흥민",
                city:"jeju"
                }
            ];
            res.send(data);
    
        }else{
            res.send('Type is not correct.');
        }
    }      
});

app.get('/api/sales/:apikey/:year', async(req,res)=>{
    let {
        apikey,
        year
    }=req.params;
    if(!uuidAPIKey.isAPIKey(apikey) || !uuidAPIKey.check(apikey, key.uuid)){
        res.send('apikey is not valid.');
    }else{
        if(year=='2019'){
            let data=[
                {
                product:"반도체", 
                amount:3928840000
                },
                {
                product:"냉장고",
                amount:28885500
                },
            ];
            res.send(data);
        }else if(year=='2020'){
            let data=[
                {
                name:"반도체", 
                city:92884000
                },
                {
                name:"냉장고",
                city:38400000
                },
            ];
            res.send(data);
    
        }else{
            res.send('Type is not correct.');
        }
    }
});
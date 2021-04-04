const {google} = require('googleapis');
const keys = require('./keys.json')

//https://nodejs.org
//https://code.visualstudio.com
//https://developers.google.com/sheets/api/quickstart/nodejs
//console.developers.google.com
//https://developers.google.com/identity/protocols/googlescopes

const client = new google.auth.JWT(
    keys.client_email, 
    null, 
    keys.private_key, 
    ['https://www.googleapis.com/auth/spreadsheets']
);


client.authorize(function(err,tokens){
    
    if(err){
        console.log(err);
        return;
    } else{
        console.log('Connected!');
        gsrun(client); //변수 client를 매개변수 cl에 대입. 호출
    }

});

//async function => await
async function gsrun(cl){ //parameter cl

    const gsapi = google.sheets({version:'v4', auth:cl});

    const opt = {
        spreadsheetId: '1t9QwKo3bzPjVJSpGkXbEZv3Mc9ki_SZ71Ahm4NK-r4k',
        range: 'Data!A2:B5' //Data는 spreadsheet tab 이름
    };

    let data = await gsapi.spreadsheets.values.get(opt);
    let dataArray = data.data.values;

   dataArray =  dataArray.map(function(r){
        while(r.length < 2){//길이 1 or 비어있으면 space return
            r.push('');
        }
        return r;
    });

    console.log(dataArray);

    let newDataArray = dataArray.map(function(r){ //매개변수 r
    r.push(r[0] + '-' + r[1]); //r을 이름으로 하는 배열
    return r;
    });
    
    const updateOptions = {
        spreadsheetId: '1t9QwKo3bzPjVJSpGkXbEZv3Mc9ki_SZ71Ahm4NK-r4k',
        range: 'Data!E2', //시작셀만 입력
        valueInputOption: 'USER_ENTERED',
        resource: { values: newDataArray}
    };

    let res = await gsapi.spreadsheets.values.update(updateOptions);
    
    //console.log(res);


}
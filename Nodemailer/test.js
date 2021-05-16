const nodemailer = require('nodemailer');
const email ={
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "e0f3081caa43b6",
        pass: "6bdb903b6ad0fa"
    }
};

const send = async (option) =>{
    nodemailer.createTransport(email).sendMail(option, (error,info)=>{
        if(error){
            console.log(error);
        }else{
            console.log(info);
            return info.response;
        }
    });
};

let email_data={
    from: 'olivia0607@naver.com',
    to:'olivia0607@naver.com',
    subject:'테스트 메일입니다.',
    text:'nodejs 한 시간 만에 끝내보자.'
}

send(email_data);
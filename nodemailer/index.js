//===========  require node mailer  ================//
            //---------------------//
let nodemailer = require('nodemailer')

console.log(nodemailer)    //// node mailer ki method check kiya .....

//============== configure email credentials  =====================///
              //-----------------------------//

// == nodemailer ki method hai createTransport jo ki ek object accept karti hai == //
let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",   /// simple male tranfer protocall 
    port: 465 , 
    secure: true,
    auth: {
        user: "shivam8878213950@gmail.com",   ///  ye email keval login ka kaam kar raha 
        pass: 'edxy qvda bkgr nujg'    // email ka pass except nhi karta  alag se create karna padta hai app password ki help se ..
    }  
})

///////============  set email / compose email ===================//////////
 let maileOptios = {
    from: 'shivam8878213950@gmail.com',  //   ye sender hai 
    to: 'tiwariakshat2023it@gmail.com',      //  kisko karna hai ..
    subject: 'this mail send from node js',
    text: 'hii akshat how are you , you are registerd successfully'
 }

 ///////////////================    send email    /////////////////////
//==========  ye jo send mail method hai vo createTransport ki method hai ==========//
transporter.sendMail(maileOptios, (err, ack)=>{
    if(err) {
        console.log("mail sending failed")
    }
    else{
        console.log("mail sending successfully")
    }
})



// jab ise kisi project ke sath use karege to is complete code ko ek function ke andar rakh dege uske baad us function ko module.export kar dege ..... or else me us function ko use karege .....   node mailer jo require kiya hai use bus function ke bahar rakhege......
function limparEmail() {
   let emailLimpo = email.trim().email.toLowerCase();
   return emailLimpo;
}

let emailSujo = "    will00@example.com      ";
let email = limparEmail(emailSujo);
console.log(email);

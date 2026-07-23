const data ={
    email:"anjali@gmail.com",
    password:"abcd",
    age :"20"
};
const {email, ...rest};
console.log(email);
console.log(rest);
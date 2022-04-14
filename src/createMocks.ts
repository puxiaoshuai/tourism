/**
 * https://github.com/boo1ean/casual  可构造假数据，运行 node createMocks.ts 复制结果
 */
var casual =require("casual")
casual.define('user', function(i) {
  return {
      email: casual.email,
      firstname: casual.first_name,
      lastname: casual.last_name,
      password: casual.password,
      id:i
  };
});

// Generate object with randomly generated fields

const users= []
for(let i = 0;i<10;i++){
  const  user = casual?.user(i+1);
  users.push(user)
}
console.log('xx',users);
/**
 * {
    email: 'Aliza.Berge@Heaven.us',
    firstname: 'Jaron',
    lastname: 'Crooks',
    password: '9Quinten30',
    id: 10
  }
 */

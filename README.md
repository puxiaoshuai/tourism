#### react 配置了tailwind内容。  git clone进行下载  。yarn install   
#### json-server 模拟json
npm install -g json-server
启动 json-server --watch db.json --port 3004
#### 因为公司和npm镜像员不同，所以 临时切换到 淘宝源进行安装
npm install nrm -g --save  nrm 可以管理 镜像源。
nvm是 node版本管理
参考链接 https://www.cnblogs.com/aurora-ql/p/13269315.html
![avatar](/zmarkdown/1.png)

```
// /**
//  * https://github.com/boo1ean/casual  可构造假数据，运行 node createMocks.ts 复制结果
//  */
// var casual =require("casual")
// casual.define('user', function(i) {
//   return {
//       email: casual.email,
//       firstname: casual.first_name,
//       lastname: casual.last_name,
//       password: casual.password,
//       id:i
//   };
// });

// // Generate object with randomly generated fields

// const users= []
// for(let i = 0;i<10;i++){
//   const  user = casual?.user(i+1);
//   users.push(user)
// }
// console.log('xx',users);
// /**
//  * {
//     email: 'Aliza.Berge@Heaven.us',
//     firstname: 'Jaron',
//     lastname: 'Crooks',
//     password: '9Quinten30',
//     id: 10
//   }
//  */

```

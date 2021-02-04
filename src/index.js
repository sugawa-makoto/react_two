/**
 * const, let等の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "val1を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "letへんすうを再宣言";

// const val3 = "const変数";
// console.log(val3);

// //const変数は上書き不可
// // val3 = "const変数上書き";

// const val3 = "const変数を再宣言";

//constで定義したオブジェクトのプロパティのヘンクが可能
// const val4 = {
//   name:"じゃけえ",
//   age:28,
// };
// val4.name = "jak";
// val4.addless = 'hirosima'
// console.log(val4);

//constで定義した配列はのプロパティの変更が可能
// const val5 = ['dog', 'cat'];
// val5[0] = 'bird';
// val5.push('monkey');
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = 'じゃけぇ';
// const age = 28;
// //「私の名前はじゃけぇです。年齢は２８歳です。」

// // 従来の方法
// const message = '私の名前は' + name + 'です。年齢は' + age + 'です。';
// console.log(message);

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// //アロー関数
// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 = (num1, num2) => num1 + num2;

// console.log(func3(10, 20));

// /**
//  * 分割代入
//  */
// const myProfile = {
//   name: "じゃけぇ",
//   age: "28"
// };

// const massage1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(massage1);

// const { name, age } = myProfile;
// const massage2 = `名前は${name}です。年齢は${age}です。`;
// console.log(massage2);

// const myProfile = ['じゃけぇ',28];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`
// console.log(message4);

/**
 * デフォルト値、引数など
 */
// const sayHello　= (name='ゲスト') => console.log(`こんにちは！${name}さん！`);
// sayHello();

/**
 * スプレット構文...
 */
// 配列の展開
// const arr1 = [1,2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 =[1,2,3,4,5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10,20];
// const arr5 = [30,40];

// const arr6 = [...arr4]
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr8);
// //もとの配列も影響を受けている↓
// console.log(arr4);

/**
 * mapやフィルターを使った配列の処理
 */
// const nameArr = ["田中","山田","じゃけぇ"];
// for(let index = 0; index<nameArr.length; index++){
//   console.log(`${index+1}番目は${nameArr[index]}です。`);
// }

//新しい配列を生成
// const nameArr2 = nameArr.map((name) => {
//   return name;
// })
// console.log(nameArr2);

//配列の中身を１個ずつ表示
// nameArr.map((name) => console.log(name));

// nameArr.map((name,index) => console.log(`${index+1}番目は${name}さんです。`));

// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num) => {
//   return num%2===1;
// })
// console.log(newNumArr);

// const newNameArr = nameArr.map((name)=>{
//   if(name === "じゃけぇ") {
//     return name;
//   }else{
//     return `${name}さん`
//   }
// })
// console.log(newNameArr);

/**
 * 三項演算子
 */
// ある条件 ？ 条件がtrueのとき : 条件がfalseのとき
// const val1 = 1 > 0 ? 'trueです' : 'falseです';
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString())

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattedNum);

// const checkSum = (num1,num2) => num1 + num2 > 100 ? '100を超えています' : '許容範囲内です';

// console.log(checkSum(50,60));

/**
 * 論理演算子のほんとうの意味を知ろう && ||
 */
// const flag1 = true;
// const flag2 = false;

// if(flag1 || flag2) {
//   console.log("１か２はtrueになります")
// }

// if(flag1 && flag2) {
//   console.log("１か２はtrueになります")
// }

// const num = null;
// // 左側がfalseなら右側を出力,左側がtrueだったら左をそのまま返す
// const fee = num ||'金額未設定です';
// console.log(fee);

// const num2 = 100;
// //左側がtrueだと右側が出力される。左側がfalseだったら左をそのまま返す
// const fee2 = num2 && 'なにか設定されました';
// console.log(fee2);

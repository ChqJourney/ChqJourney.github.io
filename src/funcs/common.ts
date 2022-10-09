import type { Ti } from "src/models/calculator";
import type { Rank } from "../models/focus";

function createRandomArray(num: number): number[] {

    let arr = [...Array(num)].map((val, idx) => idx + 1)
    for (var i = 0, len = arr.length; i < len; i++) {
        var rand = parseInt((Math.random() * len).toString());
        var temp = arr[rand];
        arr[rand] = arr[i];
        arr[i] = temp;
    }
    return arr
}


function findMinElement(numArr: number[]): {num:number,idx:number} {
    let temp = numArr.length
    let index=0
    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] !== 0) {
            if (numArr[i] <=temp) {
                temp = numArr[i]
                index=i
            }
        }
    }
    return {num:temp,idx:index}
}
const readRecords=(level:number):[]=>{
    const recordsStr=localStorage.getItem("focus-records")
    // console.log(JSON.parse(`level${level}`))
    if(!recordsStr)return []
    if(!JSON.parse(recordsStr)[`level${level}`])return []
    return recordsStr?JSON.parse(recordsStr)[`level${level}`]:[]
}
const writeRecords=(records:[])=>{
    localStorage.setItem('records-focus',JSON.stringify(records))
}

const validateAndPersistanceRecords=(records:any[],newRecord:any):any[]=>{
    let newArr=records.concat([newRecord])
    return newArr.sort((a,b)=>a.elapseTime-b.elapseTime).slice(0,9);
}
const saveTopRank=(rank:Rank,data:any)=>{
    const rs=validateAndPersistanceRecords(data.records??[],{time:data.roundTime-data.leftTime,createdAt:new Date().toLocaleString(),user:data.userName});
    var level=`${data.dimension.toString()} x ${data.dimension.toString()}`
        var str=localStorage.getItem('records-focus');
        let obj:any=str?JSON.parse(str):{}
        obj[level]=[...rs]
        localStorage.setItem('records-focus',JSON.stringify(obj))
}

const createRandomTi = ({ mode }: { mode: string }): Ti => {
    const operatorList = ["+", "-"]

    let operatorIdx = Math.floor((Math.random() * (1 - 0 + 1)) + 0)

    let num1: number = 0
    let num2: number = 0
    let num3: number = 0
    let bigNum = 0;
    switch (mode) {
        case "简单":
            bigNum = 10
            break
        case "普通":
            bigNum = 33
            break
        case "困难":
            bigNum = 99
            break
        default:
            bigNum = 10
            break
    }

    if (operatorIdx === 1) {
        num1 = Math.ceil(Math.random() * bigNum)
        num2 = Math.ceil(Math.random() * num1)
        num3 = num1 - num2
    } else if (operatorIdx === 0) {
        num1 = Math.ceil(Math.random() * bigNum)
        num2 = Math.ceil(Math.random() * (bigNum - num1))
        num3 = num1 + num2
    } else {

    }
    return { num1: num1, num2: num2, operator: operatorList[operatorIdx], answer: num3, verdict: undefined }
}
const createRandomTis = ({ quantity, mode }: { quantity: number, mode: string }): Ti[] => {
    let result: Ti[] = []
    for (let index = 0; index < quantity; index++) {
        const ti = createRandomTi({ mode })
        result.push(ti)
    }
    return result
}
function findNextTi(currentIdx:number,total:number,tis:Ti[]):number{
    let nextIdx=currentIdx+1;
    if(nextIdx<total+1){
      if(tis.every((v,i)=>v.verdict!==undefined)){
        // 已做一轮
        nextIdx=tis.findIndex((v,i)=>v.verdict===false)+1
      }
    }else{
      //最后一题做完，如果没错题
      var next=tis.findIndex((v,i)=>v.verdict===false)+1
      if(next>0){
        nextIdx=next;
      }else{
        nextIdx=currentIdx
      }

    }
    return nextIdx;
}
const createRandomRememberArray=(quantity:number,total:number):string=>{
    const orign=[...new Array(quantity)].map((v,i)=>i+1).concat([...new Array(total-quantity)].map((v,i)=>0))
    const randomList= shuffle(orign)
    return randomList.join("")
}

function shuffle(arr:number[]):number[]{
    var len = arr.length;
    for(var i = 0; i < len - 1; i++){
      var idx = Math.floor(Math.random() * (len - i));
      var temp = arr[idx];
      arr[idx] = arr[len - i - 1];
      arr[len - i -1] = temp;
    }
    return arr;
  }
export {createRandomArray,findMinElement,readRecords,writeRecords,
    validateAndPersistanceRecords,saveTopRank,createRandomTi,createRandomTis,findNextTi,createRandomRememberArray}
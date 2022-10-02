import type { Ti } from "./calculator";
import type { Rank } from "./focus";

export class state{
    constructor(status:string,user:string,current:number,level:string){
        this._status=status
        this._user=user
        this._current=current
        this._level=level
        
    }
     _status:string;
    _current:number;
    _user:string;
    _level:string;
    _total:number=10;
    _tis:Ti[]=[]
    get status():string{
        return this._status
    }
    set status(status:string){
        this._status=status
    }
    get current():number{
        return this._current
    }
    get level():string{
        return this._level
    }
    get roundTime():number{
        return 30
    }
    set level(txt:string){
        this._level=txt
    }
    
    get total():number{
        return this._total
    }
    public changeQuantity(){
        this._total=this._total===50?10:this._total+10
    }
    get tis():Ti[]{
        return []
    }
    set tis(b: Ti[]){
        this._tis=[]
    }
    get records():Rank[]{
        return []
    }
    get leftTime():number{
        return 30
    }

    private createRandomTis = ({ quantity, mode }: { quantity: number, mode: string }): Ti[] => {
        let result: Ti[] = []
        for (let index = 0; index < quantity; index++) {
            const ti = this.createRandomTi({ mode })
            result.push(ti)
        }
        return result
    }
    private createRandomTi = ({ mode }: { mode: string }): Ti => {
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
}
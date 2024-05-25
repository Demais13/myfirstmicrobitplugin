namespace bob {
    //% block="Heie $v"
    //% v.defl ="bob"
    export function heie(v:string): void {
        led.plot(1,1)
        basic.showString(v)
    }
}
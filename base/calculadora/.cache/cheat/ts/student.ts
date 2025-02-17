
class Calculator {
    batteryMax: number;
    battery: number;
    display: number;

    constructor(batteryMax: number) {
        this.batteryMax = batteryMax;
        this.battery = 0;
        this.display = 0;
    }

    chargeBattery(value: number): void {
        this.battery += value;
        if (this.battery > this.batteryMax) {
            this.battery = this.batteryMax;
        }
    }

    sum(a: number, b: number): void { 
        if(this.battery == 0){
            console.log("fail: bateria insuficiente");
            return;
        }
        this.battery -= 1;
        this.display = (a + b);
    }

    division(num: number, den: number): void {
        if(this.battery == 0){
            console.log("fail: bateria insuficiente");
            return;
        }
        this.battery -= 1;
        if(den == 0){
            console.log("fail: divisao por zero");
            return;
        }
        this.display = num / den;
    }

    toString(): string {
        return `display = ${this.display.toFixed(2)}, battery = ${this.battery}`;
    }
}


class Student {
    calc: Calculator;
    public constructor(batteryMax: number) {
        this.calc = new Calculator(batteryMax);
    }

    public show(): void {
        console.log(this.calc.toString());
    }

    public charge(value: number): void {
        this.calc.chargeBattery(value);
    }

    public sum(a: number, b: number): void {
        this.calc.sum(a, b);
    }

    public div(a: number, b: number): void {
        this.calc.division(a, b);
    }
}

export { Student };


if (require.main === module) {
    console.log("Testando Adapter");
}

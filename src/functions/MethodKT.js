import Alternative from "./Alternative.js";
import Parameter from "./Parameter.js";
import Weight from "./Weight.js";

export default class MethodKT {
    static altArray = [];
    static paramArray = [];
    static weightArray = [];
    static sumArray = [];
    static tempArray = [];
    static togaArray = [];
    constructor(alternative, parameter, weight, point, weight_and_points) {
        this.alternative = alternative;
        this.parameter = parameter;
        this.weight = weight;
        this.point = point;
        this.weight_and_points = weight_and_points;
    }
    static OrganizeData(alternative, parameter, weight, point) {
        let nameArr = [];
        if (point.length > 0) {
            nameArr = point.split(',');
        }
        let togetherArray = [];
        if (alternative.length > 0) {
            const alternativeObj = new Alternative(alternative);
            this.altArray.push(alternativeObj);
        }
        if (parameter.length > 0) {
            const parameterObj = new Parameter(parameter, weight, nameArr);
            this.paramArray.push(parameterObj);
        }
        if (weight.length > 0) {
            const weightObj = new Weight(weight);
            this.weightArray.push(weightObj);
        }
        togetherArray.push(this.altArray);
        togetherArray.push(this.paramArray);
        togetherArray.push(this.weightArray);
        return togetherArray;
    }
    static SumAndFindMaxValue(point, check, weight) {
        let we = weight;
        if (point.length > 0) {
            let nameArr = point.split(',');
            nameArr.forEach(element => {
                if (check === false) {
                    this.tempArray.push(parseInt(element * we));
                }
                else if (check === true) {
                    this.sumArray.push(parseInt(element * we));
                }
            });
            var squares = this.sumArray.map((a, i) => a + this.tempArray[i]);
            console.log(squares);
            if(check === true) {
                this.sumArray = [];
                this.tempArray = squares;
            }
        }
        return squares;
    }
    static ParameterAndWeight(param, weight) {
        if (param.length > 0 && weight.length > 0) {
            const parameter = new Parameter(param, weight);
            this.togaArray.push(parameter);
            console.log(this.togaArray);
        }
    }
}
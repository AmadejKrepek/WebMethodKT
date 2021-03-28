import Alternative from "./Alternative.js";
import Parameter from "./Parameter.js";
import Weight from "./Weight.js";

export default class MethodKT {
    static altArray = [];
    static paramArray = [];
    static weightArray = [];
    static count = 0;
    static count1 = 0;
    static mainCount = 0;
    constructor(alternative, parameter, weight, point, weight_and_points){
        this.alternative = alternative;
        this.parameter = parameter;
        this.weight = weight;
        this.point = point;
        this.weight_and_points = weight_and_points;
    }
    static OrganizeData(alternative, parameter, weight, point) {
        let togetherArray = [];
        if (alternative.length > 0) {
            this.count++;
            //this.altArray.push(this.count);
            const alternativeObj = new Alternative(alternative);
            this.altArray.push(alternativeObj);
        }
        if (parameter.length > 0) {
            this.count1++;
            //this.paramArray.push(this.count1);
            const parameterObj = new Parameter(parameter, weight, point);
            this.paramArray.push(parameterObj);
        }
        if (weight.length > 0) {
            this.count1++;
            //this.paramArray.push(this.count1);
            const weightObj = new Weight(weight);
            this.weightArray.push(weightObj);
        }
        console.log(this.altArray);
        console.log(this.paramArray);
        //togetherArray.push(this.mainCount++);
        togetherArray.push(this.altArray);
        togetherArray.push(this.paramArray);
        togetherArray.push(this.weightArray);
        return togetherArray;
    }
}
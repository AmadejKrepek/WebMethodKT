export default class MethodKT {
    static altArray = [];
    static paramArray = [];
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
    static OrganizeData(alternative, parameter) {
        let togetherArray = [];
        if (alternative.length > 0) {
            this.count++;
            //this.altArray.push(this.count);
            this.altArray.push(alternative);
        }
        if (parameter.length > 0) {
            this.count1++;
            //this.paramArray.push(this.count1);
            this.paramArray.push(parameter);
        }
        console.log(this.altArray);
        console.log(this.paramArray);
        //togetherArray.push(this.mainCount++);
        togetherArray.push(this.altArray);
        togetherArray.push(this.paramArray);
        return togetherArray;
    }
}
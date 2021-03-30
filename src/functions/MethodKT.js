import Alternative from "./Alternative.js";
import Parameter from "./Parameter.js";
import Series from "./Series.js";
import Weight from "./Weight.js";

export default class MethodKT {
    static altArray = [];
    static paramArray = [];
    static weightArray = [];
    static sumArray = [];
    static tempArray = [];
    static togaArray = [];
    static neke = [];
    static altTitle = [];
    static paramArr = [];
    static paramTitle = [];

    static objArray = [];

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
            this.altTitle.push(alternative);
        }
        if (parameter.length > 0) {
            const parameterObj = new Parameter(parameter, weight, nameArr);
            this.paramArray.push(parameterObj);
            this.paramTitle.push(parameter);
        }
        if (weight.length > 0) {
            const weightObj = new Weight(weight);
            this.weightArray.push(weightObj);
            this.paramArr.push(weight);
        }
        togetherArray.push(this.altArray);
        togetherArray.push(this.paramArray);
        togetherArray.push(this.weightArray);
        this.objArray = togetherArray;
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
            this.neke = squares;
            if(check === true) {
                this.sumArray = [];
                this.tempArray = squares;
            }
            return squares;
        }
    }
    static ParameterAndWeight(param, weight) {
        if (param.length > 0 && weight.length > 0) {
            const parameter = new Parameter(param, weight);
            this.togaArray.push(parameter);
        }
    }
    static GetAltArray() {
        console.log(this.neke);
        return this.neke;
    }
    static GetAltTitle() {
        return this.altTitle;
    }
    static GetParamArray() {
        return this.paramArr;
    }
    static GetParamTitle() {
        return this.paramTitle;
    }
    static SelectedParam(selected) {
        let itemArray = [];
        console.log(selected);
        console.log(this.objArray);
        console.log(this.objArray[1]);
        this.objArray[1].forEach(element => {
            if(element.param === selected) {
                element.point.forEach(item => {
                    itemArray.push(parseInt(item));
                });
            }
        });

        let computedArray = [];

        console.log(itemArray);
        let arr = null;
                /*
        for (let index = 0; index <= 10; index++) {
            for (let i = 0; i < itemArray.length; i++) {
                if(index === 0) {
                    arr = new Array();
                }
                arr.push(itemArray[i]*index);
                if(index === 10) {
                    computedArray.push(arr);
                }
            }
        }
        */

        for (let i = 0; i < itemArray.length; i++) {
            arr = new Array();
            for (let k = 0; k < 10; k++) {
                arr.push(itemArray[i]*k);
            }       
            computedArray.push(new Series(arr, this.altTitle[i]));
        }
        console.log(computedArray);

        return computedArray;
    }
}
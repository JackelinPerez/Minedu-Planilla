import {rulesBusinnnes} from './control';

export const sumRules = (arrayRules, dataArrayP, codeP, dataP, dataArrayCC) =>{
    return arrayRules.reduce((acum, ele)=>{
        return acum + rulesBusinnnes(dataArrayP, ele, codeP, dataP, dataArrayCC)
    }, 0)
}
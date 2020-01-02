import {sumRules} from './SumRules';

export const cod_023 = (arrayRulesBasic, dataArrayP, codeP, dataP, dataArrayCC) =>{
    let result = 0;
    const sumRulesAux = sumRules(arrayRulesBasic, dataArrayP, codeP, dataP, dataArrayCC);
    
    if(sumRulesAux < 800) {
        if(750 < sumRulesAux) result = 50;
        else {
            if(415 < sumRulesAux) result = 100;
            else result = 415 -sumRulesAux;
        }
    }
    return result;
}
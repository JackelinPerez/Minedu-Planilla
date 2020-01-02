import {sumRules} from './SumRules';

export const cod_020_022_029 = (arrayRulesBasic, dataArrayP, codeP, dataP, dataArrayCC, cte) =>{
    let result = 0;
    const sumRulesAux = sumRules(arrayRulesBasic, dataArrayP, codeP, dataP, dataArrayCC);

    result = parseFloat((sumRulesAux*cte).toFixed(2));
    return result;
}
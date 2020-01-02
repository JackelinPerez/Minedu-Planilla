import {rulesBusinnnes} from './control';
import {sumRules} from './SumRules';

export const cod_008 = (arrayRulesBasic, dataArrayP, codeP, dataP, dataArrayCC, valueUser) =>{
    let result = 0;
    const sumRulesAux = sumRules(arrayRulesBasic, dataArrayP, codeP, dataP, dataArrayCC);

    if ( valueUser['COD-003'] === '92'){
        if(sumRulesAux <= 200 && 20 <= parseFloat(valueUser['COD-053'])){
            result = 200 - sumRulesAux;
        }
        else {
            if(sumRulesAux <= 160 && 10 <= parseFloat(valueUser['COD-053']) <= 19){
                result = 160 - sumRulesAux;
            }
            else {
                if (sumRulesAux <= 120 && 5 <= parseFloat(valueUser['COD-053']) <= 9) {
                    result = 120 - sumRulesAux;
                }
                else {
                    if (sumRulesAux <= 100 && 0 <= parseFloat(valueUser['COD-053']) <= 4) {
                        result = 100 - sumRulesAux;
                    }
                }
            }
        }
    }else{
        if(valueUser['COD-003'] === '04' && sumRulesAux <= 200){
            result = 200 - sumRulesAux;
        }
    }
    return result;
}
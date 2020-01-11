import {rulesBusinnnes} from './control';
import {getDataObjectTable} from '../../functions/admin/tableSearch';
import {sumRules} from './SumRules';

export const cod_024 = (arrayRulesBasic, dataArrayP, codeP, dataP, dataArrayCC, valueUser, valueFcl) =>{
    let result = 0;
    const sumRulesAux = sumRules(arrayRulesBasic, dataArrayP, codeP, dataP, dataArrayCC);
    const cod_018 = rulesBusinnnes(dataArrayP, 'COD-018', codeP, dataP, dataArrayCC);
    const cod_DU037_94 = getDataObjectTable(dataArrayCC, 'COD-CP-01', valueUser['COD-055'], 'COD-CP-14');

    if(cod_018 === 0){
        if(parseFloat(valueUser['COD-053']) < 20 && sumRulesAux <= 100) {
            result = 100 - sumRulesAux;
        }else {
            if(parseFloat(valueUser['COD-053']) >= 20 && (sumRulesAux + cod_DU037_94) <= 300){
                result = 300 - sumRulesAux;
            } else {
                if(parseFloat(valueUser['COD-053']) >= 20){
                    result = parseFloat((cod_DU037_94*valueFcl).toFixed(2));
                }
            }
        }
    }
    return result;
}
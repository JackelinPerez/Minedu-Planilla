import {rulesBusinnnes} from './admin/control'

export const getAllConceptAdmin = (dataArrayP, arrayAllRules, codeP, dataP, dataArrayCC) =>{
    return arrayAllRules.reduce((acumObjec, concept)=>{
        acumObjec = {
            ... acumObjec,
            [concept] : rulesBusinnnes(dataArrayP, concept, codeP, dataP, dataArrayCC)
        }
        return acumObjec
    },{})
}
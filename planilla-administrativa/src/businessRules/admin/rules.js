import {getObjectTable, getDataObjectTable} from '../../functions/tableSearch';
import {fcl} from '../../businessRules/admin/FCL';
import { cod_024 } from './COD_024';


export const rulesBusinnnes =(dataArrayP, codePR, codeP, dataP, dataArrayCC)=>{
    let result = 0;
    const valueUser = getObjectTable(dataArrayP, codeP, dataP);
    const valueFcl = fcl(valueUser['COD-053'], valueUser['COD-054'], valueUser['COD-050']);
    
    switch (codePR) {
        case 'COD-012':
            result = getDataObjectTable(dataArrayP, codeP, dataP, codePR);
            break;
        case 'COD-017':
            result = getDataObjectTable(dataArrayP, codeP, dataP, codePR);
            break;
        case 'COD-027':
            result = (getDataObjectTable(dataArrayCC, 'COD-CP-01', valueUser['COD-055'], 'COD-CP-02')*valueFcl).toFixed(2);
            break;
        case 'COD-029':
            result = (getDataObjectTable(dataArrayP, codeP, dataP, codePR)*valueFcl).toFixed(2);
            break;
        case 'COD-044':
            result = getDataObjectTable(dataArrayCC, 'COD-CP-01', valueUser['COD-055'], 'COD-CP-06');
            break;
        case 'COD-016':
            result = getDataObjectTable(dataArrayP, codeP, dataP, codePR);
            break;
        case 'COD-028':
            result = (getDataObjectTable(dataArrayCC, 'COD-CP-01', valueUser['COD-055'], 'COD-CP-03')*valueFcl).toFixed(2);
            break;
        case 'COD-045':
            result = (getDataObjectTable(dataArrayCC, 'COD-CP-01', valueUser['COD-055'], 'COD-CP-05')*valueFcl).toFixed(2);
            break;
        case 'COD-013':
            result = getDataObjectTable(dataArrayP, codeP, dataP, codePR);
            break;
        case 'COD-021':
            result = getDataObjectTable(dataArrayCC, 'COD-CP-01', valueUser['COD-055'], 'COD-CP-09');
            break;
        case 'COD-011':
            result = (getDataObjectTable(dataArrayCC, 'COD-CP-01', valueUser['COD-055'], 'COD-CP-10')*valueFcl).toFixed(2);
            break;
        case 'COD-010':
            result = (getDataObjectTable(dataArrayCC, 'COD-CP-01', valueUser['COD-055'], 'COD-CP-11')*valueFcl).toFixed(2);
            break;
        case 'COD-009':
            result = (getDataObjectTable(dataArrayCC, 'COD-CP-01', valueUser['COD-055'], 'COD-CP-12')*valueFcl).toFixed(2);
            break;
        case 'COD-015':
            result = (getDataObjectTable(dataArrayP, codeP, dataP, codePR)*valueFcl).toFixed(2);
            break;
        case 'COD-018':
            result = (getDataObjectTable(dataArrayP, codeP, dataP, codePR)*valueFcl).toFixed(2);
            break;
        case 'COD-024':
            result = cod_024(dataArrayP, codePR, codeP, dataP, dataArrayCC, valueUser, );
            break;
        case 'COD-026':
            result = (getDataObjectTable(dataArrayP, codeP, dataP, codePR)*valueFcl).toFixed(2);
            break;
        case 'COD-014':
            result = (getDataObjectTable(dataArrayCC, 'COD-CP-01', valueUser['COD-055'], 'COD-CP-15')*valueFcl).toFixed(2);
            break;
        case 'COD-008':
            
            break;
        case 'COD-020':
            
            break;
        case 'COD-022':
            
            break;
        case 'COD-019':
            
            break;
        case 'value':
            
            break;
        case 'COD-038':
            
            break;
        case 'COD-023':
            
            break;
        case 'COD-025':
            
            break;
        case 'COD-042':
            
            break;
        case 'COD-040':
            
            break;
        case 'COD-043':
            
            break;
        case 'COD-037':
            
            break;
        case 'COD-041':
            
            break;
        case 'COD-039':
            
            break;
        case 'COD-036':
            
            break;
        case 'COD-032':
            
            break;
        case 'COD-031':
            
            break;
        case 'COD-030':
            
            break;
        case 'COD-033':
            
            break;
        case 'COD-035':
            
            break;
        case 'COD-034':
            
            break;                                      
        default:
            break;
    }
    return result;
}
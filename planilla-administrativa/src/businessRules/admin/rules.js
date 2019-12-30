import {getObjectTable, getDataObjectTable} from '../../functions/tableSearch';
import {fcl} from '../../businessRules/admin/FCL';


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
            result = (parseFloat(getDataObjectTable(dataArrayCC, 'COD-CP-01', valueUser['COD-055'], 'COD-CP-02'))*valueFcl).toFixed(2);
            break;
        case 'COD-029':
            
            break;
        case 'COD-044':
            
            break;
        case 'COD-016':
            
            break;
        case 'COD-028':
            
            break;
        case 'COD-045':
            
            break;
        case 'COD-013':
            
            break;
        case 'COD-021':
            
            break;
        case 'COD-011':
            
            break;
        case 'COD-010':
            
            break;
        case 'COD-009':
            
            break;
        case 'COD-015':
            
            break;
        case 'COD-018':
            
            break;
        case 'COD-024':
            
            break;
        case 'COD-026':
            
            break;
        case 'COD-014':
            
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
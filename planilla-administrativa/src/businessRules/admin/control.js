import {getObjectTable, getDataObjectTable} from '../../functions/tableSearch';
import {fcl} from './FCL';
import {cod_024 } from './COD_024';
import {cod_008} from './COD_008';
import {cod_020_022_029} from './COD_020_022_029';
import {cod_023} from './COD_023';
import {readjustment} from './COD_Readjustment';
import { sumRules } from './SumRules';

/*Pruebando todos los conceptos de pago */
import {arrayAllRules} from './globals';


export const rulesBusinnnes =(dataArrayP, codePR, codeP, dataP, dataArrayCC)=>{
    let result = 0;
    const valueUser = getObjectTable(dataArrayP, codeP, dataP);
    const valueFcl = fcl(parseFloat(valueUser['COD-053']), parseFloat(valueUser['COD-054']), valueUser['COD-050']);
    
    switch (codePR) {
        case 'COD-012':
            result = getDataObjectTable(dataArrayP, codeP, dataP, codePR);
            break;
        case 'COD-017':
            result = getDataObjectTable(dataArrayP, codeP, dataP, codePR);
            break;
        case 'COD-027':
            /*A nivel front dejar como figura en planilla  */
            result = parseFloat((getDataObjectTable(dataArrayCC, 'COD-CP-01', valueUser['COD-055'], 'COD-CP-02')*valueFcl).toFixed(2));
            // result = getDataObjectTable(dataArrayP, codeP, dataP, codePR);
            break;
        case 'COD-029':
            result = parseFloat((getDataObjectTable(dataArrayP, codeP, dataP, codePR)*valueFcl).toFixed(2));
            break;
        case 'COD-044':
            result = getDataObjectTable(dataArrayCC, 'COD-CP-01', valueUser['COD-055'], 'COD-CP-06');
            break;
        case 'COD-016':
            result = getDataObjectTable(dataArrayP, codeP, dataP, codePR);
            break;
        case 'COD-028':
            result = parseFloat((getDataObjectTable(dataArrayCC, 'COD-CP-01', valueUser['COD-055'], 'COD-CP-03')*valueFcl).toFixed(2));
            break;
        case 'COD-045':
            result = parseFloat((getDataObjectTable(dataArrayCC, 'COD-CP-01', valueUser['COD-055'], 'COD-CP-05')*valueFcl).toFixed(2));
            break;
        case 'COD-013':
            result = getDataObjectTable(dataArrayP, codeP, dataP, codePR);
            break;
        case 'COD-021':
            result = getDataObjectTable(dataArrayCC, 'COD-CP-01', valueUser['COD-055'], 'COD-CP-09');
            break;
        case 'COD-011':
            result = parseFloat((getDataObjectTable(dataArrayCC, 'COD-CP-01', valueUser['COD-055'], 'COD-CP-10')*valueFcl).toFixed(2));
            break;
        case 'COD-010':
            result = parseFloat((getDataObjectTable(dataArrayCC, 'COD-CP-01', valueUser['COD-055'], 'COD-CP-11')*valueFcl).toFixed(2));
            break;
        case 'COD-009':
            result = parseFloat((getDataObjectTable(dataArrayCC, 'COD-CP-01', valueUser['COD-055'], 'COD-CP-12')*valueFcl).toFixed(2));
            break;
        case 'COD-015':
            result = parseFloat((getDataObjectTable(dataArrayP, codeP, dataP, codePR)*valueFcl).toFixed(2));
            break;
        case 'COD-018':
            result = parseFloat((getDataObjectTable(dataArrayP, codeP, dataP, codePR)*valueFcl).toFixed(2));
            break;
        case 'COD-024':
            const arrayRulesBasic_024 = ['COD-012','COD-017','COD-027','COD-029','COD-044','COD-016','COD-028','COD-045', 'COD-013','COD-021','COD-011','COD-010','COD-009','COD-015'];
            result = cod_024(arrayRulesBasic_024, dataArrayP, codeP, dataP, dataArrayCC, valueUser, valueFcl);
            break;
        case 'COD-026':
            result = parseFloat((getDataObjectTable(dataArrayP, codeP, dataP, codePR)*valueFcl).toFixed(2));
            break;
        case 'COD-014':
            result = parseFloat((getDataObjectTable(dataArrayCC, 'COD-CP-01', valueUser['COD-055'], 'COD-CP-15')*valueFcl).toFixed(2));
            break;
        case 'COD-008':
            const arrayRulesBasic_008 = ['COD-012','COD-017','COD-027','COD-029','COD-044','COD-016','COD-028','COD-045', 'COD-013','COD-021','COD-011','COD-010','COD-009','COD-015', 'COD-018', 'COD-024', 'COD-026', 'COD-014'];
            result = cod_008(arrayRulesBasic_008, dataArrayP, codeP, dataP, dataArrayCC, valueUser);
            break;
        case 'COD-020':
            const arrayRulesBasic_020 = ['COD-012','COD-017','COD-027','COD-029','COD-044','COD-016','COD-028','COD-045', 'COD-013','COD-021','COD-011','COD-010','COD-009','COD-015', 'COD-018', 'COD-024', 'COD-026', 'COD-014', 'COD-008'];
            result = cod_020_022_029(arrayRulesBasic_020, dataArrayP, codeP, dataP, dataArrayCC, 0.16);
            break;
        case 'COD-022':
            const arrayRulesBasic_022 = ['COD-012','COD-017','COD-027','COD-029','COD-044','COD-016','COD-028','COD-045', 'COD-013','COD-021','COD-011','COD-010','COD-009','COD-015', 'COD-018', 'COD-024', 'COD-026', 'COD-014', 'COD-008', 'COD-020'];
            result = cod_020_022_029(arrayRulesBasic_022, dataArrayP, codeP, dataP, dataArrayCC, 0.16);            
            break;
        case 'COD-019':
            const arrayRulesBasic_019 = ['COD-012','COD-017','COD-027','COD-029','COD-044','COD-016','COD-028','COD-045', 'COD-013','COD-021','COD-011','COD-010','COD-009','COD-015', 'COD-018', 'COD-024', 'COD-026', 'COD-014', 'COD-008', 'COD-020', 'COD-022'];
            result = cod_020_022_029(arrayRulesBasic_019, dataArrayP, codeP, dataP, dataArrayCC, 0.16);            
            break;
        case 'COD-XXX':
            result = 50 - rulesBusinnnes(dataArrayP, 'COD-027', codeP, dataP, dataArrayCC);
            break;
        case 'COD-038':
            const arrayRulesBasic_038 = ['COD-012','COD-017','COD-027','COD-029','COD-044','COD-016','COD-028','COD-045', 'COD-013','COD-021','COD-011','COD-010','COD-009','COD-015', 'COD-018', 'COD-024', 'COD-026', 'COD-014', 'COD-008', 'COD-020', 'COD-022', 'COD-019', 'COD-XXX' ];
            if(readjustment(2005, valueUser) >= 65){
                result = cod_020_022_029(arrayRulesBasic_038, dataArrayP, codeP, dataP, dataArrayCC, 0.0174);
            }  
            break;
        case 'COD-023':
            const arrayRulesBasic_023 = ['COD-012','COD-017','COD-027','COD-029','COD-044','COD-016','COD-028','COD-045', 'COD-013','COD-021','COD-011','COD-010','COD-009','COD-015', 'COD-018', 'COD-024', 'COD-026', 'COD-014', 'COD-008', 'COD-020', 'COD-022', 'COD-019', 'COD-XXX', 'COD-038' ];
            result = cod_023(arrayRulesBasic_023, dataArrayP, codeP, dataP, dataArrayCC);
            break;
        case 'COD-025':
            result = getDataObjectTable(dataArrayP, codeP, dataP, codePR);
            break;
        case 'COD-042':
            const arrayRulesBasic_042 = ['COD-012','COD-017','COD-027','COD-029','COD-044','COD-016','COD-028','COD-045', 'COD-013','COD-021','COD-011','COD-010','COD-009','COD-015', 'COD-018', 'COD-024', 'COD-026', 'COD-014', 'COD-008', 'COD-020', 'COD-022', 'COD-019', 'COD-XXX', 'COD-038', 'COD-023', 'COD-025' ];
            if(readjustment(2006, valueUser) >= 65){
                result = cod_020_022_029(arrayRulesBasic_042, dataArrayP, codeP, dataP, dataArrayCC, 0.00745);
            }            
            break;
        case 'COD-040':
            if(readjustment(2007, valueUser) >= 65) result = 10;
            break;
        case 'COD-043':
            if(readjustment(2008, valueUser) >= 65) result = 15;
            break;
        case 'COD-037':
            if(readjustment(2009, valueUser) >= 65) result = 15;
            break;
        case 'COD-041':
            if(readjustment(2010, valueUser) >= 65) result = 20;
            break;
        case 'COD-039':
            if(readjustment(2011, valueUser) >= 65) result = 25;
            break;
        case 'COD-036':
            if(readjustment(2012, valueUser) >= 65) result = 25;
            break;
        case 'COD-032':
            if(readjustment(2013, valueUser) >= 65) result = 25;
            break;
        case 'COD-031':
            if(readjustment(2014, valueUser) >= 65) result = 27;
            break;
        case 'COD-030':
            if(readjustment(2015, valueUser) >= 65) result = 30;
            break;
        case 'COD-033':
            if(readjustment(2016, valueUser) >= 65) result = 38;
            break;
        case 'COD-035':
            if(readjustment(2017, valueUser) >= 65) result = 43;
            break;
        case 'COD-034':
            if(readjustment(2018, valueUser) >= 65) result = 29;
            break;
        case 'COD-049':
            result = parseFloat(sumRules(arrayAllRules.slice(0,arrayAllRules.length-1), dataArrayP, codeP, dataP, dataArrayCC).toFixed(2));
            break;                                              
        default:
            result = 0;
            break;
    }
    return result;
}
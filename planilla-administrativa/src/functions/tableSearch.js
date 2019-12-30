export const getMeaningCode = (arrayObjCod,code) =>{
    return Object.keys(arrayObjCod[0]).reduce((ele1,eleMain)=>{
       if(eleMain === code) ele1 = arrayObjCod[0][eleMain];
       return ele1;
    },'')
 }

export const getObjectTable = (data, code, dataCode) =>{
   return data.filter(obj => obj[code] === dataCode)[0];
}

export const getDataObjectTable = (data, code, dataCode, idDataCode) =>{
   const value = getObjectTable(data, code, dataCode);
   return (value[idDataCode] === undefined)? 0: parseFloat(value[idDataCode]);
}

export const getFormtPlanilla = (arrayObjData, arrayObjDataCod, code, dataCode) =>{
    const objUserPlanilla = [];
    const objUser = arrayObjData.filter((ele)=> ele[code] === dataCode);
    Object.keys(objUser[0]).forEach((ele)=>{
       objUserPlanilla.push({
          code: getMeaningCode(arrayObjDataCod,ele),
          value: objUser[0][ele]
       })
    })
    return objUserPlanilla;
}

export const getCuadroComparativo = () =>{

}
 
export const getMeaningCode = (arrayObjCod, code) =>{
    return Object.keys(arrayObjCod[0]).reduce((ele1,eleMain)=>{
       if(eleMain === code) ele1 = arrayObjCod[0][eleMain];
       return ele1;
    },'')
 }

export const getObjectTable = (data, code, dataCode) =>{
   return data.filter(obj => obj[code] === dataCode)[0];
}

export const getDataObjec = (obj, key) =>{
   return (obj[key] === undefined)? 0: parseFloat(obj[key]);
}

export const getDataObjectTable = (data, code, dataCode, idDataCode) =>{
   const value = getObjectTable(data, code, dataCode);
   return getDataObjec(value, idDataCode);
}

export const ordenConceptPlanilla = (arrayOrden, objectUserPLanilla) =>{
   return arrayOrden.reduce((objUserOrden, concept)=>{
      const getDataNew = getDataObjec({... objectUserPLanilla}, concept);
      objUserOrden = {
         ... objUserOrden,
         [concept] : getDataNew
      }
      return objUserOrden;
   }, {})
}

export const getFormtPlanilla = (objUser, arrayObjDataCod) =>{
    const objUserPlanilla = [];
    Object.keys(objUser).forEach((ele)=>{
       objUserPlanilla.push({
          code: getMeaningCode(arrayObjDataCod,ele),
          value: objUser[ele]
       })
    })
    return objUserPlanilla;
}

export const getCuadroComparativo = () =>{

}
 
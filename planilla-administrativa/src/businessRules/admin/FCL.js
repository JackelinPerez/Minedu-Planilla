export const fcl = (Tyears, Tmonths, sex) =>{
    let fclResult = 0;

    if(Tyears<30){        
        if(sex === 'M'){
            fclResult = ((parseFloat(Tyears)*12+ parseFloat(Tmonths))/360).toFixed(8);
        }else if (sex === 'F') {
            if(Tyears<25){                
                fclResult = ((parseFloat(Tyears)*12+ parseFloat(Tmonths))/300).toFixed(8);
            }else{
                fclResult = 1;
            }
        }else{
            fclResult = 'No se encontro el tipo de sexo adecuado';
        }
    }else {
        fclResult = 1;
    }
    return fclResult;
}
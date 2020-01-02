export const readjustment = (year, valueUser) =>{
    let result = 0;
    const bornYear = valueUser['COD-052'].split('/');
    result = year - parseInt('19'+ bornYear[2]) - 1;
    return result;
}
import jsPDF from 'jspdf';

export const getHour = () => {
    let h, m, s; 
    
    const checkTime = (i) => {
      if (i < 10) i = '0' + i;
      return i;
    };

    const date = new Date();
      
    h = date.getHours();
    m = date.getMinutes();
    s = date.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
      
    const result = h + ':' + m + ':' + s;
    return result;
  };

export const getDay = () =>{

    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo',
      'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
      
    const date = new Date();

    const day = date.getDate();
    const month = date.getMonth();
    const yy = date.getFullYear();

    const result = day + ' ' + months[month] + ' ' + yy;
    return result
}

export const printPDF = (data, namePdf) =>{
    const doc = new jsPDF();
    doc.addHTML(data,function() {
        doc.save(namePdf);
    });
    return 1;
}
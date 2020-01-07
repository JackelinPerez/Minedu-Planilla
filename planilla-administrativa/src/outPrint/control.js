import jsPDF from 'jspdf';

export const printPDF = (data, namePdf) =>{
    const doc = new jsPDF();
    doc.addHTML(data,function() {
        doc.save(namePdf);
    });
    return 1;
}
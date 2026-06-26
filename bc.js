const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

// Define the path to your Excel file
const filePath = path.join(__dirname, 'abc.xls');
console.log(filePath);
// Read the Excel file
const workbook = XLSX.readFile(filePath);

// Convert the first sheet to JSON
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const data = XLSX.utils.sheet_to_json(sheet);

// Create an HTML string with paragraph elements
let htmlContent = '';

data.forEach(row => {
    Object.values(row).forEach(value => {
        console.log(value);
        htmlContent += `<p>${value}</p>\n`;
    });
});


// Write the HTML content to a file
const outputFilePath = path.join(__dirname, 'output.html');
fs.writeFileSync(outputFilePath, htmlContent);

console.log(`HTML file has been generated at: ${outputFilePath}`);

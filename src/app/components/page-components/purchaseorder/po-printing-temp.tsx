// import React from 'react';
// import puppeteer from 'puppeteer';

// const generatePDF = async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   // Sample data for the table
//   const tableData = [
//     { Name: 'John', Age: 30, City: 'New York' },
//     { Name: 'Alice', Age: 25, City: 'Los Angeles' },
//     { Name: 'Bob', Age: 35, City: 'Chicago' },
//   ];

//   // Create an HTML table from the data
//   const tableHtml = `
//     <table border="1" cellspacing="0" cellpadding="5">
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Age</th>
//           <th>City</th>
//         </tr>
//       </thead>
//       <tbody>
//         ${tableData
//           .map(
//             (row) => `
//             <tr>
//               <td>${row.Name}</td>
//               <td>${row.Age}</td>
//               <td>${row.City}</td>
//             </tr>
//           `
//           )
//           .join('')}
//       </tbody>
//     </table>
//   `;

//   // Set the HTML content of the page
//   await page.setContent(tableHtml);

//   // Generate the PDF
//   await page.pdf({ path: 'table_data.pdf', format: 'A4' });

//   await browser.close();
// };

// const PoPrintingTemplate = () => {
//   return (
//     <div>
//       <h1>Generate PDF with HTML Table</h1>
//       <button onClick={generatePDF}>Generate PDF</button>
//     </div>
//   );
// };

// export default PoPrintingTemplate;


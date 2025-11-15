// Google Apps Script code to connect to Google Sheets
// This code should be placed in a new Google Apps Script project
// Create a new Google Sheet and copy its ID to replace 'YOUR_SHEET_ID'
// Publish the script as a web app and use the deployment URL in your HTML form

function doGet(e) {
  const params = (e && e.parameter) || {};

  try {
    // Replace 'YOUR_SHEET_ID' with your actual Google Sheet ID
    const sheetId = 'YOUR_SHEET_ID';
    if (sheetId === 'YOUR_SHEET_ID') {
      throw new Error('Please replace YOUR_SHEET_ID with your actual Google Sheet ID');
    }

    const sheet = SpreadsheetApp.openById(sheetId).getActiveSheet();

    // Append data to the sheet
    sheet.appendRow([
      new Date(), // Timestamp
      params.name || '',
      params.surname || '',
      params.email || '',
      params.classLevel || '',
      params.role || ''
    ]);

    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({status: 'success'}))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({status: 'error', message: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

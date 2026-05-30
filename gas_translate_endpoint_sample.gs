// Google Apps Script sample for translation endpoint
// Deploy as Web app: Execute as "Me", Who has access: "Anyone with the link".
// The app sends POST JSON: { text: "日本語", source: "ja", target: "en" }
// It returns: { translation: "English text" }

function doPost(e) {
  try {
    var body = JSON.parse(e.postData.contents || '{}');
    var text = body.text || '';
    var source = body.source || 'ja';
    var target = body.target || 'en';
    var translation = LanguageApp.translate(text, source, target);
    return ContentService
      .createTextOutput(JSON.stringify({ translation: translation }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

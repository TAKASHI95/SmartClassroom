function doGet() {
  var op = HtmlService.initTemplate(); // 特殊 HtmlOutput 型をつくる
  op._ = "<html><body><div>";
ListAllStudents(op);
  op._ = "</div></body></html>";
  return op.$out;  // ここで $out を呼んでふつうの HtmlOutput 型に戻す
}

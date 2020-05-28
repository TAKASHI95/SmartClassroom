function doGet() {
  var op = HtmlService.initTemplate(); // 特殊 HtmlOutput 型をつくる
  op._ = "<html><body><div>";
  listCourses(op);
  op._ = "</div></body></html>";
  return op.$out;  // ここで $out を呼んでふつうの HtmlOutput 型に戻す
}

/**
 * Lists 20 course names and ids.
 */
function listCourses(op) {
  var optionalArgs = {
    pageSize: 100
  };
  var response = Classroom.Courses.list(optionalArgs);
  var courses = response.courses;
  if (courses && courses.length > 0) {
    for (i = 0; i < courses.length; i++) {
      var course = courses[i];
      op._ = '<li>' + course.name + '  ' + course.id + '</li>';
    }
  } else {
    op._ = 'No courses found.';
  }
}

function(doc) {
  if (doc.created_at && doc.type && (doc.type=="bug" || doc.type=="feature")) {
    emit(doc.type, 1);
  }
};
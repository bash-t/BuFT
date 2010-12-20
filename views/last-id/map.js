function(doc) {
  if (doc.created_at) {
    emit(doc.type, doc);
  }
};
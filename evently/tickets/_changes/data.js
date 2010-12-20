function(data) {
  // $.log(data)
  var p;
  return {
    tickets : data.rows.map(function(r) {
      p = (r.value && r.value.profile) || {};
      p.id = r.value._id;
      p.idShort = r.value._id.substring(r.value._id.length-4,r.value._id.length);
      p.subject = r.value.subject;
      p.status = r.value.status;
      p.severity = r.value.severity;
      return p;
    })
  }
};
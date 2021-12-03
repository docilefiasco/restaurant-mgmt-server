const assert = require('assert');

exports.insertDocument = (db, document, collection, callback) => {
    const coll = db.collection(collection);
    return coll.insert(document);
};
//empty js object to take all array
exports.findDocuments = (db, collection, callback) => {
    const coll = db.collection(collection);
    return coll.find({}).toArray(err);
};

exports.removeDocument = (db, document, collection, callback) => {
    const coll = db.collection(collection);
   return coll.deleteOne(document);
};

exports.updateDocument = (db, document, update, collection, callback) => {
    const coll = db.collection(collection);
   return coll.updateOne(document, { $set: update }, null);
};



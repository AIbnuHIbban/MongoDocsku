---
id: doc6
title: Dasar Dasar Document MongoDB
---

## Query Document

### Pretty()

Tambahkan **.pretty()** untuk menampilkan hasil dengan berformat JSON

### Find()
Mencari Document berdasarkan key 

```
db.nama_collection.find( {} ).pretty()
```
Akan Menampilkan Semua Data

```
db.nama_collection.find({ 
	title: "Judul"
}).pretty()
```
Akan Menampilkan Data dengan key Title "Judul"

### FindOne()

```
db.nama_collection.findOne({
	shool: "SD Pulasaren"
}).pretty()
```
Akan Menampilkan Satu Data dengan key tertentu

## RDBMS in MONGODB


### Kurang Dari (less than)
```
db.nama_collection.find({
	likes: { $lt : 50 } 
})
```

### Kurang Dari Sama Dengan (less than equals)
```
db.nama_collection.find({
	likes: { $lte : 50 } 
})
```

### Lebih Dari
```
db.nama_collection.find({
	likes: { $gt: 50 } 
})
```

### Lebih Dari Sama Dengan
```
db.nama_collection.find({
	likes: { $gte : 50 } 
})
```

### Tidak Sama Dengan
```
db.nama_collection.find({
	likes: { $ne : 50 } 
})
```

### Match Sama dengan Data Array
```
db.nama_collection.find({
	name : { $in: ["Raj", "Ram", "Raghu"] } 
}).pretty()
```

### Match Tidak Dengan Data Array
```
db.nama_collection.find({
	name : { $nin: ["Raj", "Ram", "Raghu"] } 
}).pretty()
```

### AND (Multiple Condition)
```
db.nama_collection.find({
	$and: [{"by":"tutorials point"}, { "title": "MongoDB Overview" }]
}).pretty()
```

### OR (Multiple Condition)
```
db.nama_collection.find({
	$or: [{ "by":"tutorials point" }, { "title": "MongoDB Overview" }]
}).pretty()
```

### AND dan OR (Multiple Condition)
```
db.nama_collection.find({
	likes: { $gt:10 },
	$or: [{ "by":"tutorials point" }, { "title": "MongoDB Overview" }]
}).pretty()
```

### NOT 
```
db.nama_collection.find({
	age : { $not : { $gt : 50 } }
})
```
Tidak lebih dari 50
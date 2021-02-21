---
id: doc7
title: Insert, Update, Delete, Save Document MongoDB
---

## Insert Document

Untuk Menambah Data ke Collection MongoDB bisa menggunakan method **insert()** atau **save()** 

## Update Document

Untuk Update data bisa menggunakan method **update()**

Secara Default Update di MongoDB hanya mengupdate satu document

```
db.nama_collection.update(
	{ title: "Title Lama" },
	{ $set: 
		{ 
			title: "New Title" 
		} 
	},
	{multi:true}
)
```
Untuk mengubahnya ke Banyak Document tambahkan **{multi:true}**

## FindOneAndUpdate Document

Ketika menggunakan method **update()** return dari query tsb. adalah WriteResult. Jika kita ingin returnnya adalah Data yang baru kita update maka bisa menggunakan method **findOneAndUpdate()** 

```
db.nama_collection.findOneAndUpdate(
	{ First_Name: 'Radhika' },
	{ $set: { Age: '30', email: 'radhika_newemail@gmail.com' }}
)
```



## Delete Document

Untuk Menghapus Document bisa menggunakan method **remove()**

```
db.nama_collection.remove({
	title: "New Title"
})
```

### Hanya Satu Data
Jika ingini menghapus data yang memiliki kondisi sama dan hanya ambil record pertama maka gunakan perintah

```
db.nama_collection.remove({
	title: "New Title"
},1)
```

## Save Document

Method **save()** bisa digunakan sebagai alternatif terbaik untuk insert dan update

Untuk Melakukan Update menggunakan Save bisa harus membutuhkan ObjectId sebagai referensinya

```
db.nama_collection.save({
	_id : ObjectId("6261892619281927121"),
	title: "Update Title"
})
```





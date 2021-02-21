---
id: doc2
title: Data Modeling
sidebar_label: Data Modeling
---

Berbeda dengan Skema RDBMS, Dalam Membuat Skema di MongoDB kita hanya mendesain skema sesuai kebutuhan dan dapat ditulis sekali saja

#### Contoh Skema Data di RDBMS

<img src="https://www.tutorialspoint.com/mongodb/images/rdbms.png" alt=""/>

Referensi https://www.tutorialspoint.com/mongodb/mongodb_data_modeling.htm


#### Contoh Skema Data di MongoDB

```
{
   "_id": "POST_ID",
   "title": "TITLE_OF_POST", 
   "description": "POST_DESCRIPTION",
   "by": "POST_BY",
   "url": "URL_OF_POST",
   "tags": ["TAG1", "TAG2", "TAG3"],
   "likes": "TOTAL_LIKES", 
   "comments": [	
      {
         "user":"COMMENT_BY",
         "message": "TEXT",
         "dateCreated": "DATE_TIME",
         "like": "LIKES" 
      },
      {
         "user":"COMMENT_BY",
         "message": "TEXT",
         "dateCreated": "DATE_TIME",
         "like": "LIKES"
      }
   ]
}
```

Kita bisa langsung Menambah Data tanpa membuat Collection terlebih dahulu

```
db.comments.insert(
   {  
      "title" : "title",
      "description": "POST_DESCRIPTION",
      "by": "POST_BY",
      "url": "URL_OF_POST",
      "tags": ["TAG1", "TAG2", "TAG3"],
      "likes": "TOTAL_LIKES", 
      "comments": [  
         {
            "user":"COMMENT_BY",
            "message": "TEXT",
            "dateCreated": "DATE_TIME",
            "like": "LIKES" 
         },
         {
            "user":"COMMENT_BY",
            "message": "TEXT",
            "dateCreated": "DATE_TIME",
            "like": "LIKES"
         }
      ]
   }
)
```
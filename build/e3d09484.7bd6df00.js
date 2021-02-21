(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(7),o=(n(0),n(86)),c={id:"doc7",title:"Insert, Update, Delete, Save Document MongoDB"},u={unversionedId:"doc7",id:"doc7",isDocsHomePage:!1,title:"Insert, Update, Delete, Save Document MongoDB",description:"Insert Document",source:"@site/docs/doc7.md",slug:"/doc7",permalink:"/docs/doc7",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/doc7.md",version:"current"},i=[{value:"Insert Document",id:"insert-document",children:[]},{value:"Update Document",id:"update-document",children:[]},{value:"FindOneAndUpdate Document",id:"findoneandupdate-document",children:[]},{value:"Delete Document",id:"delete-document",children:[{value:"Hanya Satu Data",id:"hanya-satu-data",children:[]}]},{value:"Save Document",id:"save-document",children:[]}],d={toc:i};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"insert-document"},"Insert Document"),Object(o.b)("p",null,"Untuk Menambah Data ke Collection MongoDB bisa menggunakan method ",Object(o.b)("strong",{parentName:"p"},"insert()")," atau ",Object(o.b)("strong",{parentName:"p"},"save()")," "),Object(o.b)("h2",{id:"update-document"},"Update Document"),Object(o.b)("p",null,"Untuk Update data bisa menggunakan method ",Object(o.b)("strong",{parentName:"p"},"update()")),Object(o.b)("p",null,"Secara Default Update di MongoDB hanya mengupdate satu document"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'db.nama_collection.update(\n    { title: "Title Lama" },\n    { $set: \n        { \n            title: "New Title" \n        } \n    },\n    {multi:true}\n)\n')),Object(o.b)("p",null,"Untuk mengubahnya ke Banyak Document tambahkan ",Object(o.b)("strong",{parentName:"p"},"{multi:true}")),Object(o.b)("h2",{id:"findoneandupdate-document"},"FindOneAndUpdate Document"),Object(o.b)("p",null,"Ketika menggunakan method ",Object(o.b)("strong",{parentName:"p"},"update()")," return dari query tsb. adalah WriteResult. Jika kita ingin returnnya adalah Data yang baru kita update maka bisa menggunakan method ",Object(o.b)("strong",{parentName:"p"},"findOneAndUpdate()")," "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"db.nama_collection.findOneAndUpdate(\n    { First_Name: 'Radhika' },\n    { $set: { Age: '30', email: 'radhika_newemail@gmail.com' }}\n)\n")),Object(o.b)("h2",{id:"delete-document"},"Delete Document"),Object(o.b)("p",null,"Untuk Menghapus Document bisa menggunakan method ",Object(o.b)("strong",{parentName:"p"},"remove()")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'db.nama_collection.remove({\n    title: "New Title"\n})\n')),Object(o.b)("h3",{id:"hanya-satu-data"},"Hanya Satu Data"),Object(o.b)("p",null,"Jika ingini menghapus data yang memiliki kondisi sama dan hanya ambil record pertama maka gunakan perintah"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'db.nama_collection.remove({\n    title: "New Title"\n},1)\n')),Object(o.b)("h2",{id:"save-document"},"Save Document"),Object(o.b)("p",null,"Method ",Object(o.b)("strong",{parentName:"p"},"save()")," bisa digunakan sebagai alternatif terbaik untuk insert dan update"),Object(o.b)("p",null,"Untuk Melakukan Update menggunakan Save bisa harus membutuhkan ObjectId sebagai referensinya"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'db.nama_collection.save({\n    _id : ObjectId("6261892619281927121"),\n    title: "Update Title"\n})\n')))}l.isMDXComponent=!0},86:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return s}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),l=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=l(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,s=p["".concat(c,".").concat(m)]||p[m]||b[m]||o;return n?r.a.createElement(s,u(u({ref:t},d),{},{components:n})):r.a.createElement(s,u({ref:t},d))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,c[1]=u;for(var d=2;d<o;d++)c[d]=n[d];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
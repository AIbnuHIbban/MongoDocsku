---
id: doc3
title: Instalasi
sidebar_label: Instalasi
---

### Install MongoDB di Ubuntu

Bisa lihat Referensi lengkapnya di https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/

#### Import Public Key yang digunakan oleh Package Management System

```bash
wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
```

#### Buat List File untuk MongoDB

- Ubuntu 20.04
```bash
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
```

- Ubuntu 18.04
```bash
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
```

- Ubuntu 16.04
```bash
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
```

#### Refresh Database Package
```bash
sudo apt-get update 
```

#### Install MongoDB Packages
```bash
sudo apt-get install -y mongodb-org
```

#### Jalankan MongoDB di Console
```bash
mongo
```


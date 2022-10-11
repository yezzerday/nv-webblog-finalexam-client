# Server Side Programming Final Exam Semester 1 Year 2565
# ชุดที่ 2 Frontend

1.	fork project จาก https://github.com/nattaponkum/nv-webblog-65final-client.git (5 point)
2.	แก้ไขให้ยิง request data ไปหา backend ที่ http://10.31.27.240:8081 (5 point) 
    *** ถ้าแก้ไขไม่ได้ ให้ส่ง Git Repository ของ Bacakend ที่ใช้ในการทำสอบด้วย ***
3.	สร้างหน้า UI สำหรับ Create, Read, Update, Delete ข้อมูลจาก API ที่ตนเองได้รับ โดยใช้โค้ดเดิมที่เป็นการ CRUD ของ API User เป็นตัวอย่างได้

โดยให้นำรหัสนิสิตตนเอง mod 4 ได้ค่าเท่าไหร่นั่นคือหมายเลข API ที่นิสิตต้องแก้ไขหน้า UI 
เช่น รหัสนิสิต 63310001 % 4 = 1 ให้นิสิตทำ API หมายเลข 1. Car เป็นต้น

# ตัวอย่าง Json payload สำหรับ API หมายเลขต่างๆ
# 1. Car 
{
    "category": "Truck",
    "engine_capacity": 2500,
    "model": "D-Max",
    "brand": "ISUZU",
    "color": "red",
    "lc_plate": "งง 5555 ยะลา",
    "chasis_no": "wdssxx-000001"
}

# 2. Course 
{
    "title": "Server Side Programming",
    "instructor": "Dr. Nattapon Kumyaito",
    "description": "Client-server web architecture, overview of server-side programming languages, server-side programming basics including types, arrays, loops, functions, handling form input and validation; database connections and making database queries, object-oriented approaches to server-side programming, designing and writing web services, authentication techniques and session management, use of server-side frameworks, web organization and standards",
    "total_student": 50,
    "status": "active",
    "type": "core subject"
}

# 3. Speaker 
{
    "model": "STOCKWELL II",
    "brand": "Marshal",
    "watt": "5.0",
    "power_input": 220,
    "status": "not continue",
    "type": "portable"
}

# 4. Book 
{
    "title": "Metaverse",
    "author": "Mark zuckerberg",
    "total_page": 550,
    "publisher": "Chula Book",
    "category": "Text Book",
    "price": 150.0
}

---------------------------------------------------------------------------------------

# nv-webblog-client

> nodejs vuejs webblog client

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# Server Side Programming Final Exam 
## Semester 1 Year 2566
### ชุดที่ 2 Frontend (35 points)

1.	fork project จาก https://github.com/nattaponkum/nv-webblog-finalexam-client.git (5 point)
2.	แก้ไขให้ยิง request data ไปหา backend ที่ http://10.10.59.14:8081 (5 point) 
    *** ถ้าแก้ไขไม่ได้ ให้ส่ง Git Repository ของ Bacakend ที่ใช้ในการทำสอบด้วย ***
3.	สร้างหน้า UI สำหรับ Create (5 point), Read (5 point), Update (5 point), Delete (5 point)
    ข้อมูลจาก API ที่ตนเองได้รับ โดยใช้โค้ดเดิมที่เป็นการ CRUD ของ API User เป็นตัวอย่างได้
4.  push code ที่ทำเสร็จแล้วขึ้น Git Repository ที่ได้ Fork มา (5 point) 
    *** ถ้า push ขึ้นไม่ได้ ให้ upload files ขึ้น Git Repository เอง (ไม่ได้คะแนนในข้อ 4)***  
    โดยให้นำรหัสนิสิตตนเอง mod 4 ได้ค่าเท่าไหร่นั่นคือหมายเลข API ที่นิสิตต้องแก้ไขหน้า UI 

เช่น รหัสนิสิต 64310001 % 4 = 1 
    ให้นิสิตทำ API หมายเลข 1. Course เป็นต้น  
### การส่งงาน
    ส่ง URL ของ Git Repository  

## Endpoint ทั้งหมด และตัวอย่าง Json payload สำหรับ API หมายเลขต่างๆ
### 0. Car 
endpoint for get all cars: GET http://10.10.59.14:8081/cars  
endpoint for get 1 car: GET http://10.10.59.14:8081/car/carId  
endpoint for edit 1 car: PUT http://10.10.59.14:8081/car/carId  
endpoint for create 1 car: POST http://10.10.59.14:8081/car  
endpoint for delete 1 car: DELETE http://10.10.59.14:8081/car/carId  
```
{
    "category": "Truck",
    "engine_capacity": 2500,
    "model": "D-Max",
    "brand": "ISUZU",
    "color": "red",
    "lc_plate": "งง 5555 ยะลา",
    "chasis_no": "wdssxx-000001"
}
```

### 1. Course 
endpoint for get all courses: GET http://10.10.59.14:8081/courses  
endpoint for get 1 course: GET http://10.10.59.14:8081/course/courseId  
endpoint for edit 1 course: PUT http://10.10.59.14:8081/course/courseId  
endpoint for create 1 course: POST http://10.10.59.14:8081/course  
endpoint for delete 1 course: DELETE http://10.10.59.14:8081/course/courseId  
```
{
    "title": "Server Side Programming",
    "instructor": "Dr. Nattapon Kumyaito",
    "description": "Client-server web architecture, overview of server-side programming languages, server-side programming basics including types, arrays, loops, functions, handling form input and validation; database connections and making database queries, object-oriented approaches to server-side programming, designing and writing web services, authentication techniques and session management, use of server-side frameworks, web organization and standards",
    "total_student": 50,
    "status": "active",
    "type": "core subject"
}
```

### 2. Speaker 
endpoint for get all speakers: GET http://10.10.59.14:8081/speakers  
endpoint for get 1 speaker: GET http://10.10.59.14:8081/speaker/speakerId  
endpoint for edit 1 speaker: PUT http://10.10.59.14:8081/speaker/speakerId  
endpoint for create 1 speaker: POST http://10.10.59.14:8081/speaker  
endpoint for delete 1 speaker: DELETE http://10.10.59.14:8081/speaker/speakerId  
```
{
    "model": "STOCKWELL II",
    "brand": "Marshal",
    "watt": "5.0",
    "power_input": 220,
    "status": "not continue",
    "type": "portable"
}
```

### 4. Book 
endpoint for get all books: GET http://10.10.59.14:8081/books  
endpoint for get 1 book: GET http://10.10.59.14:8081/book/bookId  
endpoint for edit 1 book: PUT http://10.10.59.14:8081/book/bookId  
endpoint for create 1 book: POST http://10.10.59.14:8081/book  
endpoint for delete 1 book: DELETE http://10.10.59.14:8081/book/bookId  
```
{
    "title": "Metaverse",
    "author": "Mark zuckerberg",
    "total_page": 550,
    "publisher": "Chula Book",
    "category": "Text Book",
    "price": 150.0
}
```

---------------------------------------------------------------------------------------

# nv-webblog-client

> nodejs vuejs webblog client

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

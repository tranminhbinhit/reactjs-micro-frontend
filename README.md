# reactjs-micro-frontend
Demo micro frontend

## Usage

```
npx create-mf-app
- micro_counter : 8022
- main : 8080

```



## Config And Used

```
main > webpack.config.js
- plugins > remotes
    remotes: {
        counter: "micro_counter@http://localhost:8022/remoteEntry.js",
    },
- Used
    import { Counter } from 'counter/Counter';
    <Counter />


micro_counter > webpack.config.js
- plugins > exposes
    exposes: {
        "./Counter": "./src/components/Counter",
    },
- Used
    src/componensts/Counter.jsx

```

# Ưu nhược điểm
```
Ưu điểm:
- Giao diện người dùng vi mô có nhiều mô-đun hơn và có thể tái sử dụng.
- Một giao diện vi mô có khả năng mở rộng hơn.
- Giao diện người dùng vi mô dễ bảo trì hơn.
- Phát triển độc lập và nhanh hơn.
- Kiểm tra các ứng dụng riêng biệt rất dễ dàng.
- Các công nghệ front-end khác nhau có thể được sử dụng cho các dự án khác nhau (như React, Angular, Vue.js, v.v.).

Nhược điểm:
- Việc kiểm tra toàn bộ ứng dụng không hề dễ dàng.
- Chia sẻ mã, trạng thái (dữ liệu), v.v. không dễ dàng.
```

# Nguồn
- https://dev.to/devsmitra/the-complete-guide-to-micro-frontend-with-reactjs-for-2022-36b2
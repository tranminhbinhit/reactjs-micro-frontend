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

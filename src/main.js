import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import router from "./components/routes/router.js";

const app = createApp(App);

app.use(router).mount("#app");

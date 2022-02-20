import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import router from "./components/routes/router.js";
import mitt from "mitt";

const emitter = mitt();
const app = createApp(App);

app.config.globalProperties.emitter = emitter;

app.use(router).mount("#app");

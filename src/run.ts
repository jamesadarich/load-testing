import http from "k6/http";
import { Options } from "k6/options"

export const options: Options = {
    vus: 35,
    duration: "5m"
    // stages: [
    //     { duration: "10s", target: 10 },
    //     { duration: "20s", target: 10 },
    //     { duration: "10s", target: 35 },
    //     { duration: "30s", target: 0 },
    // ]
};

export default function() {
    const response = http.get("", {
        cookies: {}
    });
};

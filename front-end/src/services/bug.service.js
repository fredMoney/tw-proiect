import http from "../http-common";

class BugDataService {
    getAll() {
        return http.get("/bugslist");
    }

    get(eid) {
        return http.get(`/bugslist/${eid}`);
    }

    create(data) {
        return http.post()
    }
}
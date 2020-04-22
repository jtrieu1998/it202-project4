self.addEventListener("install", (e) => {
    console.log("installing", e);
});
self.addEventListener("fetch",(e) => {
    console.log("fetch", e);
});
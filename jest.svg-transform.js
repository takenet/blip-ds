// Allows components to import `.svg` files on jest execution by mocking its return.
module.exports = {
    process() {
        return { 
            code: 'module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj4KICA8cGF0aCBkPSJNNTAsNTAgTDEwMCwxMDAgTDUwLDEwMCBMNSw1MCBaIiBmaWxsPSIjMDAwIi8+Cjwvc3ZnPg=="' 
        };
    },
    getCacheKey() {
        return 'svg-content-v3';
    },
};

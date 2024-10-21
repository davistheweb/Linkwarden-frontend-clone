const webTitle = () => {

    window.addEventListener('focus',()=>{
        document.title = "LINKWARDEN || FRONTEND CLONE";
    });
    window.addEventListener('blur',()=>{
        document.title = "LINKWARDEN";
    });
}
webTitle();

function grandparent(){
    let gp = "Grand Parent";
    function parent(){
        let p = "parent";
        function child(){
            console.log(gp);
            console.log(p);
        }
        child();
    }
    parent();
}
grandparent();
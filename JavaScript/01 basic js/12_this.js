let obj = {
    add : function(){
        console.log(this);
    },

    sub : () => {
        console.log(this);
    },
    street : {
        a:1,
        b:2,
        print:function(){
            console.log(this);
        }
    },
    st : {
        a:1,
        b:2,
        print:()=> {
            console.log(this);
        }
    }
}
// console.log(obj)
// obj.sub();

// function a(){
//     console.log(this);     // global object
// }

// a();
// console.log(this);        // {}
obj.street.print();
obj.st.print();
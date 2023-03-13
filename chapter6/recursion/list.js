function printList(list) {
    return (list.next === null) ? alert(list.value) : ( alert(list.value), printList(list.next) );
};




function printList(list) {
    alert(list.value);
    
    while (list.next != null) {
        
        list = list.next;
        alert(list.value);
    };
};
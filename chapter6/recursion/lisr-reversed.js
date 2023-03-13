function printReverseList(list) {

    if (list.next) {
      printReverseList(list.next);
    };
    alert(list.value);
};


function printReverseList(list) {
    output = []
    output.unshift(list.value)
    
    while (list.next != null) {
        
        list = list.next;
        output.unshift(list.value);
    };

    return output.map( item => alert(item) );
};
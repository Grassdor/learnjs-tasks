function aclean(arr) {
    let map = new Map()
    
    for (item of arr) {
        let antiAnagram = ( ( Array.from(item.toLowerCase()) ).sort() ).join('');
        if ( map.has(antiAnagram) ) {
            continue;
        } else {
            map.set(antiAnagram, item);
        };
        
    }
    return Array.from(map.values())
}
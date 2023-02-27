function unique(arr) {
    let set = new Set();
    
    arr.map(item => set.add(item));
    return Array.from(set)
  }
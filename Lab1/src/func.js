export function countTypes(arr,Types){
    for (const item of arr){
        const type = typeof item;
        if(type in Types){
            Types[type]++;
        }
    }
}
export function incVal(n) {
    n++;
    return n;
}

export function incRef(obj){
    obj.n++;
}

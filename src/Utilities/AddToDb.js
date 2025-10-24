import Swal from 'sweetalert2'

const getStoresReadList = () => {
    // read list

    const storedListStr = localStorage.getItem('read-list')
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }


}

const getStoredWhishList = () => {
    //read list
    const storedWhishStr = localStorage.getItem('whis-list');
    if (storedWhishStr){
        const whisList = JSON.parse(storedWhishStr);
        return whisList;
    }
    else{
        return [];
    }
}

const addToStoredWhishList = (id) => {
    const storedWhishList = getStoredWhishList();
    if(storedWhishList.includes(id)){
        console.log(id, 'already exsits in the read list')
    }
    else{
        storedWhishList.push(id);
        const storedWhishStr = JSON.stringify(storedWhishList);
        localStorage.setItem('whis-list', storedWhishStr)
        
    }

}

const addToStorestReadList = (id) => {
    const storedList = getStoresReadList();
    if(storedList.includes(id)){
        console.log(id, 'already exsits in the read list')
        Swal.fire("book is added");
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr)
    }
}


export { addToStorestReadList, addToStoredWhishList, getStoresReadList, getStoredWhishList }
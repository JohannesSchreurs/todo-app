
const useLocalStorage = (name) => {
    const addItem = (item) => {
        if(!window.localStorage.getItem(name)) {
            window.localStorage.setItem(name, JSON.stringify([item]));
        } 
        else {
            let list = [...getItemsFromLocalStorage(), item];
            window.localStorage.setItem(name, JSON.stringify(list));
        }
    }

    const removeItem = (id) => {
        const data = getItemsFromLocalStorage();
        window.localStorage.setItem(name, "");
        let filteredData = data.filter(item => item.id !== id);
        window.localStorage.setItem(name, JSON.stringify(filteredData));
    }

    const editItem = (state) => {
        window.localStorage.setItem(name, "");
        window.localStorage.setItem(name, JSON.stringify(state));
    }

    const getItemsFromLocalStorage = () => {
        const retrievedData = window.localStorage.getItem(name);
        return retrievedData ? JSON.parse(retrievedData) : [];
    }

    return {
        addItem,
        getItemsFromLocalStorage,
        removeItem,
        editItem,
    }
}

export default useLocalStorage;
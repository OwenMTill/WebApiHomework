const itemContainer = document.getElementById("items-container");

const fetchItems = async ()=>{
    try{
        const response = await fetch("/items");
        if(!response.ok){
            throw new Error("Failed to get items");
        }

        const items = await response.json();
        console.log(items);

        itemContainer.innerHTML = "";

        items.forEach((item) => {
            const itemDiv = document.createElement("div");
            itemDiv.className = "item";
            itemDiv.innerHTML = `${item.name} 
            <button onclick="updateItem('${item._id}')">Update</button> 
            <button onclick="deleteItem('${item._id}')">Delete</button>`;
            itemContainer.appendChild(itemDiv);
        });
    }catch(error){
        console.error("Error: ", error);
        itemContainer.innerHTML = "<p style='color:red'>Failed to get items</p>";
    }
}

const updateItem = async(id)=>{
    try{
        console.log(id);
        window.location.href = `/updateItem/${id}`;
    }catch(err){
        console.error("Failed to connect");
    }
}

const deleteItem = async(id)=>{
    if(!confirm("Are You Sure?"))return;
    try{
        console.log(id);
        const response = await fetch(`/deleteitem/${id}`, {method: 'DELETE'});

        if(!response.ok)
        {
            throw new Error("Failed To Delete");
        }

        fetchItems();
    }catch(err){
        console.error("Error deleting error: ", err)
    }
}

fetchItems();
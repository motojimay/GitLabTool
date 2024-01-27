const MargeRequestType = {
    all: "?state=all",
    
}

export default function createUrl() {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "PRIVATE-TOKEN": `${ACCESS_TOKEN}`  
            },
        })
        .then((res) => res.json())
        .then((data) => {
            resolve(data);
            console.log(data);
        })
        
    })
}

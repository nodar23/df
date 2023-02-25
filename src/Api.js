class Api {
    constructor(token) {
        this.path = "https://api.react-learning.ru";
        this.group = "9-gr";
        this.token = token;
    }
    signUp(body) {
        body.group = this.group;
        return fetch(`${this.path}/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
    }
    signIn(body) {
        return fetch(`${this.path}/signin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
    }
    getProducts() {
        return fetch(`${this.path}/products`, {
            headers: {
                "authorization": `Bearer ${this.token}`
            }
        })
    }
    getProduct(id) {
        return fetch(`${this.path}/products/${id}`, {
            headers: {
                "authorization": `Bearer ${this.token}`
            }
        })
    }
    getMe = async () => {
        const response = await fetch('https://api.react-learning.ru/v2/9-gr/users/me',
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                }
            });
    
    
        if (response.ok == false) {
    
            const res = await response.json();
            throw new Error(res.message);
        }
    
        let user = await response.json();
        return user;
    }
}



export { Api };



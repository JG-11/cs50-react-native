import fetch from 'cross-fetch'

//Abstraction barrier
const processContact = contact => ({
    name: `${contact.name.first} ${contact.name.last}`,
    phone: contact.phone
});

export const fetchUsers = async () => {
    const response = await fetch("https://randomuser.me/api/?results=10");
    const { results } = await response.json();
    return results.map(processContact);
}

export const login = async(username, password) => {
    const response = await fetch('some URL', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        })
    })

    if(response.ok) {
        return true;
    }

    const errMessage = await response.text();
    throw new Error(errMessage);
}

export const retrieveQuote = async() => {
    const response = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    const result = await response.json()

    return result
}

/*
    import { login } from './API';

    try {
        const success = await login(this.state.username, this.state.password);
        this.props.navigation.navigate('Screen name');
    } catch (err) {
        console.log(err.message);
    }
*/
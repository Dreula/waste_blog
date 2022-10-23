const BASE_URL = "http://localhost:3000/"

export const getEmail = async () => {
    const response = await fetch(`${BASE_URL}/api/emails`)
    const json = await response.json()

    return json;
}

export async function addEmail(formData){
    try {
        const Options = {
            method: 'POST',
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify(formData)
        }   
        const response = await  fetch(`${BASE_URL}api/emails`, Options)
        const json = await response.json()

        return json;

    } catch (error) {
        return error;
    }
}

export const getAnnouncement = async () => {
    const response = await fetch(`${BASE_URL}/api/announcements`)
    const json = await response.json()

    return json;
}

export async function addAnnouncement(formData){
    try {
        const Options = {
            method: 'POST',
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify(formData)
        }   
        const response = await  fetch(`${BASE_URL}api/announcements`, Options)
        const json = await response.json()

        return json;

    } catch (error) {
        return error;
    }
}
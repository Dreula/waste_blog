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

export const getAnnouncements = async () => {
    try {
        const response = await fetch(`${BASE_URL}/api/announcements`)
        const json = await response.json()
        return json;
    } catch (error) {
        return error;
    }
    
}

export async function addVolunteer(formData){
    try {
        const Options = {
            method: 'POST',
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify(formData)
        }   
        const response = await  fetch(`${BASE_URL}api/volunteers`, Options)
        const json = await response.json()

        return json;

    } catch (error) {
        return error;
    }
}
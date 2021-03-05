import request from 'superagent';

const URL = `https://lab14-fave-sql.herokuapp.com/`;

export async function userSignUp(email, password) {
    const response = await request
        .post(`${URL}/auth/signup`)
        .send({ email, password })

    return response.body;  //id, email, token
}

export async function userSignIn(email, password) {
    const response = await request
        .post(`${URL}/auth/signin`)
        .send({ email, password })

    return response.body;
}

export async function getCatPics(amount) {
    const response = await request
        .get(`${URL}/pics?amount=${amount}`)
        .set('x-api-key', REACT_APP_CATAPI)

    return response.body;
}

export async function getCatFacts(amount) {
    const response = await request
        .get(`${URL}/facts?amount=${amount}`)
        .set('x-api-key', REACT_APP_CATAPI)

    return response.body;
}

export async function getAllUserFavorites(token) {
    const response = await request
        .get(`${URL}/api/favorites`)
        .set('Authorization', token)

    return response.body;
}

export async function addUserFavorite(favorite, token) {
    const response = await request
        .post(`${URL}/api/favorite`)
        .set('Authorization', token)
        .send({ favorite })

    return response.body;
}

export async function deleteUserFavorite(id, token) {
    const response = await request
        .delete(`${URL}/api/favorites/${id}`)
        .set('Authorization', token)

    return response.body;
}
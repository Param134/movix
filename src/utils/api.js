import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTc2MWZhNjlkNTRhZWQ1YjBkMTQ0NmViYTY1ZWJlMSIsInN1YiI6IjY0OTAyMmY5YzJmZjNkMDBjNTliMTRhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OLK7m89Kaq_2XicRpbzQL9dXCJkyQ6jce8Z9g4mMKb0"

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async(url, params) => {
    try{
        const {data} = await axios.get(BASE_URL + url, {
            headers,
            params
        })
        return data;
    }
    catch(err){
        console.log(err);
        return err;
    }
}
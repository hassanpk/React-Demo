import { retry } from "redux-saga/effects";
import { ListMovie, storeMovieData, storeFilterMovieData, FilterMovie } from "../../Constants";

const ListMovieAction = () => {
    return { type: ListMovie };
}

const FilterMovieAction = (filters) => {
    return {
        type: FilterMovie,
        filters: filters
    };
}

const SaveMoviedataStore = (movie) => {
    return {
        type: storeMovieData,
        movie
    }
}

const SaveFilterMoviedataStore = (movie) => {
    return {
        type: storeFilterMovieData,
        movie
    }
}

export { SaveMoviedataStore, ListMovieAction, FilterMovieAction, SaveFilterMoviedataStore };


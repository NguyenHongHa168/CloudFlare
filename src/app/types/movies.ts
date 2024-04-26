export  interface Movie{
    id:number;
    poster_path:string;
    original_title:string;
    overview:string;
    videoKey?:string,
    original_language?:string,
    popularity?:string,
    title?:string,
    vote_count?:number,
    release_date?:Date,
    genre_ids:[],
    vote_average:string,
}
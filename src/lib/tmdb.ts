import axios from 'axios';
import { Media } from '../types/type';
import dotenv from 'dotenv'
dotenv.config()
const apiKey = process.env.tmdb_key
const uri = 'https://api.themoviedb.org/3';
export async function tmdb(param: string) {
  const result = await axios.get(`${uri}${param}`, {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
  });
  const res: Media[] = [];
  result.data.results.map((item: any) => {
    res.push({
      id: item.id,
      title: item.title || item.name,
      overview: item.overview,
      rating: item.vote_average,
      banner: `https://image.tmdb.org/t/p/original${item.poster_path}`,
      poster: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
    });
  });
  return res;
}

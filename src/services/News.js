import {post} from '../helper/util';

 export function loadNews(){
   return post('news/get_news');
}
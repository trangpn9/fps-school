import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSetting } from '../constants/init-api';

@Injectable({
  providedIn: 'root'
})
export class GetDataPostService {

  constructor(private http: HttpClient) { }

  getDataPostById(id: string) {
    return this.http.get(`${AppSetting.API_SERVICE}wp/v2/posts/${id}?_embed`);    
  }

  getDataPostBySlug(slug: string) {
    return this.http.get(`${AppSetting.API_SERVICE}wp/v2/posts/?slug=${slug}&?_embed`);    
  }
  
}

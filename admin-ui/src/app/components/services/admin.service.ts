import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdminRequest } from '../models/admin-request.model';
import { AdminResponse } from '../models/admin-response.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = 'http://localhost:8081/api/admin';

  constructor(private http: HttpClient) {}

  login(request: AdminRequest): Observable<AdminResponse> {
    return this.http.post<AdminResponse>(`${this.baseUrl}/login`, request);
  }
}

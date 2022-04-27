import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Antique } from '../models/antiques.model';

@Injectable({
    providedIn: 'root'
})

export class AntiqueService {
    apiUrl = 'http://localhost:8000/api';

    constructor(private http: HttpClient) {}

    getAntiques(): Observable<Antique[]> {
        return this.http.get<Antique[]>(`${this.apiUrl}/antiques`);
    }

    postAntique(antique: Antique): Observable<Antique>{
        return this.http.post<Antique>(`${this.apiUrl}/antiques`, antique);
    }

    updateAntique(antiqueId: number, antique: Antique): Observable<Antique>{
        return this.http.put<Antique>(`${this.apiUrl}/antiques/${antiqueId}`, antique);
    }

    deleteAntique(antiqueId: number): Observable<Antique>{
        return this.http.delete<Antique>(`${this.apiUrl}/antiques/${antiqueId}`);
    }
}

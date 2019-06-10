import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Consultorio} from './consultorio';

@Injectable()
export class ConsultorioService {

  constructor(private httpClient: HttpClient) {
  }

  listar(): Observable<Consultorio[]> {
    return this.httpClient.get(`${environment.baseUrl}/consultorios`) as Observable<Consultorio[]>;
  }

  salvar(consultorio: Consultorio) {
    return this.httpClient.post(`${environment.baseUrl}/consultorios`, consultorio);
  }
}

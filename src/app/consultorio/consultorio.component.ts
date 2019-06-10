import {Component} from '@angular/core';
import {Consultorio} from './consultorio';
import {ConsultorioService} from './consultorio.service';

@Component({
  selector: 'app-consultorio',
  templateUrl: './consultorio.component.html'
})
export class ConsultorioComponent {

  current: Consultorio = {id: null, nome: ''};
  lista: Consultorio[];

  constructor(private consultorioService: ConsultorioService) {
    this.listarConsultorios();
  }

  async listarConsultorios() {
    this.lista = await this.consultorioService.listar().toPromise();
  }

  novo() {
    this.current = {id: null, nome: ''};
  }

  salvar() {
    if (!this.current.nome) {
      return;
    }
    this.consultorioService.salvar(this.current).subscribe(resp => {
      this.novo();
      this.listarConsultorios();
    });
  }

  atualizar() {
    this.listarConsultorios();
  }

  editar(consultorio: Consultorio) {
    this.current = JSON.parse(JSON.stringify(consultorio));
  }
}

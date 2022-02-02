import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fromEvent, Observable } from 'rxjs';
import { ProdutoDetalheComponent } from '../componentes/produto-card-detalhe.component';
import { ProdutoCountComponent } from '../componentes/produto-cout.component';
import { Produto } from '../models/produto';

@Component({
  selector: 'app-produto-dashboard',
  templateUrl: './produto-dashboard.component.html',
  styles: []
})
export class ProdutoDashboardComponent implements OnInit, AfterViewInit {

  produtos: Produto[]

  @ViewChild(ProdutoCountComponent, { static: false }) contador: ProdutoCountComponent;
  @ViewChild('teste', { static: false }) mensagemTela: ElementRef;

  @ViewChildren(ProdutoDetalheComponent) botoes: QueryList<ProdutoDetalheComponent>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.produtos = this.route.snapshot.data['produtos'];
    console.log(this.route.snapshot.data['teste']);
  }

  ngAfterViewInit(): void {
      let clickTexto: Observable<any> = fromEvent(this.mensagemTela.nativeElement, 'click');
      clickTexto.subscribe(() => {
        alert('clicou no texto!');
        return;
      })

      console.log('Objeto do contador: ', this.contador.produtos)

      console.log(this.botoes);
      this.botoes.forEach(p => {
        this.verificaAtivo(p.produto.ativo)
      })
  }

  mudarStatus(event: Produto){
    event.ativo = !event.ativo;
  }

  verificaAtivo(ativo: boolean){
    if(ativo) console.log('Status: Ativo');
    else console.log('Status: Desligado');
  }

}

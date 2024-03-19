import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produtoservice';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, registerLocaleData} from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt)

@Component({
  selector: 'app-lista-produto',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: `./lista-produto.component.html`,
  styles: [],
  providers: [ProdutoService]
})
export class ListaProdutoComponent implements OnInit{

  constructor(private produtoService: ProdutoService) { }
  
  public produtos: Produto[] | undefined;

  ngOnInit() {
    this.produtoService.obterProdutos().subscribe({
      next: produtos => {
        this.produtos = produtos;
        console.log(produtos);
      },
      error: error => console.log(error)
    });
  }
}

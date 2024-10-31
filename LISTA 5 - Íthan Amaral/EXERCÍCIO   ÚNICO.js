
class produto(){
    
    constructor(codigo,nome,preco,quantidadeEmEstoque){
       this._codigo = codigo
       this._nome = nome
       this._preco = preco
       this.quantidadeEmEstoque = quantidadeEmEstoque
    }
    
    exibirDadosProdutos(){
        console.log(' o código do seu produto é ${this._codigo}')
         console.log(' o nome do seu produto é ${this._nome}')
          console.log(' o preço do seu produto é ${this._preco}')
           console.log(' A qntd do seu produto é ${this._quantidadeEmEstoque}')
    }
}

class CarrinhoDeCompras(){
    constructor(){
        this._carrinhoDeCompras = []
        
        adicionarProdutoNoCarrinhi(produto){
            this.carrinhoDeCompras.push(produto)
        }
    }
    
     comprarProduto(nome, quantidade) {
    const produto = this.carrinhoDeCompras.find(item => item.nome === nome);
    if (!produto) {
      console.log(`Produto "${nome}" não encontrado no carrinho.`);
      return 0;
    }
    if (quantidade > produto.quantidadeEmEstoque) {
      console.log(`Quantidade insuficiente do produto "${nome}" no estoque.`);
      return 0;
    }
    produto.quantidadeEmEstoque -= quantidade;
    const precoTotal = produto.preco * quantidade;
    console.log(`Compra de ${quantidade} unidades do produto "${nome}" realizada com sucesso.`);
    console.log(`Preço total: R$ ${precoTotal.toFixed(2)}`);
    return precoTotal;
    
    pesquisarProdutoNoCarrinho(nome) {
    const produto = this.carrinhoDeCompras.find(item => item.nome === nome);
    if (!produto) {
      console.log(`Produto "${nome}" não encontrado no carrinho.`);
      return;
    }else{  
        console.log(' o código do seu produto é ${this._codigo}')
         console.log(' o nome do seu produto é ${this._nome}')
          console.log(' o preço do seu produto é ${this._preco}')
           console.log(' A qntd do seu produto é ${this._quantidadeEmEstoque}');
        
        
    }
   
  }
}

exibirProdutosNoCarrinhoDeCompras(){
  
   this.carrinhoDeCompras.forEach(produto => {
      console.log(`- ${produto.nome}`);
    });
  
excluirProdutoDoCarrinhoDeCompras(nome){
    const compras = this.CarrinhoDeCompras.find(item => item.nome === nome)
    if(compras){
        delete CarrinhoDeCompras(nome)
        let Newray = CarrinhoDeCompras
    }
}
 
exibirQuantidadeDeProdutosNoCarrinho(){
    const qntdTotal = this.CarrinhoDeCompras.reduce((total,produto) =>{
        return total += produto; 
    })
    console.log(`Quantidade produtos que estão no carrinho, são: ${quantidadeTotal}`);
}
  
  calcularTotalDoCarrinho(){
    const precototal = this.carrinhoDeCompras.reduce((total, produto) => {total + produto.preco});
    console.log(`Total do carrinho de compras: R$ ${precototal.toFixed(2)}`);
}
  }

}
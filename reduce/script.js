const lista = [

    {
      name: 'Carne',
      preco: 30
    },
    {
      name: 'Arroz',
      preco: 12
    },
    {
      name: 'Toalha',
      preco: 30,
    },
    ];
    
    const saldoDisponivel = 100;
    
    function calculaSaldo(saldoDisponivel, lista) {
       return lista.reduce(function(prev, current) {
          return prev - current.preco;
    }, saldoDisponivel)
    }
    
    console.log(calculaSaldo(saldoDisponivel, lista));
    
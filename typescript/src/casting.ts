namespace casting {
    let idade: any = 25;
    (idade as number).toFixed(); //castingfunção para numericos add casas decimais
    (idade as string).length;
    (idade as string[]).forEach(x => {
        console.log(x);
    })
    // para passar de numero para string precisa ser passado para unknown
    let nome: string = 35 as unknown as string;
}
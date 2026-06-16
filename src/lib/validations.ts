export function validarLogin(email: string, senha: string) {
    if (!email || !senha){
        return "Preencha e-mail e senha para entrar!";
    }
    return null;
}
 
type ResultadoSenhaForte = {
    valida: boolean;
    requisitosFaltando: string[],
    mensagem: string | null;
}
 
export function validarSenhaForte(senha: string ){
    const requisitosFaltando: string[] = [];
 
    //Cada constante representa uma regra da senha forte.
    //Separar as regras facilita explicar, testar e mostrar ao usuario o que falta
    const temMinimo = senha.length >= 8
    const temMaiuscula = /[A-Z]/.test(senha);
    const temMinuscula = /[a-z]/.test(senha);
    const temNumero = /\d/.test(senha);
    const temEspecial = /[^A-Za-z0-9]/.test(senha);
 
    if(!temMinimo){
        requisitosFaltando.push("no minimo 8 caracteres");
    }
    if(!temMaiuscula){
        requisitosFaltando.push("1 letra maiuscula");
    }
    if(!temMinuscula){
        requisitosFaltando.push("1 letra minuscula");
    }
    if(!temNumero){
        requisitosFaltando.push("1 numero");
    }
    if(!temEspecial){
        requisitosFaltando.push("1 caracter especial");
    }
 
    // a senha é valida se a lista de requisitos faltando estiver vazia
    const valida = requisitosFaltando.length === 0;
    // requisitosFaltando.length
    // se a senha estiver fraca, por exemplo "abc", o array pode ficar assim:
    /*
    [
    "no mínimo 8 caracteres",
    "1 letra maiuscula",
    "1 numero",
    "1 caracter especial"
    ]
    */
   // Neste caso requisitosFaltando.length, vale 4
 
    return {
        valida,
        requisitosFaltando,
        mensagem: valida
        ? null
        : `A senha precisa conter: ${requisitosFaltando.join(", ")}.`
    } satisfies ResultadoSenhaForte
 
}
 
export function validarCadastroUsuario( params:{
    nome: string;
    email: string;
    senha: string;
    confSenha: string;
}) {
    const { nome, email, senha, confSenha } = params;
    if (!nome || !email || !senha || !confSenha){
        return "Preencha todos os campos"
    }
    if (senha !== confSenha){
        return "As senhas não conferem!";
    }
    if (!validarSenhaForte(senha)){
        return "A senha deve ter no minimo 8 caracteres, com maiuscula, minuscula, mumero"
    }
    return null;
 
}
 
export function normalizaPreco(preco: string){
    return Number(preco.replace(",","."))
}
 
export function validarPreco(nome: string, preco:string){
    if (!nome || !preco){
        return "Por favor, preencha o nome e o preço!"
    }
    const precoNumerico = normalizaPreco(preco);
    if (Number.isNaN(precoNumerico) || precoNumerico <=0){
        return "Informe um preco valido"
    }
    return null;
   
}
 
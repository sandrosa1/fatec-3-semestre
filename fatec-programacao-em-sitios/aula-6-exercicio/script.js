ler.addEventListener('click', function () {

   let pessoas = JSON.parse(conteudo_json.value)
    let str =''

    pessoas.forEach( pessoa => {

        str += 'NOME: '+pessoa.nome +'\n'
        str += 'IDADE: '+pessoa.idade +'\n'
        str += 'CASADA: '+((pessoa.casado) ? 'CASADO' : 'SOLTEIRO') +'\n'
        str += 'SALARIO: '+pessoa.salario +'\n'
        str += 'CONHECIMENTO: \n'

        pessoa.conhecimentos.forEach(conhecimento => {

            str += '- ' + conhecimento  +'\n'
        })

        str += 'EXPERIENCIA: \n'
        pessoa.experiencia.forEach(exp => {

            str += '- LINGUAGEM-> ' + exp.linguagem +'\n'
            str += '-TEMPO-> '+ exp.tempo +'\n'

            if (exp.frameworks){
                str += '-FRAMEWORKS: \n'
                exp.frameworks.forEach(fmk => {
                    str += '** '+fmk + '\n'
                })
            }
        })
        if(pessoa.idiomas.length > 0) {
            str += 'IDIOMAS: \n'
            pessoa.idiomas.forEach(idioma => {
                str += '** ' + idioma + '\n'
            })
        }



    })

    resultado.value = str


})
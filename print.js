    document.getElementById('btnadm1').onclick = function() {
            var conteudo = document.getElementById('exampleModaladm1').innerHTML,
                tela_impressao = window.open('about:blank');  

                tela_impressao.document.write(conteudo);
                tela_impressao.window.print();
                tela_impressao.window.close();
        };
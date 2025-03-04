$(document).ready(function() {
    // Botão para mostrar formulário
    $('header button').click(function() {
        $('form').slideDown(); // Corrigido: removido ; extra
    });

    // Botão para cancelar
    $('#botao-cancel').click(function(){
        $('form').slideUp();
    });

    // Submit do formulário
    $('form').on('submit', function(e) {
        e.preventDefault();
        
        // Capturar URL da imagem
        const enderecoImagemNova = $('#imagem-nova').val(); // Corrigido: .val() com parênteses porque estamos CHAMANDO a função
        
        // Criar novo item da lista
        const novoItem = $('<li style="display:none;"></li>');
        
        // Criar imagem
        $('<img>').attr('src', enderecoImagemNova).appendTo(novoItem);
        
        // Criar link
        $('<div class="overlay-img-link">')
            .append(
                $('<a>')
                    .attr({
                        href: enderecoImagemNova,
                        target: '_blank',
                        title: 'Ver imagem em tamanho real'
                    })
                    .text('Ver imagem em tamanho real')
            )
            .appendTo(novoItem);
            
        // Adicionar à lista e animar
        $('ul').append(novoItem);
        novoItem.fadeIn(1000);
        
        // Limpar campo
        $('#imagem-nova').val('');
    });
});
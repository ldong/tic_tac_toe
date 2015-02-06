(function(){
    console.log('Hi');
    $(document).ready(function(){
        var items = [];
        var arr = [];
        for(var i=0; i<9; ++i){
            items.push('<li class="tile noPlayer"'+ 'data-idx="'+i+'"><p></p></li>');
            arr.push(i+10);
        }

        var $list = $('<ul></ul>')
        $list.append(items.join(''));
        $('.board').append($list);

        var currPlayer = 1;
        var count = 0;
        $(".board li").each(function(n) {
            $this = $(this);
            $p = $this.find('p');
            (function($p, $this){
                $this.click(function() {
                    if($this.hasClass('noPlayer')){
                        var val;
                        var nextPlayer;
                        var idx= $this.data()['idx'];
                        if (currPlayer == 1) {
                            val = 'O';
                            nextPlayer = 2;
                            $this.addClass('player1');
                        } else {
                            val = 'X';
                            nextPlayer = 1;
                            $this.addClass('player2');
                        }
                        arr[idx] = val;
                        $p.text(val);
                        $this.removeClass('noPlayer');
                        count++;
                        checkIfWin(arr, count);
                        currPlayer = nextPlayer;
                    }
                });
            })($p, $this);
        });
        function checkIfWin(arr, count){
            if(count == arr.length){
                alert("Game over");
                console.log("Game over");
                setTimeout(function(){
                    location.reload();
                }, 1000);
            }

            if( (arr[0] == arr[1] && arr[1]== arr[2] )
                ||
                (arr[3] == arr[4] && arr[4] == arr[5])
                ||
                (arr[6] == arr[7] && arr[7] == arr[8])
                ||
                (arr[0] == arr[3] && arr[3] == arr[6])
                ||
                (arr[1] == arr[4] && arr[4] == arr[7])
                ||
                (arr[2] == arr[5]  && arr[5] == arr[8])
                ||
                (arr[0] == arr[4] && arr[4] == arr[8])
                ||
                (arr[2] == arr[4] && arr[4] == arr[6])){
                alert('Player'+currPlayer+' Won');
                console.log('Player'+currPlayer+' Won');
                setTimeout(function(){
                    location.reload();
                }, 1000);
            }
        }
    });
})();

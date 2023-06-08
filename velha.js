        var nome = prompt("Nome do jogador: ", "Digite aqui...");
		document.getElementById("p_1").innerHTML = nome;
		var jogo = [];
        var tabuleiro = [];
        var quemJoga = 0;
        var verifica;
        var jogando = true;
        var level = 3;
        var jogadaCPU = 1;
        var quemComeca = 0;
		var placarJogador = 0;
		var placarCPU = 0;
		var modo = "pc";

		function config(){
			var lv = document.getElementById("level");
			var vs = document.getElementById("vs");
			document.getElementById("set").value = "Redefinir";
			if(lv[0].selected){
				level = 1;
			}else if(lv[1].selected){
				level = 2;
			}else if(lv[2].selected){
				level = 3;
			}
			
			if(vs[0].selected){
				var nome = prompt("Nome do jogador: ", "Digite aqui...");
				document.getElementById("p_1").innerHTML = nome;
				document.getElementById("p_2").innerHTML = "CPU";
				modo = "pc";
			}else if(vs[1].selected){
				var nome1 = prompt("Nome do jogador 1: ", "Digite aqui...");
				var nome2 = prompt("Nome do jogador 2: ", "Digite aqui...");
				document.getElementById("p_1").innerHTML = nome1;
				document.getElementById("p_2").innerHTML = nome2;
				modo = "pp";
			}
			placarJogador = 0;
			placarCPU = 0;
			document.getElementById("score_player").innerHTML = "0";
			document.getElementById("score_cpu").innerHTML = "0";
			document.getElementById("config").style.display="none";
			iniciar();
			
		}

        function cpuJoga(){
            if(jogando){
                if(quemJoga == 1){
                    var l, c;
                    if(level == 1){// Nível 1
                        do{
                            l = Math.round(Math.random() * 2);
                            c = Math.round(Math.random() * 2);
                        }while(jogo[l][c] != "");
                        jogo[l][c] = "O";                        
                    }else if(level == 2){// Nível 2
						if(jogadaCPU == 1){
							do{
                            l = Math.round(Math.random() * 2);
                            c = Math.round(Math.random() * 2);
                        }while(jogo[l][c] != "");
							jogo[l][c] = "O";
							jogadaCPU = 0;
						}else						
					//Ataque
					//Liha 1
						if(jogo[0][0] == "O" && jogo[0][2] == "O" && jogo[0][1] == ""){
							jogo[0][1] = "O";							
						}else if(jogo[0][0] == "O" && jogo[0][1] == "O" && jogo[0][2] == ""){
							jogo[0][2] = "O";							
						}else if(jogo[0][0] == "" && jogo[0][1] == "O" && jogo[0][2] == "O"){
							jogo[0][0] = "O";							
						}else 
						//Liha 2
						if(jogo[1][0] == "O" && jogo[1][2] == "O" && jogo[1][1] == ""){
							jogo[1][1] = "O";
						}else if(jogo[1][0] == "O" && jogo[1][1] == "O" && jogo[1][2] == ""){
							jogo[1][2] = "O";
						}else if(jogo[1][0] == "" && jogo[1][1] == "O" && jogo[1][2] == "O"){
							jogo[1][0] = "O";
						}else						
						//Liha 3
						if(jogo[2][0] == "O" && jogo[2][2] == "O" && jogo[2][1] == ""){
							jogo[2][1] = "O";
						}else if(jogo[2][0] == "O" && jogo[2][1] == "O" && jogo[2][2] == ""){
							jogo[2][2] = "O";
						}else if(jogo[2][0] == "" && jogo[2][1] == "O" && jogo[2][2] == "O"){
							jogo[2][0] = "O";
						}else
						//Diagona 1
						if(jogo[0][0] == "O" && jogo[1][1] == "O" && jogo[2][2] == ""){
							jogo[2][2] = "O";
						}else if(jogo[0][0] == "O" && jogo[1][1] == "" && jogo[2][2] == "O"){
							jogo[1][1] = "O";
						}else if(jogo[0][0] == "" && jogo[1][1] == "O" && jogo[2][2] == "O"){
							jogo[0][0] = "O";
						}else
						//Diagona 2
						if(jogo[0][2] == "O" && jogo[1][1] == "O" && jogo[2][0] == ""){
							jogo[2][0] = "O";
						}else if(jogo[0][2] == "O" && jogo[1][1] == "" && jogo[2][0] == "O"){
							jogo[1][1] = "O";
						}else if(jogo[2][0] == "O" && jogo[1][1] == "O" && jogo[2][2] == ""){
							jogo[2][2] = "O";
						}else
						//Coluna 1
						if(jogo[0][0] == "O" && jogo[1][0] == "O" && jogo[2][0] == ""){
							jogo[2][0] = "O";
							
						}else if(jogo[0][0] == "O" && jogo[1][0] == "" && jogo[2][0] == "O"){
							jogo[1][0] = "O";
							
						}else if(jogo[0][0] == "" && jogo[1][0] == "O" && jogo[2][0] == "O"){
							jogo[0][0] = "O";
							
						}else 
						//Coluna 2
						if(jogo[0][1] == "O" && jogo[1][1] == "O" && jogo[2][1] == ""){
							jogo[2][1] = "O";
						}else if(jogo[0][1] == "" && jogo[1][1] == "O" && jogo[2][1] == "O"){
							jogo[0][1] = "O";
						}else if(jogo[0][1] == "O" && jogo[1][1] == "" && jogo[2][1] == "O"){
							jogo[1][1] = "O";
						}else						
						//Coluna 3
						if(jogo[0][2] == "O" && jogo[1][2] == "O" && jogo[2][2] == ""){
							jogo[2][2] = "O";
						}else if(jogo[0][2] == "O" && jogo[1][2] == "" && jogo[2][2] == "O"){
							jogo[1][2] = "O";
						}else if(jogo[0][2] == "" && jogo[1][2] == "O" && jogo[2][2] == "O"){
							jogo[0][2] = "O";
						}else
						// Defesa
						//Liha 1
						if(jogo[0][0] == "X" && jogo[0][2] == "X" && jogo[0][1] == ""){
							jogo[0][1] = "O";
							
						}else if(jogo[0][0] == "X" && jogo[0][1] == "X" && jogo[0][2] == ""){
							jogo[0][2] = "O";
							
						}else if(jogo[0][0] == "" && jogo[0][1] == "X" && jogo[0][2] == "X"){
							jogo[0][0] = "O";
							
						}else 
						//Liha 2
						if(jogo[1][0] == "X" && jogo[1][2] == "X" && jogo[1][1] == ""){
							jogo[1][1] = "O";
						}else if(jogo[1][0] == "X" && jogo[1][1] == "X" && jogo[1][2] == ""){
							jogo[1][2] = "O";
						}else if(jogo[1][0] == "" && jogo[1][1] == "X" && jogo[1][2] == "X"){
							jogo[1][0] = "O";
						}else						
						//Liha 3
						if(jogo[2][0] == "X" && jogo[2][2] == "X" && jogo[2][1] == ""){
							jogo[2][1] = "O";
						}else if(jogo[2][0] == "X" && jogo[2][1] == "X" && jogo[2][2] == ""){
							jogo[2][2] = "O";
						}else if(jogo[2][0] == "" && jogo[2][1] == "X" && jogo[2][2] == "X"){
							jogo[2][0] = "O";
						}else
						//Diagona 1
						if(jogo[0][0] == "X" && jogo[1][1] == "X" && jogo[2][2] == ""){
							jogo[2][2] = "O";
						}else if(jogo[0][0] == "X" && jogo[1][1] == "" && jogo[2][2] == "X"){
							jogo[1][1] = "O";
						}else if(jogo[0][0] == "" && jogo[1][1] == "X" && jogo[2][2] == "X"){
							jogo[0][0] = "O";
						}else
						//Diagona 2
						if(jogo[0][2] == "X" && jogo[1][1] == "X" && jogo[2][0] == ""){
							jogo[2][0] = "O";
						}else if(jogo[0][2] == "X" && jogo[1][1] == "" && jogo[2][0] == "X"){
							jogo[1][1] = "O";
						}else if(jogo[0][2] == "" && jogo[1][1] == "X" && jogo[2][0] == "X"){
							jogo[0][2] = "O";
						}else
						//Coluna 1
						if(jogo[0][0] == "X" && jogo[1][0] == "X" && jogo[2][0] == ""){
							jogo[2][0] = "O";
							
						}else if(jogo[0][0] == "X" && jogo[1][0] == "" && jogo[2][0] == "X"){
							jogo[1][0] = "O";
							
						}else if(jogo[0][0] == "" && jogo[1][0] == "X" && jogo[2][0] == "X"){
							jogo[0][0] = "O";
							
						}else 
						//Coluna 2
						if(jogo[0][1] == "X" && jogo[1][1] == "X" && jogo[2][1] == ""){
							jogo[2][1] = "O";
						}else if(jogo[0][1] == "" && jogo[1][1] == "X" && jogo[2][1] == "X"){
							jogo[0][1] = "O";
						}else if(jogo[0][1] == "X" && jogo[1][1] == "" && jogo[2][1] == "X"){
							jogo[1][1] = "O";
						}else						
						//Coluna 3
						if(jogo[0][2] == "X" && jogo[1][2] == "X" && jogo[2][2] == ""){
							jogo[2][2] = "O";
						}else if(jogo[0][2] == "X" && jogo[1][2] == "" && jogo[2][2] == "X"){
							jogo[1][2] = "O";
						}else if(jogo[0][2] == "" && jogo[1][2] == "X" && jogo[2][2] == "X"){
							jogo[0][2] = "O";
						}else{
							do{
                            l = Math.round(Math.random() * 2);
                            c = Math.round(Math.random() * 2);
                        }while(jogo[l][c] != "");
							jogo[l][c] = "O";
						}
                    }else if(level == 3){// 1ª jogada
						// Ataque
						if(jogo[0][0] == "" && jogo[1][0] == "" && jogo[2][0] == "" && jogo[0][1] == "" && jogo[1][1] == "" && jogo[2][1] == "" && jogo[0][2] == "" && jogo[1][2] == "" && jogo[2][2] == ""
						|| jogo[0][0] == "" && jogo[1][0] == "" && jogo[2][0] == "" && jogo[0][1] == "X" && jogo[1][1] == "" && jogo[2][1] == "" && jogo[0][2] == "" && jogo[1][2] == "" && jogo[2][2] == ""
						|| jogo[0][0] == "" && jogo[1][0] == "X" && jogo[2][0] == "" && jogo[0][1] == "" && jogo[1][1] == "" && jogo[2][1] == "" && jogo[0][2] == "" && jogo[1][2] == "" && jogo[2][2] == ""
						|| jogo[0][0] == "" && jogo[1][0] == "" && jogo[2][0] == "" && jogo[0][1] == "" && jogo[1][1] == "" && jogo[2][1] == "" && jogo[0][2] == "" && jogo[1][2] == "X" && jogo[2][2] == ""
						|| jogo[0][0] == "" && jogo[1][0] == "" && jogo[2][0] == "" && jogo[0][1] == "" && jogo[1][1] == "" && jogo[2][1] == "X" && jogo[0][2] == "" && jogo[1][2] == "" && jogo[2][2] == ""){
							jogo[0][0] = "O";
						}else
					//Liha 1
						if(jogo[0][0] == "O" && jogo[0][2] == "O" && jogo[0][1] == ""){
							jogo[0][1] = "O";							
						}else if(jogo[0][0] == "O" && jogo[0][1] == "O" && jogo[0][2] == ""){
							jogo[0][2] = "O";							
						}else if(jogo[0][0] == "" && jogo[0][1] == "O" && jogo[0][2] == "O"){
							jogo[0][0] = "O";							
						}else 
						//Liha 2
						if(jogo[1][0] == "O" && jogo[1][2] == "O" && jogo[1][1] == ""){
							jogo[1][1] = "O";
						}else if(jogo[1][0] == "O" && jogo[1][1] == "O" && jogo[1][2] == ""){
							jogo[1][2] = "O";
						}else if(jogo[1][0] == "" && jogo[1][1] == "O" && jogo[1][2] == "O"){
							jogo[1][0] = "O";
						}else						
						//Liha 3
						if(jogo[2][0] == "O" && jogo[2][2] == "O" && jogo[2][1] == ""){
							jogo[2][1] = "O";
						}else if(jogo[2][0] == "O" && jogo[2][1] == "O" && jogo[2][2] == ""){
							jogo[2][2] = "O";
						}else if(jogo[2][0] == "" && jogo[2][1] == "O" && jogo[2][2] == "O"){
							jogo[2][0] = "O";
						}else
						//Diagona 1
						if(jogo[0][0] == "O" && jogo[1][1] == "O" && jogo[2][2] == ""){
							jogo[2][2] = "O";
						}else if(jogo[0][0] == "O" && jogo[1][1] == "" && jogo[2][2] == "O"){
							jogo[1][1] = "O";
						}else if(jogo[0][0] == "" && jogo[1][1] == "O" && jogo[2][2] == "O"){
							jogo[0][0] = "O";
						}else
						//Diagona 2
						if(jogo[0][2] == "O" && jogo[1][1] == "O" && jogo[2][0] == ""){
							jogo[2][0] = "O";
						}else if(jogo[0][2] == "O" && jogo[1][1] == "" && jogo[2][0] == "O"){
							jogo[1][1] = "O";
						}else if(jogo[2][0] == "O" && jogo[1][1] == "O" && jogo[2][2] == ""){
							jogo[2][2] = "O";
						}else
						//Coluna 1
						if(jogo[0][0] == "O" && jogo[1][0] == "O" && jogo[2][0] == ""){
							jogo[2][0] = "O";
							
						}else if(jogo[0][0] == "O" && jogo[1][0] == "" && jogo[2][0] == "O"){
							jogo[1][0] = "O";
							
						}else if(jogo[0][0] == "" && jogo[1][0] == "O" && jogo[2][0] == "O"){
							jogo[0][0] = "O";
							
						}else 
						//Coluna 2
						if(jogo[0][1] == "O" && jogo[1][1] == "O" && jogo[2][1] == ""){
							jogo[2][1] = "O";
						}else if(jogo[0][1] == "" && jogo[1][1] == "O" && jogo[2][1] == "O"){
							jogo[0][1] = "O";
						}else if(jogo[0][1] == "O" && jogo[1][1] == "" && jogo[2][1] == "O"){
							jogo[1][1] = "O";
						}else						
						//Coluna 3
						if(jogo[0][2] == "O" && jogo[1][2] == "O" && jogo[2][2] == ""){
							jogo[2][2] = "O";
						}else if(jogo[0][2] == "O" && jogo[1][2] == "" && jogo[2][2] == "O"){
							jogo[1][2] = "O";
						}else if(jogo[0][2] == "" && jogo[1][2] == "O" && jogo[2][2] == "O"){
							jogo[0][2] = "O";
						}else
						// Defesa
						//Liha 1
						if(jogo[0][0] == "X" && jogo[0][2] == "X" && jogo[0][1] == ""){
							jogo[0][1] = "O";
							
						}else if(jogo[0][0] == "X" && jogo[0][1] == "X" && jogo[0][2] == ""){
							jogo[0][2] = "O";
							
						}else if(jogo[0][0] == "" && jogo[0][1] == "X" && jogo[0][2] == "X"){
							jogo[0][0] = "O";
							
						}else 
						//Liha 2
						if(jogo[1][0] == "X" && jogo[1][2] == "X" && jogo[1][1] == ""){
							jogo[1][1] = "O";
						}else if(jogo[1][0] == "X" && jogo[1][1] == "X" && jogo[1][2] == ""){
							jogo[1][2] = "O";
						}else if(jogo[1][0] == "" && jogo[1][1] == "X" && jogo[1][2] == "X"){
							jogo[1][0] = "O";
						}else						
						//Liha 3
						if(jogo[2][0] == "X" && jogo[2][2] == "X" && jogo[2][1] == ""){
							jogo[2][1] = "O";
						}else if(jogo[2][0] == "X" && jogo[2][1] == "X" && jogo[2][2] == ""){
							jogo[2][2] = "O";
						}else if(jogo[2][0] == "" && jogo[2][1] == "X" && jogo[2][2] == "X"){
							jogo[2][0] = "O";
						}else
						//Diagona 1
						if(jogo[0][0] == "X" && jogo[1][1] == "X" && jogo[2][2] == ""){
							jogo[2][2] = "O";
						}else if(jogo[0][0] == "X" && jogo[1][1] == "" && jogo[2][2] == "X"){
							jogo[1][1] = "O";
						}else if(jogo[0][0] == "" && jogo[1][1] == "X" && jogo[2][2] == "X"){
							jogo[0][0] = "O";
						}else
						//Diagona 2
						if(jogo[0][2] == "X" && jogo[1][1] == "X" && jogo[2][0] == ""){
							jogo[2][0] = "O";
						}else if(jogo[0][2] == "X" && jogo[1][1] == "" && jogo[2][0] == "X"){
							jogo[1][1] = "O";
						}else if(jogo[0][2] == "" && jogo[1][1] == "X" && jogo[2][0] == "X"){
							jogo[0][2] = "O";
						}else
						//Coluna 1
						if(jogo[0][0] == "X" && jogo[1][0] == "X" && jogo[2][0] == ""){
							jogo[2][0] = "O";
							
						}else if(jogo[0][0] == "X" && jogo[1][0] == "" && jogo[2][0] == "X"){
							jogo[1][0] = "O";
							
						}else if(jogo[0][0] == "" && jogo[1][0] == "X" && jogo[2][0] == "X"){
							jogo[0][0] = "O";
							
						}else 
						//Coluna 2
						if(jogo[0][1] == "X" && jogo[1][1] == "X" && jogo[2][1] == ""){
							jogo[2][1] = "O";
						}else if(jogo[0][1] == "" && jogo[1][1] == "X" && jogo[2][1] == "X"){
							jogo[0][1] = "O";
						}else if(jogo[0][1] == "X" && jogo[1][1] == "" && jogo[2][1] == "X"){
							jogo[1][1] = "O";
						}else						
						//Coluna 3
						if(jogo[0][2] == "X" && jogo[1][2] == "X" && jogo[2][2] == ""){
							jogo[2][2] = "O";
						}else if(jogo[0][2] == "X" && jogo[1][2] == "" && jogo[2][2] == "X"){
							jogo[1][2] = "O";
						}else if(jogo[0][2] == "" && jogo[1][2] == "X" && jogo[2][2] == "X"){
							jogo[0][2] = "O";
						}else if(jogo[1][1] == ""){
							jogo[1][1] = "O";
						}else if(jogo[1][1] == "X" && jogo[0][0] == "" && jogo[0][1] == "" && jogo[0][2] == "" && jogo[1][0] == "" && jogo[1][2] == "" && jogo[2][1] == "" && jogo[2][2] == ""){
							jogo[2][2] = "O";
						}
						else if(jogo[0][0] == "" && jogo[1][1] == "" && jogo[2][2] == "O" || jogo[0][0] == "" && jogo[1][1] == "X" && jogo[2][2] == "O" ){
							jogo[0][0] = "O";
						}else if(jogo[0][0] == "O" && jogo[1][1] == "" && jogo[2][2] == "" || jogo[0][0] == "O" && jogo[1][1] == "X" && jogo[2][2] == "" ){
							jogo[2][2] = "O";
						}else if(jogo[0][0] == "O" && jogo[1][0] == "" && jogo[2][0] == "" ){
							jogo[2][0] = "O";
						}else if(jogo[0][0] == "" && jogo[1][0] == "" && jogo[2][0] == "O" ){
							jogo[0][0]  = "O";
						}else if(jogo[0][0] == "O" && jogo[0][1] == "" && jogo[0][2] == "" ){
							jogo[0][2] = "O";
						}else if(jogo[0][0] == "" && jogo[0][1] == "" && jogo[0][2] == "O" ){
							jogo[0][0] = "O";
						}else if(jogo[0][2] == "O" && jogo[1][2] == "" && jogo[2][2] == "" ){
							jogo[2][2] = "O";
						}else if(jogo[0][2] == "" && jogo[1][2] == "" && jogo[2][2] == "O" ){
							jogo[0][2] = "O";
						}else if(jogo[2][0] == "O" && jogo[2][1] == "" && jogo[2][2] == "" ){
							jogo[2][2] = "O";
						}else if(jogo[2][0] == "" && jogo[2][1] == "" && jogo[2][2] == "O" ){
							jogo[2][0] = "O";
						}else{
							do{
                            l = Math.round(Math.random() * 2);
                            c = Math.round(Math.random() * 2);
                        }while(jogo[l][c] != "");
							jogo[l][c] = "O";
						}
					}
                }
            }
			document.getElementById("quem_comeca").innerHTML = ""
            document.getElementById("quem_comeca").innerHTML += "Quem Joga: " + document.getElementById("p_1").innerHTML;
            atualizaTabuleiro();

             verifica = vitoria();
                if(verifica == "X"){
					placarJogador++;
					document.getElementById("score_player").innerHTML = placarJogador;
                    jogando = false;
                    anuncio("X");
                    return;
                }else if(verifica == "O"){
					placarCPU++;
					document.getElementById("score_cpu").innerHTML = placarCPU;
                    jogando = false;
                    anuncio("O");
                    return;
                }	
				if(jogo[0][0] != "" && jogo[0][1] != "" && jogo[0][2] != "" && jogo[1][0] != "" && jogo[1][1] != "" && jogo[1][2] != "" && jogo[2][0] != "" && jogo[2][1] != "" && jogo[2][2] != ""){					
					if(verifica == ""){
						jogando = false;
						anuncio("E");
					}
				}
			
            quemJoga = 0;			
        }

        function vitoria(){
            var l, c;
            for(l = 0; l < 3; l++){
                if((jogo[l][0] == jogo[l][1]) && (jogo[l][1] == jogo[l][2])){
					if(jogo[l][0] != "" && jogo[l][1] != "" && jogo[l][2] != ""){
					tabuleiro[l][0].style.backgroundColor = "lightgreen";
					tabuleiro[l][1].style.backgroundColor = "lightgreen";
					tabuleiro[l][2].style.backgroundColor = "lightgreen";
				}                
                    return jogo[l][0];
                }
            }

            for(c = 0; c < 3; c++){
                if((jogo[0][c] == jogo[1][c]) && (jogo[1][c] == jogo[2][c])){
					if(jogo[0][c] != "" && jogo[1][c] != "" && jogo[2][c] != ""){
					tabuleiro[0][c].style.backgroundColor = "lightgreen";
					tabuleiro[1][c].style.backgroundColor = "lightgreen";
					tabuleiro[2][c].style.backgroundColor = "lightgreen";
				}                
                    return jogo[0][c];
                }
            }

            if((jogo[0][0] == jogo[1][1]) && (jogo[1][1] == jogo[2][2])){
				if(jogo[0][0] != "" && jogo[1][1] != "" && jogo[2][2] != ""){
					tabuleiro[0][0].style.backgroundColor = "lightgreen";
					tabuleiro[1][1].style.backgroundColor = "lightgreen";
					tabuleiro[2][2].style.backgroundColor = "lightgreen";
				}
                return jogo[0][0];
            }
                
            if((jogo[0][2] == jogo[1][1]) && (jogo[1][1] == jogo[2][0])){
				if(jogo[0][2] != "" && jogo[1][1] != "" && jogo[2][0] != ""){
					tabuleiro[0][2].style.backgroundColor = "lightgreen";
					tabuleiro[1][1].style.backgroundColor = "lightgreen";
					tabuleiro[2][0].style.backgroundColor = "lightgreen";
				}                
                return jogo[0][2];
            }
            return "";
        }

        function jogar(l,p){			
            if(jogando){	
				if(modo == "pp"){
				if(quemJoga == 0){
				p1(l,p);
				return;
			}else if(quemJoga == 1){
				p2(l,p);
				return;
			}
				}
                if(quemJoga == 0){
                    if(jogo[l][p] == ""){
                        jogo[l][p] = "X";
                        quemJoga = 1;                        
                    }
                }
            }
			
            document.getElementById("quem_comeca").innerHTML = ""
            document.getElementById("quem_comeca").innerHTML += "Quem Joga: CPU";
            atualizaTabuleiro();
            if(quemJoga == 1){                
                 verifica = vitoria();
                if(verifica == "X"){
                    jogando = false;
					placarJogador++;
					document.getElementById("score_player").innerHTML = placarJogador;
					anuncio("X");
                    return;
                }else if(verifica == "O"){
                    jogando = false;
					placarJogador++;
					document.getElementById("score_cpu").innerHTML = placarCPU;
					anuncio("O");
                    return;
                }
				if(jogo[0][0] != "" && jogo[0][1] != "" && jogo[0][2] != "" && jogo[1][0] != "" && jogo[1][1] != "" && jogo[1][2] != "" && jogo[2][0] != "" && jogo[2][1] != "" && jogo[2][2] != ""){					
					if(verifica == ""){
						jogando = false;
						anuncio("E");
					}
				}
                setTimeout(cpuJoga,1000);
            }
        }

        function atualizaTabuleiro(){
            for(var l = 0; l < 3; l++){
                for(var c = 0; c < 3; c++){
                    if(jogo[l][c] == "X" || jogo[l][c] == "O"){
                        tabuleiro[l][c].innerHTML = jogo[l][c]; 
                        tabuleiro[l][c].style.cursor = "default"; 
                    }else{
                        tabuleiro[l][c].innerHTML = ""; 
                        tabuleiro[l][c].style.cursor = "pointer"; 
                    }                                     
                }
            }
        }

        function iniciar(){
			document.getElementById("an_e").style.display = "none";			
            jogando = true;
            jogadaCPU = 1;
            jogo = [["", "", ""], ["", "", ""], ["", "", ""]];
            tabuleiro = [
            [document.getElementById("p1"), document.getElementById("p2"), document.getElementById("p3")],
            [document.getElementById("p4"), document.getElementById("p5"), document.getElementById("p6")],
            [document.getElementById("p7"), document.getElementById("p8"), document.getElementById("p9")]
            ];			
			
			
			for(var l = 0; l < 3; l++){
				for(var c = 0; c < 3; c++){
					tabuleiro[l][c].style.backgroundColor = "aliceblue";
				}
			}
			
            atualizaTabuleiro();
			
			if(modo == "pc"){
				if(quemComeca == 1){
                quemComeca = 0;
                quemJoga = quemComeca;
                document.getElementById("quem_comeca").innerHTML = ""
                document.getElementById("quem_comeca").innerHTML += "Quem Começa: " + document.getElementById("p_1").innerHTML;
            }else{
                quemComeca = 1;
                quemJoga = quemComeca;
                document.getElementById("quem_comeca").innerHTML = ""
                document.getElementById("quem_comeca").innerHTML += "Quem Começa: CPU";
                setTimeout(cpuJoga,1000);
            }
			}else if(modo == "pp"){
				if(quemComeca == 1){
                quemComeca = 0;
                quemJoga = quemComeca;
                document.getElementById("quem_comeca").innerHTML = ""
                document.getElementById("quem_comeca").innerHTML += "Quem Começa: " + document.getElementById("p_1").innerHTML;
				
            }else{
                quemComeca = 1;
                quemJoga = quemComeca;
                document.getElementById("quem_comeca").innerHTML = ""
                document.getElementById("quem_comeca").innerHTML += "Quem Começa: " + document.getElementById("p_2").innerHTML;   
				
            }				
			}            
        
        }
		
		function p1(l,p){
			 if(jogando){				
                if(quemJoga == 0){
                    if(jogo[l][p] == ""){
                        jogo[l][p] = "X";
                        quemJoga = 1;                        
                    }
                }
            }
			
            document.getElementById("quem_comeca").innerHTML = ""
            document.getElementById("quem_comeca").innerHTML = "Quem Joga: " + document.getElementById("p_2").innerHTML; 
            atualizaTabuleiro();
            if(quemJoga == 1){                
                 verifica = vitoria();
                if(verifica == "X"){
                    jogando = false;
					placarJogador++;
					document.getElementById("score_player").innerHTML = placarJogador;
					anuncio("X");
                    return;
                }else if(verifica == "O"){
                    jogando = false;
					placarCPU++;
					document.getElementById("score_cpu").innerHTML = placarCPU;
					anuncio("O");
                    return;
                }
				if(jogo[0][0] != "" && jogo[0][1] != "" && jogo[0][2] != "" && jogo[1][0] != "" && jogo[1][1] != "" && jogo[1][2] != "" && jogo[2][0] != "" && jogo[2][1] != "" && jogo[2][2] != ""){					
					if(verifica == ""){
						jogando = false;
						anuncio("E");
					}
				}
            }
        }
		
		function p2(l,p){
			if(jogando){				
                if(quemJoga == 1){
                    if(jogo[l][p] == ""){
                        jogo[l][p] = "O";
                        quemJoga = 0;                        
                    }
                }
            }
			
            document.getElementById("quem_comeca").innerHTML = ""
            document.getElementById("quem_comeca").innerHTML = "Quem Joga: " + document.getElementById("p_1").innerHTML; 
            atualizaTabuleiro();
            if(quemJoga == 0){                
                 verifica = vitoria();
                if(verifica == "X"){
                    jogando = false;
					placarJogador++;
					document.getElementById("score_player").innerHTML = placarJogador;
					anuncio("X");
                    return;
                }else if(verifica == "O"){
                    jogando = false;
					placarCPU++;
					document.getElementById("score_cpu").innerHTML = placarCPU;
					anuncio("O");
                    return;
                }
				if(jogo[0][0] != "" && jogo[0][1] != "" && jogo[0][2] != "" && jogo[1][0] != "" && jogo[1][1] != "" && jogo[1][2] != "" && jogo[2][0] != "" && jogo[2][1] != "" && jogo[2][2] != ""){					
					if(verifica == ""){
						jogando = false;
						anuncio("E");
					}
				}
            }			
		}
		
		
		function parar(){
			var stop = document.getElementById("stop").value;
			if(stop == "Parar"){
				jogando = false;
				document.getElementById("stop").value = "Reiniciar";
				for(var l = 0; l < 3; l++){
				for(var c = 0; c < 3; c++){
					tabuleiro[l][c].style.backgroundColor = "red";
				}
			}
			}else if(stop == "Reiniciar"){
				document.getElementById("stop").value = "Parar";
				iniciar();
			}
			
		}
		
		function anuncio(a){
			document.getElementById("an_e").style.display = "block";
			anounce = document.getElementById("anounce");
			var p1 = document.getElementById("p_1").innerHTML;
			var p2 = document.getElementById("p_2").innerHTML;					
			if(a == "X"){
				anounce.innerHTML = p1 + " venceu!";
			}else if(a == "O"){
				anounce.innerHTML = p2 + " venceu!";
			}else if(a == "E"){
				anounce.innerHTML = "Empate!";
			}
			setTimeout(iniciar, 2000);
		}
		
		function tecla(e){
			var t = e.keyCode;
			
			if(modo == "pp"){
				if(quemJoga == 0){
					switch(t){
				case 49:
				p1(0, 0);
				break;
				case 50:
				p1(0, 1);
				break;
				case 51:
				p1(0, 2);
				break;
				case 52:
				p1(1, 0);
				break;
				case 53:
				p1(1, 1);
				break;
				case 54:
				p1(1, 2);
				break;
				case 55:
				p1(2, 0);
				break;
				case 56:
				p1(2, 1);
				break;
				case 57:
				p1(2, 2);
			}
				}else if(quemJoga == 1){
			switch(t){
				case 49:
				p2(0, 0);
				break;
				case 50:
				p2(0, 1);
				break;
				case 51:
				p2(0, 2);
				break;
				case 52:
				p2(1, 0);
				break;
				case 53:
				p2(1, 1);
				break;
				case 54:
				p2(1, 2);
				break;
				case 55:
				p2(2, 0);
				break;
				case 56:
				p2(2, 1);
				break;
				case 57:
				p2(2, 2);
			}
				}
			}else if(modo == "pc"){
					switch(t){
				case 49:
				jogar(0, 0);
				break;
				case 50:
				jogar(0, 1);
				break;
				case 51:
				jogar(0, 2);
				break;
				case 52:
				jogar(1, 0);
				break;
				case 53:
				jogar(1, 1);
				break;
				case 54:
				jogar(1, 2);
				break;
				case 55:
				jogar(2, 0);
				break;
				case 56:
				jogar(2, 1);
				break;
				case 57:
				jogar(2, 2);
			}
			}
			
		}
		
        window.addEventListener("load", iniciar);
		window.addEventListener("keydown", tecla);

#include <iostream>
using namespace std;
#define roma cout<<"\n\nDove sta Principessa1\n\n";
int main(){
//Aula  11 Operadores (AND [&&],OR[||],NOT[!])
//para o AND ser verdadeiro, todas a suas operações devem tbm ser
//OR retorna verdadeiro caso uma das operações seja verdadeiro	
//O NOT inverte os valres	
   int num;
   /* 1 2 3 4 5 6 7 8 9 10
   >4 e <7
   */
  /* num=5;
   
   if(num>4&&num<7){
   	cout<<"\n\nvalor aceito\n";
   	
   }else{
   	cout<<"\n\nNão aceita\n";
   }*/
   
   
   /*
   <3 ou >8
   */
	/*num=9;
	if(num<3||num>8){
		cout<<"\n\nValor aceito\n";
	}else{
		cout<<"\n\nRejeitado\n";
	}*/
	/*num=7;
	
	if(num>=3&&num<=6||num>9&&num<15||num>15&&num<20){
		cout<<"\n\nValor aceito\n";
		
	}else{ 
	cout<<"\n\nRjeitado\n";
	}*/
	
	//1=verdadeiro(True); 0=falso(False)
	num=0;
    if(!num){
		cout<<"\n\nVou ao clube\n";
			}else{ 
	cout<<"\n\nVou ao cinema\n";
	}
	return 0;
}

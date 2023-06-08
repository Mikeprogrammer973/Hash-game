#include <iostream>
using namespace std;
#define roma cout<<"\n\nDove sta la mia Principessa?!\n\n";
int main(){
//Operador ternário ou If ternário
//(expressão) ? valor 1; valor 2;
int n1,n2,nota;
string rest;
cout<<"\nDigitar nota 1:";
cin>>n1;
cout<<"\nDigitar nota 2:";
cin>>n2;
	
nota=n1+n2;
//nota>=60 aprovado
//nota<60 rerovado
/*(nota>=60) ? rest="Aprovado" ;rest="Reprovado";
*/
rest=(nota>=60) ? "Aprovado";"Reprovado";
cout<<"\nSituacao do aluno: "<<rest<<"\n";	
	
	
	
	
	
	
	
	
	return 0;
}

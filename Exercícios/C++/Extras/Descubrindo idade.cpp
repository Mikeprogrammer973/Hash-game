#include <iostream>
#include <stdlib.h>
using namespace std;
#define filosofia cout<<"\n\nJe sais seulement que je n´en sais rien\n\n";
int main(){
 int idade, n1,n2,n3;	
 char final,end;	
	
filosofia	
	 
	 
	 
 system("pause");
 system("cls");
 cout<<"Olha a magica a seguir\n\n";
  system("pause");
  system("cls");
 cout<<"\n\nN°de calçado:";
 cin>>n1;
 system("cls");
 system("pause");
 if(n1>10){
 	cout<<"\n\nAno de nascimento:";
 	cin>>n2;
 	 system("cls");
 system("pause");
 	cout<<"\n\nEm que ano estamos?:";
 	cin>>n3;
 	 system("cls");
 system("pause");
 }
 idade=(n1*100)+n2+n3;
 cout<<idade;
 cout<<"\n\nOs dois ultimos digitos e a sua idade?:";
 cin>>final;
  system("cls");
  system("pause");
 if(final='Sim'){
 cout<<"\n\nViu, sou um magico!!!\n\n";

 }else{
 	idade-=10;
 	cout<<"\n\nHmmm...agora foi!\n\n";
 	cout<<idade;
 	cout<<"\n\nE a sua idade agora ne!\n\n";
 	 
 system("pause");
system("cls");
 		
    cout<<"\n\nViu, sou um magico!!!\n\n";
    system("pause");
system("cls");

	 
 }
 

	
	
	return 0;
}

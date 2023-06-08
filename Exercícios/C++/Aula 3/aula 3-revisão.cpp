#include <iostream>
#include <locale>

using namespace std;

int main(){
	
char letras='M';	
double decimais=2.5;
float decimais2=4.7;
string nome="Mike";
bool crente=true;

cout<<"\n\nDigite uma letra:\n\n";
cin>>letras;
system("pause");
system("cls");
cout<<"\n\nQual sua altura?\n\n";
cin>>decimais;
system("pause");
system("cls");
cout<<"\n\nQual o seu peso?\n\n";
cin>>decimais2;
system("pause");
system("cls");
cout<<"\n\nVc acredita em Deus\n\n";
cin>>crente;
system("pause");
system("cls");
cout<<"\n\nDigite o seu nome:\n\n";
cin>>nome;
system("pause");
system("cls");

nome="Priscilla";
crente=true;

cout<<letras<<"\n\n"<<decimais<<"\n\n"<<decimais2<<"\n\n"<<nome<<"\n\n"<<crente<<"\n\n";
system("pause");
system("cls");

cout<<"Muito obrigado!"<<"\n\n";
system("pause");
	
	
return 0;	
}

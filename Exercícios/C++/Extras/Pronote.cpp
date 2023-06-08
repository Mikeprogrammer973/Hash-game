#include <iostream>
using namespace std;
#define aprovado; cout<<"\nAluno aprovado!\n";
#define reprovado; cout<<"\nAluno reprovado!\n";
int main(){
int n1,n2,n3,n4,media;
char novo;

cout<<"\nBem-vindo ao Pronote!\n\n\n";
system("pause");
system("cls");
cout<<"\nDigitar nota 1:";
cin>>n1;
cout<<"\nDigitar nota 2:";
cin>>n2;
cout<<"\nDigitar nota 3:";
cin>>n3;
cout<<"\nDigitar nota 4:";
cin>>n4;
media=(n1+n2+n3+n4)/4;
system("pause");
system("cls");
if(media>=6){
	
aprovado;
cout<<"\nMedia final:";
cout<<media;	
}else{
	reprovado;
	cout<<"\nMedia final:";
	cout<<media;
}
cout<<"\n\nAté mais profª!\n\n";	
system("pause");
system("cls");
	
	
	
	
	
	
	
	
	
	return 0;
}

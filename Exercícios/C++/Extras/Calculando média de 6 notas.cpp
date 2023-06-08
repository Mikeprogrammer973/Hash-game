#include <iostream>
using namespace std;
#define amor cout<<"\nBem-vindo ao MakeMiddle!";
int main(){
	
amor
system("cls");	
double n1,n2,n3,n4,n5,n6, media;
cout<<"\nDigitar nota 1:";
cin>>n1;
cout<<"\nDigitar nota 2:";
cin>>n2;
cout<<"\nDigitar nota 3:";
cin>>n3;
cout<<"\nDigitar nota 4:";
cin>>n4;
cout<<"\nDigitar nota 5:";
cin>>n5;
cout<<"\nDigitar nota 6:";
cin>>n6;
media=(n1+n2+n3+n4+n5+n6)/6;


system("cls");
if(media>=7){
	cout<<"\n\nMuito bem, foi aprovado!";
	cout<<"\n\nMedia:";
cout<<media;
}else{
	cout<<"\n\nInfelizmente, foi reprovado!";
	cout<<"\n\nMedia:";
cout<<media;
}
cout<<"\n\nSeeya!";
system("pause");
system("cls");

	return 0;
}

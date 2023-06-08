#include <iostream>
using namespace std;
#define amor; cout<<"\n\nTi amo Principessa!\n\n";
int main(){

char iniciar,salvar,nome,outras;
int n1,n2,n3,n4,n5,media;

cout<<"\n\nOlá Mike, Bem vindo ao MakingMidlle.";
cout<<"\n\nPronto para iniciar?:";
cin>>iniciar;
if(iniciar='Sim'){
cout<<"\n\nLet's go then!";
}else{
cout<<"\n\nSem chance, pois vamos kkkkkk";
}
inicio:
cout<<"\n\nDigitar nome do aluno:";
cin>>nome;
cout<<"\n\nDigitar nota 1:";
cin>>n1;
cout<<"\n\nDigitar nota 2:";
cin>>n2;
cout<<"\n\nDigitar nota 3:";
cin>>n3;
cout<<"\n\nDigitar nota 4:";
cin>>n4;
cout<<"\n\nDigitar nota 5:";
cin>>n5;
media=(n1+n2+n3+n4+n5)/5;
cout<<media;

if(media>=7){
cout<<"\n\nAluno aprovado";
}else if(media=6){
cout<<"\n\nAluno em recuperação";
}else{
cout<<"\n\nAluno reprovado";
}

cout<<"\n\nDigitar outras notas?:";
cin>>outras;
if(outras='Sim'){
goto inicio;
}else{
cout<<"\n\nTchau!\nMuito obrigado!";
}


   return 0;
}

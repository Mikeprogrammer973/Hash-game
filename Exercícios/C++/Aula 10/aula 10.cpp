#include <iostream>
#include <stdlib.h>
using namespace std;
//comando IF(part2),GOTO
int main(){
	
	int n1,n2,n3,n4,n5,res;
	char opc,iniciar ;
	string nome;
	
	inicio:
	system("cls");
	
	cout<<"Nome do aluno:";
	cin>>nome;
	cout<"Digite o valor da nota 1:";
	cin>>n1;
	cout<"Digite o valor da nota 2:";
	cin>>n2;
	cout<"Digite o valor da nota 3:";
	cin>>n3;
	cout<"Digite o valor da nota 4:";
	cin>>n4;
	cout<"Digite o valor da nota 5:";
	cin>>n5;
	res=(n1+n2+n3+n4+n5)/5;
	system("cls");
	system("pause");
	cout<<"Media:";
	cout<<res;
	
	
	
	/*
	para notas >=60 o aluno está aprovado
	notas entre >=40 e >59
	para notas <40 aluno reprovado
	*/
	
	if(res>=60){
		
		cout<<"\n\nAluno aprovado\n\n";
	}else if(res>=40){
		
		cout<<"\n\nAluno em recuperação\n\n";
	}else{
		cout<<"\n\nAluno reprovado\n\n";
	}
	
	cout<<"Digitar outras notas(s/n)?:";
	cin>>opc;
	if(opc=='s'){
		goto inicio;
	}else{
		cout<<"\n\nMuito obrigado!";
	}
	
	
	
	return 0;
}

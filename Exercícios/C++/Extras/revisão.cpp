#include <iostream>
using namespace std;

#define n4 12
#define amor cout<<"Sono innamorato per ti principessa!\n\n";
int main(){
	
  int n1,n2,n3,rest;
  
  n1=7;
  n2=2;
  n3=16;
  n3-=1;
  rest=n3%n1;

  rest+=7;
  n1=-n1;
  n3=-n3;
  
  cout<<n3/n1<<"\n\n"<<n4<<"\n\n"<<rest<<"\n\n";	
  amor
	return 0;
}



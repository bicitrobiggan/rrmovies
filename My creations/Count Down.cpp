#include <iostream>
 using namespace std;
int main()
{
int a;
    for(cin>>a; a>0; a--){
     int b= (a % 5);
    if(b==0){
    cout<<a;
    cout<<" Beep"<<endl;
}
    else{
    cout<<a<<endl;
}
}
  return 0;
}
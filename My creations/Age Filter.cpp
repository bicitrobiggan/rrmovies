#include <iostream>
using namespace std;

int main()
{
// input you age to know about your group
    int age;
    cin >> age;
    if (age < 18 && age > 0) {
        cout <<"Too young";
    }
    if (age <= 42 && age >18) {
        cout << "Adult";
    }
    if (age <= 70 && age > 42) {
        cout << "Senior";
    }
    if (age == 0){
        cout << " just born";
    }
    if (age >70 || age < 0){
        cout << " no more";
    }
    return 0;
}
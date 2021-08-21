// needs a string input of words

#include <iostream>
#include <string>
#include <cmath>
using namespace std;

int getSpaces(string str){
    int result = 1;
    for(int i=0; i<(int)str.size(); i++){
        char l= str[i];
        if(l == ' '){
            result += 1;
        }
    }
    return result;
}

int getLetters(string str){
    int result = 0;
    for(int i=0; i<(int)str.size(); i++){
        char l= str[i];
        if(l != '?'){
            result += 1;
        }
    }
    return result;
}

int main() {
    string input("");
    getline(cin,input);
    int words {getSpaces(input)};
    int letters {getLetters(input)};
    float avg = letters/words;
    avg = ceil(avg);
    cout << avg;
    return 0;
}
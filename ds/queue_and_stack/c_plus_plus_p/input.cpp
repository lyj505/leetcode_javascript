#include <iostream>

using namespace std;
int main()
{
    int iInt1, iInt2; //定义2个整型变量
    puts("please enter two numbers:");
    scanf("%d%d", &iInt1, &iInt2);//使用的是变量的地址
    printf("the first is %d\n", iInt1);//输出的时候使用的是变量的标识符
    printf("the seconed is %d\n", iInt2);
    //https://www.zhihu.com/pub/reader/119616739/chapter/1141733765113094144
}



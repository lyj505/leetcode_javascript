/*
数据类型:
数值
字符
数组
布尔
枚举
结构体
共用体
指针
引用类型
自定义类型
*/
#include <iostream>
using namespace std;

int main()
{
    // 1. char ch=97 和 char ch= 'a' 全等 字符是以ASCII码的形式存储的
    // 因此可以直接将整数赋值给字符变量
    char c = 'a';
    char ch = 'b';
    char c1 = 'a';
    char *c2 = "a";
    char ch1 = 97;
    printf("%c\n", ch1);

    bool ret;
    int var = 3;
    ret = var;
    var = ret;

    //2.printf(格式控制,输出列表)
    //格式控制是用双引号引起来的字符串,也称为转换控制字符串
    // 包含2种控制 1:格式字符(将输出的数据转化为指定的格式) 2.普通字符
    int testP = 123;
    printf("this is %d", testP);
    printf("\n");
    printf("this is", testP); //这样就输出不了 testP的值

    {
        int iInt = 123;
        char cChar = 'A';
        float fFloat = 12.24f;
        printf("the int is:%d\n", iInt);
        printf("the char is:%c\n", cChar);
        printf("the float is:%f\n", fFloat);
        printf("the string is:%s\n", "I love U");
        printf("%%\n");
        //长整型
        long iLong = 10000;
        printf("the long is %ld\n", iLong); //如果以字符串的类型控制区输出 就输出为空
        printf("the string is:%s\n", "LOVE");
        printf("the string is:%10s\n", "LOVE");
        printf("the string is:%1s\n", "LOVE");
        printf("the string is:%-10s\n", "LOVE");
        printf("the string is:%-10.3s\n", "LOVE"); //%10s 代表 %ms 表示输出字符串占m列
    }
    // https://www.zhihu.com/pub/reader/119616739/chapter/1141733762542055424
    return 0;
}
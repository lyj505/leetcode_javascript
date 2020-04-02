#include <iostream>
#include <vector>
using namespace std;
class MyCircularQueue
{
private:
    vector<int> data;
    int front;
    int tail;
    int size;

public:
    /** Initialize your data structure here. Set the size of the queue to be k. */
    MyCircularQueue(int k)
    {
        data.resize(k);
        front = -1;
        tail = -1;
        size = k;
    }

    /** Insert an element into the circular queue. Return true if the operation is successful. */
    bool enQueue(int value)
    {
        if (isFull())
            return false;
        if (isEmpty())
            front = 0;
        tail = (tail + 1) % size;
        data[tail] = value;
        return true;
    }

    /** Delete an element from the circular queue. Return true if the operation is successful. */
    bool deQueue()
    {
        if (isEmpty())
            return false;
        if (tail == front)
        {
            tail = -1;
            front = -1;
            return true;
        }
        front = (front + 1) % size;
        return true;
    }

    /** Get the front item from the queue. */
    int Front()
    {
        if (isEmpty())
            return -1;
        return data[front];
    }

    /** Get the last item from the queue. */
    int Rear()
    {
        if (isEmpty())
            return -1;
        return data[tail];
    }

    /** Checks whether the circular queue is empty or not. */
    bool isEmpty()
    {
        return front == -1;
    }

    /** Checks whether the circular queue is full or not. */
    bool isFull()
    {
        return (tail + 1) % size == front;
    }

    void getAllQueue()
    {
        cout << "output result-----" << endl;
        for (int i = front; i <= tail; i++)
        {
            cout << data[i] << endl;
        }
        cout << "end-----" << endl;
    }

    void out_put_tail()
    {
        cout << "-----start" << endl;
        cout << front << endl;
        cout << tail << endl;
        cout << size << endl;
        cout << "-----end" << endl;
    }
};

int out_put_sth(int str)
{
    cout << str << endl;
}

int main()
{
    MyCircularQueue *obj = new MyCircularQueue(5);
    bool param_1 = obj->enQueue(1);
    obj->out_put_tail();
    bool param_2 = obj->enQueue(2);
    obj->out_put_tail();
    bool param_3 = obj->enQueue(3);
    obj->out_put_tail();
    bool param_4 = obj->enQueue(4);
    obj->out_put_tail();
    bool param_5 = obj->enQueue(5);
    obj->out_put_tail();
    bool param_6 = obj->deQueue();
    obj->out_put_tail();
    bool param_7 = obj->deQueue();
    obj->out_put_tail();
    bool param_8 = obj->deQueue();
    obj->out_put_tail();
    bool param_9 = obj->deQueue();
    obj->out_put_tail();
    bool param_10 = obj->deQueue();
    obj->out_put_tail();
    bool param_11 = obj->deQueue();
    obj->out_put_tail();
    bool param_12 = obj->deQueue();
    obj->out_put_tail();
    bool param_new = obj->enQueue(3);
    obj->out_put_tail();
    obj->getAllQueue();
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * MyCircularQueue* obj = new MyCircularQueue(k);
 * bool param_1 = obj->enQueue(value);
 * bool param_2 = obj->deQueue();
 * int param_3 = obj->Front();
 * int param_4 = obj->Rear();
 * bool param_5 = obj->isEmpty();
 * bool param_6 = obj->isFull();
 */
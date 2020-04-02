#include <vector>
#include <queue>
#include <iostream>
#include <unordered_set>
using namespace std;

class Solution
{
public:
    int openLock(vector<string> &deadends, string target)
    {
        unordered_set<string> deadset(deadends.begin(), deadends.end());
        if (deadset.count("0000"))
        {
            return -1;
        }
        queue<string> q;
        unordered_set<string> visited;
        q.push("0000");
        visited.insert("0000");

        int result = 0;
        // 开始BFS搜索
        while (!q.empty())
        {
            result++;
            auto size = q.size();
            for (int i = 0; i < size; i++)
            {
                string seq = q.front();
                q.pop();
                // 获取所有有效移动
                auto moves = getValidMoves(seq);
                for (auto &move : moves)
                {
                    if (move == target)
                    {
                        return result;
                    }
                    // 如果该移动不是deadend且没访问过，则入队
                    if (!deadset.count(move) && !visited.count(move))
                    {
                        q.push(move);
                        visited.insert(move);
                    }
                    // 如果是deadend则不做处理，相当于绕过deadend
                }
            }
        }
        // 没有找到目标序列，返回-1
        return -1;
    }

    vector<string> getValidMoves(const string &sequence)
    {
        vector<string> moves;
        for (int i = 0; i < 4; i++)
        {
            string temp = sequence;
            // +1
            temp[i] = temp[i] == '9' ? '0' : temp[i] + 1;
            moves.push_back(temp);
            // -1
            temp = sequence;
            temp[i] = temp[i] == '0' ? '9' : temp[i] - 1;
            moves.push_back(temp);
        }
        return moves;
    }
};

int main()
{
    Solution s;
    string targe_str = "1231";
    vector<string> data;
    data.push_back("1111");
    data.push_back("1222");
    data.push_back("1333");
    data.push_back("1444");

    int result = s.openLock(data, targe_str);
    cout << result;
}
/*
bfs 
广度优先搜索（BFS）
Breadth first search
一个常见应用是找出从根结点到目标结点的最短路径

结点的处理顺序与它们添加到队列的顺序是完全相同的顺序，
即先进先出（FIFO）。这就是我们在 BFS 中使用队列的原因。
*/

/*岛屿数量问题*/
// https://leetcode-cn.com/problems/number-of-islands/solution/dao-yu-shu-liang-by-leetcode/

/*

1.bfs 广度优先搜索



*/

#include <vector>
#include <queue>
#include <iostream>
using namespace std;

class Solution
{
public:
    Solution()
    {
        cout << "-----start into this" << endl;
    }
    int numIslands(vector<vector<char>> &grid)
    {
        int nr = grid.size();
        if (!nr)
            return 0;
        int nc = grid[0].size();

        int num_islands = 0;
        for (int r = 0; r < nr; ++r)
        {
            for (int c = 0; c < nc; ++c)
            {
                if (grid[r][c] == '1')
                {
                    ++num_islands;
                    grid[r][c] = '0'; // mark as visited
                    queue<pair<int, int>> neiors;
                    neiors.push({r, c});
                    while (!neiors.empty())
                    {
                        auto rc = neiors.front();
                        neiors.pop();
                        int row = rc.first, col = rc.second;
                        if (row - 1 >= 0 && grid[row - 1][col] == '1')
                        { //上
                            neiors.push({row - 1, col});
                            grid[row - 1][col] = '0';
                        }
                        if (row + 1 < nr && grid[row + 1][col] == '1')
                        { //下
                            neiors.push({row + 1, col});
                            grid[row + 1][col] = '0';
                        }
                        if (col - 1 >= 0 && grid[row][col - 1] == '1')
                        {
                            //左
                            neiors.push({row, col - 1});
                            grid[row][col - 1] = '0';
                        }
                        if (col + 1 < nc && grid[row][col + 1] == '1')
                        {
                            //右
                            neiors.push({row, col + 1});
                            grid[row][col + 1] = '0';
                        }
                    }
                }
            }
        }

        return num_islands;
    };
};

int main()
{
    Solution s;
    // std::vector<vector<char>> charSet{
    //     {'1', '1', '1', '1', '0'},
    //     {'1', '1', '0', '1', '0'},
    //     {'1', '1', '0', '0', '0'},
    //     {'0', '0', '0', '0', '0'}};

    // int a = s.numIslands(charSet);

    std::vector<vector<char>> charSet1{
        {'1', '1', '0', '0', '0'},
        {'1', '1', '0', '0', '0'},
        {'0', '0', '1', '0', '0'},
        {'0', '0', '0', '1', '1'}};

    int a = s.numIslands(charSet1);

    cout << "-----end---->" << a << endl;
}
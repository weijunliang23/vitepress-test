## 数据库

数据库分类： 关系数据库(msql,oracle) & 非关系数据库(es,redis)
开发中一般是用可视化工具去开发，建议使用navicat（注意下载的时候需要访问中文网站否则为应为界面且不可在软件内调整）

### mysql 命令行
```js

show databases; // 访问所有数据库
create database test1; // 创建名为test1的数据库
use test1; // 使用test1数据库
create table test_user; //在test1下面创建为test_user的表
drop test1; // 删除库test1

```

## mysql语句分类

语句里面的大部分核心都为查询语句

#### 列的别名

```sql
SELECT name username FROM test_user; // 将name列命名为username，语法为空格隔开
SELECT name as username FROM test_user; // 将name列命名为username，语法为用as(alias)
SELECT name "username" FROM test_user; // 将name列命名为username，语法为用空格隔开并用双引号包住重命名，多用于别名中间有空格等特殊字符

```
DESC 列出表结构；
ISNULL(height,0),如果height为null则为0；
DISTINCT 简单去重很鸡肋

#### 过滤数据 WHERE
<=> 安全等于，用于参与有null的比较运算 <br/>
least,greatest最小限度和最大限度<br/>
between ... and 区间<br/>
AND => && OR => ||<br/>
%LIKE%模糊查询 %多，_一个<br/>
Order_by filed DESC降序,filed ASC升序<br/>
LIMIT pageOFFSet pagesize 8.0: pagesize offset pageOFFset<br/>
多表查询须每个返回字段指定表，表取别名效率快，连接条件需注意<br/>
```sql

SELECT e.employee_id,e.last_name,d.department_name,l.city
FROM employees as e,departments as d,locations as l
WHERE e.department_id = d.department_id && d.location_id = l.location_id
ORDER BY e.employee_id DESC
-- LIMIT 5 OFFSET 0
LIMIT 0,5
```